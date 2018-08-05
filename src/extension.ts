'use strict'
import * as vsc from 'vscode'
import { PostfixCompletionProvider } from './postfixCompletionProvider'

let completionProvider: vsc.Disposable

export function activate (context: vsc.ExtensionContext) {
  registerCompletionProvider(context)

  context.subscriptions.push(vsc.workspace.onDidChangeConfiguration(() => {
    if (completionProvider) {
      let idx = context.subscriptions.indexOf(completionProvider)
      context.subscriptions.splice(idx, 1)
      completionProvider.dispose()
    }

    registerCompletionProvider(context)
  }))
}

// tslint:disable-next-line:no-empty
export function deactivate () {
}

function registerCompletionProvider (context: vsc.ExtensionContext) {
  const provider = new PostfixCompletionProvider()

  let DOCUMENT_SELECTOR: vsc.DocumentSelector =
    process.env.NODE_ENV === 'test' ? 'postfixGo' : vsc.workspace.getConfiguration('postfixGo').get('languages')

  completionProvider = vsc.languages.registerCompletionItemProvider(DOCUMENT_SELECTOR, provider, '.')
  context.subscriptions.push(completionProvider)
}
