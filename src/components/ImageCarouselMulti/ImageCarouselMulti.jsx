//react
import React from "react";

//components
import { MainMenuPhotos } from "../../ImageCarouselPaths";

class PhotosViewMulti extends React.Component {
  render(props) {
    return (
      <>
        {/* {MainMenuPhotos.map(item => (
       
                    <img src={item.image} width="100%" heigh="100%"/>
                    ))} */}
        {<img src={MainMenuPhotos[1].image} width="100%" heigh="100%" />}
      </>
    );
  }
}

export default PhotosViewMulti;
