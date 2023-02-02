import {
  Button, Center,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
} from "@chakra-ui/react";
import { CollapseArrow, Refresh, Search } from "@/assets";
import { DeviceTypeMenu } from './components';
import { ChangeEventHandler } from "react";

type Props = {
  isLoading: boolean;
  types: string[];
  onSearchChange: ChangeEventHandler<HTMLInputElement>;
  onSortChange: ChangeEventHandler<HTMLSelectElement>;
  onMenuChange: (value: string | string[]) => void;
  onClick: VoidFunction;
}

const Filters = ({ isLoading, types, onSearchChange, onSortChange, onMenuChange, onClick }: Props) => (
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
        <Input placeholder="Search" onChange={onSearchChange} />
      </InputGroup>
      <DeviceTypeMenu types={types} onChange={onMenuChange} />
      <Select
        cursor="pointer"
        width="auto"
        ml={{
          sm: 0,
          md: 2,
        }}
        mt={{
          sm: 2,
          md: 0
        }}
        placeholder="Sort by"
        icon={(
          <Center height={14}>
            <CollapseArrow />
          </Center>
        )}
        onChange={onSortChange}
      >
        <option value='hdd_capacity'>Sort by: HDD Capacity (Descending)</option>
        <option value='system_name'>Sort by: Device Name (Ascending)</option>
      </Select>
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