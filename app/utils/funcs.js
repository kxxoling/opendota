export function timeToStr(timestamp) {
  if (!timestamp) {
    return '';
  }
  const unixTimestamp = 1000 * timestamp;
  const datetime = new Date(unixTimestamp);
  return datetime.toLocaleString();
}

export function numberToPercent(number) {
  const fixedNum = (100 * number).toFixed(1);
  if (isNaN(fixedNum)) {
    return '';
  }
  return `${fixedNum}%`;
}

export function secToReadable(sec) {
  const min = parseInt(sec / 60, 10);
  const secLeft = sec % 60;
  return `${min}:${secLeft}`;
}
