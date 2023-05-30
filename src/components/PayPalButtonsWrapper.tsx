import {
  PayPalScriptProvider,
  PayPalButtons,
  FUNDING,
} from "@paypal/react-paypal-js";
import { PayPalWrapperProps } from "@lib/definitions/props";
import { convertPriceToString } from "@lib/helpers";
import styles from "@styles/components/PayPalButtonsWrapper.module.scss";
import { unlockSelectedHymnal } from "@lib/firebase-functions";

const PayPalButtonsWrapper = (props: PayPalWrapperProps) => {
  const clientID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "";

  if (!clientID) {
    console.error("PayPal client ID not found");
    return null;
  }

  const createOrder = (data: any, actions: any) => {
    return actions.order
      .create({
        application_context: {
          shipping_preference: "NO_SHIPPING",
        },
        purchase_units: [
          {
            description: props.book,
            amount: {
              currency: "USD",
              value: convertPriceToString(props.price),
            },
          },
        ],
      })
      .then((orderID: any) => {
        return orderID;
      });
  };

  const onApprove = (data: any, actions: any) => {
    return actions.order.capture().then(function (details: any) {
      console.log(props.book, props.user);
      unlockSelectedHymnal(props.book, props.user);
      alert("Transaction completed by " + details.payer.name.given_name + ".");
    });
  };

  const onCancel = () => {
    // setCancelled(true);
    alert("Canceled");
  };

  return (
    <div className={styles.container}>
      <PayPalScriptProvider
        options={{
          "client-id": clientID,
        }}
      >
        <PayPalButtons
          fundingSource={FUNDING.PAYPAL}
          createOrder={createOrder}
          onApprove={onApprove}
          onCancel={onCancel}
        />
        <PayPalButtons
          fundingSource={FUNDING.CARD}
          createOrder={createOrder}
          onApprove={onApprove}
          onCancel={onCancel}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default PayPalButtonsWrapper;
