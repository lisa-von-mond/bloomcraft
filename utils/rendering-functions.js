export function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

export function angleToCooX(angle, distance) {
  const X = Math.cos(toRadians(angle)) * distance;
  return parseInt(X);
}

export function angleToCooY(angle, distance) {
  const Y = Math.sin(toRadians(angle)) * distance;
  return parseInt(Y);
}
