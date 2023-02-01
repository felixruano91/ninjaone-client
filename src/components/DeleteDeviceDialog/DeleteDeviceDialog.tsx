import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { RefObject, useCallback } from "react";
import { Device } from "@/types";
import { useDeleteDeviceMutation } from "@/hooks";

type Props = {
  device?: Device;
  isOpen: boolean;
  leastDestructiveRef: RefObject<any>
  onClose: VoidFunction;
}

const DeleteDeviceDialog = ({ device, isOpen, leastDestructiveRef, onClose }: Props) => {
  const { mutate: deleteDevice } = useDeleteDeviceMutation();

  const handleDelete = useCallback(async () => {
    try {
      await deleteDevice(device?.id as string);
      onClose();
    } catch (e) {
      console.error(e);
    }
  }, [deleteDevice, onClose, device]);
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={leastDestructiveRef}
      onClose={onClose}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            Delete Device?
          </AlertDialogHeader>

          <AlertDialogBody>
            You are about to delete the device {device?.system_name}. This action cannot be undone.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button
              ref={leastDestructiveRef}
              onClick={onClose}
              variant="outline"
            >
              Cancel
            </Button>
            <Button
              colorScheme='red'
              onClick={handleDelete}
              ml={3}
            >
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}

export {
  DeleteDeviceDialog,
}