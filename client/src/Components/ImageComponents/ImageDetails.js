import axios from 'axios';
import fileDownload from 'js-file-download';
import React from 'react';

const ImageDetails = ({ products }) => {
   const handleDownload = async (url, filename) => {
      const res = await axios.get(url, {
         responseType: 'blob',
      });
      fileDownload(res.data, filename);
   };
   return (
      <>
         <div className="imageDetails">
            <div className="imageDetails__title">{products[0]?.title}</div>
            <div className="imageDetails__author">
               by <span>Pinterest</span>
            </div>
            <div className="imageDetails__description">{products[0]?.description}</div>
            <div className="imageDetails__size">
               Original size: <span>{(products[0]?.image.bytes / 1024).toFixed(1)} KB</span>
            </div>
            <div className="imageDetails__dimensions">
               Dimensions:{' '}
               <span>
                  {products[0]?.image.width} x {products[0]?.image.height}
               </span>
            </div>
            <div className="imageDetails__type">
               Items type:
               <span> {products[0]?.image.format}</span>
            </div>
            <div className="imageDetails__category">
               Category: <span>{products[0]?.category}</span>
            </div>
            <div className="imageDetails__button">
               {products[0]?.category === 'Free' && products[0]?.subCategory === 'Free' ? (
                  <button
                     type="button"
                     onClick={() =>
                        handleDownload(
                           products[0]?.image.url,
                           `${products[0]?.image.original_filename}.${products[0]?.image.format}`
                        )
                     }
                  >
                     Download
                  </button>
               ) : (
                  <button type="button">${products[0]?.price} • Add to cart</button>
               )}
            </div>
         </div>
      </>
   );
};

export default ImageDetails;
