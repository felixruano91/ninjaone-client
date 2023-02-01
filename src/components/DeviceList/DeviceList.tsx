import { Box, Center, Spinner, Text } from "@chakra-ui/react";
import { DeviceItem, Filters } from "./components";
import { useDevicesQuery } from "@/hooks";
import { useState } from "react";

type Props = {
  onEdit: VoidFunction;
  onDelete: VoidFunction;
}
const DeviceList = ({ onEdit, onDelete }: Props) => {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [types, setTypes] = useState<string[]>([]);
  const { data, isLoading, isFetching, refetch } = useDevicesQuery({
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
