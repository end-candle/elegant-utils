/**
 * 判断对象是否为函数
 * @param obj 带判断对象
 * @returns 是否为函数
 */
export default function isFunc(obj: unknown): boolean {
  return typeof obj === 'function';
}
