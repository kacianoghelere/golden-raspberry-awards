import axios from 'axios'

import { API_BASE_URL } from '~/utils/constants/api'

export const getApiData = async <TResponse>(params = {}) => (
  await axios.get<TResponse>(API_BASE_URL, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    params
  })
)