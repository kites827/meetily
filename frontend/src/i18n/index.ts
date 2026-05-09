// i18n 入口文件
// Meetily 多语言支持

import { zh_CN } from './zh_CN';

// 翻译函数 - 根据当前语言返回翻译后的字符串
export function t(key: string): string {
  // 简化实现，后续可以扩展为支持多语言
  const keys = key.split('.');
  let value: any = zh_CN;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // 如果找不到翻译，返回 key 本身
    }
  }
  
  return typeof value === 'string' ? value : key;
}

export { zh_CN, DEFAULT_LANGUAGE, TRANSLATIONS } from './zh_CN';