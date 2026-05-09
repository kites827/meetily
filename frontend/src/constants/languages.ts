// ISO 639-1 language codes supported by Whisper
// 中文界面 - 语言名称使用中文

export const LANGUAGES = [
  { code: 'auto', name: '自动检测（原始语言）' },
  { code: 'auto-translate', name: '自动检测（翻译为中文）' },
  { code: 'zh', name: '中文' },
  { code: 'en', name: '英语' },
  { code: 'ja', name: '日语' },
  { code: 'ko', name: '韩语' },
  { code: 'fr', name: '法语' },
  { code: 'de', name: '德语' },
  { code: 'es', name: '西班牙语' },
  { code: 'ru', name: '俄语' },
  { code: 'pt', name: '葡萄牙语' },
  { code: 'it', name: '意大利语' },
  { code: 'vi', name: '越南语' },
  { code: 'th', name: '泰语' },
  { code: 'ar', name: '阿拉伯语' },
  { code: 'tr', name: '土耳其语' },
];

// 默认语言 - 自动检测，支持中英文混合录制
export const DEFAULT_LANGUAGE = 'auto';