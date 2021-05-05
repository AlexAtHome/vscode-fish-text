import { workspace, WorkspaceConfiguration } from 'vscode'

/**
 * Extension settings names
 */
export enum Setting {
  HTML_LANGS = 'htmlSnippetLanguages',
  PUG_LANGS = 'pugSnippetLanguages',
  LANGS = 'snippetLanguages',
  IS_ENGLISH_ENABLED = 'isEnglishSnippetEnabled',
}

/**
 * VS Code workspace configuration object with this extension's settings included
 */
export type FishTextConfig = WorkspaceConfiguration & {
  [Setting.LANGS]: string[]
  [Setting.HTML_LANGS]: string[]
  [Setting.PUG_LANGS]: string[]
  [Setting.IS_ENGLISH_ENABLED]: boolean
}

/**
 * Returns this extension specific workspace config
 */
export const getConfig = (): FishTextConfig => {
  return workspace.getConfiguration('fish-text') as FishTextConfig
}
