const _ = {
  clamp(number, lower, upper) {
    lowerClampedValue = Math.max(number, lower);
    clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    }
    const isInRange = start <= number && number < end;
    return isInRange;
  },
  words(string) {
    let words = string.split(' ');
    return words;
  },
  pad(string, length) {
    if (length <= string.length) {
      return string;
    }
    const startPaddingLength = Math.floor((length - string.length) / 2);
    const endPaddingLength = length - string.length - startPaddingLength;
    const paddedString =
      ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
    return paddedString;
  },
  has(object, key) {
    const hasValue = object[key] != undefined ? true : false;
    return hasValue;
  },
  invert(object) {
    const invertedObjected = {};
    for (const key in object) {
      const originalValue = key;
      invertedObjected.originalValue = key;
    }
    return invertedObjected;
  },
  findKey(object, predicate) {
    for (const key in object) {
      const value = object[key];
      const predicateReturnValue = predicate(value);
      if (predicateReturnValue) {
        return key;
      }
    }
    return undefined;
  },
  drop(array, n) {
    if (n === undefined) {
      n = 1;
    }
    let droppedArray = array.slice(n, array.length);
    return droppedArray;
  }
};

// Do not write or modify code below this line.
module.exports = _;
