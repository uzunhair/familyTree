export function getInitials(fullName: string) {
  // Разделяем строку на части по пробелам
  const nameParts = fullName.split(" ");

  // Извлекаем первые буквы каждой части
  const initials = nameParts.map(part => part.charAt(2).toLowerCase());
  return nameParts.length < 2 ? fullName.substring(0, 3) : initials.join("");
}