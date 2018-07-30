import * as vsc from 'vscode'
import { CompletionItemBuilder } from '../completionItemBuilder'
import { BaseExpressionTemplate } from './baseTemplates'

export class VarTemplate extends BaseExpressionTemplate {
  constructor () {
    super()
  }

  buildCompletionItem (code: string, position: vsc.Position) {
    return CompletionItemBuilder
      .create("var", code)
      .description(`name := expr`)
      .replace('${1:name} := {{expr}}$0', position, true)
      .build()
  }
}

export class ConstTemplate extends BaseExpressionTemplate {
  constructor () {
    super()
  }

  buildCompletionItem (code: string, position: vsc.Position) {
    return CompletionItemBuilder
      .create("const", code)
      .description(`const name type = expr`)
      .replace('const ${1:name} ${2:Type} = {{expr}}$0', position, true)
      .build()
  }
}

export const build = () => [
  new VarTemplate(),
  new ConstTemplate()
]
