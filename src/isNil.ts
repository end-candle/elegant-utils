import isNull from '@/isNull';
import isUndefined from '@/isUndefined';

/**
 * 判断对象是否为空数据(null、undefined)
 * @param obj 带判断对象
 * @returns 是否为空数据
 */
export default function isNil(obj: unknown): boolean {
  return isUndefined(obj) || isNull(obj);
}
