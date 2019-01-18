import * as vscode from 'vscode';
import { getParagraph } from 'speech-code';

export function activate(context: vscode.ExtensionContext) {
  console.log('[vscode-fish-text] Activated!');

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
      const fishPlainCompletion = new vscode.CompletionItem('рыба')
      fishPlainCompletion.insertText = new vscode.SnippetString(getParagraph(3))
      fishPlainCompletion.documentation = new vscode.MarkdownString('Добавляет русский рыбный текст.')

      const fishPlainCompletionEng = new vscode.CompletionItem('fish')
      fishPlainCompletionEng.insertText = new vscode.SnippetString(getParagraph(3))
      fishPlainCompletionEng.documentation = new vscode.MarkdownString('Добавляет русский рыбный текст.\n\nАнглийский вариант сниппета.')

      return [
        fishPlainCompletion,
        fishPlainCompletionEng
      ]
    }
  })

	let htmlSpecificProvider = vscode.languages.registerCompletionItemProvider(htmlSpecificLanguages, {
    provideCompletionItems() {
      const fishHtmlCompletion = new vscode.CompletionItem('рыбатег')
      fishHtmlCompletion.insertText = new vscode.SnippetString('<${1|p,span,div,strong,em,b,i|}${2}>' + getParagraph(3) + '</${1}>${0}')
      fishHtmlCompletion.documentation = new vscode.MarkdownString('Добавляет русский рыбный текст, но в HTML-теге `<p>`.')

      const fishHtmlCompletionEng = new vscode.CompletionItem('fishtag')
      fishHtmlCompletionEng.insertText = new vscode.SnippetString('<${1|p,span,div,strong,em,b,i|}${2}>' + getParagraph(3) + '</${1}>${0}')
      fishHtmlCompletionEng.documentation = new vscode.MarkdownString('Добавляет русский рыбный текст, но в HTML-теге `<p>`.\n\nАнглийский вариант сниппета.')

      return [
        fishHtmlCompletion,
        fishHtmlCompletionEng
      ]
    }
  })

	let pugSpecificProvider = vscode.languages.registerCompletionItemProvider('jade', {
    provideCompletionItems() {
      const fishPugCompletion = new vscode.CompletionItem('рыбатег')
      fishPugCompletion.insertText = new vscode.SnippetString('${1|p,span,div,strong,em,b,i|} ' + getParagraph(3) + '${0}')
      fishPugCompletion.documentation = new vscode.MarkdownString('Добавляет русский рыбный текст, но в HTML-теге `<p>`.')

      const fishPugCompletionEng = new vscode.CompletionItem('fishtag')
      fishPugCompletionEng.insertText = new vscode.SnippetString('${1|p,span,div,strong,em,b,i|} ' + getParagraph(3) + '${0}')
      fishPugCompletionEng.documentation = new vscode.MarkdownString('Добавляет русский рыбный текст, но в HTML-теге `<p>`.\n\nАнглийский вариант сниппета.')

      return [
        fishPugCompletion,
        fishPugCompletionEng
      ]
    }
  })

  context.subscriptions.push(provider, htmlSpecificProvider, pugSpecificProvider)
}
