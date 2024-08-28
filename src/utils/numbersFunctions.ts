export function formattedMoney(num?: number): string {
  if (!num) return "";

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(num);
}
