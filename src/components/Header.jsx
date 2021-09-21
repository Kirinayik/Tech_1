import { Flex, Heading } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex pt="15px" mb="30px" justifyContent="center">
      <Heading
        textTransform="uppercase"
        fontWeight="400"
        fontFamily="Roboto"
        fontSize="36"
        as="h1"
      >
        Test App
      </Heading>
    </Flex>
  );
};
