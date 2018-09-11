class Node {
  constructor(connection, dimension) {
      this.connection = connection;
      let {color, radius, angle} = dimension;
      this.angle = angle;
      this.radius = radius;
      this.color = color;
      this.newAngle = this.angle;
      this.dParticles = this.getDifferentParticles();
      this.opacity = 1;
      this.particles = []
      this.points = []
  }
  // Methods gives particles at different closest distance to the point where explosion takes place
  getDifferentParticles() {
      let dPoints = [];
      for (let i = 0; i < 20; i++) {
          let particleVelocity = [Math.random() * 4, Math.random() * 4];
          if (Math.random() > 0.5) {
              particleVelocity[0] = -particleVelocity[0];
          }
          if (Math.random() > 0.5) {
              particleVelocity[1] = -particleVelocity[1];
          }
          dPoints.push(particleVelocity);
      }
      return dPoints
  }

  // Method gives status when kill effect is fully completed
  get initialState() {
      return this.opacity === 1
  }

  destroy() {
      const dO = -0.05;
      const dR = -0.02;
      if(this.opacity <= 0){
          this.particles = []
          this.opacity = 1
          return;
      }
      if(!this.particles.length) {
          let nodeX = this.connection.centerX + this.connection.radius * Math.cos(this.newAngle * Math.PI / 180)
          let nodeY = this.connection.centerY + this.connection.radius * Math.sin(this.newAngle * Math.PI/ 180)
          for(let i=0;i<20; i++) {
            this.particles.push([nodeX, nodeY, this.radius / (3 + 3 * Math.random())])
          }
      }
      this.opacity += dO;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      // Draw explosion when node collide with obstacle
      for(let i=0; i < 20; i++) {
          this.particles[i][0] += this.dParticles[i][0];
          this.particles[i][1] += this.dParticles[i][1];
          this.particles[i][2] += dR;
          ctx.arc(this.particles[i][0], this.particles[i][1], this.particles[i][2], 0, Math.PI * 2, true);
          ctx.closePath();
      }
      ctx.fill();
  }

  render() {
      ctx.save()
      ctx.translate(this.connection.centerX, this.connection.centerY);
      let nodeX = this.connection.radius * Math.cos(this.newAngle * Math.PI / 180)
      let nodeY = this.connection.radius * Math.sin(this.newAngle * Math.PI/ 180)
      ctx.beginPath();
      // draw node
      ctx.arc(nodeX, nodeY, this.radius, 0,  Math.PI*2);
      ctx.fillStyle = this.color;
      ctx.strokeStyle = this.color;
      ctx.stroke();
      ctx.fill();
      ctx.closePath();
      // draw tail animation
      ctx.globalAlpha = 0.3;
      let [i, j, lifeLeft] = [nodeX, nodeY, 15];
      this.points.unshift([i, j, lifeLeft]);
      this.points = this.points.filter(point => point[2])
      this.points.forEach((point, index) => {
            let i = point[0];
            let j = point[1];
            point[2]--;
          ctx.arc(i, j, this.radius - (this.radius * index / this.points.length), 0, Math.PI * 2, true);
          ctx.closePath();
      })
      ctx.fill()
      ctx.restore()
  }

  update(speed) {
      this.newAngle = this.angle + speed
  }
}