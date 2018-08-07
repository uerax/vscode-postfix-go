import * as vsc from 'vscode'
import { CompletionItemBuilder } from '../completionItemBuilder'
import { BaseExpressionTemplate } from './baseTemplates'

export class LenTemplate extends BaseExpressionTemplate {
  buildCompletionItem (code: string, position: vsc.Position) {
    return CompletionItemBuilder
      .create('len', code)
      .description(`len(expr)`)
      .replace(`len({{expr}})`, position, true)
      .build()
  }
}

export const build = () => new LenTemplate()
