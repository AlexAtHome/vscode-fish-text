import * as vscode from 'vscode'

import {
  getFishTextCompletions,
  getFishHTMLCompletions,
  getFishJadeCompletions
} from './fish'

const MAX_PARAGRAPHS = 10

export function activate(context: vscode.ExtensionContext) {
  console.log('[vscode-fish-text] Activated!')

  let htmlSpecificLanguages: string[] = [
    'html',
    'javascriptreact',
    'typescriptreact'
  ]
  let languages: string[] = [
    ...htmlSpecificLanguages,
    'handlebars',
    'plaintext',
    'php',
    'markdown',
    'jade'
  ]

	let provider = vscode.languages.registerCompletionItemProvider(languages, {
    provideCompletionItems() {
      return getFishTextCompletions(MAX_PARAGRAPHS)
    }
  })

	let htmlSpecificProvider = vscode.languages.registerCompletionItemProvider(htmlSpecificLanguages, {
    provideCompletionItems() {
      return getFishHTMLCompletions(MAX_PARAGRAPHS)
    }
  })

	let pugSpecificProvider = vscode.languages.registerCompletionItemProvider('jade', {
    provideCompletionItems() {
      return getFishJadeCompletions(MAX_PARAGRAPHS)
    }
  })

  context.subscriptions.push(provider, htmlSpecificProvider, pugSpecificProvider)
}
