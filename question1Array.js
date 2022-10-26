const arr = [2, 4, 6, 8, 10];
let temp = 0;

const modify = () => {
  // first value
  arr.sort((a, b) => b - a);

  // all other values
  let operation = true;

  for (let k = 1; k < arr.length - 1; k++) {
    for (let i = k; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (operation ? arr[i] > arr[j] : arr[i] < arr[j]) {
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }

    operation = !operation;
  }

  console.log(arr);
};

modify();
