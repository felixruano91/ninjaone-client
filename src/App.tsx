import { Flex } from "@chakra-ui/react";
import { Logo } from '@/assets';
import { DeviceList } from "@/components";

function App() {
  return (
    <>
      <Flex backgroundColor="ninja.primary" py={3} px={6}>
        <Logo />
      </Flex>
      <DeviceList/>
    </>
  )
}

export default App
