import {fishTextCompletionFactory} from './get-completions-factory'

export const getFishTextCompletions = fishTextCompletionFactory({
  prefix: {
    ru: 'рыба',
    en: 'fish',
  },
  documentation: {
    ru: 'Добавляет русский рыбный текст.',
    en: 'Добавляет русский рыбный текст.\n\nАнглийский вариант сниппета.',
  },
  documentationVariants: {
    ru: 'Добавляет русский рыбный текст из {i} предложений.',
    en: 'Добавляет русский рыбный текст из {i} предложений.\n\nАнглийский вариант сниппета.',
  }
})

export const getFishHTMLCompletions = fishTextCompletionFactory({
  prefix: {
    ru: 'рыбатег',
    en: 'fishtag',
  },
  documentation: {
    ru: 'Добавляет русский рыбный текст, но в HTML-теге `<p>`.',
    en: 'Добавляет русский рыбный текст, но в HTML-теге `<p>`.\n\nАнглийский вариант сниппета.',
  },
  documentationVariants: {
    ru: 'Добавляет русский рыбный текст из {i} предложений, но в HTML-теге `<p>`.',
    en: 'Добавляет русский рыбный текст из {i} предложений, но в HTML-теге `<p>`.\n\nАнглийский вариант сниппета.',
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
    ru: 'Добавляет русский рыбный текст, но в HTML-теге `<p>`.',
    en: 'Добавляет русский рыбный текст, но в HTML-теге `<p>`.\n\nАнглийский вариант сниппета.',
  },
  documentationVariants: {
    ru: 'Добавляет русский рыбный текст из {i} предложений, но в HTML-теге `<p>`.',
    en: 'Добавляет русский рыбный текст из {i} предложений, но в HTML-теге `<p>`.\n\nАнглийский вариант сниппета.',
  },
  beforeText: '${1|p,span,div,strong,em,b,i|} ',
  afterText: '${0}',
})
