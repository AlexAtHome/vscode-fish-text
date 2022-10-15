import { CompletionItem } from 'vscode'

export const MAX_PARAGRAPHS = 10

export enum Language {
  RU = 'ru',
  EN = 'en',
}

export interface IFishTextCompletionMetadata {
  prefix: {
    [lang in Language]: string
  }
  documentation?: {
    [lang in Language]?: string
  }
  documentationVariants?: {
    [lang in Language]?: string
  }
  beforeText?: string
  afterText?: string
}

export type TFishTextCompletionFactory = (amount: number) => CompletionItem[]
