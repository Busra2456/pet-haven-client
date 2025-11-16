import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckoutForms from "./CheckoutForms";
import { loadStripe } from "@stripe/stripe-js";
  //TODO: add publishable kay
      const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);  //TODO: add publishable kay
const Payment = () => {
      return (
            <div>
            <SectionTitle heading="Payment" subHeading="Please pay to eat"></SectionTitle>
               <div>
                  <Elements stripe={stripePromise}>
                        <CheckoutForms></CheckoutForms>

                  </Elements>
               </div>   
            </div>
      );
};

export default Payment;