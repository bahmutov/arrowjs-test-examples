import { reactive, html } from '@arrow-js/core'

const data = reactive({
  clicks: 0,
})

export const counter = html`
  <button @click="${() => data.clicks++}">
    Fired ${() => data.clicks} arrows
  </button>
`
