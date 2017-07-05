import React from 'react';
import { fadeIn, fadeOut } from './Animation.js';
import { inject, observer } from 'mobx-react';

@inject('store') @observer
export default class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static trigger() {
        fadeIn(".popupWrapper");
        setTimeout(() => {
            fadeOut(".popupWrapper");
        }, 5000);
    }

    render() {
        var cont = null;
        if (this.props.type == "emailSent") {
            cont = (
                <div className="popup puSuccess">
            		Purchase complete!
                    <br/>
            		Ticket sent to {this.props.store.user.email}
            	</div>
            )
        }
        if (this.props.type == "editSuccess") {
            cont = (
                <div className="popup puSuccess">
            		Edit Successful
            	</div>
            )
        }
        return (
            <div className="popupWrapper" style={{opacity: 0, pointerEvents: "none"}}>
            	{cont}
            </div>
        );
    }
}
