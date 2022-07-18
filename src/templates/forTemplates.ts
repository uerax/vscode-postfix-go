/*
 * @Author: UerAx
 * @Date: 2022-07-15 19:22:21
 * @FilePath: \vscode-postfix-go\src\templates\forTemplates.ts
 * Copyright (c) 2022 by UerAx uerax@live.com, All Rights Reserved. 
 */
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
      .description('for _, v := range objects')
      .replace(`for _, v := range {{expr}} {\n${getIndentCharacters()}\${0}\n}`, position, true)
      .build()
  }
}
export class ForiTemplate extends BaseForTemplate {
  buildCompletionItem (code: string, position: vsc.Position) {
    return CompletionItemBuilder
      .create('fori', code)
      .description('for i := 0; i < len(objects); i++')
      .replace(`for i := 0; i < len({{expr}}); i++ {\n${getIndentCharacters()}\${0}\n}`, position, true)
      .build()
  }
}
export class ForTemplate extends BaseForTemplate {
  buildCompletionItem (code: string, position: vsc.Position) {
    return CompletionItemBuilder
      .create('for', code)
      .description('for k, v := range objects')
      .replace(`for k, v := range {{expr}} {\n${getIndentCharacters()}\${0}\n}`, position, true)
      .build()
  }
}

export class ForjTemplate extends BaseForTemplate {
  buildCompletionItem (code: string, position: vsc.Position) {
    return CompletionItemBuilder
      .create('forj', code)
      .description('for i := len(objects) - 1; i >= 0; i--')
      .replace(`for i := len({{expr}}) - 1; i >= 0 ; i-- {\n${getIndentCharacters()}\${0}\n}`, position, true)
      .build()
  }
}

export const build = () => [
  new ForTemplate(),
  new ForrTemplate(),
  new ForiTemplate(),
  new ForjTemplate()
]
