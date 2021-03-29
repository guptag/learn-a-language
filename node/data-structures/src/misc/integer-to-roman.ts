export function integerToRomanOne(n: number) {
  if (n > 3999 || n <= 0) {
    return '';
  }

  const thousands: string[] = ['', 'M', 'MM', 'MMM'];
  const hundreds: string[] = [
    '',
    'C',
    'CC',
    'CCC',
    'CD',
    'D',
    'DC',
    'DCC',
    'DCCC',
    'CM',
  ];
  const tens: string[] = [
    '',
    'X',
    'XX',
    'XXX',
    'XL',
    'L',
    'LX',
    'LXX',
    'LXXX',
    'XC',
  ];
  const ones: string[] = [
    '',
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
  ];

  return (
    thousands[Math.floor(n / 1000)] +
    hundreds[Math.floor((n % 1000) / 100)] +
    tens[Math.floor((n % 100) / 10)] +
    ones[Math.floor(n % 10)]
  );
}
