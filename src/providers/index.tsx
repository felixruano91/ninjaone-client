import { queryClient } from "@/lib/react-query";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import { QueryClientProvider } from "react-query";

const theme = extendTheme({
  colors: {
    ninja: {
      primary: '#002A42',
      button: {
        primary: '#337AB7',
      },
      font: {
        grey: '#6E6D7A',
      }
    }
  }
})

const AppProvider = ({ children }: PropsWithChildren) => (
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
)

export {
  AppProvider,
}