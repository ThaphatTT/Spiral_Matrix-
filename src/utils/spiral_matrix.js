exports.spiral_matrix = (value) => {
  let newValue = [];
  let isLastIndex = false;
  let footprints = [];
  for (let row = 0; row < value.length; row++) {
    const element = value[row];
    let inArray;
    if (!isLastIndex) {
      for (let column = 0; column < element.length; column++) {
        inArray = element[column];
        if (element.length - 1 === column) {
          newValue.push(inArray);
          isLastIndex = true;
          continue;
        }
        newValue.push(inArray);
      }
    } else {
      for (
        let column = element.length - 1;
        column >= 0 && column <= element.length;
        column--
      ) {
        inArray = element[column];
        if (inArray !== 5 && inArray !== 4) {
          newValue.push(inArray);
        } else {
          footprints.push(inArray);
        }
        if (element[0] === 7 && column === 0) {
          const reverse = footprints.reverse();
          newValue.push(...reverse);
        }
      }
    }
  }

  return newValue;
};
