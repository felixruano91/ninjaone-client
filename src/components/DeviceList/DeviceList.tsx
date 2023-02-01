import { Box, Center, Spinner, Text } from "@chakra-ui/react";
import { DeviceItem, Filters } from "./components";
import { useDevicesQuery } from "@/hooks";

type Props = {
  onEdit: VoidFunction;
  onDelete: VoidFunction;
}
const DeviceList = ({ onEdit, onDelete }: Props) => {
  const { data, isLoading, isFetching, refetch } = useDevicesQuery();
  const heightBreakpoints = {
    sm: '60vh',
    md: '70vh',
  }
  return (
    <>
      <Filters
        isLoading={isLoading || isFetching}
        onClick={refetch}
      />
      <Box borderBottom="1px solid #CBCFD3">
        <Text ml={3}>
          Device
        </Text>
      </Box>
      {isLoading || isFetching ? (
        <Center height={heightBreakpoints}>
          <Spinner />
        </Center>
      ) : (
        <Box
          overflow="scroll"
          maxH={heightBreakpoints}
        >
          {data?.map(({ id, ...device }) => (
            <DeviceItem
              key={id}
              {...device}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </Box>
      )}
    </>
  )
}

export {
  DeviceList,
};
