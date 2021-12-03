import { fetchLastAmountApi, fetchLatestApi } from "../constants"

export const fetchLatestData = async () => {
  return await (await fetch(fetchLatestApi)).json()
}

export const fetchLastAmount = async (amount) => {
  return await (await fetch(fetchLastAmountApi(amount))).json()
}