import React from 'react';

import Backend from '../components/Backend.js';
import Content from '../components/Content.js';

import { inject, observer } from 'mobx-react';
import braintreeDrop from 'braintree-web-drop-in';
import braintree from 'braintree-web';
// import paypal from 'paypal-checkout';

// Stage 0 : Email not entered

// Stage 1 : Enter Card Number or Paypal

// Stage 2 : Manage panel

const AccountStage0 = () => (
    <div className="userSettings">
        <form id="nonceForm" action="" className="emailConfirm">
            <h2>Please enter your email before you can purchase tickets</h2>
            <input id="emailInput" type="text" />
            <button>Submit</button>
        </form>
    </div>
)

@inject('store') @observer
class AccountStage1 extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const user = this.props.store.user;
        this.paypal = require('paypal-checkout');
        this.toggleCard();
        this.togglePaypal();
    }

    async toggleCard() {
        var _this = this;
        const user = this.props.store.user;
        const clientToken = await Backend.getClientToken();
        const submitButton = document.querySelector("#submit-button");
        braintreeDrop.create({
            authorization: clientToken.tok,
            selector: '#dropin-container'
        }, (err, dropinInstance) => {
            if (err) {
                console.error(err);
                return;
            }
            submitButton.addEventListener('click', () => {
                dropinInstance.requestPaymentMethod(async (err, payload) => {
                    if (err) {
                        console.error(`CARD ERROR: ${err}`)
                    }

                    const payState = payload;
                    const nonce = {
                        payment_method_nonce: payload.nonce
                    }

                    var info = null;
                    if (user.isMusician) {
                        info = await Backend.createPaymentInformationMusician(user.fbid, nonce)
                    }
                    else if (user.isUser) {
                        info = await Backend.createPaymentInformationUser(user.fbid, nonce);
                    }
                    const r_user = info.user;

                    _this.props.store.setProps(r_user);
                });
            });
        });
    }

    async togglePaypal() {
        const _this = this;
        const user = this.props.store.user;
        const clientToken = await Backend.getClientToken();
        braintree.client.create({
            authorization: clientToken.tok
        }, (clientErr, clientInstance) => {
            if (clientErr) {
                return console.error("Paypal client error: ", clientErr);
            }
            braintree.paypalCheckout.create({
                client: clientInstance
            }, (paypalCheckoutErr, paypalCheckoutInstance) => {
                if (paypalCheckoutErr) {
                    return console.error("Paypal error 2: ", paypalCheckoutErr);
                }
                _this.paypal.Button.render({
                    env: 'sandbox',
                    payment: () => {
                        return paypalCheckoutInstance.createPayment({
                            "flow": "vault"
                        });
                    },
                    onAuthorize: (data, actions) => {
                        return paypalCheckoutInstance.tokenizePayment(data)
                        .then(async (payload) => {
                            console.log(payload);
                            if (payload.nonce) {
                                var payState = payload;
                                var u = {
                                    payment_method_nonce: payload.nonce
                                }

                                var result = null;
                                if (user.isMusician) {
                                    result = await Backend.createPaymentInformationMusician(user.fbid, u);
                                }
                                else if (user.isUser) {
                                    result = await Backend.createPaymentInformationUser(user.fbid, u);
                                }
                                _this.props.store.setProps(result.user);
                            }
                            else {
                                console.log("Nonce not recieved");
                            }
                        });
                    },

                    onCancel: function (data) {
                        console.log('checkout.js payment cancelled', data);
                    },

                    onError: function (err) {
                        console.error('checkout.js error', err);
                    }
                }, "#paypal-button").then(() => {

                });
            });
        });
    }

    render() {
        return (
            <div>
                <div onClick={this.toggleCard.bind(this)} className="paymentOption newPO">
                    <h2>Add Card</h2>
                    <div id="dropin">
                        <div id="dropin-container"></div>
                        <button id="submit-button">Add Card</button>
                    </div>
                </div>
                <div className="paymentOption newPO">
                    <h2>Add Paypal</h2>
                    <div id="paypal-button"></div>
                </div>
            </div>
        );
    }
}

@inject('store') @observer
class AccountStage2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {page: "payment", transactions: []};
    }

    componentDidMount() {
        this.getTransactions();
    }

    async getTransactions() {
        const user = this.props.store.user;
        const history = await Backend.getTransactionHistory(user.customer_id);
        this.setState({transactions: history.transactions});
    }

    async deleteCustomerPayment() {
        const user = this.props.store.user;
        var response = null;
        if (user.isMusician) {
            response = await Backend.deleteCustomerPaymentInfoMusician(user.fbid);
        }
        else if (user.isUser) {
            response = await Backend.deleteCustomerPaymentInfoUser(user.fbid);
        }

        if (response.status) {
            this.props.store.removeProp("customer_id");
        }
    }

    render() {
        const user = this.props.store.user;
        var page = null;
        if (this.state.page == "settings") {
            page = (
                <AccountStage0 />
            )
        }
        else if (this.state.page == "payment") {
            var type = (<h1><i className="fa fa-paypal"></i> Paypal</h1>);
            if (user.card_digits) {
                type = (<h1><i className="fa fa-credit-card"></i> Card ending in **{user.card_digits}</h1>);
            }
            page = (
                <div className="paymentOption">
                    <span onClick={this.deleteCustomerPayment.bind(this)} className="deletePO">DELETE</span>
                    {type}
                </div>
            )
        }
        else if (this.state.page == "history") {
            page = (
                <table className="transactionHistory">
                    <thead>
                        <tr>
                            <th>Event</th>
                            <th>Total</th>
                            <th>Order Placed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.transactions.map(
                            t => (<tr>
                                    <td>Event #1</td>
                                    <td>{t.amount} + {t.serviceFeeAmount ? t.serviceFeeAmount : 0} Service Fee</td>
                                    <td>{t.createdAt}</td>
                                </tr>)
                        )}
                    </tbody>
                </table>
            )
        }
        return (
            <div>
                <div className="userTabs">
                    <span className={`tab ${this.state.page == "settings" ? "activeTab" : ""}`}
                          onClick={() => this.setState({page: "settings"})}>
                          Settings
                    </span>
                    <span className={`tab ${this.state.page == "payment" ? "activeTab" : ""}`}
                          onClick={() => this.setState({page: "payment"})}>
                          Payment
                    </span>
                    <span className={`tab ${this.state.page == "history" ? "activeTab" : ""}`}
                          onClick={() => this.setState({page: "history"})}>
                          Transaction History
                    </span>
                </div>
                {page}
            </div>
        )
    }
}

@inject('store') @observer
class Account extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const user = this.props.store.user;
        var display = null;

        if (!user.email) {
            display = (<AccountStage0 />);
        }
        else if (!user.customer_id) {
            display = (<AccountStage1 />);
        }
        else {
            display = (<AccountStage2 />);
        }

        return (
            <div>
                {display}
                <button className="deleteProfile"><i className="fa fa-times-circle"></i> Delete Profile</button>
            </div>
        );
    }
}

// PROVIDER
class AccountProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Content wrapper="userWrapper">
                <Account />
            </Content>
        );
    }
}

export default AccountProvider
