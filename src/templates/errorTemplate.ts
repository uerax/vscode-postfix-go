import * as vsc from 'vscode'
import { CompletionItemBuilder } from '../completionItemBuilder'
import { BaseExpressionTemplate } from './baseTemplates'

export class ErrorTemplate extends BaseExpressionTemplate {
  buildCompletionItem (code: string, position: vsc.Position) {
    return CompletionItemBuilder
      .create('error', code)
      .description(`errors.New("expr")`)
      .replace(`errors.New({{expr}})`, position, true)
      .build()
  }
}

export const build = () => new ErrorTemplate()
