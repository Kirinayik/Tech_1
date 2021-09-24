import { useEffect, useState } from "react";
import { Container } from "@chakra-ui/react";

import { Header } from "./components/Header";
import { List } from "./components/List/List";
import { Footer } from "./components/Footer";

function App() {
  const [images, setImages] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://boiling-refuge-66454.herokuapp.com/images")
      .then(response => response.json())
      .then(data => setImages(data));
  }, [setImages]);

  return (
    <Container
      maxW="760px"
      px="15px"
      minH="100vh"
      display="flex"
      flexDirection="column"
    >
      <Header />
      <List comments={comments} setComments={setComments} images={images} />
      <Footer />
    </Container>
  );
}

export default App;
