import React from 'react';
import CountUp from 'react-countup';

const FooterCounter = () => (
   <div className="footerCounter">
      <CountUp start={0} end={2300} delay={0}>
         {({ countUpRef }) => (
            <div className="footerCounter__item">
               <span className="footerCounter__counter" ref={countUpRef} />
               <span className="footerCounter__text"> Products</span>
            </div>
         )}
      </CountUp>
      <CountUp start={0} end={7050} delay={0}>
         {({ countUpRef }) => (
            <div className="footerCounter__item">
               <span className="footerCounter__counter" ref={countUpRef} />
               <span className="footerCounter__text"> Members</span>
            </div>
         )}
      </CountUp>
      <CountUp start={0} end={1700} delay={0}>
         {({ countUpRef }) => (
            <div className="footerCounter__item">
               <span className="footerCounter__counter" ref={countUpRef} />
               <span className="footerCounter__text"> Vendors</span>
            </div>
         )}
      </CountUp>
   </div>
);

export default FooterCounter;
