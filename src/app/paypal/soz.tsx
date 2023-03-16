import React from "react";

class Soz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false,
    };
  }

  // componentDidMount() {
  //     this.setState({
  //         isEnabled: true
  //     })
  //     paypal.Button.render(
  //         {
  //             env: 'sandbox',
  //             client: {
  //                 sandbox: "thenumber",
  //                 production: 'xxxxxxxxxxxxxxxx'
  //             },

  //             payment: function (data, actions) {
  //                 return actions.payment.create({
  //                     transactions: [
  //                         {
  //                             amount: {
  //                                 total: '1.00',
  //                                 currency: 'USD'
  //                             }
  //                         }
  //                     ]
  //                 })
  //             },
  //             commit: true,

  //             onAuthorize: function (data, actions) {
  //                 return actions.payment.execute().then(function (response) {
  //                     console.log('Payment completed.')
  //                 })
  //             },

  //             onCancel: function (data) {
  //                 console.log('The payment was canceled')
  //             }
  //         },
  //         '#paypal-express-btn'
  //     )
  // }
  // render() {
  //     return (
  //         <div>
  //             <Header />
  //             {this.state.isEnabled ?
  //                 <div id="paypal-express-btn" />
  //             :
  //                 'Loading...'
  //             }
  //         </div>
  //     )
  // }

  render() {
    return (
      <div>
        <div className="center">
          <h1>Purchase Songs of Zion</h1>
          <button className="default-button">
            <em>P U R C H A S E</em>
          </button>
        </div>
      </div>
    );
  }
}

export default Soz;
