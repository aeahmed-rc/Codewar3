function getRealFloor(n) {
  // Less than 1, return n
  if (n <= 0) return n;

  return n - (n >= 13 ? 2 : 1);
}
