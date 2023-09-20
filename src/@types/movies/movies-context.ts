export namespace Movies {
  export const enum ActionType {
    SET_ONLY_WINNERS = 'SET_ONLY_WINNERS',
    SET_PAGE = 'SET_PAGE',
    SET_YEAR = 'SET_YEAR'
  }

  export type Action = (
    | {
      onlyWinners: boolean,
      type: ActionType.SET_ONLY_WINNERS
    }
    | {
      page: number,
      type: ActionType.SET_PAGE
    }
    | {
      type: ActionType.SET_YEAR,
      year: string
    }
  )

  export interface State {
    onlyWinners: boolean,
    page: number,
    year: string
  }
}