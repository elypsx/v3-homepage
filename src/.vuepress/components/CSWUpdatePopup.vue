<template>
  <SWUpdatePopup v-slot="{ enabled, reload, message, buttonText }">
    <div
      v-if="enabled"
      class="my-sw-update-popup">
      {{ message }}<br><br>
        <v-btn outlined color="#009688" style="color:#fff;" @click="reload">{{ buttonText }}</v-btn>
    </div>
  </SWUpdatePopup>
</template>

<script>
import SWUpdatePopup from '@vuepress/plugin-pwa/lib/SWUpdatePopup.vue'

export default {
  components: { SWUpdatePopup }
}
</script>

<style>
 .my-sw-update-popup {
     text-align: center;
     position: fixed;
     bottom: 20px;
     right: 20px;
     background-color: #22232a;
     font-size: 20px;
     padding: 10px;
     border: none;
     font-weight: 400;
     color: #fff;
 }

.my-sw-update-popup button {
  border: 1px solid #fefefe;
  padding: 3px 10px;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 18px;
}
</style>
