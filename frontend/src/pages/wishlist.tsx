import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'

import cursosMock from 'components/GameCardSlider/mock'
import HighlightMock from 'components/Highlight/mock'

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      cursos: cursosMock,
      recommendedCursos: cursosMock.slice(0, 5),
      recommendedHighlight: HighlightMock
    }
  }
}
