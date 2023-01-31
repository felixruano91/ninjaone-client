import { Flex, Text } from "@chakra-ui/react";
import { Device, DeviceType } from "@/types";
import { Apple, Linux, Windows } from "@/assets";
import { useMemo } from "react";
import { capitalize } from "@/utils";

type Props = Pick<Device, 'type' | 'system_name' | 'hdd_capacity'>;

const DeviceItem = ({ type, system_name, hdd_capacity }: Props) => {
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
    <Flex borderBottom="1px solid #CBCFD3" py={2}>
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
    </Flex>
  )
}

export {
  DeviceItem,
}
