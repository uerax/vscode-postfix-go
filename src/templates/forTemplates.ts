import * as vsc from 'vscode'
import { CompletionItemBuilder } from '../completionItemBuilder'
import { BaseExpressionTemplate, BaseTemplate } from './baseTemplates'
import { getIndentCharacters } from '../utils'

abstract class BaseForTemplate extends BaseTemplate {
  abstract buildCompletionItem (code: string, position: vsc.Position, suffix: string)

  canUse (code: string): boolean {
    return true
  }
}

export class ForTemplate extends BaseForTemplate {
  buildCompletionItem (code: string, position: vsc.Position) {
    return CompletionItemBuilder
      .create('for', code)
      .description('for index, element := range objects')
      .replace(`for \${1:index}, \${2:element} := range {{expr}} {\n${getIndentCharacters()}\${0}\n}`, position, true)
      .build()
  }
}

export const build = () => [
  new ForTemplate()
]
