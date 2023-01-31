import { PropsWithChildren } from "react";
import { Select as ChakraSelect } from '@chakra-ui/react';

type Props = PropsWithChildren & {
  placeholder: string;
}

const Select = ({ children, placeholder }: Props) => (
  <ChakraSelect
    width="auto"
    ml={{
      sm: 0,
      md: 2,
    }}
    mt={{
      sm: 2,
      md: 0
    }}
    placeholder={placeholder}
  >
    {children}
  </ChakraSelect>
)

export {
  Select,
}