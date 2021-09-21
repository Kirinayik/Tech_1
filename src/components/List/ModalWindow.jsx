import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Flex,
  Box,
  Grid,
  Button,
  Image,
  Input,
} from "@chakra-ui/react";

export const ModalWindow = ({
  image,
  onClose,
  isOpen,
  addComment,
  comments,
  input,
  handleChange,
  handleKeyPress,
}) => {
  const isComments = comments.length > 0;

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />

          <ModalBody p="30px">
            <Grid
              templateColumns="331px 190px"
              gridColumnGap="14px"
              fontFamily="Roboto"
              fontSize="13px"
            >
              <Flex flexDirection="column">
                <Image src={image.url} mb="30px" />

                <Flex flexDirection="column">
                  <Input
                    onKeyDown={handleKeyPress}
                    value={input}
                    onChange={handleChange}
                    mb="19px"
                  />
                  <Button
                    onClick={addComment}
                    border="1px solid #4997D0"
                    backgroundColor="#4997D0"
                    color="#fff"
                    _hover={{ bg: "#fff", color: "#4997D0" }}
                  >
                    Оставить комментарий
                  </Button>
                </Flex>
              </Flex>

              <Flex flexDirection="column">
                <Box>
                  {isComments ? (
                    comments.map((comment, idx) => {
                      return comment.id === image.id ? (
                        <Box key={idx.toString()} mb="20px">
                          <Box as="time" color="#999">
                            {comment.date}
                          </Box>
                          <Box as="p">{comment.text}</Box>
                        </Box>
                      ) : null;
                    })
                  ) : (
                    <Box as="p" color="#999">
                      Комментарии отсутствуют
                    </Box>
                  )}
                </Box>
              </Flex>
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
