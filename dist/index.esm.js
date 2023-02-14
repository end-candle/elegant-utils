/*!
 * elegant-utils 1.0.0
 * Licensed under MIT
 */
/**
 * 判断对象是否为字符串类型
 * @param obj 带判断对象
 * @returns 是否为字符串
 */
function isString(obj) {
    return typeof obj === 'string';
}

/**
 * 判断对象是否为数组类型
 * @param obj 带判断对象
 * @returns 是否为数组
 */
function isArray(obj) {
    return Array.isArray(obj);
}

/**
 * 判断对象是否为空undefined
 * @param obj 带判断对象
 * @returns 是否为undefined
 */
function isUndefined(obj) {
    return obj === undefined;
}

/**
 * 判断对象是否为函数
 * @param obj 带判断对象
 * @returns 是否为函数
 */
function isFunc(obj) {
    return typeof obj === 'function';
}

/**
 * 判断对象是否为null
 * @param obj 带判断对象
 * @returns 是否为null
 */
function isNull(obj) {
    return obj === null;
}

/**
 * 判断对象是否为对象
 * @param obj 带判断对象
 * @returns 是否为对象
 */
function isObject(obj) {
    if (isNull(obj)) {
        return false;
    }
    return typeof obj === 'object';
}

/**
 * 判断对象是否为空数据(空对象、空字符串、undefined)
 * @param obj 带判断对象
 * @returns 是否为空数据
 */
function isNil(obj) {
    return isUndefined(obj) || isNull(obj);
}

/**
 * 判断对象是否为空数据(空对象、空字符串、undefined、null)
 * @param obj 带判断对象
 * @returns 是否为空数据
 */
function isEmpty(obj) {
    if (isArray(obj)) {
        return obj.length === 0;
    }
    if (isObject(obj)) {
        return Object.keys(obj).length === 0;
    }
    return isUndefined(obj) || isNull(obj) || obj === '';
}

const utils = {
    isString,
    isArray,
    isUndefined,
    isFunc,
    isObject,
    isNil,
    isNull,
    isEmpty,
};

export { utils as default };
