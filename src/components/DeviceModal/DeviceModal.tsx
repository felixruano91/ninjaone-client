import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: VoidFunction;
}

const DeviceModal = ({ isOpen, onClose }: Props) => (
  <Modal isOpen={isOpen} onClose={onClose} isCentered>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Add Device</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        fdjslajf;ksal;jfa;sl
      </ModalBody>

      <ModalFooter>
        <Button
          variant="outline"
          mr={3}
          onClick={onClose}
          size="sm"
        >
          Cancel
        </Button>
        <Button
          backgroundColor="ninja.button.primary"
          color="white"
          fill="white"
          variant="solid"
          size="sm"
        >
          Submit
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
)

export {
  DeviceModal,
}