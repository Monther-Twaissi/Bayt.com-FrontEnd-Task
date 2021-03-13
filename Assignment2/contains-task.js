var nestedObject = {
  data: {
    info: {
      stuff: {
        other: {
          magicNumber: 44,
          moreStuff: {
            something: "foo2",
          },
        },
      },
    },
  },
};

console.log("Assignment2-b-sol1");
/**
 * Search value in object
 * @param {*} searchValue any non object type
 * @param {*} obj search heap
 * @returns {string} is found
 */
function findInNestedObj(nestedObject, searchValue) {
  let key = Object.keys(nestedObject); // array => ["data" ]
  let t = nestedObject[key]; // nestedObject[["data"]]
  let isFound = null;
  while (true) {
    if (typeof t == "object") {
      let key = Object.keys(t);
      let data = Object.values(t);
      if (key.length > 1) {
        let data = Object.values(t);
        data.map((value) => {
          if (typeof value != "object") {
            if (value == searchValue) {
              isFound = "Found";
            }
          } else {
            t = value;
          }
        });
      } else if (data == searchValue) {
        return (isFound = "Found");
      } else {
        t = t[key];
      }
    } else {
      if (isFound) {
        return isFound;
      } else {
        return "Not Found";
      }
    }
  }
}
console.log(findInNestedObj(nestedObject, 44));

// New object with more complex data
var nestedObject = {
  str: "44",
  testcase: {
    magicNumber: "44",
  },
  data: {
    info: {
      stuff: {
        other: {
          magicNumber: 44,
          moreStuff: {
            something: "foo2",
          },
        },
      },
    },
  },
  data2: {
    info: {
      stuff: {
        other: {
          magicNumber: 44,
          moreStuff: {
            something: "foo2",
          },
        },
      },
    },
  },
};

console.log("Assignment2-b-sol2");

/**
 * Search value in object
 * @param {*} searchValue any non object type
 * @param {*} obj search heap
 * @returns {Boolean} is found
 */
function contains(searchValue, obj) {
  // get obj keys
  // check if each key -> value is an object
  //  contains(searchValue, objectNew)
  // else compare value

  const keys = Object.keys(obj); // get obj keys as Array<String>
  if (keys.length < 1) return false; // check for empty objects
  for (const [index, key] of keys.entries()) {
    // iterate on each object keys
    // if the value is an object re-search in it
    let isFound = false;
    if (typeof obj[key] == "object") {
      isFound = contains(searchValue, obj[key]);
    } else {
      isFound = searchValue === obj[key];
    }

    if (isFound) {
      // check if we found the value
      return true;
    } else if (index == keys.length - 1) {
      // check if we have items left
      return false;
    }
  } // next key
}

console.log(contains(44, nestedObject) ? "found" : "not-found");
console.log("End Of Assignment2-b");
