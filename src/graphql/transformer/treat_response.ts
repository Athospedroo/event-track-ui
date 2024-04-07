import { AxiosResponse } from 'axios'

export function treatResponse(response: AxiosResponse): any | undefined {
  return response?.data
}
