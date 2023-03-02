import { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'

export interface Article extends MarkdownParsedContent {
    keywords: string
    tags: string[]
    createTime: string
}
