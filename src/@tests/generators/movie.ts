import { Movie } from '~/@types/movies'

import { generateMultiple } from './utils'

export const generateMovie = (id: number, attributes = {}): Movie => ({
  id,
  producers: ['Producer 1', 'Producer 2'],
  studios: ['Studio 1', 'Studio 2'],
  title: `Movie ${id}`,
  winner: false,
  year: 2000,
  ...attributes
})

export const generateMovies = (quantity: number) => (
  generateMultiple(quantity, generateMovie)
)