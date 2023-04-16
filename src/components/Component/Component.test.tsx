import { render, screen } from '@testing-library/react'

import Component from './'

describe('<Component />', () => {
  const props = {
    text: 'Your new web app here',
  }

  it('Snapshot', () => {
    render(<Component {...props} />)
    expect(screen.getByTestId('component')).toMatchSnapshot()
  })
})
