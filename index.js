const chroma = require('chroma-js')
const gruvbox = require('./gruvbox')

const gruvboxLightTheme = gruvbox.themes.light
const gruvboxDarkTheme = gruvbox.themes.dark

const theme = {
  light: {
    activeBorder: gruvboxLightTheme.brightOrange,
    background: gruvboxLightTheme.bg0,
    border: 'transparent',
    cursor: gruvboxDarkTheme.bg4,
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
    activeBorder: gruvboxDarkTheme.brightOrange,
    background: gruvboxDarkTheme.bg0,
    border: 'transparent',
    cursor: gruvboxDarkTheme.bg4,
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
    backgroundMode: 'dark',
    contrastMode: 'normal',
  }

  const backgroundMode = config.themeBackgroundMode || defaults.backgroundMode
  const contrastMode = config.themeContrastMode || defaults.contrastMode
  const selectedTheme = theme[backgroundMode]

  // Hyper theme configuration options
  const backgroundColor = selectedTheme.background[contrastMode]
  const borderColor = selectedTheme.border
  const foregroundColor = selectedTheme.foreground
  const colors = selectedTheme.colors
  const cursorColor = chroma(selectedTheme.cursor).alpha(0.7).css()

  // Settings for CSS interpolation
  const cursorMixBlendMode = backgroundMode === 'dark' ? 'lighten' : 'darken'
  const activeTabBorderColor = selectedTheme.activeBorder
  const inactiveTabBackgroundColor = backgroundMode === 'dark'
    ? chroma(selectedTheme.colors.black).brighten(0.1)
    : chroma(selectedTheme.colors.black).darken(0.1)
  const inactiveTabTextColor = chroma(foregroundColor).alpha(0.5).css()

  const themeConfig = {
    backgroundColor,
    borderColor,
    colors,
    cursorColor,
    foregroundColor,

    css: `
      ${config.css || ''}

      .tabs_title {
        color: ${foregroundColor} !important;
      }

      .tabs_list,
      .tab_tab,
      .tabs_borderShim {
        color: ${inactiveTabTextColor} !important;
        background-color: ${inactiveTabBackgroundColor} !important;
        border-color: ${borderColor} !important;
      }

      .tab_tab.tab_active {
        color: ${foregroundColor} !important;
        background-color: ${backgroundColor} !important;
        box-shadow: 0 2px 0 0 ${activeTabBorderColor} inset;
      }
    `,
  }

  return Object.assign({}, config, themeConfig)
}
