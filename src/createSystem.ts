import { createSystem, defaultConfig } from "@chakra-ui/react"

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'League Spartan', sans-serif` },
        alien: { value: `'Alien Spaceship'` },
      },
      colors: {
        brand: {
          100: { value: "#7ed957" },
        },
    },
  },
}})