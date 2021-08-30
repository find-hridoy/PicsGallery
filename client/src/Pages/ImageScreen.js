import React from 'react';
import Zoom from 'react-img-zoom';
import { useParams } from 'react-router-dom';
import ImageDetails from '../Components/ImageComponents/ImageDetails';
import Layout from '../Components/Layout/Layout';
import allImage from '../Data/imageData';

const ImageScreen = () => {
   const { id } = useParams();
   // eslint-disable-next-line eqeqeq
   const imageData = allImage.filter((images) => images.id == id);
   console.log(imageData);
   return (
      <Layout>
         <div className="imageScreen">
            <div className="imageScreen__area">
               <div className="imageScreen__image">
                  <Zoom img={imageData[0].img} zoomScale={3} height={400} width={220} />
               </div>
               <div className="imageScreen__details">
                  <ImageDetails />
               </div>
            </div>
            <div className="imageScreen__description" />
         </div>
      </Layout>
   );
};

export default ImageScreen;
