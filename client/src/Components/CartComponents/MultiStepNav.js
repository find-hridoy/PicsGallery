import React from 'react';

const MultiStepNav = ({ step1, step2, step3 }) => (
   <div className="multiStepNav">
      {step1 ? (
         <button type="button">1. Login</button>
      ) : (
         <button type="button" disabled>
            1. Login
         </button>
      )}

      {step2 ? (
         <button type="button">2. Payment Method</button>
      ) : (
         <button type="button" disabled>
            2. Payment Method
         </button>
      )}

      {step3 ? (
         <button type="button">3. Place Order</button>
      ) : (
         <button type="button" disabled>
            3. Place Order
         </button>
      )}
   </div>
);

export default MultiStepNav;
