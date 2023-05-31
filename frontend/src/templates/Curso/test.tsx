import { screen } from '@testing-library/react'

import cursoInfoMock from 'components/GameInfo/mock'
import galleryMock from 'components/Gallery/mock'
import cursoMock from 'components/GameCardSlider/mock'
import HighlightMock from 'components/Highlight/mock'
import cursoDetailsMock from 'components/GameDetails/mock'
// import textContentMock from 'components/TextContent/mock'

import Curso, { CursoTemplateProps } from '.'
import { GameDetailsProps } from 'components/GameDetails'
import { renderWithTheme } from 'utils/tests/helpers'

const props: CursoTemplateProps = {
  cover: 'bg-image.jpg',
  gameInfo: cursoInfoMock,
  gallery: galleryMock,
  description: `<h1>Custom HTML</h1>`,
  details: cursoDetailsMock as GameDetailsProps,
  upcommingCursos: cursoMock,
  upcommingHighlight: HighlightMock,
  recommendedCursos: cursoMock
}

jest.mock('components/Menu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Menu" />
  }
}))

jest.mock('components/Gallery', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Gallery" />
  }
}))

jest.mock('components/GameDetails', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock GameDetails" />
  }
}))

jest.mock('components/GameInfo', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock GameInfo" />
  }
}))

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />
  }
}))

describe('<Curso />', () => {
  it('should render the template with components', () => {
    renderWithTheme(<Curso {...props} />)
    expect(screen.getByTestId('Mock Gallery')).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameDetails')).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameInfo')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(2)
    expect(screen.getByText(/custom html/i)).toBeInTheDocument()
  })

  it('should not render the gallery if no images', () => {
    renderWithTheme(<Curso {...props} gallery={undefined} />)
    expect(screen.queryByTestId('Mock Gallery')).not.toBeInTheDocument()
  })

  it('should not render the gallery on mobile', () => {
    renderWithTheme(<Curso {...props} />)
    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyle({
      display: 'none'
    })

    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyleRule(
      'display',
      'block',
      {
        media: '(min-width: 768px)'
      }
    )
  })

  it('should render the cover image', () => {
    renderWithTheme(<Curso {...props} />)

    const cover = screen.getByRole('image', { name: /cover/i })
    expect(cover).toHaveStyle({
      backgroundImage: 'url(bg-image.jpg)',
      height: '39.5rem'
    })

    expect(cover).toHaveStyleRule('height', '39.5rem', {
      media: '(min-width: 768px)'
    })

    expect(cover).toHaveStyleRule(
      'clip-path',
      'polygon(0 0, 100% 0, 100% 100%, 0 85%)',
      {
        media: '(min-width: 768px)'
      }
    )
  })
})
