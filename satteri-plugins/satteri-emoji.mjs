import * as emoji from 'node-emoji'

export function satteriEmoji() {
  return {
    name: 'satteri-emoji',
    text(node, ctx) {
      if (node.value && node.value.includes(':')) {
        const emojified = emoji.emojify(node.value)
        if (emojified !== node.value) {
          ctx.setProperty(node, 'value', emojified)
        }
      }
    }
  }
}
