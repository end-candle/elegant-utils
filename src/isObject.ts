import isNull from './isNull';

/**
 * 判断对象是否为对象
 * @param obj 带判断对象
 * @returns 是否为对象
 */
export default function isObject(obj: unknown): boolean {
  if (isNull(obj)) {
    return false;
  }
  return typeof obj === 'object';
}
