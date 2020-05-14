const tags = ['دوبله', 'سینمایی', 'کلاسیک'];

export default function getTag() {
  return tags[Math.floor(Math.random() * 3)].toString();
}
