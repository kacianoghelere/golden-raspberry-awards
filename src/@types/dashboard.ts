export interface WinIntervalForProducers {
  followingWin: number,
  interval: number,
  previousWin: number,
  producer: string
}

export interface MaxMinWinIntervalForProducers {
  max: WinIntervalForProducers[],
  min: WinIntervalForProducers[]
}

export interface StudioWithWinCount {
  name: string,
  winCount: number
}

export interface StudiosWithWinCount {
  studios: StudioWithWinCount[]
}

export interface YearWithMultipleWinners {
  winnerCount: number,
  year: number
}

export interface YearsWithMultipleWinners {
  years: YearWithMultipleWinners[]
}
