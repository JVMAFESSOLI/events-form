export const maskedPhone = (phoneNumber: string): string => {
  const cleaned = phoneNumber.replace(/\D/g, "");
  const format = cleaned.length === 11 ? "($1) $2-$3" : "($1) $2-$3";
  return cleaned.replace(/(\d{2})(\d{4,5})(\d{4})/, format);
};
