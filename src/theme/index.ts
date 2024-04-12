import { createTheme, responsiveFontSizes, ThemeOptions } from '@mui/material';
import themes from '../enums/themes';
import merge from 'lodash.merge';

import { error, info, primary, secondary, success, warning } from './colors';

const fontSize = 14;

const baseOptions = {
  direction: 'ltr',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1440,
      xl: 1920
    }
  },
  components: {
    MuiAvatar: {
      styleOverrides: {
        fallback: {
          height: '75%',
          width: '75%'
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box'
        },
        html: {
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
          height: '100%',
          width: '100%'
        },
        body: {
          height: '100%'
        },
        a: {
          textDecoration: 'none',
          color: 'inherit'
        },
        '#root': {
          height: '100%'
        },
        '#nprogress .bar': {
          zIndex: '9999 !important',
          backgroundColor: '#61A9FF !important',
          width: '100%',
          position: 'fixed'
        },
        'input[type=number]::-webkit-outer-spin-button, input[type=number]::-webkit-inner-spin-button':
        {
          WebkitAppearance: 'none',
          margin: 0
        }
      }
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        separator: {
          color: primary.main
        }
      }
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: 'h6'
        },
        subheaderTypographyProps: {
          color: secondary[400]
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 'auto',
          marginRight: '16px'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none'
        }
      }
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          boxShadow: 'none'
        }
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: 0,
          minHeight: 0,
          '&.Mui-expanded': {
            minHeight: 'auto'
          },
          '.MuiAccordionSummary-content': {
            margin: 0
          },
          '.MuiAccordionSummary-content.Mui-expanded': {
            margin: 0
          }
        }
      }
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          paddingRight: 0
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'transparent'
          }
        }
      }
    },
    MuiPopover: {
      styleOverrides: {
        root: {
          '& .MuiPopover-paper': {
            boxShadow: 'none',
            borderRadius: '8px',
            border: '2px solid #E5EAF2'
          }
        }
      }
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontFamily: "'Montserrat', sans-serif"
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderColor: '#fff !important',
          '& input::placeholder': {
            color: secondary[400],
            opacity: 1
          },
          '& label': {
            color: secondary[400],
            opacity: 1,
            fontWeight: 500
          }
        }
      }
    }
  },
  typography: {
    button: {
      fontWeight: 600
    },
    fontFamily: "'Montserrat', sans-serif",
    h1: {
      fontWeight: 800,
      fontSize: '4.25rem'
    },
    h2: {
      fontWeight: 600,
      fontSize: '4rem'
    },
    h3: {
      fontWeight: 600,
      fontSize: '2.25rem'
    },
    h4: {
      fontWeight: 600,
      fontSize: '2rem'
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem'
    },
    h6: {
      fontWeight: 600,
      fontSize
    },
    overline: {
      fontWeight: 600
    },
    body1: {
      fontSize
    },
    body2: {
      fontSize
    }
  }
};

const themesOptions = {
  [themes.LIGHT]: {
    palette: {
      primary,
      secondary,
      error,
      warning,
      success,
      info,
      divider: secondary[300],
      background: {
        default: '#f3f4f9'
      },
      text: {
        default: primary.main,
        primary: secondary[500],
        secondary: secondary[300],
        disabled: secondary[400]
      },
      mode: 'light'
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
            border: '1px solid #E5EAF2',
            borderRadius: 8
          }
        }
      }
    }
  },
  [themes.DARK]: {
    palette: {
      primary,
      error,
      warning,
      success,
      info,
      background: {
        default: '#171c24',
        paper: '#222b36'
      },
      text: {
        default: primary.main
      },
      mode: 'dark'
    },
    components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            border: 'none'
          }
        }
      },
      MuiPopover: {
        styleOverrides: {
          root: {
            '& .MuiPopover-paper': {
              border: '1px solid rgba(255, 255, 255, 0.12)'
            }
          }
        }
      },
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: 'none'
          }
        }
      }
    }
  }
};

const ukoTheme = (config: { theme: themes, direction: 'ltr' | string, responsiveFontSizes: boolean }) => {
  let themeOption = themesOptions[config.theme];

  if (!themeOption) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    themeOption = themesOptions[themes.LIGHT];
  }

  const mergedTheme = merge({}, baseOptions, themeOption, {
    direction: config.direction
  }) as ThemeOptions;

  let theme = createTheme(mergedTheme);

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  theme.shadows[1] = '0px 4px 23px rgba(0, 0, 0, 0.12)';
  theme.shadows[2] = '0px 0px 21px 1px rgba(0, 0, 0, 0.07)';
  theme.shadows[3] = '0px 10px 30px rgba(0, 0, 0, 0.1)';
  theme.shadows[4] = '0px 7px 30px 3px rgba(0, 0, 0, 0.05)';

  return theme;
};

export default ukoTheme;
