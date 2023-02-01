import { Button, Flex, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup, Text } from "@chakra-ui/react";
import { DeviceType } from "@/types";
import { Apple, Linux, Windows } from "@/assets";
import { useMemo } from "react";
import { capitalize } from "@/utils";

type Props = {
  types: string[];
  onChange: (value: string | string[]) => void;
}

const DeviceTypeMenu = ({ types, onChange }: Props) => {
  const label = useMemo(() => (types.length === 3 || types.length === 0)
    ? 'Device Type: All'
    : `Device Type: ${capitalize(types[0])}${types[1] ? ` & ${capitalize(types[1])}` : ''}`,
    [types]
  );
  const buttonStyles = {
    backgroundColor: 'none',
    borderColor: 'grey.300'
  }
  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        as={Button}
        variant="outline"
        fontWeight={400}
        _active={buttonStyles}
        _hover={buttonStyles}
        ml={{
          sm: 0,
          md: 2,
        }}
      >
        {label}
      </MenuButton>
      <MenuList minWidth="240px">
        <MenuOptionGroup type="checkbox" onChange={onChange}>
          <MenuItemOption value={DeviceType.MAC} display="flex">
            <Flex alignItems="center">
              <Apple/><Text ml={2}>Mac</Text>
            </Flex>
          </MenuItemOption>
          <MenuItemOption value={DeviceType.LINUX}>
            <Flex alignItems="center">
              <Linux/><Text ml={2}>Linux</Text>
            </Flex>
          </MenuItemOption>
          <MenuItemOption value={DeviceType.WINDOWS}>
            <Flex alignItems="center">
              <Windows/><Text ml={2}>Windows</Text>
            </Flex>
          </MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  )
}

export {
  DeviceTypeMenu,
}
