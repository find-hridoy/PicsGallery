/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import Zoom from 'react-img-zoom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import ImageDetails from '../Components/ImageComponents/ImageDetails';
import Layout from '../Components/Layout/Layout';
import { detailsProduct } from '../Redux/actions/productActions';
import Loading from '../Utils/Loading&Error/Loading';

const ImageScreen = () => {
   const { id } = useParams();

   // Toast notification
   const { addToast } = useToasts();

   // redux element
   const dispatch = useDispatch();

   const productDetails = useSelector((state) => state.productDetails);
   const { loading, error, product } = productDetails;

   useEffect(() => {
      if (error) {
         addToast(error, {
            appearance: 'error',
            autoDismiss: true,
         });
      } else {
         dispatch(detailsProduct(id));
      }
   }, [dispatch, error, addToast, id]);

   return (
      <Layout>
         {loading ? (
            <Loading type="BallTriangle" color="#1185ed" />
         ) : (
            <div className="imageScreen">
               <div className="imageScreen__area">
                  <div className="imageScreen__image">
                     <Zoom img={product?.image.secure_url} zoomScale={3} height={400} width={220} />
                  </div>
                  <div className="imageScreen__details">
                     <ImageDetails product={product} />
                  </div>
               </div>
               <div className="imageScreen__description" />
            </div>
         )}
      </Layout>
   );
};

export default ImageScreen;
