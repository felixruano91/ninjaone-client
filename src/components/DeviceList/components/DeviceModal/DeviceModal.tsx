import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberInput,
  NumberInputField,
  Select,
} from "@chakra-ui/react";
import { Device, DeviceType } from "@/types";
import { capitalize } from "@/utils";
import { useDeviceModal } from "./hooks";

type Props = {
  isOpen: boolean;
  device?: Device;
  onClose: VoidFunction;
}

const DeviceModal = ({ isOpen, device, onClose }: Props) => {
  const {
    handleSubmit,
    handleOnClose,
    errors,
    registerRequiredField,
    isLoading,
  } = useDeviceModal({
    device,
    onClose,
  });

  return (
    <Modal isOpen={isOpen} onClose={handleOnClose} isCentered>
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader fontSize={24} fontWeight={500}>
          {device ? 'Edit' : 'Add'} Device
        </ModalHeader>
        <ModalCloseButton/>

        <form onSubmit={handleSubmit}>
          <ModalBody>
            <FormControl isInvalid={Boolean(errors.system_name)}>
              <FormLabel htmlFor='system_name' fontSize={14} fontWeight={400}>System name *</FormLabel>
              <Input
                id='system_name'
                {...registerRequiredField('system_name')}
              />
              <FormErrorMessage>
                {errors.system_name && errors.system_name.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl mt={3} isInvalid={Boolean(errors.type)}>
              <FormLabel htmlFor='type' fontSize={14} fontWeight={400}>Device Type *</FormLabel>
              <Select
                width="auto"
                id="type"
                placeholder="Select Type"
                {...registerRequiredField('type')}
              >
                {Object.values(DeviceType).map((value, i) => (
                  <option key={`${value}-${i}`} value={value}>{capitalize(value)}</option>
                ))}
              </Select>
              <FormErrorMessage>
                {errors.type && errors.type.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl mt={3} isInvalid={Boolean(errors.hdd_capacity)}>
              <FormLabel htmlFor='hdd_capacity' fontSize={14} fontWeight={400}>HDD capacity (GB) *</FormLabel>
              <NumberInput>
                <NumberInputField
                  id='hdd_capacity'
                  {...registerRequiredField('hdd_capacity')}
                />
              </NumberInput>
              <FormErrorMessage>
                {errors.hdd_capacity && errors.hdd_capacity.message}
              </FormErrorMessage>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              height={38}
              color="ninja.button.primary"
              variant="outline"
              mr={3}
              onClick={handleOnClose}
            >
              Cancel
            </Button>
            <Button
              height={38}
              backgroundColor="ninja.button.primary"
              color="white"
              fill="white"
              variant="solid"
              isLoading={isLoading}
              type='submit'
              _hover={{
                backgroundColor: 'ninja.button.primary',
                opacity: .8
              }}
            >
              Submit
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}

export {
  DeviceModal,
}