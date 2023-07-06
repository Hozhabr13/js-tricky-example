const applyImperativeDeclarative = (numbers, operation, type = "Declarative") => {
  if (type === "Declarative") {
    return numbers.map(operation);
  } else {
    const tmp = [];
    for (let i = 0; i < numbers.length; i++) {
      tmp.push(operation(numbers[i]));
    }
    return tmp;
  }
}

let data = [12, 52, 35, 20];
const exportedData = applyImperativeDeclarative(data, (item) => item + 3, 'Imperative')