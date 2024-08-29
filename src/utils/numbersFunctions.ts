export function formattedMoney(num?: number): string {
  if (num === null || num === undefined) return "";

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(num);
}
