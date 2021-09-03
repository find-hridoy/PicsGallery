/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import Zoom from 'react-img-zoom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import ImageDetails from '../Components/ImageComponents/ImageDetails';
import Layout from '../Components/Layout/Layout';
import { listProduct } from '../Redux/actions/productActions';
import Loading from '../Utils/Loading&Error/Loading';

const ImageScreen = () => {
   const { id } = useParams();

   // Toast notification
   const { addToast } = useToasts();

   // redux element
   const dispatch = useDispatch();

   const productList = useSelector((state) => state.productList);
   const { loading, error, products } = productList;

   useEffect(() => {
      if (error) {
         addToast(error, {
            appearance: 'error',
            autoDismiss: true,
         });
      } else {
         dispatch(listProduct());
      }
   }, [dispatch, error, addToast]);

   const productDetails = products?.filter((product) => product._id === id);
   return (
      <Layout>
         {loading ? (
            <Loading type="BallTriangle" color="#1185ed" />
         ) : (
            <div className="imageScreen">
               <div className="imageScreen__area">
                  <div className="imageScreen__image">
                     <Zoom
                        img={productDetails[0]?.image.secure_url}
                        zoomScale={3}
                        height={400}
                        width={220}
                     />
                  </div>
                  <div className="imageScreen__details">
                     <ImageDetails products={productDetails} />
                  </div>
               </div>
               <div className="imageScreen__description" />
            </div>
         )}
      </Layout>
   );
};

export default ImageScreen;
