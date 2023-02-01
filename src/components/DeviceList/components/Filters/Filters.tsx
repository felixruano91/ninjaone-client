import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
} from "@chakra-ui/react";
import { Refresh, Search } from "@/assets";
import { DeviceTypeMenu } from './components';

type Props = {
  isLoading: boolean;
  onClick: VoidFunction;
}

const Filters = ({ isLoading, onClick }: Props) => (
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
      <DeviceTypeMenu />
      <Select
        width="auto"
        ml={{
          sm: 0,
          md: 2,
        }}
        mt={{
          sm: 2,
          md: 0
        }}
        placeholder="Sort by: HDD Capacity (Descending)"
      />
    </Flex>
    <Button
      isLoading={isLoading}
      variant="ghost"
      onClick={onClick}
      aria-label="refresh"
    >
      <Refresh />
    </Button>
  </Flex>
);

export {
  Filters,
}