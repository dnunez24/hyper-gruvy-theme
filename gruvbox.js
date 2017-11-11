// Gruvbox white palette
const gruvboxWhite0       = '#fbf1c7'
const gruvboxWhite0Soft   = '#f2e5bc'
const gruvboxWhite0Hard   = '#f9f5d7'
const gruvboxWhite1       = '#ebdbb2'
const gruvboxWhite2       = '#d5c4a1'
const gruvboxWhite3       = '#bdae93'
const gruvboxWhite4       = '#a89984'

// Gruvbox gray palette
const gruvboxGray         = '#928374'

// Gruvbox black palette
const gruvboxBlack0       = '#282828'
const gruvboxBlack0Soft   = '#32302f'
const gruvboxBlack0Hard   = '#1d2021'
const gruvboxBlack1       = '#3c3836'
const gruvboxBlack2       = '#504945'
const gruvboxBlack3       = '#665c54'
const gruvboxBlack4       = '#7c6f64'

// Gruvbox color palette
const gruvboxRedLight     = '#fb4934'
const gruvboxRedMedium    = '#cc241d'
const gruvboxRedDark      = '#9d0006'
const gruvboxGreenLight   = '#b8bb26'
const gruvboxGreenMedium  = '#98971a'
const gruvboxGreenDark    = '#79740e'
const gruvboxYellowLight  = '#fabd2f'
const gruvboxYellowMedium = '#d79921'
const gruvboxYellowDark   = '#b57614'
const gruvboxBlueLight    = '#83a598'
const gruvboxBlueMedium   = '#458588'
const gruvboxBlueDark     = '#076678'
const gruvboxPurpleLight  = '#d3869b'
const gruvboxPurpleMedium = '#b16286'
const gruvboxPurpleDark   = '#8f3f71'
const gruvboxAquaLight    = '#8ec07c'
const gruvboxAquaMedium   = '#689d6a'
const gruvboxAquaDark     = '#427b58'
const gruvboxOrangeLight  = '#fe8019'
const gruvboxOrangeMedium = '#d65d0e'
const gruvboxOrangeDark   = '#af3a03'

module.exports = {
  colors: {
    white0: gruvboxWhite0,
    white0Soft: gruvboxWhite0Soft,
    white0Hard: gruvboxWhite0Hard,
    white1: gruvboxWhite1,
    white2: gruvboxWhite2,
    white3: gruvboxWhite3,
    white4: gruvboxWhite4,
    gray: gruvboxGray,
    black0: gruvboxBlack0,
    black0Soft: gruvboxBlack0Soft,
    black0Hard: gruvboxBlack0Hard,
    black1: gruvboxBlack1,
    black2: gruvboxBlack2,
    black3: gruvboxBlack3,
    black4: gruvboxBlack4,
    redLight: gruvboxRedLight,
    redMedium: gruvboxRedMedium,
    redDark: gruvboxRedDark,
    greenLight: gruvboxGreenLight,
    greenMedium: gruvboxGreenMedium,
    greenDark: gruvboxGreenDark,
    yellowLight: gruvboxYellowLight,
    yellowMedium: gruvboxYellowMedium,
    yellowDark: gruvboxYellowDark,
    blueLight: gruvboxBlueLight,
    blueMedium: gruvboxBlueMedium,
    blueDark: gruvboxBlueDark,
    purpleLight: gruvboxPurpleLight,
    purpleMedium: gruvboxPurpleMedium,
    purpleDark: gruvboxPurpleDark,
    aquaLight: gruvboxAquaLight,
    aquaMedium: gruvboxAquaMedium,
    aquaDark: gruvboxAquaDark,
    orangeLight: gruvboxOrangeLight,
    orangeMedium: gruvboxOrangeMedium,
    orangeDark: gruvboxOrangeDark,
  },

  themes: {
    light: {
      bg: gruvboxWhite0,
      bg0: {
        soft: gruvboxWhite0Soft,
        normal: gruvboxWhite0,
        hard: gruvboxWhite0Hard,
      },
      bg1: gruvboxWhite1,
      bg2: gruvboxWhite2,
      bg3: gruvboxWhite3,
      bg4: gruvboxWhite4,

      fg: gruvboxBlack1,
      fg0: gruvboxBlack0,
      fg1: gruvboxBlack1,
      fg2: gruvboxBlack2,
      fg3: gruvboxBlack3,
      fg4: gruvboxBlack4,

      black: gruvboxWhite0,
      red: gruvboxRedMedium,
      green: gruvboxGreenMedium,
      yellow: gruvboxYellowMedium,
      blue: gruvboxBlueMedium,
      purple: gruvboxPurpleMedium,
      aqua: gruvboxAquaMedium,
      white: gruvboxBlack4,
      orange: gruvboxOrangeMedium,

      brightBlack: gruvboxGray,
      brightRed: gruvboxRedDark,
      brightGreen: gruvboxGreenDark,
      brightYellow: gruvboxYellowDark,
      brightBlue: gruvboxBlueDark,
      brightPurple: gruvboxPurpleDark,
      brightAqua: gruvboxAquaDark,
      brightWhite: gruvboxBlack1,
      brightOrange: gruvboxOrangeDark,
    },

    dark: {
      bg: gruvboxBlack0,
      bg0: {
        soft: gruvboxBlack0Soft,
        normal: gruvboxBlack0,
        hard: gruvboxBlack0Hard,
      },
      bg1: gruvboxBlack1,
      bg2: gruvboxBlack2,
      bg3: gruvboxBlack3,
      bg4: gruvboxBlack4,

      fg: gruvboxWhite1,
      fg0: gruvboxWhite0,
      fg1: gruvboxWhite1,
      fg2: gruvboxWhite2,
      fg3: gruvboxWhite3,
      fg4: gruvboxWhite4,

      black: gruvboxBlack0,
      red: gruvboxRedMedium,
      green: gruvboxGreenMedium,
      yellow: gruvboxYellowMedium,
      blue: gruvboxBlueMedium,
      purple: gruvboxPurpleMedium,
      aqua: gruvboxAquaMedium,
      white: gruvboxWhite4,
      orange: gruvboxOrangeMedium,

      brightBlack: gruvboxGray,
      brightRed: gruvboxRedLight,
      brightGreen: gruvboxGreenLight,
      brightYellow: gruvboxYellowLight,
      brightBlue: gruvboxBlueLight,
      brightPurple: gruvboxPurpleLight,
      brightAqua: gruvboxAquaLight,
      brightWhite: gruvboxWhite1,
      brightOrange: gruvboxOrangeLight,
    },
  },
}
