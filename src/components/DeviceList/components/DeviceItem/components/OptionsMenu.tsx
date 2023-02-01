import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Options } from "@/assets";

type Props = {
  onEdit: VoidFunction;
  onDelete: VoidFunction;
}

const OptionsMenu = ({ onEdit, onDelete }: Props) => (
  <Menu>
    <MenuButton
      aria-label="options"
      variant="ghost"
      as={Button}
      mr={3}
      _hover={{
        backgroundColor: '#E8E8EA',
      }}
    >
      <Options />
    </MenuButton>
    <MenuList>
      <MenuItem
        onClick={onEdit}
      >
        Edit
      </MenuItem>
      <MenuItem
        color="red"
        onClick={onDelete}
      >
        Delete
      </MenuItem>
    </MenuList>
  </Menu>
);

export {
  OptionsMenu,
}