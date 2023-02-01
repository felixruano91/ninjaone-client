import {
  Box,
  Button,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Logo, Add } from '@/assets';
import { DeleteDeviceDialog, DeviceList, DeviceModal } from "@/components";
import { useRef } from "react";

function App() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { isOpen: isOpenDialog, onClose: onCloseDialog, onOpen: onOpenDialog } = useDisclosure();
  const cancelRef = useRef(null);
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
            onClick={onOpen}
          >
            <Add />
            <Text ml={2}>
              Add Device
            </Text>
          </Button>
        </Flex>
        <DeviceList
          onEdit={onOpen}
          onDelete={onOpenDialog}
        />
        <DeviceModal
          isOpen={isOpen}
          onClose={onClose}
        />
        <DeleteDeviceDialog
          isOpen={isOpenDialog}
          leastDestructiveRef={cancelRef}
          onClose={onCloseDialog}
        />
      </Box>
    </>
  )
}

export default App
