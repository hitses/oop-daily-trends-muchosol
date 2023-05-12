export interface FeedInterface {
  newspaper: NewspaperType
  href: string
  text: string
  delete: boolean
}

type NewspaperType = 'El País' | 'El Mundo'
