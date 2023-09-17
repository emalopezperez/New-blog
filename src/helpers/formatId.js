export function removeAccents(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function formatID(text) {
  const textWithoutAccents = removeAccents(text);
  const lowercaseText = textWithoutAccents.toLowerCase();
  return lowercaseText.replace(/\s+/g, "-");
}
