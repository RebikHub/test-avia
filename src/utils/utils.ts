export function validateName(name: string): boolean {
  return !/[\d\s]/.test(name);
};

export function validateDate(date: string): boolean {
  if (/^\d{2}\.\d{2}\.\d{4}$/.test(date)) {
    const arrDate = date.split('.');
    const dateNow = new Date().getTime();
    const dateString = new Date(`${arrDate[2]}/${arrDate[1]}/${arrDate[0]}`).getTime();
    return dateNow > dateString;
  };
  return false;
};