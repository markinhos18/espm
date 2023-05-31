import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Empty from '.'

const props = {
  title: 'A simple titile',
  description: 'A simple description'
}

describe('<Empty />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Empty {...props} hasLink />)

    expect(
      screen.getByRole('image', {
        name: /course not found/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /a simple title/i })
    ).toBeInTheDocument()

    expect(screen.getByAltText(/a simple description/i)).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /go back to store/i })
    ).toHaveAttribute('href', '/')

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should not render link when haslink is not passed', () => {
    renderWithTheme(<Empty {...props} />)

    expect(
      screen.queryByRole('link', { name: /go back to store/i })
    ).not.toBeInTheDocument()
  })
})
