import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import DashboardLayout from '../Components/DashboardComponents/DashboardLayout';
import { signUpSchema } from '../Utils/Validation/ValidationSchema';

const AddProductScreen = () => {
   // React hook form own state
   const {
      handleSubmit,
      register,
      formState: { errors },
   } = useForm({
      mode: 'onChange',
      resolver: yupResolver(signUpSchema),
   });

   // React hook form data submit
   const onSubmit = async (data) => {
      console.log(data);
   };
   console.log('add product screen');
   return (
      <DashboardLayout>
         <div className="addProduct">
            <div className="addProduct__title">Add Product</div>
            <div className="addProduct__form">
               <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="addProduct__field">
                     <span className="addProduct__label">Title</span>
                     <input type="text" {...register('title')} />
                     {errors.title && <span className="addProduct__">{errors.title.message}</span>}
                  </div>

                  <div className="addProduct__field">
                     <span className="addProduct__label">Description</span>
                     <input type="text" {...register('description')} />
                     {errors.description && (
                        <span className="addProduct__">{errors.description.message}</span>
                     )}
                  </div>

                  <div className="addProduct__field">
                     <span className="addProduct__label">Category</span>
                     <input type="text" {...register('category')} />
                     {errors.category && (
                        <span className="addProduct__">{errors.category.message}</span>
                     )}
                  </div>

                  <div className="addProduct__divider">
                     <div className="addProduct__field">
                        <span className="addProduct__label">Price</span>
                        <input type="text" {...register('price')} />
                        {errors.price && (
                           <span className="addProduct__">{errors.price.message}</span>
                        )}
                     </div>

                     <div className="addProduct__field">
                        <span className="addProduct__label">Image</span>
                        <input type="text" {...register('image')} />
                        {errors.image && (
                           <span className="addProduct__">{errors.image.message}</span>
                        )}
                     </div>
                  </div>

                  <button type="submit" className="addProduct__button">
                     Add Product
                  </button>
               </form>
            </div>
         </div>
      </DashboardLayout>
   );
};

export default AddProductScreen;
