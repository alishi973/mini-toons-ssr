export const tags = ['دوبله', 'سینمایی', 'کلاسیک', 'کوتاه', 'لایو اکشن', 'فیلم'];

export default function getTag() {
  return tags[Math.floor(Math.random() * tags.length)].toString();
}
