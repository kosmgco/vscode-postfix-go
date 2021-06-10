import * as vsc from 'vscode'
import { CompletionItemBuilder } from '../completionItemBuilder'
import { BaseExpressionTemplate } from './baseTemplates'

export class DTemplate extends BaseExpressionTemplate {
  buildCompletionItem(code: string, position: vsc.Position) {
    return CompletionItemBuilder
      .create('d', code)
      .description(`*expr`)
      .replace(`*\${0:{{expr}}}`, position, true)
      .build()
  }
}

export class PTemplate extends BaseExpressionTemplate {
  buildCompletionItem(code: string, position: vsc.Position) {
    return CompletionItemBuilder
      .create('p', code)
      .description(`&expr`)
      .replace(`&\${0:{{expr}}}`, position, true)
      .build()
  }
}

export const build = () => [
  new DTemplate(),
  new PTemplate()
]
