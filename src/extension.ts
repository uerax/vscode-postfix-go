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

  let documentSelector: vsc.DocumentSelector = {scheme: 'file', language: 'go'}
  completionProvider = vsc.languages.registerCompletionItemProvider(documentSelector, provider, '.')
  context.subscriptions.push(completionProvider)
}
