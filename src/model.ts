import { CompletionItem } from "vscode"

export const MAX_PARAGRAPHS = 10 as const

export enum Languages {
  RU = 'ru',
  EN = 'en',
}

export interface IFishTextCompletionMetadata {
  prefix: {
    [lang in Languages]: string
  }
  documentation?: {
    [lang in Languages]?: string
  }
  documentationVariants?: {
    [lang in Languages]?: string
  }
  beforeText?: string
  afterText?: string
}

export type TFishTextCompletionFactory = (amount: number) => CompletionItem[]
