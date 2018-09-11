function collisionDetection(cx, cy, radius, rx, ry, rw, rh) {
    let closestX = cx;
    let closestY = cy;

    if (cx < rx)         closestX = rx;
    else if (cx > rx+rw) closestX = rx+rw;
    if (cy < ry)         closestY = ry;
    else if (cy > ry+rh) closestY = ry+rh;

    let distX = cx-closestX;
    let distY = cy-closestY;
    let distance = Math.sqrt( (distX*distX) + (distY*distY) );

    return distance <= radius
}