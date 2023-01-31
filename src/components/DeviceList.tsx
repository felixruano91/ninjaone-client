import { Box, Center, Spinner, Text } from "@chakra-ui/react";
import { DeviceItem, Filters } from "@/components";
import { useDevicesQuery } from "@/hooks";

const DeviceList = () => {
  const { data, isLoading, refetch } = useDevicesQuery();
  return (
    <>
      <Filters onClick={refetch} />
      <Box borderBottom="1px solid #CBCFD3">
        <Text ml={3}>
          Device
        </Text>
      </Box>
      {isLoading ? (
        <Center
          height={{
            sm: '60vh',
            md: '70vh',
          }}
        >
          <Spinner />
        </Center>
      ) : (
        <Box
          overflow="scroll"
          maxH={{
            sm: '60vh',
            md: '70vh',
          }}
        >
          {data?.map(({ id, ...device }) => (
            <DeviceItem key={id} {...device} />
          ))}
        </Box>
      )}
    </>
  )
}

export {
  DeviceList,
};
