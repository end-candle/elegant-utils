import isArray from './isArray';
import isNull from './isNull';
import isObject from './isObject';
import isUndefined from './isUndefined';

/**
 * 判断对象是否为空数据(空对象、空字符串、undefined、null)
 * @param obj 带判断对象
 * @returns 是否为空数据
 */
export default function isEmpty(obj: unknown): boolean {
  if (isArray(obj)) {
    return (obj as Array<unknown>).length === 0;
  }
  if (isObject(obj)) {
    return Object.keys(obj as Object).length === 0;
  }
  return isUndefined(obj) || isNull(obj) || obj === '';
}
