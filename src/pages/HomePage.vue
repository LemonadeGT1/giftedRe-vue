<template>
  <div class="row">
    <!-- SECTION - left forms -->
    <section class="col-3 bg-primary ">
      <div class="row p-1">
        <div class="col-12">
          <h3>
            <i class="mdi mdi-gift-open"></i> Gifted Re-Vue
          </h3>

          <form @submit.prevent="addGift()">
            <label for="tag" class="ps-2 mt-2">Tag</label>
            <input type="text" required="true" placeholder="Tag" name="tag" id="tag" minlength="1" maxlength="24"
              class="form-control">
            <label for="url" class="ps-2 mt-2">URL</label>
            <input type="url" required="true" placeholder="http://" name="url" id="url" class="form-control">
            <div class="text-end">
              <button class="btn btn-success mt-3"><i class="mdi mdi-plus"></i> Add
                Gift</button>
            </div>
          </form>

          <hr>

          <form class="input-group mb-3" @submit.prevent="getGiphys()">
            <input type="text" class="form-control" placeholder="search term" name="search" id="search" minlength="1"
              maxlength="24" required="true">
            <div class="input-group-append">
              <button class="btn btn-success" type="button" id="button-addon2"><i class="mdi mdi-magnify"></i></button>
            </div>
          </form>

          <!-- STUB - place holder for .gifs -->
          <div id="giphys">
            <div class="card p-1 img-fluid w-25">
              <img src="https://media.giphy.com/media/l0O9zKrd7InZvso5W/giphy.gif">
            </div>
          </div>

        </div>
      </div>
    </section>
    <!-- SECTION - Main page -->
    <div class="col-9">
      <div class="row justify-content-around p-3">
        <!-- STUB - gift template -->
        <div class="col-3" v-for="giftFromVFor in gifts" :key="giftFromVFor.id">
          <GiftCard :giftProp="giftFromVFor" />
        </div>
        <!-- STUB - end -->
      </div>
    </div>
  </div>
</template>

<script>

import { onMounted, computed, ref } from "vue";
import { giftsService } from "../services/GiftsService.js";
import { logger } from "../utils/Logger.js";
import { AppState } from "../AppState.js";
import GiftCard from "../components/GiftCard.vue";

export default {
  setup() {

    const editable = ref({})

    async function getGifts() {
      try {
        // logger.log('get Gifts on HomePage')
        await giftsService.getGifts();
      } catch (error) {
        logger.log(error.message);
      }
    }

    onMounted(() => {   // NOTE in here I can put all of the functions that I want to call when this component (page) mounts
      getGifts();
    });

    return {
      gifts: computed(() => AppState.gifts),

      async addGift() {
        logger.log('addGift', editable)
        // const formGift = AppState.newGift
        // logger.log('newGift: ', formGift)
        // await giftsService.addGift(formGift)
      }


    }
  },
  components: { GiftCard }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}

.gift-img {
  height: 20vh;
  width: 20vh;
}
</style>
