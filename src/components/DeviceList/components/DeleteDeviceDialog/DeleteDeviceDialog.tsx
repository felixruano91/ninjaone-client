import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { RefObject, useCallback } from "react";
import { Device } from "@/types";
import { useDeleteDeviceMutation } from "@/hooks";
import { onError } from "@/utils";

type Props = {
  device?: Device;
  isOpen: boolean;
  leastDestructiveRef: RefObject<any>
  onClose: VoidFunction;
}

const DeleteDeviceDialog = ({ device, isOpen, leastDestructiveRef, onClose }: Props) => {
  const { mutate: deleteDevice, isLoading } = useDeleteDeviceMutation({
    onSuccess: onClose,
    onError,
  });

  const handleDelete = useCallback(async () => {
    try {
      await deleteDevice(device?.id as string);
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
          <AlertDialogHeader fontSize={24} fontWeight={500}>
            Delete Device?
          </AlertDialogHeader>
          <AlertDialogCloseButton />

          <AlertDialogBody fontSize={14} fontWeight={500}>
            You are about to delete the device <b>{device?.system_name}</b>. This action cannot be undone.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button
              height={38}
              ref={leastDestructiveRef}
              onClick={onClose}
              variant="outline"
            >
              Cancel
            </Button>
            <Button
              height={38}
              colorScheme='red'
              onClick={handleDelete}
              ml={3}
              isLoading={isLoading}
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