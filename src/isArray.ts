/**
 * 判断对象是否为数组类型
 * @param obj 带判断对象
 * @returns 是否为数组
 */
export default function isArray(obj: unknown): boolean {
  return Array.isArray(obj);
}
