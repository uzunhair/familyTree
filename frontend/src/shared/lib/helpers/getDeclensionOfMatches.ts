export function getDeclensionOfMatches(count: number) {
  const remainder10 = count % 10;
  const remainder100 = count % 100;

  if (remainder10 === 1 && remainder100 !== 11) {
    return `${count} совпадение`;
  } else if (remainder10 >= 2 && remainder10 <= 4 && (remainder100 < 10 || remainder100 >= 20)) {
    return `${count} совпадения`;
  } else {
    return `${count} совпадений`;
  }
}
