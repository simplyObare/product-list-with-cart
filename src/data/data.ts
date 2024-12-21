import thumb1 from '../assets/images/image-waffle-thumbnail.jpg'
import mob1 from '../assets/images/image-waffle-mobile.jpg'
import tab1 from '../assets/images/image-waffle-tablet.jpg'
import desk1 from '../assets/images/image-waffle-desktop.jpg'
import thumb2 from '../assets/images/image-creme-brulee-thumbnail.jpg'
import mob2 from '../assets/images/image-creme-brulee-mobile.jpg'
import tab2 from '../assets/images/image-creme-brulee-tablet.jpg'
import desk2 from '../assets/images/image-creme-brulee-desktop.jpg'
import thumb3 from '../assets/images/image-macaron-thumbnail.jpg'
import mob3 from '../assets/images/image-macaron-mobile.jpg'
import tab3 from '../assets/images/image-macaron-tablet.jpg'
import desk3 from '../assets/images/image-macaron-desktop.jpg'
import thumb4 from '../assets/images/image-tiramisu-thumbnail.jpg'
import mob4 from '../assets/images/image-tiramisu-mobile.jpg'
import tab4 from '../assets/images/image-tiramisu-tablet.jpg'
import desk4 from '../assets/images/image-tiramisu-desktop.jpg'
import thumb5 from '../assets/images/image-baklava-thumbnail.jpg'
import mob5 from '../assets/images/image-baklava-mobile.jpg'
import tab5 from '../assets/images/image-baklava-tablet.jpg'
import desk5 from '../assets/images/image-baklava-desktop.jpg'
import thumb6 from '../assets/images/image-meringue-thumbnail.jpg'
import mob6 from '../assets/images/image-meringue-mobile.jpg'
import tab6 from '../assets/images/image-meringue-tablet.jpg'
import desk6 from '../assets/images/image-meringue-desktop.jpg'
import thumb7 from '../assets/images/image-cake-thumbnail.jpg'
import mob7 from '../assets/images/image-cake-mobile.jpg'
import tab7 from '../assets/images/image-cake-tablet.jpg'
import desk7 from '../assets/images/image-cake-desktop.jpg'
import thumb8 from '../assets/images/image-brownie-thumbnail.jpg'
import mob8 from '../assets/images/image-brownie-mobile.jpg'
import tab8 from '../assets/images/image-brownie-tablet.jpg'
import desk8 from '../assets/images/image-brownie-desktop.jpg'
import thumb9 from '../assets/images/image-panna-cotta-thumbnail.jpg'
import mob9 from '../assets/images/image-panna-cotta-mobile.jpg'
import tab9 from '../assets/images/image-panna-cotta-tablet.jpg'
import desk9 from '../assets/images/image-panna-cotta-desktop.jpg'

export interface DessertInterface {
  id: number
  image: {
    thumbnail: string
    mobile: string
    tablet: string
    desktop: string
  }
  name: string
  category: string
  price: number
}

export const desserts: DessertInterface[] = [
  {
    id: 1,
    image: {
      thumbnail: thumb1,
      mobile: mob1,
      tablet: tab1,
      desktop: desk1,
    },
    name: 'Waffle with Berries',
    category: 'Waffle',
    price: 6.5,
  },
  {
    id: 2,
    image: {
      thumbnail: thumb2,
      mobile: mob2,
      tablet: tab2,
      desktop: desk2,
    },
    name: 'Vanilla Bean Crème Brûlée',
    category: 'Crème Brûlée',
    price: 7.0,
  },
  {
    id: 3,
    image: {
      thumbnail: thumb3,
      mobile: mob3,
      tablet: tab3,
      desktop: desk3,
    },
    name: 'Macaron Mix of Five',
    category: 'Macaron',
    price: 8.0,
  },
  {
    id: 4,
    image: {
      thumbnail: thumb4,
      mobile: mob4,
      tablet: tab4,
      desktop: desk4,
    },
    name: 'Classic Tiramisu',
    category: 'Tiramisu',
    price: 5.5,
  },
  {
    id: 5,
    image: {
      thumbnail: thumb5,
      mobile: mob5,
      tablet: tab5,
      desktop: desk5,
    },
    name: 'Pistachio Baklava',
    category: 'Baklava',
    price: 4.0,
  },
  {
    id: 6,
    image: {
      thumbnail: thumb6,
      mobile: mob6,
      tablet: tab6,
      desktop: desk6,
    },
    name: 'Lemon Meringue Pie',
    category: 'Pie',
    price: 5.0,
  },
  {
    id: 7,
    image: {
      thumbnail: thumb7,
      mobile: mob7,
      tablet: tab7,
      desktop: desk7,
    },
    name: 'Red Velvet Cake',
    category: 'Cake',
    price: 4.5,
  },
  {
    id: 8,
    image: {
      thumbnail: thumb8,
      mobile: mob8,
      tablet: tab8,
      desktop: desk8,
    },
    name: 'Salted Caramel Brownie',
    category: 'Brownie',
    price: 4.5,
  },
  {
    id: 9,
    image: {
      thumbnail: thumb9,
      mobile: mob9,
      tablet: tab9,
      desktop: desk9,
    },
    name: 'Vanilla Panna Cotta',
    category: 'Panna Cotta',
    price: 6.5,
  },
]
