import { render, screen } from '@testing-library/react'
import { Button } from './button.component'
import userEvent from '@testing-library/user-event'

const btnText = 'Primary Button'

test('renders a button with the correct text', () => {
  render(<Button text={btnText} />)
  const linkElement = screen.getByText(btnText)
  expect(linkElement).toBeInTheDocument()
})

test('fires the correct function on click', () => {
  const onChange = jest.fn()
  render(<Button text={btnText} clickFunction={onChange} />)
  userEvent.click(screen.getByText(btnText))
  expect(onChange).toHaveBeenCalledTimes(1)
})
