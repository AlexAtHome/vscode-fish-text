import { fishTextCompletionFactory } from './snippets-factories'

export const getFishTextCompletions = fishTextCompletionFactory({
  prefix: {
    ru: 'рыба',
    en: 'fish',
  },
  documentation: {
    ru: 'Adds a Russian text.',
    en: 'Adds an English text.',
  },
  documentationVariants: {
    ru: 'Adds {i} sentences in Russian.',
    en: 'Adds {i} sentences in English.',
  },
})

export const getFishHTMLCompletions = fishTextCompletionFactory({
  prefix: {
    ru: 'рыбатег',
    en: 'fishtag',
  },
  documentation: {
    ru: 'Adds a Russian text wrapped in HTML tag `<p>`.',
    en: 'Adds an English text wrapped in HTML tag `<p>`.',
  },
  documentationVariants: {
    ru: 'Adds a Russian text out of {i} sentences wrapped in HTML tag `<p>`.',
    en: 'Adds an English text out of {i} sentences wrapped in HTML tag `<p>`.',
  },
  beforeText: '<${1|p,span,div,strong,em,b,i|}${2}>',
  afterText: '</${1}>${0}',
})

export const getFishJadeCompletions = fishTextCompletionFactory({
  prefix: {
    ru: 'рыбатег',
    en: 'fishtag',
  },
  documentation: {
    ru: 'Adds a Russian text wrapped in HTML tag `<p>`.',
    en: 'Adds an English text wrapped in HTML tag `<p>`.',
  },
  documentationVariants: {
    ru: 'Adds a Russian text out of {i} sentences wrapped in HTML tag `<p>`.',
    en: 'Adds an English text out of {i} sentences wrapped in HTML tag `<p>`.',
  },
  beforeText: '${1|p,span,div,strong,em,b,i|} ',
  afterText: '${0}',
})
