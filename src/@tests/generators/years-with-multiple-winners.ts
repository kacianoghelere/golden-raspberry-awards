import { generateMultiple } from './utils'
import { YearWithMultipleWinners } from '~/@types/dashboard'

export const generateYearWithMultipleWinners = (year: number, attributes = {}): YearWithMultipleWinners => ({
  year,
  winnerCount: 2,
  ...attributes
})

export const generateYearsWithMultipleWinners = (quantity: number) => (
  generateMultiple(quantity, (index) => (
    generateYearWithMultipleWinners(1980 + index)
  ))
)