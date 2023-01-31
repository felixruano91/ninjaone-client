import { queryClient } from "@/lib/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import { QueryClientProvider } from "react-query";

const AppProvider = ({ children }: PropsWithChildren) => (
  <React.StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
)

export {
  AppProvider,
}