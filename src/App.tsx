import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Logo, Add } from '@/assets';
import { DeviceList } from "@/components";

function App() {
  return (
    <>
      <Flex backgroundColor="ninja.primary" py={3} px={6}>
        <Logo />
      </Flex>
      <Box my={8} mx={6}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="xl">
            Devices
          </Text>
          <Button
            backgroundColor="ninja.button.primary"
            color="white"
            fill="white"
            variant="solid"
            size="sm"
          >
            <Add />
            <Text ml={2}>
              Add Device
            </Text>
          </Button>
        </Flex>
        <DeviceList />
      </Box>
    </>
  )
}

export default App
