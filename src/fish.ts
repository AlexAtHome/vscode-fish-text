import { CompletionItem, SnippetString, MarkdownString } from 'vscode'
import { getParagraph } from 'speech-code';

export const getFishTextCompletions = (amount: number = 3): CompletionItem[] => {
  const fishPlainCompletion = new CompletionItem('рыба')
  fishPlainCompletion.insertText = new SnippetString(getParagraph(3))
  fishPlainCompletion.documentation = new MarkdownString('Добавляет русский рыбный текст.')

  const fishPlainCompletionEng = new CompletionItem('fish')
  fishPlainCompletionEng.insertText = new SnippetString(getParagraph(3))
  fishPlainCompletionEng.documentation = new MarkdownString('Добавляет русский рыбный текст.\n\nАнглийский вариант сниппета.')

  let result = [ fishPlainCompletion,fishPlainCompletionEng ]

  for (let i = 1; i <= amount; i++) {
    let completion = new CompletionItem(`рыба${i}`)
    completion.insertText = new SnippetString(getParagraph(i))
    completion.documentation = new MarkdownString(`Добавляет русский рыбный текст из ${i} предложений.`)

    let completionEng = new CompletionItem(`fish${i}`)
    completionEng.insertText = new SnippetString(getParagraph(i))
    completionEng.documentation = new MarkdownString(`Добавляет русский рыбный текст из ${i} предложений.\n\nАнглийский вариант сниппета.`)

    result.push(completion, completionEng)
  }

  return result
}

export const getFishHTMLCompletions = (amount: number = 3): CompletionItem[] => {
  const fishHtmlCompletion = new CompletionItem('рыбатег')
  fishHtmlCompletion.insertText = new SnippetString('<${1|p,span,div,strong,em,b,i|}${2}>' + getParagraph(3) + '</${1}>${0}')
  fishHtmlCompletion.documentation = new MarkdownString('Добавляет русский рыбный текст, но в HTML-теге `<p>`.')

  const fishHtmlCompletionEng = new CompletionItem('fishtag')
  fishHtmlCompletionEng.insertText = new SnippetString('<${1|p,span,div,strong,em,b,i|}${2}>' + getParagraph(3) + '</${1}>${0}')
  fishHtmlCompletionEng.documentation = new MarkdownString('Добавляет русский рыбный текст, но в HTML-теге `<p>`.\n\nАнглийский вариант сниппета.')

  let result = [ fishHtmlCompletion, fishHtmlCompletionEng ]

  for (let i = 1; i <= amount; i++) {
    let completion = new CompletionItem(`рыбатег${i}`)
    completion.insertText = new SnippetString('<${1|p,span,div,strong,em,b,i|}${2}>' + getParagraph(i) + '</${1}>${0}')
    completion.documentation = new MarkdownString(`Добавляет русский рыбный текст из ${i} предложений, но в HTML-теге \`<p>\`.`)

    let completionEng = new CompletionItem(`fishtag${i}`)
    completionEng.insertText = new SnippetString('<${1|p,span,div,strong,em,b,i|}${2}>' + getParagraph(i) + '</${1}>${0}')
    completionEng.documentation = new MarkdownString(`Добавляет русский рыбный текст из ${i} предложений, но в HTML-теге \`<p>\`.\n\nАнглийский вариант сниппета.`)

    result.push(completion, completionEng)
  }

  return result
}

export const getFishJadeCompletions = (amount: number = 3): CompletionItem[] => {
  const fishJadeCompletion = new CompletionItem('рыбатег')
  fishJadeCompletion.insertText = new SnippetString('${1|p,span,div,strong,em,b,i|} ' + getParagraph(3) + '${0}')
  fishJadeCompletion.documentation = new MarkdownString('Добавляет русский рыбный текст, но в HTML-теге `<p>`.')

  const fishJadeCompletionEng = new CompletionItem('fishtag')
  fishJadeCompletionEng.insertText = new SnippetString('${1|p,span,div,strong,em,b,i|} ' + getParagraph(3) + '${0}')
  fishJadeCompletionEng.documentation = new MarkdownString('Добавляет русский рыбный текст, но в HTML-теге `<p>`.\n\nАнглийский вариант сниппета.')

  let result = [ fishJadeCompletion, fishJadeCompletionEng ]

  for (let i = 1; i <= amount; i++) {
    let completion = new CompletionItem(`рыбатег${i}`)
    completion.insertText = new SnippetString('${1|p,span,div,strong,em,b,i|} ' + getParagraph(i) + '${0}')
    completion.documentation = new MarkdownString(`Добавляет русский рыбный текст из ${i} предложений, но в HTML-теге \`<p>\`.`)

    let completionEng = new CompletionItem(`fishtag${i}`)
    completionEng.insertText = new SnippetString('${1|p,span,div,strong,em,b,i|} ' + getParagraph(i) + '${0}')
    completionEng.documentation = new MarkdownString(`Добавляет русский рыбный текст из ${i} предложений, но в HTML-теге \`<p>\`.\n\nАнглийский вариант сниппета.`)

    result.push(completion, completionEng)
  }

  return result
}
