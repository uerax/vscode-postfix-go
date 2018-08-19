import * as vsc from 'vscode'
import { CompletionItemBuilder } from '../completionItemBuilder'
import { BaseExpressionTemplate } from './baseTemplates'

export class LenTemplate extends BaseExpressionTemplate {
  buildCompletionItem (code: string, position: vsc.Position) {
    let codeBeforeDot = code.substr(0, position.character - 2)
    let lastComponent = getLastComponent(codeBeforeDot)

    let builder = CompletionItemBuilder
      .create('len', lastComponent)
      .description(`len(expr)`)
    builder.insertText("len(" + lastComponent + ")")
    builder.deleteTextBeforeCursor(position, lastComponent.length + 1)

    return builder.build()
  }
}

export const build = () => new LenTemplate()

function getLastComponent(input: string): string {
  if (input.length == 0) { return "" }
  var lastComponent = ""
  for(var i = 0; i < input.length; i++) {
      let character = input.substr(input.length - i - 1, 1)
      if (!character.match(/[a-zA-Z0-9\(\)\[\]\.]/)) {
          return lastComponent
      }
      
      lastComponent = character + lastComponent
  }
  return lastComponent;
}
