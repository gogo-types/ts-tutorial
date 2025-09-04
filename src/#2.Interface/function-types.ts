interface SearchFunction {
  (source: string, subString: string): boolean;
}

let Searching: SearchFunction;
Searching = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};

let mySearch: SearchFunction;
mySearch = function (src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
};

interface NumberDictionary {
  [index: string]: number;
  length: number; // Success length is number
  //   name: string; // Fail, 'name' is type not index
}
