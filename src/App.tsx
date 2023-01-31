import { Flex, Image } from "@chakra-ui/react";
import Logo from '@/assets/logo.svg';

function App() {
  return (
    <div>
      <Flex>
        <Image src={Logo}/>
        NinjaOne
      </Flex>
    </div>
  )
}

export default App
