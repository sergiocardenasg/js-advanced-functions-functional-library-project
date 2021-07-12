const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);
      for (let i = 0; i < newCollection.length; i++)
        callback(newCollection[i])
      return collection;
    },

    map: function(collection, callback) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)
      const newCollection = [];
      for (let i = 0; i < collection.length; i++) {
        const element = callback(collection[i])
        newCollection.push(element)
      }
      return newCollection;
    },

    reduce: function(collection, callback, acc) {
      if (!acc) {
        acc = collection[0];
        collection = collection.slice(1);
      }
      for (let element of collection) {
        acc = callback(acc, element, collection)
      }
      return acc;
    },

    find: function(collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)
      for (let i = 0; i < collection.length; i++)
        if (predicate(collection[i])) 
          return collection[i]
    },

    filter: function(collection, predicate) {
      const newArr = []
      if (!(collection instanceof Array))
        collection = Object.values(collection)
      for (let i = 0; i < collection.length; i++)
        if (predicate(collection[i])) 
          newArr.push(collection[i])
      return newArr
    },

    size: function(collection) {
      const collectionSize = (collection instanceof Array) ? collection.length : Object.values(collection).length;
      return collectionSize
    },

    first: function(collection, n = false) {
      return (n) ? collection.slice(0, n) : collection[0]
    },

    last: function(collection, n = false) {
      return (n) ? collection.slice(collection.length - n, collection.length) : collection[collection.length - 1]
    },

    compact: function(array) {
      const newCollection = array.filter(Boolean);
      return newCollection
    },

    sortBy: function(array, callback) {
      const newArray = [...array];
      return newArray.sort(function(a, b) {
        return callback(a) - callback(b);
      })
    },

    flatten: function(array, shallow = false) {
      return (shallow) ? array.flat() : array.flat(Infinity);
    },

    uniqSorted: function(collection, iteratee) {
      const sorted = [];
      for (let i = 1; i < collection.length; i++) {
        if (sorted[i - 1] !== collection[i])
          sorted.push(collection[i])
      }
      return sorted
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return this.uniqSorted(collection, iteratee)
      } 
      else if (!iteratee) {
        return Array.from(new Set(collection))
      } 
      else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(object) {
      const keys = [];
      for (let element in object) {
        keys.push(element);
      }
      return keys;
    },

    values: function(object) {
      const values = [];
      for (let element in object) {
        values.push(object[element]);
      }
      return values;
    }, 

    functions: function(object) {
      const funcNames = [];
      for (let element in object) {
        if (typeof object[element] === "function") {
          funcNames.push(element);
        }
      }
      return funcNames.sort();
    }
  }
})()

fi.libraryMethod()
