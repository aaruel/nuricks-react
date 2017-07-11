import React from 'react';

import Backend from './Backend.js';
import Popup from './Popup.js';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';

// Buy Tickets modal
@inject('store') @observer
class BuyTicket extends React.Component {
    constructor(props) {
        super(props);
        var cnt = 0;
        if (props.buyout) {
            cnt = this.props.ticket.numberNeededToSell - this.props.ticket.numberSold;
            cnt = this.props.ticket.numberSold >= this.props.ticket.numberNeededToSell ? 0 : cnt;
        }
        this.state = {
            counter: cnt,
            total: cnt * props.ticket.cost
        }
    }

    actCounter(num) {
        const amount =  num + this.state.counter;
        if (amount >= 0) {
            this.setState({counter: amount, total: this.props.ticket.cost * amount})
        }
    }

    async confirm() {
        const res = await Backend.initiateTransaction(
            this.state.counter,
            this.props.ticket.cost,
            this.props.store.user.customer_id,
            this.props.store.user.isUser ? true : false,
            this.props.ticket.id
        );
        if (res.status == "1") {
            Backend.sendEmail(
                this.props.ticket,
                toJS(this.props.store.user),
                this.props.user.stageName,
                this.state.counter,
                res.transaction_id
            );
            Popup.trigger("#ticketSuccess");
        }
        else {
            Popup.trigger("#ticketError");
        }
        this.props.close();
    }

    render() {
        const pointer = {
            cursor: "pointer",
            userSelect: "none"
        }

        var p_method = null;
        if (this.props.store.user.card_digits) {
            p_method = "Card";
        }
        else {
            p_method = "Paypal";
        }

        return (
            <div className="lightbox" id="checkoutLightbox">
                <div className="modal checkout">
                    <i onClick={() => this.props.close()} className="fa fa-times exit"></i>
                    <h1>Checkout</h1>
                    <h2>Number of tickets:</h2>
                    <div className="ticketCounter">
                        <span style={pointer} onClick={() => this.actCounter.bind(this)(-1)}>-</span>
                        <span>{this.state.counter}</span>
                        <span style={pointer} onClick={() => this.actCounter.bind(this)(+1)}>+</span>
                    </div>
                    <h2>Total: ${this.state.total}</h2>
                    <h3>Tickets will be sent to: {this.props.store.user.email}</h3>
                    <h3>Payment method: {p_method}</h3>
                    <button onClick={this.confirm.bind(this)}>Confirm</button>
                </div>
            </div>
        );
    }
}

export default BuyTicket
