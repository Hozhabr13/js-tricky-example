function unifierFunc(arr) {
    const flattened = [];
  
    function unifierClosure(item) {
      if (Array.isArray(item)) {
        for (let i = 0; i < item.length; i++) {
            unifierClosure(item[i]);
        }
      } else {
        flattened.push(item);
      }
    }
  
    unifierClosure(arr);
  
    return flattened.join(',');
  }
  
  const data = [4, [[5], [6, [7], 8], 9, 10]];
  const unifierArray = unifierFunc(data);