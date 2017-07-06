import React from 'react';

import Popup from './Popup.js';
import { LoadingRelative } from '../components/Loading.js';

import Backend from '../components/Backend.js';
import { inject, observer } from 'mobx-react';
import { addClass, removeClass } from '../components/Utils.js';
import { autorun } from 'mobx';

// Join Show modal
class JoinShow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="modal joinShowModal" style={sty}>
            	<i onClick={this.props.close()} className="fa fa-times exit"></i>
            	<h1><i className="fa fa-chevron-down rotate"></i> Terms and Conditions</h1>
            	<p>By joining this event you are agreeing to the Nu-Ricks terms of service. <a href="">Read TOS.</a></p>
            	<hr />
            	<h1><i className="fa fa-chevron-down"></i> Event Details</h1>
            	<h3>Must be over {this.props.event.ageRequirement}</h3>
            	<h3>Need to sell {this.props.event.numberNeededToSell} tickets</h3>
            	<h3>Located {this.props.event.street_name} {this.props.event.city}, {this.props.event.state} {this.props.event.zip_code}</h3>
            	<h3>Sound check at {this.props.event.doorsOpen}</h3>
            	<h3>Show starts at {this.props.event.ShowStarts}</h3>
            	<p></p>
            	<hr />
            	<button>Join Event</button>
            </div>
        )
    }
}

// SHOW PANEL
@inject('store') @observer
class Shows extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: true,
            loading: true,
            events: [],
            shows: [],
            selectedEvent: null,
            selectedTicket: null,
            buyout: false
        }
    }

    myShowsPage() {
        addClass('.myShows', 'activeTab');
        this.setState({page: true});
        removeClass('.availableShows', 'activeTab');
    }

    availableShowsPage() {
        addClass('.availableShows', 'activeTab');
        this.setState({page: false});
        removeClass('.myShows', 'activeTab');
    }

    componentDidMount() {
        // on store change fire
        autorun(() => {
            const fbid = this.props.store.user.fbid;
            if (this.state.loading && fbid) {
                Promise.all([
                    Backend.getPossibleEvents(),
                    Backend.getMusicianTickets(fbid)
                ])
                .then(([events, tickets]) => {
                    this.setState({loading: false});
                    if (events.status == "1") {
                        this.setState({events: events.events});
                    }
                    if (tickets.status == "1") {
                        // get events from tickets
                        Promise.all(tickets.tickets.map(
                            t => Backend.getEventInfoFromID(t.EventId)
                        ))
                        .then((events) => {
                            // set my shows plus map number sold in each ticket
                            this.setState({
                                shows: events.map(
                                    (s, i) => ({
                                        ...s.event_info,
                                        numberSold: tickets.tickets[i].numberSold
                                    })
                                )
                            });
                        });
                    }
                });
            }
        });
    }

    joinShowModalShow(e) {
        this.setState({selectedEvent: e});
    }
    joinShowModalClose() {
        this.setState({selectedEvent: null});
    }

    buyTicketModalShow(e, buyout) {
        const bo = buyout ? true : false;
        this.setState({selectedTicket: e, buyout: bo})
    }
    buyTicketModalClose() {
        this.setState({selectedTicket: null});
    }

    render() {
        const user = this.props.store.user;
        var page = null;

        if (this.state.loading) {
            // Loading page
            page = (
                <div className="showList" style={{height: "400px"}}>
                    <LoadingRelative />
                </div>
            )
        }
        else if (this.state.page) {
            // My Shows page

            var display = null;
            // if there are shows joined and active
            if (this.state.shows.length) {
                var modal = null
                if (this.state.selectedTicket) {
                    modal = (<BuyTicket ticket={this.state.selectedTicket} buyout={this.state.buyout} close={this.buyTicketModalClose.bind(this)} />);
                }
                display = (
                    <div className="showList myShowsList">
                        {this.state.shows.map(
                            s => {
                                var meta = (
                                    <div>
                                        <a className="btn" onClick={() => this.buyTicketModalShow.bind(this)(s, true)}>Buyout Tickets</a>
                                        <h3 className="progress">
                                            Sold: <span className="sold">{s.numberSold}/{s.numberNeededToSell}</span>
                                        </h3>
                                    </div>
                                )
                                if (this.props._public) {
                                    meta = null;
                                }
                                return (
                                <div key={s.createdAt} className="showBlock">
                                    <a style={{backgroundImage: `url("${s.image_url}")`}} className="showImg"></a>
                                    <div className="showDetails">
                                        <h1></h1>
                                        <h2>Headliner: {s.headliner}</h2>
                                        <h3>Address: {s.street_name}, {s.city}, {s.state} {s.zip_code}</h3>
                                        <h3>Venue: {s.venue}</h3>
                                        <h3>${s.extraAtDoor} at door</h3>
                                        <a className="btn" onClick={() => this.buyTicketModalShow.bind(this)(s)}>Buy Ticket</a>
                                        {meta}
                                    </div>
                                </div>);
                            }
                        )}
                        {modal}
                    </div>
                )
            }
            else {
                display = (
                    <div className="showList myShowsList">
                        <div>You are currently not apart of any shows.</div>
                    </div>
                )
            }

            page = display;
        }
        else {
            // Available Shows page

            var msgs = [];

            if (!user.email) {
                msgs.push(
                    <div key="noeandp">You must enter your email and phone number to be eligible for shows.</div>
                );
            }
            if (!user.verified) {
                msgs.push(
                    <div key="noterms">Please accept the terms of service before continuing.</div>
                );
            }
            if (this.state.shows.length) {
                msgs.push(
                    <div key="notime">You can only be a part of one show at a time.</div>
                )
            }
            if (!this.state.events.length) {
                msgs.push(
                    <div key="noshow">There are currently no possible shows.</div>
                )
            }
            if (!msgs.length) {
                msgs.push(...this.state.events.map(
                    s => (
                        <div key={s.createdAt}>
                            <a style={{backgroundImage: `url("${s.image_url}")`}} className="showImg"></a>
                            <div className="showDetails">
                                <h1></h1>
                                <h2>Headliner: {s.headliner}</h2>
                                <h3>Address: {s.street_name}, {s.city}, {s.state} {s.zip_code}</h3>
                                <h3>Venue: {s.venue}</h3>
                                <h3>${s.extraAtDoor} at door</h3>
                                <a onClick={() => this.joinShowModalShow.bind(this)(s)} className="btn">Join Show</a>
                            </div>
                        </div>
                    )
                ));
            }

            var modal = null;
            if (this.state.selectedEvent) {
                modal = (<JoinShow close={this.joinShowModalClose.bind(this)} event={this.state.selectedEvent} />);
            }

            page = (
                <div className="showList availableShowsList">
                    {msgs.map(m => m)}
                    {modal}
                </div>
            )
        }

        var tabs = (
            <span className="showTabs">
                <span onClick={this.myShowsPage.bind(this)} className="tab myShows activeTab">My Shows</span>
                <span onClick={this.availableShowsPage.bind(this)} className="tab availableShows">Available Shows</span>

                {page}

            </span>
        );

        if (this.props._public) {
            tabs = (
                <span className="showTabs">

                    {page}

                </span>
            )
        }

        return (
        <div className="container half shows">
            {tabs}
        </div>)
    }
}

export default Shows
