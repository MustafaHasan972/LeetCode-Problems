function champagneTower(poured, query_row, query_glass) {
  let res = 0;
  let left = 0;
  let right = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (poured >= mid) {
      res = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return res;
}
