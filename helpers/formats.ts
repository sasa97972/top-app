const splitNumberByDecimals = (number: number): string => number.toLocaleString("ru");

export const formatSalary = (salary: number): string => `${splitNumberByDecimals(salary)} ₽`;
