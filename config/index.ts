import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: '聊天助手',
  description: '智能对话系统',
  copyright: '© 2024 聊天助手',
  privacy_policy: '',
  default_language: 'zh-Hans',
}

export const isShowPrompt = false
export const promptTemplate = '我将扮演一个智能助手。'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
