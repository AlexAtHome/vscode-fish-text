import * as vscode from 'vscode'

import {
  getFishTextCompletions,
  getFishHTMLCompletions,
  getFishJadeCompletions
} from './snippets'
import { MAX_PARAGRAPHS } from './model'
import { getConfig, Setting } from './config'

/** Extension config */
const config = getConfig()

export function activate(context: vscode.ExtensionContext) {
  const htmlSpecificLanguages = config.get<string[]>(Setting.HTML_LANGS) ?? []
  const pugSpecificLanguages = config.get<string[]>(Setting.PUG_LANGS) ?? []
  const languages = config.get<string[]>(Setting.LANGS) ?? []

	const provider = vscode.languages.registerCompletionItemProvider(languages, {
    provideCompletionItems() {
      return getFishTextCompletions(MAX_PARAGRAPHS)
    }
  })

	const htmlSpecificProvider = vscode.languages.registerCompletionItemProvider(htmlSpecificLanguages, {
    provideCompletionItems() {
      return getFishHTMLCompletions(MAX_PARAGRAPHS)
    }
  })

	const pugSpecificProvider = vscode.languages.registerCompletionItemProvider(pugSpecificLanguages, {
    provideCompletionItems() {
      return getFishJadeCompletions(MAX_PARAGRAPHS)
    }
  })

  context.subscriptions.push(provider, htmlSpecificProvider, pugSpecificProvider)
}
