import {
  Box,
  Button,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Logo, Add } from '@/assets';
import { DeleteDeviceDialog, DeviceList, DeviceModal } from "@/components";
import { useRef, useState } from "react";
import { Device } from "@/types";

function App() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { isOpen: isOpenDialog, onClose: onCloseDialog, onOpen: onOpenDialog } = useDisclosure();
  const [device, setDevice] = useState<Device>();
  const cancelRef = useRef(null);

  const handleOnClose = (handleClose: VoidFunction) => () => {
    setDevice(undefined);
    handleClose();
  }

  const handleOptionsClick = (handleOpen: VoidFunction) => (device: Device) => () => {
    setDevice(device);
    handleOpen();
  }
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
            _hover={{
              backgroundColor: 'ninja.button.primary',
              opacity: .8
            }}
          >
            <Add />
            <Text ml={2}>
              Add Device
            </Text>
          </Button>
        </Flex>
        <DeviceList
          onEdit={handleOptionsClick(onOpen)}
          onDelete={handleOptionsClick(onOpenDialog)}
        />
        <DeviceModal
          isOpen={isOpen}
          device={device}
          onClose={handleOnClose(onClose)}
        />
        <DeleteDeviceDialog
          device={device}
          isOpen={isOpenDialog}
          leastDestructiveRef={cancelRef}
          onClose={handleOnClose(onCloseDialog)}
        />
      </Box>
    </>
  )
}

export default App
