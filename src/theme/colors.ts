export const primary = {
  100: '#D3F5FE',
  200: '#A7E7FD',
  300: '#7AD2FA',
  400: '#59BCF5',
  500: '#2499EF',

  main: '#2499EF',
  dark: '#1A77CD',
  light: '#D3F5FE'
};

export const secondary = {
  100: '#FFF',
  200: '#ECEFF5',
  300: '#FFF',
  400: '#94A4C4',
  500: '#2C2C2C',

  main: '#2C2C2C',
  light: '#FFF'
};

export const error = {
  main: '#f56a50'
};

export const success = {
  main: '#00aa4f'
};

export const warning = {
  main: '#ffba00'
};

export const info = {
  main: '#07caeb'
};

export const text = {
  default: primary.main,
  primary: secondary[500],
  secondary: secondary[100],
  disabled: secondary[300]
};
