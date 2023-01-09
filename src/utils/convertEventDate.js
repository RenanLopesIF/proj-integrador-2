export function convertEventDate(timestamp) {
  const currentDate = new Date(timestamp);
  const date = new Date(currentDate).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  const tmpHour = currentDate.toLocaleTimeString().split(':');
  tmpHour.pop();

  const hour = tmpHour.join(':');

  return { date, hour };
}
