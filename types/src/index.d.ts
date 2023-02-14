import isString from './isString';
import isArray from './isArray';
import isUndefined from './isUndefined';
import isFunc from './isFunction';
import isObject from './isObject';
import isNil from './isNil';
import isNull from './isNull';
import isEmpty from './isEmpty';
declare const utils: {
    isString: typeof isString;
    isArray: typeof isArray;
    isUndefined: typeof isUndefined;
    isFunc: typeof isFunc;
    isObject: typeof isObject;
    isNil: typeof isNil;
    isNull: typeof isNull;
    isEmpty: typeof isEmpty;
};
export default utils;
