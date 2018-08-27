import * as vsc from 'vscode'
import { CompletionItemBuilder } from '../completionItemBuilder'
import { BaseExpressionTemplate } from './baseTemplates'
import { getIndentCharacters } from '../utils'

export class TypeTemplate extends BaseExpressionTemplate {
  constructor (private keyword: string) {
    super()
  }

  buildCompletionItem (code: string, position: vsc.Position) {
    return CompletionItemBuilder
      .create(this.keyword, code)
      .description(`type expr ${this.keyword}`)
      .replace(`type {{expr}} ${this.keyword} {\n${getIndentCharacters()}\${0}\n}`, position, true)
      .build()
  }
}

export const build = () => [
  new TypeTemplate('struct'),
  new TypeTemplate('interface')
]
