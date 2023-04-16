import { useState } from 'react'
import SVG from '~/components/SVG'

import attentionLogo from '../assets/attention.png'
import hedgehogLogo from '../assets/logo.svg'
import './DummyButton.css'

type DummybuttonProps = {
  buttonText: string
}

const DummyButton = ({ buttonText }: DummybuttonProps) => {
  const [counter, setCounter] = useState(0)

  return (
    <button
      onClick={() => {
        setCounter(c => c + 1)
      }}
    >
      {`${buttonText} ${counter}`}
      <SVG alt="" src={hedgehogLogo} />
      <SVG alt="" src={attentionLogo} />
    </button>
  )
}

export default DummyButton
