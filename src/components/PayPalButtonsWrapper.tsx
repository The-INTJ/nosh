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

  /*     const onApprove = (data: any, actions: any) => {
    // setLoading('Finishing transaction ...');

    actions.order.get().then((orderDetails: any) => {
      // ORDER IS APPROVED BUT NOT COMPLETED YET
      // console.log({ orderDetails });

      actions.order.capture().then((data: any) => {
        // ORDER IS COMPLETED, MONEY SENT
        // setOrderDetails({ data });
        // setLoading(null);
      });
    });
  }; */

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
