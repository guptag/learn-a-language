export function findBadCommitVersion(
  n: number,
  isBadVersion: (n: number) => boolean
) {
  let min = 0;
  let max = n;

  while (min < max) {
    const mid = Math.floor((max + min) / 2);
    if (isBadVersion(mid)) {
      max = mid;
    } else {
      min = mid + 1;
    }
    // console.log(min, mid, max);
  }
  return min;
}
