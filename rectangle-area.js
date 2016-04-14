/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
  return area(A, B, C, D) + area(E, F, G, H) - overlap(A, B, C, D, E, F, G, H);
}

function overlap(A, B, C, D, E, F, G, H) {
  var lx = null;
  var ly = null;
  var rx = null;
  var ry = null;
  if (between(A, E, G) || between(C, E, G) || between(E, A, C) || between(G, A, C)) {
    lx = Math.max(A, E);
    rx = Math.min(C, G);
  }
  if (between(B, F, H) || between(D, F, H) || between(F, B, D) || between(H, B, D)) {
    ly = Math.max(B, F);
    ry = Math.min(D, H);
  }
  if (lx !== null && ly !== null) {
    return area(lx, ly, rx, ry);
  }
  return 0;
}

function area(lx, ly, rx, ry) {
  return (rx - lx) * (ry - ly);
}

function between(a, x, y) {
  return x <= a && a <= y;
}
