export default function convertToBR(value: string) {
  const newValue = parseFloat(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0
  });
  return newValue;
}
