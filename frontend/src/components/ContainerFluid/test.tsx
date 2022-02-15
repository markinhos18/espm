import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'
import { ContainerFluid } from '.'

describe('<ContainerFluid />', () => {
  it('should render the heading', () => {
    const { containerfluid } = renderWithTheme(
      <ContainerFluid>
        <span>ESPM</span>
      </ContainerFluid>
    )

    expect(containerfluid.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.containerfluid
    )

    expect(containerfluid.firstChild).toMatchInlineSnapshot(`
      .c0 {
        max-width: 140rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: calc(3.2rem / 2);
        padding-right: calc(3.2rem / 2);
      }
      <div
        class="c0"
      >
        <span>
          ESPM
        </span>
      </div>
    `)
  })
})
