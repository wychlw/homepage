/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'custom_dark',
    themes: {
      custom_light: {
        dark: false,
        colors: {
          "primary": "#415F91",
          "surfaceTint": "#415F91",
          "onPrimary": "#FFFFFF",
          "primaryContainer": "#D6E3FF",
          "onPrimaryContainer": "#284777",
          "secondary": "#565F71",
          "onSecondary": "#FFFFFF",
          "secondaryContainer": "#DAE2F9",
          "onSecondaryContainer": "#3E4759",
          "tertiary": "#705575",
          "onTertiary": "#FFFFFF",
          "tertiaryContainer": "#FAD8FD",
          "onTertiaryContainer": "#573E5C",
          "error": "#BA1A1A",
          "onError": "#FFFFFF",
          "errorContainer": "#FFDAD6",
          "onErrorContainer": "#93000A",
          "background": "#F9F9FF",
          "onBackground": "#191C20",
          "surface": "#F9F9FF",
          "onSurface": "#191C20",
          "surfaceVariant": "#E0E2EC",
          "onSurfaceVariant": "#44474E",
          "outline": "#74777F",
          "outlineVariant": "#C4C6D0",
          "shadow": "#000000",
          "scrim": "#000000",
          "inverseSurface": "#2E3036",
          "inverseOnSurface": "#F0F0F7",
          "inversePrimary": "#AAC7FF",
          "primaryFixed": "#D6E3FF",
          "onPrimaryFixed": "#001B3E",
          "primaryFixedDim": "#AAC7FF",
          "onPrimaryFixedVariant": "#284777",
          "secondaryFixed": "#DAE2F9",
          "onSecondaryFixed": "#131C2B",
          "secondaryFixedDim": "#BEC6DC",
          "onSecondaryFixedVariant": "#3E4759",
          "tertiaryFixed": "#FAD8FD",
          "onTertiaryFixed": "#28132E",
          "tertiaryFixedDim": "#DDBCE0",
          "onTertiaryFixedVariant": "#573E5C",
          "surfaceDim": "#D9D9E0",
          "surfaceBright": "#F9F9FF",
          "surfaceContainerLowest": "#FFFFFF",
          "surfaceContainerLow": "#F3F3FA",
          "surfaceContainer": "#EDEDF4",
          "surfaceContainerHigh": "#E7E8EE",
          "surfaceContainerHighest": "#E2E2E9"
        },
      },
      custom_dark: {
        dark: true,
        colors: {
          "primary": "#AAC7FF",
          "surfaceTint": "#AAC7FF",
          "onPrimary": "#0A305F",
          "primaryContainer": "#284777",
          "onPrimaryContainer": "#D6E3FF",
          "secondary": "#BEC6DC",
          "onSecondary": "#283141",
          "secondaryContainer": "#3E4759",
          "onSecondaryContainer": "#DAE2F9",
          "tertiary": "#DDBCE0",
          "onTertiary": "#3F2844",
          "tertiaryContainer": "#573E5C",
          "onTertiaryContainer": "#FAD8FD",
          "error": "#FFB4AB",
          "onError": "#690005",
          "errorContainer": "#93000A",
          "onErrorContainer": "#FFDAD6",
          "background": "#111318",
          "onBackground": "#E2E2E9",
          "surface": "#111318",
          "onSurface": "#E2E2E9",
          "surfaceVariant": "#44474E",
          "onSurfaceVariant": "#C4C6D0",
          "outline": "#8E9099",
          "outlineVariant": "#44474E",
          "shadow": "#000000",
          "scrim": "#000000",
          "inverseSurface": "#E2E2E9",
          "inverseOnSurface": "#2E3036",
          "inversePrimary": "#415F91",
          "primaryFixed": "#D6E3FF",
          "onPrimaryFixed": "#001B3E",
          "primaryFixedDim": "#AAC7FF",
          "onPrimaryFixedVariant": "#284777",
          "secondaryFixed": "#DAE2F9",
          "onSecondaryFixed": "#131C2B",
          "secondaryFixedDim": "#BEC6DC",
          "onSecondaryFixedVariant": "#3E4759",
          "tertiaryFixed": "#FAD8FD",
          "onTertiaryFixed": "#28132E",
          "tertiaryFixedDim": "#DDBCE0",
          "onTertiaryFixedVariant": "#573E5C",
          "surfaceDim": "#111318",
          "surfaceBright": "#37393E",
          "surfaceContainerLowest": "#0C0E13",
          "surfaceContainerLow": "#191C20",
          "surfaceContainer": "#1D2024",
          "surfaceContainerHigh": "#282A2F",
          "surfaceContainerHighest": "#33353A"
        },
      }
    }
  },
})
