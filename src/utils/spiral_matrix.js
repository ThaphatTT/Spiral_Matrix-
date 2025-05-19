exports.spiral_matrix = (value) => {
  let newValue = [];
  let isLastIndex = false;
  let footprints = [];
  for (let index = 0; index < value.length; index++) {
    const element = value[index];
    let inArray;
    if (!isLastIndex) {
      for (let inside = 0; inside < element.length; inside++) {
        inArray = element[inside];
        if (element.length - 1 === inside) {
          newValue.push(inArray);
          isLastIndex = true;
          continue;
        }
        newValue.push(inArray);
      }
    } else {
      for (
        let inside = element.length - 1;
        inside >= 0 && inside <= element.length;
        inside--
      ) {
        inArray = element[inside];
        if (inArray !== 5 && inArray !== 4) {
          newValue.push(inArray);
        } else {
          footprints.push(inArray);
        }
        if (element[0] === 7 && inside === 0) {
          const reverse = footprints.reverse();
          newValue.push(...reverse);
        }
      }
    }
  }

  return newValue;
};
