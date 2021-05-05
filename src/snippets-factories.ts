import { CompletionItem, SnippetString, MarkdownString } from 'vscode'
import { getParagraph } from 'speech-code'
import { IFishTextCompletionMetadata, TFishTextCompletionFactory } from './model'
import { getConfig, Setting } from './config'

export const fishTextCompletionFactory = (metadata: IFishTextCompletionMetadata): TFishTextCompletionFactory => {
  const { prefix, documentation, documentationVariants, beforeText = '', afterText = '' } = metadata
  const isEnglishEnabled = getConfig().get(Setting.IS_ENGLISH_ENABLED) ?? false

  return (amount = 3) => {
    const completionItem = new CompletionItem(prefix.ru)
    completionItem.insertText = new SnippetString(`${beforeText}${getParagraph(3)}${afterText}`)
    if (documentation?.ru) {
      completionItem.documentation = new MarkdownString(documentation.ru)
    }

    const result = [completionItem]

    if (isEnglishEnabled) {
      const completionItemEng = new CompletionItem(prefix.en)
      completionItemEng.insertText = new SnippetString(`${beforeText}${getParagraph(3)}${afterText}`)
      if (documentation?.en) {
        completionItemEng.documentation = new MarkdownString(documentation.en)
      }

      result.push(completionItemEng)
    }

    for (let i = 1; i <= amount; i++) {
      let completion = new CompletionItem(`${prefix.ru}${i}`)
      completion.insertText = new SnippetString(`${beforeText}${getParagraph(i)}${afterText}`)
      if (documentationVariants?.ru) {
        completion.documentation = new MarkdownString(documentationVariants.ru.replace('{i}', i.toString()))
      }
      result.push(completion)

      if (isEnglishEnabled) {
        let completionEng = new CompletionItem(`${prefix.en}${i}`)
        completionEng.insertText = new SnippetString(`${beforeText}${getParagraph(i)}${afterText}`)
        if (documentationVariants?.en) {
          completionEng.documentation = new MarkdownString(documentationVariants.en.replace('{i}', i.toString()))
        }
        result.push(completionEng)
      }
    }

    return result
  }
}
