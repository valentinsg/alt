import { createSystem, defaultConfig } from "@chakra-ui/react"

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'League Spartan', sans-serif` },
        body: { value: `'Figtree', sans-serif` },
      },
    },
  },
})