const gruvbox = require('./gruvbox')

const gruvboxLightTheme = gruvbox.themes.light
const gruvboxDarkTheme = gruvbox.themes.dark

const theme = {
  light: {
    activeTabBackground: gruvboxLightTheme.bg2,
    background: gruvboxLightTheme.bg0,
    border: 'transparent',
    foreground: gruvboxLightTheme.fg,

    colors: {
      black: gruvboxLightTheme.black,
      red: gruvboxLightTheme.red,
      green: gruvboxLightTheme.green,
      yellow: gruvboxLightTheme.yellow,
      blue: gruvboxLightTheme.blue,
      magenta: gruvboxLightTheme.purple,
      cyan: gruvboxLightTheme.cyan,
      white: gruvboxLightTheme.white,
      lightBlack: gruvboxLightTheme.brightBlack,
      lightRed: gruvboxLightTheme.brightRed,
      lightGreen: gruvboxLightTheme.brightGreen,
      lightYellow: gruvboxLightTheme.brightYellow,
      lightBlue: gruvboxLightTheme.brightBlue,
      lightMagenta: gruvboxLightTheme.brightPurple,
      lightCyan: gruvboxLightTheme.brightAqua,
      lightWhite: gruvboxLightTheme.brightWhite,
    },
  },

  dark: {
    activeTabBackground: gruvboxDarkTheme.bg2,
    background: gruvboxDarkTheme.bg0,
    border: 'transparent',
    foreground: gruvboxDarkTheme.fg,

    colors: {
      black: gruvboxDarkTheme.black,
      red: gruvboxDarkTheme.red,
      green: gruvboxDarkTheme.green,
      yellow: gruvboxDarkTheme.yellow,
      blue: gruvboxDarkTheme.blue,
      magenta: gruvboxDarkTheme.purple,
      cyan: gruvboxDarkTheme.cyan,
      white: gruvboxDarkTheme.white,
      lightBlack: gruvboxDarkTheme.brightBlack,
      lightRed: gruvboxDarkTheme.brightRed,
      lightGreen: gruvboxDarkTheme.brightGreen,
      lightYellow: gruvboxDarkTheme.brightYellow,
      lightBlue: gruvboxDarkTheme.brightBlue,
      lightMagenta: gruvboxDarkTheme.brightPurple,
      lightCyan: gruvboxDarkTheme.brightAqua,
      lightWhite: gruvboxDarkTheme.brightWhite,
    },
  },
}

exports.decorateConfig = (config) => {
  const defaults = {
    backgroundMode: 'light',
    contrastMode: 'normal',
  }

  const backgroundMode = config.themeBackgroundMode || defaults.backgroundMode
  const contrastMode = config.themeContrastMode || defaults.contrastMode
  const selectedTheme = theme[backgroundMode]

  // Hyper theme configuration options
  const backgroundColor = selectedTheme.background[contrastMode]
  const borderColor = selectedTheme.border
  const foregroundColor = selectedTheme.foreground[contrastMode]
  const colors = selectedTheme.colors
  const cursorColor = 'rgb(146,131,116,0.8)'

  return Object.assign({}, config, {
    backgroundColor,
    borderColor,
    colors,
    cursorColor,
    foregroundColor,

    css: `
      .tabs_list,
      .tab_tab {
        color: ${foregroundColor} !important;
        border-color: transparent !important;
      }

      .tab_tab {
        background-color: transparent;
      }

      .tab_active {
        background-color: ${selectedTheme.activeTabBackground};
      }

      .tab_active {
        box-shadow: 0 2px 0 0 ${selectedTheme.colors.brightOrange} inset;
      }

      ${config.css || ''}
    `,
}
