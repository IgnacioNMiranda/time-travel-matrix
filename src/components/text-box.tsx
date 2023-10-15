import { useEffect } from 'react'
import { useTextBoxMessagesStore } from '../state/text-box-messages'

export const TextBox = () => {
  const { messages, addMessage, removeMessage } = useTextBoxMessagesStore()

  useEffect(() => {
    const initialMessage = 'Disfruta tu aventura viajando por el espacio-tiempo!'
    addMessage(initialMessage)
    setTimeout(() => {
      removeMessage(initialMessage)
    }, 4000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section
      className="absolute left-0 bottom-0 mb-12 ml-12 w-108 h-40 flex flex-col justify-end items-end px-5 py-6 text-white uppercase"
      style={{
        background: `url('/background-text-box.png')`,
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
