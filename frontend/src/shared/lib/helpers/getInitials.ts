export function getInitials(fullName: string) {
  // Разделяем строку на части по пробелам
  const nameParts = fullName.split(" ");

  // Извлекаем первые буквы каждой части
  const initials = nameParts.map(part => part.charAt(0).toUpperCase());

  // Объединяем первые буквы в строку
  return initials.join("");
}