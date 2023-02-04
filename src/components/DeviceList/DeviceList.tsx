import { Box, Center, Spinner, Text } from "@chakra-ui/react";
import { DeleteDeviceDialog, DeviceItem, DeviceModal, Filters, Header } from "./components";
import { useDeviceList } from "./hooks";

const DeviceList = () => {
  const {
    cancelRef,
    data,
    device,
    heightBreakpoints,
    isError,
    isLoading,
    isOpen,
    isOpenDelete,
    onClose,
    onCloseDelete,
    onDelete,
    onEdit,
    onOpen,
    refetch,
    setSearch,
    setSort,
    setTypes,
    types,
  } = useDeviceList();

  return (
    <Box my={8} mx={6}>
      <Header onClick={onOpen} />
      <Filters
        isLoading={isLoading}
        types={types}
        onClick={refetch}
        onSearchChange={e => setSearch(e.target.value)}
        onSortChange={e => setSort(e.target.value)}
        onMenuChange={value => setTypes(value as string[])}
      />
      <Box borderBottom="1px solid #CBCFD3">
        <Text ml={3} mb={2}>
          Device
        </Text>
      </Box>
      {isError && (
        <Center height={heightBreakpoints}>
          Something went wrong, please try again.
        </Center>
      )}
      {isLoading && (
        <Center height={heightBreakpoints}>
          <Spinner />
        </Center>
      )}
      {!isError && !isLoading && (
        data && data.length > 0 ? (
          <Box
            overflow="scroll"
            maxH={heightBreakpoints}
          >
            {data.map(({ id, ...device }) => (
              <DeviceItem
                key={id}
                {...device}
                onEdit={onEdit({ id, ...device })}
                onDelete={onDelete({ id, ...device })}
              />
            ))}
          </Box>
        ) : (
          <Center height={heightBreakpoints}>
            No data to display.
          </Center>
        )
      )}
      <DeviceModal
        isOpen={isOpen}
        device={device}
        onClose={onClose}
      />
      <DeleteDeviceDialog
        device={device}
        isOpen={isOpenDelete}
        leastDestructiveRef={cancelRef}
        onClose={onCloseDelete}
      />
    </Box>
  )
}

export {
  DeviceList,
};
