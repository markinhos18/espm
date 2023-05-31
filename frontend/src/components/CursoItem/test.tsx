import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CursoItem from '.'

const props = {
  img: 'https://img.imageboss.me/revista-cdn/cdn/41144/4651d2a2d188dadf1fa0af405f0f722a25517843.jpg?1660153136',
  title: 'Engenharia de Software',
  price: 'R$ 215,00'
}

describe('<CursoItem />', () => {
  it('should render the item', () => {
    renderWithTheme(<CursoItem {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByText('R$ 215,00')).toBeInTheDocument()
  })

  it('should render the item with download link', () => {
    const downloadLink = 'https://link'

    renderWithTheme(<CursoItem {...props} downloadLink={downloadLink} />)

    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` })
    ).toHaveAttribute('href', downloadLink)
  })
})
