import * as vsc from 'vscode'

export interface IPostfixTemplate {
  buildCompletionItem(code: string, position: vsc.Position, suffix: string): vsc.CompletionItem

  canUse(code: string): boolean
}