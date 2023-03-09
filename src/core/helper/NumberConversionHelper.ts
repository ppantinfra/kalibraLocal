export const NumberConversion = (originalValue: number) => {
    const absoluteValue = Math.abs(originalValue);
    let convertedNumber;
    if (absoluteValue < 1) {
      convertedNumber = originalValue.toFixed(4);
    } else if (Number.isInteger(absoluteValue)) {
      convertedNumber = originalValue.toString();
    } else {
      convertedNumber = originalValue.toFixed(2);
    }
    const finalNumber = Number(convertedNumber).toLocaleString('en-US', { maximumFractionDigits: 4 });
    return finalNumber;
  };