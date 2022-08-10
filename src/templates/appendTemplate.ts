import * as vsc from 'vscode'
import { CompletionItemBuilder } from '../completionItemBuilder'
import { BaseExpressionTemplate } from './baseTemplates'

export class AppendTemplate extends BaseExpressionTemplate {
  buildCompletionItem(code: string, position: vsc.Position) {
    return CompletionItemBuilder
      .create('append', code)
      .description(`expr = append(expr, ...)`)
      .replace(`{{expr}} = append({{expr}}, \${0:element})`, position, true)
      .build()
  }
}

// vscode golang插件原生支持
// export const build = () => new AppendTemplate()
