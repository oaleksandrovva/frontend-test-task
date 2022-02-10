export default function formattingDate(value) {
  const date = new Date(value);
  return `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;
}
