<template>
  <v-container>
    <v-sheet
      class="align-center justify-center"
      :border="true"
      rounded
      :color="get_filled_color()"
    >
      <v-container>
        <v-row>
          <v-col class="align-center text-center">
            <v-avatar
              image="/avatar.png"
              size="100"
              variant="elevated"
            />
          </v-col>
        </v-row>
        <v-row class="align-center text-center">
          <v-col>
            <h2 class="text-h3">
              妄尘驿
            </h2>
          </v-col>
        </v-row>
        <v-divider
          thickness="5"
          class="py-3 mt-3"
        />
        <v-row class="align-center text-center">
          <v-col>
            <p class="text-body-1">
              Nice to meet you~
            </p>
          </v-col>
        </v-row>
        <v-divider
          thickness="0"
          class="py-1 mt-3"
        />
        <v-row class="align-center text-left">
          <v-col>
            <h3 class="text-h5">
              <b :style="'color:' + get_color('tertiary') + ';'">#</b> Links
            </h3>
          </v-col>
        </v-row>
        <v-row class="align-center text-center">
          <template
            v-for="l in gen_liks(links)"
            :key="l.en_name"
          >
            <v-col>
              <v-btn
                :href="l.url"
                class="text-none"
              >
                <p>
                  {{ l.en_name }} <br> <small class="font-weight-thin"> {{ l.zh_name }} </small>
                </p>
              </v-btn>
            </v-col>
          </template>
        </v-row>
        <v-row class="align-center text-left">
          <v-col>
            <h3 class="text-h5">
              <b :style="'color:' + get_color('tertiary') + ';'">#</b> Projects
            </h3>
          </v-col>
        </v-row>
        <template v-if="true">
          <v-row class="align-center text-center">
            <v-card
              title="TBD"
              subtitle="TBD"
              text="Gu Gu Gu"
              variant="tonal"
              href="#"
              class="mx-4"
              style="width: 100%;"
            />
          </v-row>
        </template>
        <v-row class="align-center text-left">
          <v-col>
            <h3 class="text-h5">
              <b :style="'color:' + get_color('tertiary') + ';'">#</b> Concat Me
            </h3>
          </v-col>
        </v-row>
        <v-row class="align-center text-center">
          <template
            v-for="l in gen_liks(concat)"
            :key="l.en_name"
          >
            <v-col>
              <v-btn
                :href="l.url"
                class="text-none"
              >
                <p>
                  {{ l.en_name }}
                </p>
              </v-btn>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-sheet>
  </v-container>

  <!-- Toggle theme btn, bottom right icon -->
</template>

<script setup lang="ts">

import { useTheme } from 'vuetify';

const theme = useTheme();

const get_filled_color = () => {
  const color = theme.current.value.colors.primaryContainer;

  const color_alpha = color + '99';
  return color_alpha;
};

const get_color = (color: string) => {
  return theme.current.value.colors[color];
};

interface Link {
  en_name: string;
  zh_name: string;
  url: string;
  can_cn: boolean;
}

const hostname = window.location.hostname;

const gen_liks = (l: Link[]) => {
  const is_cn = hostname.includes('wcysite.cn');
  return l.filter((i) => !is_cn || i.can_cn);
};

const links: Link[] = [
  {
    en_name: "Blog",
    zh_name: "Blog",
    url: "https://blog.wcysite.com/",
    can_cn: true
  }, {
    en_name: "Cloud",
    zh_name: "云盘",
    url: "https://cloud.wcysite.com/public",
    can_cn: true
  }, {
    en_name: "Server Status",
    zh_name: "服务状态",
    url: "https://status.wcysite.com/",
    can_cn: true
  }, {
    en_name: "Github",
    zh_name: "Github",
    url: "https://github.com/wychlw/",
    can_cn: true
  }, {
    en_name: "Twitter",
    zh_name: "Twitter",
    url: "https://twitter.com/LingWangMoe",
    can_cn: false
  }, 
];

const concat: Link[] = [
  {
    en_name: "Mail: lingwang#wcysite.com",
    zh_name: "NoNeed",
    url: "mailto:lingwang#wcysite.com",
    can_cn: true
  }, {
    en_name: "Github: wychlw",
    zh_name: "NoNeed",
    url: "https://github.com/wychlw/",
    can_cn: true
  }, {
    en_name: "PGP Key",
    zh_name: "NoNeed",
    url: "https://www.wcysite.com/public-key.txt",
    can_cn: true
  }
];

</script>
