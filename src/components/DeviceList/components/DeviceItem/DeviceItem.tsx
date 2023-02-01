import { Flex, Text } from "@chakra-ui/react";
import { Device, DeviceType } from "@/types";
import { Apple, Linux, Windows } from "@/assets";
import { useMemo, useState } from "react";
import { capitalize } from "@/utils";
import { OptionsMenu } from "./components";

type Props = Pick<Device, 'type' | 'system_name' | 'hdd_capacity'> & {
  onEdit: VoidFunction;
  onDelete: VoidFunction;
};

const DeviceItem = ({ type, system_name, hdd_capacity, onEdit, onDelete }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const renderIcon = useMemo(() => {
    switch (type) {
      case DeviceType.LINUX:
        return <Linux />;
      case DeviceType.MAC:
        return <Apple />;
      case DeviceType.WINDOWS:
        return <Windows />;
      default:
        return null;
    }
  }, [type])
  return (
    <Flex
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
          <Text ml={2}>
            {system_name}
          </Text>
        </Flex>
        <Flex alignItems="center" ml={3}>
          <Text fontSize="sm" color="ninja.font.grey">
            {`${capitalize(type)} workstation - ${hdd_capacity} GB`}
          </Text>
        </Flex>
      </Flex>
      {isHovered && (
        <OptionsMenu onEdit={onEdit} onDelete={onDelete} />
      )}
    </Flex>
  )
}

export {
  DeviceItem,
}
