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

export class ForrTemplate extends BaseForTemplate {
  buildCompletionItem (code: string, position: vsc.Position) {
    return CompletionItemBuilder
      .create('forr', code)
      .description('for index := range objects')
      .replace(`for \${1:index} := range \${3:{{expr}}} {\n\${0}\n}`, position, true)
      .build()
  }
}
export class ForTemplate extends BaseForTemplate {
  buildCompletionItem (code: string, position: vsc.Position) {
    return CompletionItemBuilder
      .create('for', code)
      .description('for index, element := range objects')
      .replace(`for \${1:index}, \${2:element} := range \${3:{{expr}}} {\n\${0}\n}`, position, true)
      .build()
  }
}

export const build = () => [
  new ForTemplate(),
  new ForrTemplate()
]
