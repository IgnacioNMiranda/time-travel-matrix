import { useEffect } from 'react'
import { useTextBoxMessagesStore } from '../state/text-box-messages'

export const TextBox = () => {
  const { messages, addMessage, removeMessage } = useTextBoxMessagesStore()

  useEffect(() => {
    const initialMessage = 'Enjoy your adventure travelling through space-time!'
    addMessage(initialMessage)
    setTimeout(() => {
      removeMessage(initialMessage)
    }, 4000)
  }, [addMessage, removeMessage])

  return (
    <section
      className="absolute left-0 bottom-0 mb-12 ml-12 w-108 h-40 flex flex-col justify-end items-end px-5 py-6 text-white uppercase text-lg"
      style={{
        background: `url('/images/text-box/text-box-1.png')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      }}
    >
      {messages.map((msg, idx) => (
        <span key={`msg-${idx}`}>{msg}</span>
      ))}
    </section>
  )
}
