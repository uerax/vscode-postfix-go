import * as vsc from 'vscode'
import { CompletionItemBuilder } from '../completionItemBuilder'
import { BaseExpressionTemplate } from './baseTemplates'

export class PrintTemplate extends BaseExpressionTemplate {
  buildCompletionItem (code: string, position: vsc.Position) {
    return CompletionItemBuilder
      .create('print', code)
      .description(`fmt.Println(expr)`)
      .replace(`fmt.Println(\${0:{{expr}}})`, position, true)
      .build()
  }
}

export class PrintfTemplate extends BaseExpressionTemplate {
  buildCompletionItem (code: string, position: vsc.Position) {
    return CompletionItemBuilder
      .create('printf', code)
      .description(`fmt.Printf("%+v'\\n", expr)`)
      .replace(`fmt.Printf("%+v\\n", \${0:{{expr}}})`, position, true)
      .build()
  }
}

export const build = () => [
  new PrintTemplate(),
  new PrintfTemplate()
]
