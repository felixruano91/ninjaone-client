import { Button, Flex, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup, Text } from "@chakra-ui/react";
import { DeviceType } from "@/types";
import { Apple, Linux, Windows } from "@/assets";

const DeviceTypeMenu = () => (
  <Menu closeOnSelect={false}>
    <MenuButton
      as={Button}
      variant="outline"
      fontWeight={400}
      _active={{
        backgroundColor: 'none',
      }}
      _hover={{
        backgroundColor: 'none',
      }}
    >
      Device Type
    </MenuButton>
    <MenuList minWidth="240px">
      <MenuOptionGroup type="checkbox">
        <MenuItemOption value={DeviceType.MAC} display="flex">
          <Flex alignItems="center">
            <Apple /><Text ml={2}>Mac</Text>
          </Flex>
        </MenuItemOption>
        <MenuItemOption value={DeviceType.LINUX}>
          <Flex alignItems="center">
            <Linux /><Text ml={2}>Linux</Text>
          </Flex>
        </MenuItemOption>
        <MenuItemOption value={DeviceType.WINDOWS}>
          <Flex alignItems="center">
            <Windows /><Text ml={2}>Windows</Text>
          </Flex>
        </MenuItemOption>
      </MenuOptionGroup>
    </MenuList>
  </Menu>
)

export {
  DeviceTypeMenu,
}
