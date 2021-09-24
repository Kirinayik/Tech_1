import { Grid } from "@chakra-ui/react";

import { Post } from "./Post";

export const List = ({ images, comments, setComments }) => {
  return (
    <Grid
      templateColumns="repeat(auto-fit, minmax(229px, 1fr))"
      justifyItems="center"
      alignContent="flex-start"
      gridColumnGap="21px"
      gridRowGap="30px"
      flex="1 1 auto"
    >
      {images.map((image) => {
        return (
          <Post
            comments={comments}
            setComments={setComments}
            images={images}
            key={image.id}
            image={image}
          />
        );
      })}
    </Grid>
  );
};
