<template>
  <v-footer
    app
    class="d-flex flex-column"
  >
    <v-row class="w-100">
      <v-col class="align-center text-right">
        &copy; 2021 - 2024 泠妄 with <v-icon>mdi-heart</v-icon>
      </v-col>
      <v-col class="align-center text-left">
        Powered by
        <a
          href="https://v3.vuejs.org/"
          target="_blank"
        >
          <v-icon>mdi-vuejs</v-icon> Vue
        </a>
        <a
          href="https://vuetifyjs.com/"
          target="_blank"
        >
          <v-icon>mdi-vuetify</v-icon> Vuetify
        </a>
      </v-col>
    </v-row>

    <v-divider />

    <v-row class="w-100">
      <v-col class="align-center text-center">
        Background: <a
          href="https://www.pixiv.net/artworks/91407307"
          target="_blank"
        >Pixiv 91407307</a>
      </v-col>
    </v-row>

    <v-divider />

    <v-row class="w-100">
      <v-col class="align-center text-center">
        <template v-if="!is_empty(ipc[0])">
          <a
            :href="ipc[0]"
            rel="noopener"
            target="_blank"
          >{{ ipc[1] }}</a>
        </template>

        <template v-if="!is_empty(ipc[0]) && !is_empty(gawb[0])">
          |
        </template>

        <template v-if="!is_empty(gawb[0])">
          <a
            :href="gawb[0]"
            rel="noopener"
            target="_blank"
          >
            <img
              v-if="gawb.length >= 3"
              :src="gawb[2]"
              height="16"
              width="16"
            >
            {{ gawb[1] }}
          </a>
        </template>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup lang="ts">
const hostname = window.location.hostname;

// return: (url, text)
const ipc_map = (hostname: string) => {
  if (hostname.includes('wcysite.cn')) {
    return ['href="https://beian.miit.gov.cn/', '滇ICP备2020009434号-1'];
  } else {
    return ['https://icp.gov.moe/?keyword=20210741', '萌ICP备20210741号'];
  }
};

// return: (url, text, img?)
const gawb_map = (hostname: string) => {
  if (hostname.includes('wcysite.cn')) {
    return ['https://beian.mps.gov.cn/#/query/webSearch?code=53010202001130',
      '滇公网安备53010202001130号', '/gxb.png'];
  } else {
    return [''];
  }
};

const ipc = ipc_map(hostname);
const gawb = gawb_map(hostname);

const is_empty = (str: string) => {
  return str === undefined || str === null || str === '';
};

</script>

<style scoped></style>
