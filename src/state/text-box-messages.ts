import { create } from 'zustand'

interface TextBoxMessagesState {
  messages: string[]
  addMessage: (msg: string) => void
  removeMessage: (msg: string) => void
}

export const useTextBoxMessagesStore = create<TextBoxMessagesState>((set) => ({
  messages: [],
  addMessage: (msg: string) =>
    set(({ messages }) => {
      return { messages: [...messages, msg] }
    }),
  removeMessage: (msg: string) =>
    set(({ messages }) => {
      const index = messages.findIndex((message) => message === msg)
      messages.splice(index, 1)

      return { messages }
    }),
}))
