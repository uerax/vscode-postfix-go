import * as vsc from 'vscode'
import { CompletionItemBuilder } from '../completionItemBuilder'
import { BaseExpressionTemplate } from './baseTemplates'
import { getIndentCharacters } from '../utils'

export class IfTemplate extends BaseExpressionTemplate {
  buildCompletionItem (code: string, position: vsc.Position) {
    return CompletionItemBuilder
      .create('if', code)
      .description(`if expr`)
      .replace(`if {{expr}} {\n${getIndentCharacters()}\${0}\n}`, position, true)
      .build()
  }
}

export class ElseTemplate extends BaseExpressionTemplate {
  buildCompletionItem (code: string, position: vsc.Position) {
    let replacement = '{{expr}}'

    return CompletionItemBuilder
      .create('else', code)
      .description(`if (!expr)`)
      .replace(`if !${replacement} {\n${getIndentCharacters()}\${0}\n}`, position, true)
      .build()
  }
}

export class IfEqualityTemplate extends BaseExpressionTemplate {
  constructor (private keyword: string, private operator: string, private operand: string) {
    super()
  }

  buildCompletionItem (code: string, position: vsc.Position) {
    return CompletionItemBuilder
      .create(this.keyword, code)
      .description(`if expr ${this.operator} ${this.operand}`)
      .replace(`if {{expr}} ${this.operator} ${this.operand} {\n${getIndentCharacters()}\${0}\n}`, position, true)
      .build()
  }
}

export class ExistTemplate extends BaseExpressionTemplate {
  buildCompletionItem (code: string, position: vsc.Position) {
    return CompletionItemBuilder
      .create('exist', code)
      .description(`if v, ok := expr; !ok {}`)
      .replace(`if v, ok := {{expr}}; !ok {\n${getIndentCharacters()}\${0}\n}`, position, true)
      .build()
  }
}

export const build = () => [
  new IfTemplate(),
  new ElseTemplate(),
  new IfEqualityTemplate('nil', '==', 'nil'),
  new IfEqualityTemplate('notnil', '!=', 'nil'),
  new ExistTemplate()
]
