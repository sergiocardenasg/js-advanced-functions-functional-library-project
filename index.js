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

    },

    find: function(collection, predicate) {
      const found = collection.find(element => element === predicate);
      return found
    },

    filter: function(collection) {

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

    },

    flatten: function(array, shallow = false) {
      return (shallow) ? array.flat(shallow) : array.flat()
    },

    uniq: function(array, isSorted = false, callback = false) {

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
