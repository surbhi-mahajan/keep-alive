class Nodes {
    constructor(connection, nodesArray) {
        this.data = nodesArray.map((node) => new Node(connection, node))
    }

    render() {
        this.data.forEach((node) => {
            node.render()
        })
    }

    destroy(collidedNode) {
        this.data.forEach((node, collidedIndex) => {
            if(collidedNode != collidedIndex) {
                node.render()
            }
        })
        this.data[collidedNode].destroy()
    }

    update(shift) {
        this.data.forEach((node) => node.update(shift))
    }
}