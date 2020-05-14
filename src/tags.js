export const tags = ['دوبله', 'سینمایی', 'کلاسیک', 'کوتاه', 'لایو اکشن', 'فیلم', '3D', 'Toy Story', 'سریال', 'Flintstones', 'Jetsons','Barbie'];

export default function getTag() {
  return tags[Math.floor(Math.random() * tags.length)].toString();
}
