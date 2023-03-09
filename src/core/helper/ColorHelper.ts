import { AppColor } from '../constants/Colors';
import KalibraColors from '../constants/KalibraColors.json';
const getBarColor = (color: string, pillar: string): string => {
  if (pillar === undefined) {
    return color;
  }
  switch (color) {
    case 'red':
      return `color-${pillar}-100`;
    case 'orange':
      return `color-${pillar}-200`;
    case 'yellow':
      return `color-${pillar}-300`;
    case 'green':
      return `color-${pillar}-400`;
    case 'teal':
      return `color-${pillar}-500`;
    default:
      return color;
  }
};

const getTransperentColor = (pillar: string): string => {
  return `color-${pillar}-200-transparent`;
};

const getScoreColor = (pillar: string): string => {
  return `color-${pillar}-700`;
};

const getTextColor = (pillar: string): string => {
  return `color-${pillar}-700`;
};

const getShadowColor = (pillar: string): string => {
  return `color-${pillar}-100-transparent`;
};
const getBorderColor = (pillar: string): string => {
  return `color-${pillar}-100`;
};

//Color Helper export functions
export const ColorHelper = {
  getBarColor: (color: string, pillar: string): string => {
    const str = getBarColor(color, pillar?.toLocaleLowerCase());
    if (Object.keys(KalibraColors).includes(str)) {
      return KalibraColors[str];
    } else {
      return str;
    }
  },
  getTransperentColor: (pillar: string): string => {
    const str = getTransperentColor(pillar.toLocaleLowerCase());
    return KalibraColors[str];
  },
  getScoreColor: (pillar?: string): string => {
    if (pillar === undefined) {
      return '';
    }
    const str = getScoreColor(pillar.toLocaleLowerCase());
    return KalibraColors[str];
  },
  getTextColor: (pillar?: string, defaultColor?: string): string => {
    if (pillar === undefined) {
      return String(defaultColor);
    }
    const str = getTextColor(pillar.toLocaleLowerCase());
    if (Object.keys(KalibraColors).includes(str)) {
      return KalibraColors[str];
    } else {
      return String(defaultColor);
    }
  },
  getShadownColor: (pillar?: string, defaultColor?: string): string => {
    if (pillar === undefined) {
      return String(defaultColor);
    }
    const str = getShadowColor(pillar.toLocaleLowerCase());
    if (Object.keys(KalibraColors).includes(str)) {
      return KalibraColors[str];
    } else {
      return String(defaultColor);
    }
  },
  getBorderColor: (pillar?: string, defaultColor?: string): string => {
    if (pillar === undefined) {
      return String(defaultColor);
    }
    const str = getBorderColor(pillar.toLocaleLowerCase());
    if (Object.keys(KalibraColors).includes(str)) {
      return KalibraColors[str];
    } else {
      return String(defaultColor);
    }
  },

  getGroupScoreColor: (score: number): string => {
    const groupScore = score * 20;
    const groupScoreColor = groupScore >= 89.9
    ? AppColor.scoreSuccess600
    : groupScore > 79.9
      ? AppColor.scoreSuccess600
      : groupScore > 50.4
        ? AppColor.scoreWarning600
        : AppColor.scoreDanger600;
    return groupScoreColor;
  },

  getGroupScoreText: (score: number): string => {
    const groupScore = score * 20;
    const groupScoreText = groupScore > 89.9
    ? 'Excellent'
    : groupScore > 79.9
      ? 'Looking Good'
      : groupScore > 50.4
        ? 'Needs Attention'
        : 'Needs Attention';
    return groupScoreText;
  },
  getGroupItemScoreBackgroundColor: (score: number): string => {
    const bgColor = score > 0.999 
    ? AppColor.scoreSuccess100
    : score > 0.799
      ? AppColor.scoreSuccess100
      : score > .504
        ? AppColor.scoreWarning100
        : AppColor.scoreDanger100;

    return bgColor;
  },

  getGroupItemScoreColor: (score: number): string => {
    const color = score > 0.999
    ? AppColor.scoreSuccess600
    : score > 0.799
      ? AppColor.scoreSuccess600
      : score > .504
        ? AppColor.scoreWarning600
        : AppColor.scoreDanger600;

    return color;
   
  },
  getGroupItemScoreText: (score: number): string => {
    const text = score > 0.999
    ? 'Optimal'
    : score > 0.799
      ? 'Near optimal'
      : score > .504
        ? 'Needs attention'
        : 'Needs attention';

    return text;
  },
};
