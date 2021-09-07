/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useForm } from 'react-hook-form';
import MultiStepNav from '../Components/CartComponents/MultiStepNav';
import Header from '../Components/Layout/Header';
import cardImage from '../Data/images/payment/payment_process-card.png';
import paypalImage from '../Data/images/payment/payment_process-paypal.png';

const PaymentMethod = () => {
   // const [paymentMethod, setPaymentMethod] = useState('Credit Card');
   // console.log(paymentMethod);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   //  Toast notification
   // const { addToast } = useToasts();

   // if (errors.paymentMethod) {
   //    addToast('Please select payment method.', {
   //       appearance: 'error',
   //       autoDismiss: true,
   //    });
   // }
   const onSubmit = (data) => console.log(data);
   console.log(errors);
   return (
      <>
         <Header />
         <MultiStepNav step1 step2 />
         <div className="paymentMethod">
            <div className="paymentMethod__title">Payment Selection</div>
            <form onSubmit={handleSubmit(onSubmit)}>
               <label className="paymentMethod__radio">
                  <input
                     {...register('paymentMethod', { required: true })}
                     type="radio"
                     value="Credit Card"
                  />
                  <div className="paymentMethod__radio-label">
                     <div className="paymentMethod__radio-divider">
                        Credit Card
                        <img src={cardImage} alt="Card Img" />
                     </div>
                     <div className="paymentMethod__label-description">
                        Safe money transfer using your bank account. Vis, Maestro, Discover,
                        American Express.
                     </div>
                  </div>
               </label>

               <label className="paymentMethod__radio">
                  <input
                     {...register('paymentMethod', { required: true })}
                     type="radio"
                     value="PayPal"
                  />
                  <div className="paymentMethod__radio-label">
                     <div className="paymentMethod__radio-divider">
                        PayPal
                        <img className="paypal__image" src={paypalImage} alt="Paypal Img" />
                     </div>
                     <div className="paymentMethod__label-description">
                        You will be redirected to PayPal website to complete your purchase securely.
                     </div>
                  </div>
               </label>

               <button type="submit">Continue</button>
            </form>
         </div>
      </>
   );
};

export default PaymentMethod;
