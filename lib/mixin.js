'use strict';

/**
 * Mixin functionality to a lo-dash instance. All functions referenced below are the functions that are added to the lo-dash instance.
 *
 * @function mixin
 * @param _ - the instance of lo-dash to extend
 * @param {boolean} newInstance
 * @returns {*}
 */
module.exports = function (_, newInstance) {
  if (newInstance) {
    _ = _.runInContext();
  }

  function pair(element, f1, f2) {
    return [f1(element), f2(element)];
  }

  function get() {
    var obj = arguments[0];

    for (var i = 1; i < arguments.length; i++) {
      obj = obj[arguments[i]];
    }

    return obj;
  }

  function sum() {
    var array;
    if (arguments.length === 1 && arguments[0].length) {
      array = arguments[0];
    } else {
      array = arguments;
    }

    var total = 0;
    for (var i = 0; i < array.length; i++) {
      var value = array[i];
      total += !value ? 0 : value;
    }
    return total;
  }

  function toLowerCase(str) {
    return str.toLowerCase();
  }

  function toInt(value) {
    if (value) {
      return value.length ? parseInt(value) : value;
    } else {
      return 0;
    }
  }

  function gt(a, b) {
    return a > b;
  }

  function filter2(collection, callback) {
    if (_.isArray(collection)) {
      return _.filter(collection, callback);
    } else {
      var ret = {};
      for (var key in collection) {
        if (collection.hasOwnProperty(key)) {
          var value = collection[key];
          if (callback(value)) {
            ret[key] = value;
          }
        }
      }
      return ret;
    }
  }

  function zipObject2(keys, values, conflictHandler) {
    if (arguments.length === 2 && _.isFunction(arguments[1])) {
      values = null;
      conflictHandler = arguments[1];
    }

    var index = -1,
      length = keys ? keys.length : 0,
      result = {};

    if (!values && length && !_.isArray(keys[0])) {
      values = [];
    }
    while (++index < length) {
      var key = keys[index];
      var value;

      if (values) {
        value = values[index];
      } else {
        value = key[1];
        key = key[0];
      }
      var existingValue = result[key];
      if (existingValue && conflictHandler) {
        value = conflictHandler(value, existingValue);
      }
      result[key] = value;
    }
    return result;
  }

  var mixin = {
    pair: pair,

    get: get,

    toInt: toInt,

    sum: sum,

    toLowerCase: toLowerCase,

    zipObject2: zipObject2,

    gt: gt,

    filter2: filter2
  };

  _.mixin(mixin);

  return _;
};
