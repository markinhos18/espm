import { Story, Meta } from '@storybook/react'
import CursoItem, { CursoItemProps } from '.'

export default {
  title: 'CursoItem',
  component: CursoItem,
  args: {
    img: 'https://img.imageboss.me/revista-cdn/cdn/41144/4651d2a2d188dadf1fa0af405f0f722a25517843.jpg?1660153136',
    title: 'Engenharia de Software',
    price: 'R$ 215,00'
  }
} as Meta

export const Default: Story<CursoItemProps> = (args) => <CursoItem {...args} />

export const WithPayment: Story<CursoItemProps> = (args) => (
  <CursoItem {...args} />
)

WithPayment.args = {
  downloadLink: 'https://espm.com/curso/download/teste344'
}
