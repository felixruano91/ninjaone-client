import { Flex, Text } from "@chakra-ui/react";
import { DevicePayload, DeviceType } from "@/types";
import { Apple, Linux, Windows } from "@/assets";
import { useMemo, useState } from "react";
import { capitalize } from "@/utils";
import { OptionsMenu } from "./components";

type Props = DevicePayload & {
  onEdit: VoidFunction;
  onDelete: VoidFunction;
};

const DeviceItem = ({ type, system_name, hdd_capacity, onEdit, onDelete }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const renderIcon = useMemo(() => {
    switch (type) {
      case DeviceType.LINUX:
        return <Linux data-testid="type-linux" />;
      case DeviceType.MAC:
        return <Apple data-testid="type-mac" />;
      case DeviceType.WINDOWS:
        return <Windows data-testid="type-windows" />;
      default:
        return null;
    }
  }, [type])
  return (
    <Flex
      data-testid="device-item"
      borderBottom="1px solid #CBCFD3"
      py={2}
      justifyContent="space-between"
      _hover={{
        backgroundColor: '#F4F4F5',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Flex ml={3} flexDirection="column">
        <Flex alignItems="center" ml={3}>
          {renderIcon}
          <Text data-testid="system_name" ml={2} fontSize={14} fontWeight={500}>
            {system_name}
          </Text>
        </Flex>
        <Flex alignItems="center" ml={3}>
          <Text fontSize={12} fontWeight={400} color="ninja.font.grey">
            {`${capitalize(type)} workstation - ${hdd_capacity} GB`}
          </Text>
        </Flex>
      </Flex>
      {isHovered && (
        <OptionsMenu
          data-testid="options-menu"
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )}
    </Flex>
  )
}

export {
  DeviceItem,
}
