export interface Movie {
  id: number,
  year: number,
  title: string,
  studios: string[],
  producers: string[],
  winner: boolean
}

export interface MoviesList {
  content: Movie[],
  pageable: {
    sort: {
      unsorted: boolean,
      sorted: boolean,
      empty: boolean
    },
    offset: number,
    pageSize: number,
    pageNumber: number,
    unpaged: boolean,
    paged: boolean
  },
  last: boolean,
  totalPages: number,
  totalElements: number,
  size: number,
  number: number,
  sort: {
    unsorted: boolean,
    sorted: boolean,
    empty: boolean
  },
  first: boolean,
  numberOfElements: number,
  empty: boolean
}