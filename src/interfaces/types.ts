export interface FeedInterface {
  newspaper: NewspaperType
  href: string
  text: string
  delete: boolean
}

export type NewspaperType = 'El País' | 'El Mundo'

export type PostFeedInterface = Omit<FeedInterface, 'delete'>
