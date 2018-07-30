import * as vsc from 'vscode'
import { IPostfixTemplate } from '../template'

export abstract class BaseTemplate implements IPostfixTemplate {
  abstract buildCompletionItem (code: string, position: vsc.Position, suffix: string)
  abstract canUse (code: string): boolean
}

export abstract class BaseExpressionTemplate extends BaseTemplate {
  abstract buildCompletionItem (code: string, position: vsc.Position)

  canUse (code: string) {
    // TODO: Parse code
    return true
  }
}
