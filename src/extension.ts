import * as vscode from 'vscode'

import { getFishTextCompletions, getFishHTMLCompletions, getFishJadeCompletions } from './snippets'
import { MAX_PARAGRAPHS } from './model'
import { getConfig, Setting } from './config'

/** Extension config */
const config = getConfig()
const listeners = new Set<vscode.Disposable>()

export function activate(context: vscode.ExtensionContext) {
  const htmlSpecificLanguages = config.get<string[]>(Setting.HTML_LANGS) ?? []
  const pugSpecificLanguages = config.get<string[]>(Setting.PUG_LANGS) ?? []
  const languages = config.get<string[]>(Setting.LANGS) ?? []

  const provider = vscode.languages.registerCompletionItemProvider(languages, {
    provideCompletionItems() {
      return getFishTextCompletions(MAX_PARAGRAPHS)
    },
  })
  listeners.add(provider)

  const htmlSpecificProvider = vscode.languages.registerCompletionItemProvider(htmlSpecificLanguages, {
    provideCompletionItems() {
      return getFishHTMLCompletions(MAX_PARAGRAPHS)
    },
  })
  listeners.add(htmlSpecificProvider)

  const pugSpecificProvider = vscode.languages.registerCompletionItemProvider(pugSpecificLanguages, {
    provideCompletionItems() {
      return getFishJadeCompletions(MAX_PARAGRAPHS)
    },
  })
  listeners.add(pugSpecificProvider)

  context.subscriptions.push(provider, htmlSpecificProvider, pugSpecificProvider)

  vscode.workspace.onDidChangeConfiguration((event: vscode.ConfigurationChangeEvent) => {
    if (!event.affectsConfiguration('fish-text')) {
      return
    }
    const reloadButton = 'Reload'
    vscode.window
      .showWarningMessage('The window reload is required to apply the new configuration.', reloadButton)
      .then(value => {
        if (value === reloadButton) {
          vscode.commands.executeCommand('workbench.action.reloadWindow')
        }
      })
  })
}

export function deactivate() {
  cleanUp()
}

function cleanUp() {
  listeners.forEach(listener => listener.dispose())
}
