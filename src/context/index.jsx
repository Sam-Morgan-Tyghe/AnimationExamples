import React from 'react'

import { ToastProvider } from './ToastProvider'

function ProviderComposer({ contexts, children }) {
  return contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids,
      }),
    children,
  )
}

function AppProvider({ children }) {
  return (
    <ProviderComposer contexts={[<ToastProvider key="toast" />]}>
      {children}
    </ProviderComposer>
  )
}

export { AppProvider }
