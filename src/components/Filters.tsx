import { Button, Flex, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { Refresh, Search } from "@/assets";
import { Select } from '@/components';

type Props = {
  onClick: VoidFunction;
}

const Filters = ({ onClick }: Props) => (
  <Flex my={6} justifyContent="space-between">
    <Flex
      flexDirection={{
        sm: 'column',
        md: 'row',
      }}
      alignItems={{
        md: 'center'
      }}
    >
      <InputGroup width="auto">
        <InputLeftAddon
          children={<Search />}
        />
        <Input placeholder="Search" />
      </InputGroup>
      <Select
        placeholder="DeviceItem Type: All"
      />
      <Select
        placeholder="Sort by: HDD Capacity (Descending)"
      />
    </Flex>
    <Button variant="ghost" onClick={onClick}>
      <Refresh />
    </Button>
  </Flex>
);

export {
  Filters,
}