import React from 'react';
import allImage from '../../Data/imageData';
import ProductSlider from './ProductSlider';

const Products = () => (
   <div className="products">
      <div className="products__premium">
         <p>Premium Photos</p>
         <ProductSlider products={allImage} />
      </div>
      <br /> <br /> <br />
      <div className="products__premium">
         <p>Bestselling</p>
         <ProductSlider products={allImage} />
      </div>
      <br /> <br /> <br />
      <div className="products__premium">
         <p>Wallpaper</p>
         <ProductSlider products={allImage} />
      </div>
      <br /> <br /> <br />
      <div className="products__premium">
         <p>Mobile Screen</p>
         <ProductSlider products={allImage} />
      </div>
   </div>
);

export default Products;
