import { useRef, useState } from "react";
import { useDevicesQuery } from "@/hooks";
import { useDisclosure } from "@chakra-ui/react";
import { Device } from "@/types";

const useDeviceList = () => {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [types, setTypes] = useState<string[]>([]);
  const { data, isLoading, isFetching, refetch, isError } = useDevicesQuery({
    search,
    sort,
    types,
  });
  const heightBreakpoints = {
    sm: '60vh',
    md: '70vh',
  }
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

  return {
    cancelRef,
    data,
    device,
    heightBreakpoints,
    isError,
    isLoading: isLoading || isFetching,
    isOpen,
    isOpenDelete: isOpenDialog,
    onClose: handleOnClose(onClose),
    onCloseDelete: handleOnClose(onCloseDialog),
    onDelete: handleOptionsClick(onOpenDialog),
    onEdit: handleOptionsClick(onOpen),
    onOpen,
    refetch,
    setSearch,
    setSort,
    setTypes,
    types,
  }
}

export {
  useDeviceList,
}
