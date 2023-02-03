import { Box, Center, Spinner, Text } from "@chakra-ui/react";
import { DeviceItem, Filters } from "./components";
import { useDevicesQuery } from "@/hooks";
import { useState } from "react";
import { Device } from "@/types";

type Props = {
  onEdit: (device: Device) => () => void;
  onDelete: (device: Device) => () => void;
}
const DeviceList = ({ onEdit, onDelete }: Props) => {
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

  return (
    <>
      <Filters
        isLoading={isLoading || isFetching}
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
      {isLoading || isFetching && (
        <Center height={heightBreakpoints}>
          <Spinner />
        </Center>
      )}
      {data && data.length > 0 ? (
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
      )}
    </>
  )
}

export {
  DeviceList,
};
