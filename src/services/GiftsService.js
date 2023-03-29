import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"
import { logger } from "../utils/Logger.js"
import { Gift } from "../models/Gift.js"


class GiftsService {

  async getGifts() {
    const res = await api.get('api/gifts')
    // logger.log('res.data', res.data)
    AppState.gifts = res.data.map(g => new Gift(g))
    // logger.log('AppState.gifts: ', AppState.gifts)
  }

  async openGift(giftId) {
    logger.log('openGift giftId: ', giftId)
    let openingGift = AppState.gifts.find((g) => g.id = giftId)
    logger.log('openingGift AppState find: ', openingGift)
    if (openingGift.opened === false) {
      openingGift.opened = true
      const res = await api.put(`api/gifts/${giftId}`, openingGift)
      // logger.log(res.data)
      this.getGifts()
    }
  }

  async addGift(formData) {
    logger.log('addGift from GiftsService')
    const res = await api.post('api/gifts', formData)
  }

}

export const giftsService = new GiftsService()