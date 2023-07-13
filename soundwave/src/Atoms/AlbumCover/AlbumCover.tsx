import { Image } from "semantic-ui-react";

export const AlbumCover = () => {
  return (
    <Image
      centered
      size="medium"
      fluid
      src="/covers.jpg"
      alt="Album Covers"
      className="album-cover"
    />
  );
};
