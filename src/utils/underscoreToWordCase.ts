export default function underscoreToWord(str: string): string {
  const words = str.split('_');
  const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  return capitalizedWords.join(' ');
}