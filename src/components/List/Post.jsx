import { Box, Image, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";

import { ModalWindow } from "./ModalWindow";

export const Post = ({ image, setComments, comments }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const addComment = () => {
    if (input) {
      setComments([
        ...comments,
        {
          id: image.id,
          text: input,
          date: currentDate(new Date()),
        },
      ]);
    }

    function currentDate(date) {
      const year = date.getFullYear();
      const day = date.getDate();
      const month = date.getMonth();

      return `${day < 10 ? "0" + day : day}.${
        month < 10 ? "0" + month : month
      }.${year}`;
    }

    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") addComment();
  };

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <Box onClick={onOpen} cursor="pointer" key={image.id}>
      <Image src={image.url} alt="" />
      <ModalWindow
        handleKeyPress={handleKeyPress}
        handleChange={handleChange}
        input={input}
        addComment={addComment}
        setComments={setComments}
        comments={comments}
        onClose={onClose}
        isOpen={isOpen}
        image={image}
      />
    </Box>
  );
};
