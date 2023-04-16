import { useDisclosure } from '@chakra-ui/react'
import { createContext, useState } from 'react'

import Toast from '../components/Toast'

export const ToastContext = createContext({
  isOpen: false,
  onToggle: () => {},
  setToast: () => {},
})

const delay = ms => new Promise(res => setTimeout(res, ms))

export const ToastProvider = ({ children }) => {
  const { isOpen, onToggle, onClose } = useDisclosure()
  const [message, setMessage] = useState({ text: '', type: '' })

  const setToast = async (text, type) => {
    setMessage({ text, type })
    onToggle(true)
    await delay(3000)
    onClose()
  }

  const { Provider } = ToastContext

  return (
    <Provider value={{ isOpen, setToast }}>
      <Toast isOpen={isOpen} message={message} />
      {children}
    </Provider>
  )
}
