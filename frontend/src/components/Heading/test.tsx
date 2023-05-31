import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Heading from '.'
describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>ESPM</Heading>)
    expect(screen.getByRole('heading', { name: /espm/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })
  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">ESPM</Heading>)
    expect(screen.getByRole('heading', { name: /espm/i })).toHaveStyle({
      color: '#030517'
    })
  })
  it('should render a heading with a line to the left side', () => {
    renderWithTheme(<Heading lineLeft>ESPM</Heading>)
    expect(screen.getByRole('heading', { name: /espm/i })).toHaveStyle({
      'border-left': '0.7rem solid #F231A5'
    })
  })

  it('should render a heading with a line at the bottom', () => {
    renderWithTheme(<Heading lineBottom>ESPM</Heading>)
    expect(screen.getByRole('heading', { name: /espm/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">ESPM</Heading>)
    expect(screen.getByRole('heading', { name: /espm/i })).toHaveStyle({
      'font-size': '1.6rem'
    })

    expect(screen.getByRole('heading', { name: /espm/i })).toHaveStyleRule(
      'width',
      '3rem',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a heading with a huge size', () => {
    renderWithTheme(<Heading size="huge">ESPM</Heading>)

    expect(screen.getByRole('heading', { name: /espm/i })).toHaveStyle({
      'font-size': '5.2rem'
    })
  })

  it('should render a Heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #F231A5' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    })
  })

  it('should render a Heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #3CD3C1' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after'
    })
  })
})
