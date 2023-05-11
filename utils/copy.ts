/**
 * 复制文本
 * @param text
 */
export function copy(text: string) {
    if (navigator.clipboard) {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                alert('已复制到剪贴板！')
            })
            .catch(err => {
                console.error('复制失败：', err)
            })
    } else {
        const input = document.createElement('input')
        input.value = text
        document.body.appendChild(input)
        input.select()
        if (document.execCommand('copy')) {
            document.execCommand('copy')
            alert('已复制到剪贴板！')
        }
        document.body.removeChild(input)
    }
}
