import { combineReducers } from '@reduxjs/toolkit'

import maxMinWinIntervalForProducers from './max-min-win-interval-for-producers'
import studiosWithWinCount from './studios-with-win-count'
import winnerMoviesByYear from './winner-movies-by-year'
import yearsWithMultipleWinners from './years-with-multiple-winners'

export default combineReducers({
  maxMinWinIntervalForProducers,
  studiosWithWinCount,
  winnerMoviesByYear,
  yearsWithMultipleWinners
})