export const AppColor = {
  tealA400: '#1de9b6',
  tealA400Dark: '#00b686',
  tealA400Light: '#6effe8',
  blueGreyLight: '#718792',
  surfaceGray: '#212121',
  black: 'black',
  white: 'white',
  errorRed: 'red',
  // Colors for Graph Ranges:
  teal: '#008080',
  green: '#82BA7F',
  yellow: '#FFD334',
  red: '#F83F45',
  // Colors for Chat
  blue: '#5C94FF',
  lightestGrey: '#F5F7F9',
  lightGrey: '#D2D5D9',
  darkGrey: '#4C4F56',
  midGrey: '#7E8289',
  darkestGrey: '#121314',
  blueLink: '#3366BB',
  peterRiver: '#3498db',
  baseGreen: '#27FA95',
  lightBlue: '#47E6F1',
  primaryGreenLightest: '#A9FDD5',
  primaryGreenBase: '#27FA95',

  bsPrimary: '#3b7ddd',
  bsSuccess: '#28a745',
  bsDanger: '#dc3545',
  bsWarning: '#ffc107',
  bsInfo: '#17a2b8',
  bsSecondary: '#6c757d',
  bsScoreOptimal: '#00997A',
  bsScoreOptimalBG: '#CCFCE3',
  bsScoreOptimalBG2: '#00D68F',
  bsScoreWarning: '#DB8B00',
  bsScoreWarningBG: '#FFF1C2',
  bsScoreWarningBG2: '#FFAA00',
  bsScoreDanger: '#DB2C66',
  bsScoreDangerBG: '#FFF2F2',
  bsScoreDangerBG2: '#DB2C66',
  scoreDanger700: '#B81D5B',
  scoreDanger600: '#DB2C66',
  scoreDanger100: '#FFF2F2',
  scoreSuccess700: '#00997A',
  scoreSuccess600: '#00D68F',
  scoreSuccess100: '#F0FFF5',
  scoreWarning700: '#DB8B00',
  scoreWarning600: '#FFAA00',
  scoreWarning100: '#FFFDF2',
  kalibraThemeColor: '#46D7CB',
  hoveredkalibraThemeColor: '#72e7d2',
};

export const GraphColorRangeMap = new Map<string, string>([
  ['teal', AppColor.lightBlue],
  ['green', AppColor.primaryGreenLightest],
  ['yellow', AppColor.primaryGreenBase],
  ['orange', AppColor.yellow],
  ['red', AppColor.red],
]);

export const hexToRgb = (hex: string): number[] => {
  const value = hex
    ?.replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => '#' + r + r + g + g + b + b
    )
    ?.substring(1)
    ?.match(/.{2}/g)
    ?.map((x) => parseInt(x, 16));

  if (value === undefined) {
    return [0, 0, 0];
  }
  return value;
};
