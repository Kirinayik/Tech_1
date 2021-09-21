import { Box, Flex } from "@chakra-ui/layout";

export const Footer = () => {
  return (
    <Box borderTop="1px solid #ccc" as="footer">
      <Flex justifyContent="center" alignItems="center">
        <Box fontFamily="Roboto" color="#ccc" py="20px" as="p">
          © 2021
        </Box>
      </Flex>
    </Box>
  );
};
