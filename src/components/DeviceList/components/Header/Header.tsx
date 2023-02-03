import { Button, Flex, Text } from "@chakra-ui/react";
import { Add } from "@/assets";

type Props = {
  onClick: VoidFunction;
}

const Header = ({ onClick }: Props) => (
  <Flex justifyContent="space-between" alignItems="center">
    <Text fontSize="xl" fontWeight={500}>
      Devices
    </Text>
    <Button
      backgroundColor="ninja.button.primary"
      color="white"
      fill="white"
      variant="solid"
      size="sm"
      onClick={onClick}
      _hover={{
        backgroundColor: 'ninja.button.primary',
        opacity: .8
      }}
    >
      <Add/>
      <Text ml={2}>
        Add Device
      </Text>
    </Button>
  </Flex>
);

export {
  Header,
}
