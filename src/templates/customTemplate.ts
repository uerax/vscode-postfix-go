import { BaseTemplate } from './baseTemplates'
import { Position } from 'vscode'
import { CompletionItemBuilder } from '../completionItemBuilder'

export class CustomTemplate extends BaseTemplate {
  constructor (private name: string, private description: string, private body: string, private conditions: string[]) {
    super()
  }

  buildCompletionItem (code: string, position: Position, suffix: string) {
    return CompletionItemBuilder
      .create(this.name, code + suffix)
      .description(this.description)
      .replace(this.body, position, true)
      .build()
  }

  canUse (code: string): boolean {
    return true
  }
}
