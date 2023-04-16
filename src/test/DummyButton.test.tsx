import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import DummyButton from '../test/DummyButton'

test('should render button text', () => {
  render(<DummyButton buttonText="Sample" />)

  expect(screen.getByRole('button', { name: /Sample/ })).toBeInTheDocument()
})
test('counter should increment by 1 after clicking button', async () => {
  const user = userEvent.setup()
  render(<DummyButton buttonText="Sample" />)

  expect(screen.getByText(/Sample 0/)).toBeInTheDocument()

  await user.click(screen.getByRole('button'))
  expect(screen.getByText(/Sample 1/)).toBeInTheDocument()
})
