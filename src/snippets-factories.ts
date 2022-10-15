import { CompletionItem, SnippetString, MarkdownString } from 'vscode'
import { getParagraph } from 'speech-code'
import { IFishTextCompletionMetadata, TFishTextCompletionFactory } from './model'
import { getConfig, Setting } from './config'

export const fishTextCompletionFactory = (metadata: IFishTextCompletionMetadata): TFishTextCompletionFactory => {
  const { prefix, documentation, documentationVariants, beforeText = '', afterText = '' } = metadata
  const config = getConfig()
  const isEnglishSnippetEnabled = config.get(Setting.IS_ENGLISH_SNIPPET_ENABLED) ?? false
  const isEnglishTextEnabled = config.get(Setting.IS_ENGLISH_TEXT_ENABLED) ?? false
  const englishSnippetTextLanguage = isEnglishTextEnabled ? 'en' : 'ru'

  return (amount = 3) => {
    const completionItem = new CompletionItem(prefix.ru)
    completionItem.insertText = new SnippetString(`${beforeText}${getParagraph(3, 'ru')}${afterText}`)
    if (documentation?.ru) {
      completionItem.documentation = new MarkdownString(documentation.ru)
    }

    const result = [completionItem]

    if (isEnglishSnippetEnabled) {
      const completionItemEng = new CompletionItem(prefix.en)
      completionItemEng.insertText = new SnippetString(
        `${beforeText}${getParagraph(3, englishSnippetTextLanguage)}${afterText}`
      )
      if (documentation?.en) {
        completionItemEng.documentation = new MarkdownString(documentation.en)
      }

      result.push(completionItemEng)
    }

    for (let i = 1; i <= amount; i++) {
      let completion = new CompletionItem(`${prefix.ru}${i}`)
      completion.insertText = new SnippetString(`${beforeText}${getParagraph(i, 'ru')}${afterText}`)
      if (documentationVariants?.ru) {
        completion.documentation = new MarkdownString(documentationVariants.ru.replace('{i}', i.toString()))
      }
      result.push(completion)

      if (isEnglishSnippetEnabled) {
        let completionEng = new CompletionItem(`${prefix.en}${i}`)
        completionEng.insertText = new SnippetString(
          `${beforeText}${getParagraph(i, englishSnippetTextLanguage)}${afterText}`
        )
        if (documentationVariants?.en) {
          completionEng.documentation = new MarkdownString(documentationVariants.en.replace('{i}', i.toString()))
        }
        result.push(completionEng)
      }
    }

    return result
  }
}
