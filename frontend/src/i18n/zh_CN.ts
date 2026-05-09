// 中文本地化配置
// Meetily 中文界面翻译

export const zh_CN = {
  // 通用
  common: {
    save: '保存',
    cancel: '取消',
    delete: '删除',
    edit: '编辑',
    close: '关闭',
    confirm: '确认',
    retry: '重试',
    loading: '加载中...',
    error: '错误',
    success: '成功',
    warning: '警告',
    info: '信息',
  },

  // 录音相关
  recording: {
    startRecording: '开始录音',
    stopRecording: '停止录音',
    recordingInProgress: '录音中...',
    pauseRecording: '暂停',
    resumeRecording: '继续',
    processingTranscripts: '正在处理转录...',
    savingRecording: '正在保存...',
  },

  // 会议相关
  meeting: {
    newMeeting: '新会议',
    meetingName: '会议名称',
    searchMeetings: '搜索会议...',
    deleteMeeting: '删除会议',
    editMeeting: '编辑会议',
    noMeetings: '暂无会议',
    enterMeetingTitle: '输入会议标题',
  },

  // 设置页面
  settings: {
    title: '设置',
    general: '通用',
    audio: '音频',
    transcription: '转录',
    summary: '摘要',
    storage: '存储',
    beta: '测试版',
    language: '语言',
    transcriptionLanguage: '转录语言',
    selectLanguage: '选择语言',
    microphone: '麦克风',
    systemAudio: '系统音频',
    selectMicrophone: '选择麦克风',
    selectSystemAudio: '选择系统音频',
    model: '模型',
    provider: '提供商',
    apiKey: 'API密钥',
    endpoint: '端点',
    whisperModel: 'Whisper模型',
  },

  // 侧边栏
  sidebar: {
    meetings: '会议',
    recordings: '录音',
    settings: '设置',
    collapse: '收起',
    expand: '展开',
  },

  // Onboarding
  onboarding: {
    welcome: '欢迎使用 Meetily',
    getStarted: '开始使用',
    setupOverview: '设置概览',
    permissions: '权限设置',
    downloadModels: '下载模型',
    complete: '完成',
    next: '下一步',
    back: '返回',
    skip: '跳过',
    microphonePermission: '麦克风权限',
    screenRecordingPermission: '屏幕录制权限',
    allowPermission: '允许权限',
    permissionGranted: '权限已授予',
    selectLanguage: '选择语言',
    selectWhisperModel: '选择Whisper模型',
    tiny: '微型 (最快, 精度最低)',
    base: '基础 (快速, 低精度)',
    small: '小型 (中等速度, 中等精度)',
    medium: '中型 (较慢, 较高精度)',
    large: '大型 (最慢, 最高精度)',
  },

  // 语言选项 (用于设置中的下拉选择)
  languageNames: {
    auto: '自动检测（原始语言）',
    'auto-translate': '自动检测（翻译为中文）',
    zh: '中文',
    en: '英语',
    ja: '日语',
    ko: '韩语',
    fr: '法语',
    de: '德语',
    es: '西班牙语',
    ru: '俄语',
    pt: '葡萄牙语',
    it: '意大利语',
    vi: '越南语',
    th: '泰语',
    ar: '阿拉伯语',
    tr: '土耳其语',
  },

  // 摘要相关
  summary: {
    generateSummary: '生成摘要',
    regenerateSummary: '重新生成',
    copySummary: '复制摘要',
    saveSummary: '保存摘要',
    summaryLanguage: '摘要语言',
    aiSummary: 'AI摘要',
    blockNoteSummary: '摘要',
  },

  // 设备相关
  device: {
    audioDevice: '音频设备',
    inputDevice: '输入设备',
    outputDevice: '输出设备',
    defaultDevice: '默认设备',
  },

  // 状态消息
  status: {
    ready: '就绪',
    connecting: '连接中...',
    connected: '已连接',
    disconnected: '已断开',
    recording: '录音中',
    paused: '已暂停',
    processing: '处理中',
  },

  // 错误消息
  errors: {
    failedToStartRecording: '启动录音失败',
    failedToStopRecording: '停止录音失败',
    failedToSaveRecording: '保存录音失败',
    failedToTranscribe: '转录失败',
    failedToGenerateSummary: '生成摘要失败',
    noMicrophonePermission: '无法访问麦克风',
    noScreenRecordingPermission: '无法访问屏幕录制',
    networkError: '网络错误',
    unknownError: '未知错误',
  },
};

// 导出默认语言
export const DEFAULT_LANGUAGE = 'zh';
export const TRANSLATIONS = zh_CN;