function zipList(list1: unknown[], list2: unknown[]): unknown[] {
  const result: unknown[] = [];

  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i]);
    result.push(list2[i]);
  }
  return result;
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3])); // Output: ['a', 1, 'b', 2, 'c', 3]

function zipListTheFunctionalWay<T, U>(list1: T[], list2: U[]): Array<T | U> {
  return list1.reduce<Array<T | U>>((result, item, index) => {
    if (index < list2.length) {
      result.push(item, list2[index]);
    }
    return result;
  }, []);
}

console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3])); // Output: ['a', 1, 'b', 2, 'c', 3]
