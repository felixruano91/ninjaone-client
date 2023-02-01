import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { RefObject } from "react";

type Props = {
  isOpen: boolean;
  leastDestructiveRef: RefObject<any>
  onClose: VoidFunction;
}

const DeleteDeviceDialog = ({ isOpen, leastDestructiveRef, onClose }: Props) => {
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
            You are about to delete the device DESKTOP-0VCBIFF. This action cannot be undone.
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
              onClick={onClose}
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