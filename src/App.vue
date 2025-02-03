<template>
  <v-app>
    <router-view />
  </v-app>
  <v-btn 
    color="primary" 
    :icon="toggle_theme_icon()" 
    large 
    class="toggle_theme"
    @click="toggle_theme"
  />
</template>

<script lang="ts" setup>
import { useTheme } from 'vuetify';

const theme = useTheme();

const is_dark = ref(theme.global.current.value.dark);

const toggle_theme = () => {
  is_dark.value = !is_dark.value;
  theme.global.name.value = is_dark.value ? 'custom_dark' : 'custom_light';
};

const toggle_theme_icon = () => {
  return is_dark.value ? 'mdi-moon-waning-crescent' : 'mdi-white-balance-sunny';
};
</script>
