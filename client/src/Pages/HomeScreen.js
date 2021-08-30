import React from 'react';
import Banner from '../Components/HomeComponents/Banner';
import BannerMarquee from '../Components/HomeComponents/BannerMarquee';
import Products from '../Components/HomeComponents/Products';
import Layout from '../Components/Layout/Layout';

const HomeScreen = () => (
   <Layout>
      <Banner />
      <BannerMarquee />
      <Products />
   </Layout>
);

export default HomeScreen;
