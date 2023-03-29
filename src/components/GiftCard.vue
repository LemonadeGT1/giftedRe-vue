<template>
  <div class="card p-3 align-items-center mb-2" @click="openGift(giftProp?.id)">
    <img class="img-fluid gift-img rounded" :src="giftProp?.url" alt="gift">
    <div>
      <p class="mb-0 pt-2">{{ giftProp?.tag }}</p>
    </div>
  </div>
</template>

<script>
import { Gift } from "../models/Gift.js";
import { giftsService } from "../services/GiftsService.js";
import { logger } from "../utils/Logger.js";

export default {
  props: {
    // NOTE giftProp is the name of the prop that we are binding to on the home page
    giftProp: { type: Gift, required: true }
  },
  setup() {
    return {
      async openGift(giftId) {
        try {
          logger.log('GiftCard giftId: ', giftId)
          await giftsService.openGift(giftId)
        } catch (error) {
          logger.log(error.message)
        }
      }
    };
  },
};
</script>

<style></style>