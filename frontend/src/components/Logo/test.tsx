import { render, screen } from '@testing-library/react'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the heading', () => {
    // renderizar o componente `render`
    const { container } = render(<Logo />)
    // selecionar o elemento a ser testado `screen` (queries) - getByLabel ...
    expect(screen.getByRole('heading', { name: /Logo/i })).toBeInTheDocument()
    // expect - assertion - asserção - comparação - análise (espero que renderize a logo branca)
    expect(container.firstChild).toMatchSnapshot()
  })
})
