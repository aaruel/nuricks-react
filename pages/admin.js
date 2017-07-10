import React from 'react';
import Head from 'next/head';

import Backend from '../components/Backend.js';
import Content from '../components/Content.js';
import Popup from '../components/Popup.js';

import format from 'date-fns/format';

const fmt = (date) => (format(date, "MMMM D, YYYY"));

class AdminLogin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="adminPanel">
                <form onSubmit={this.props.adminLogin} className="adminLogin">
                    <h3 className="warning"></h3>
                    <div style={{marginTop: "100px"}}></div>
                    <label>Username:</label>
                    <input type="text" name="adminusername" id="adminUsername" required/>
                    <label>Password:</label>
                    <input type="password" name="adminpassword" id="adminPassword" required/>
                    <button>Login</button>
                </form>
            </div>
        );
    }
}

class ShowCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    cEdit(e) {
        if (e) {
            e.contentEditable = true;
        }
    }

    render() {
        return (
            <div className="showBlock SBVertical">
                <a style={{backgroundImage: `url(${this.props._event.image_url})`}} className="showImg"></a>
                <div className="showDetails">
                    <h1><span ref={this.cEdit}>{this.props._event.eventName}</span></h1>
                    <h2>Headliner: <span ref={this.cEdit}>{this.props._event.headliner}</span></h2>
                    <h3>Address: <span ref={this.cEdit}>{this.props._event.street_name}</span>, <span ref={this.cEdit}>{this.props._event.city}</span>, <span ref={this.cEdit}>{this.props._event.state}</span> <span ref={this.cEdit}>{this.props._event.zip_code}</span></h3>
                    <h3>Venue: <span ref={this.cEdit}>{this.props._event.venue}</span></h3>
                    <h3><span ref={this.cEdit}>{fmt(this.props._event.eventDate)}</span> &mdash; <span ref={this.cEdit}>${this.props._event.cost}</span></h3>
                    <a><i className="fa fa-save"></i> Save</a>
                </div>
            </div>
        );
    }
}

// global state mechanism for all shows
var ASstate = {events: []};
class AllShows extends React.Component {
    constructor(props) {
        super(props);

        this.state = ASstate;
    }

    async componentDidMount() {
        if (!this.state.events.length) {
            const events = await Backend.getAllEvents();
            this.setState({events: events.events});
        }
    }

    componentWillUnmount() {
        ASstate = this.state;
    }

    render() {
        return (
            <div className="adminAllShows">
                <input type="text" placeholder="Search Shows" className="showSearch"/>
                <div className="showgrid">
                    {this.state.events.map(
                        show => (
                            <ShowCard key={show.createdAt} _event={show} />
                        )
                    )}
                </div>
            </div>
        )
    }

}

var AAstate = {musicians: []};
class AllArtists extends React.Component {
    constructor(props) {
        super(props);

        this.state = AAstate;
    }

    async componentDidMount() {
        if (!this.state.musicians.length) {
            const musicians = await Backend.getAllMusicians();
            this.copy = musicians.musicians;
            this.setState({musicians: musicians.musicians});
        }
    }

    componentWillUnmount() {
        AAstate = this.state;
    }

    cEdit(e) {
        if (e) {
            e.contentEditable = true;
        }
    }

    changeCollector(e, i) {
        this.copy[i][e.target.id] = e.target.innerHTML;
    }

    async saveMusician(i) {
        const res = await Backend.saveMusician(this.copy[i]);
        if (res.status = "1") {
            Popup.trigger("#artistEdit")
            this.setState({musicians: this.copy});
        }
    }

    artist(musician, i) {
        return (
            <tr key={musician.createdAt}>
                <td>
                    <i style={{"background": "#cc0000"}} className="fa fa-times optionBtn"></i>
                    <i onClick={()=>this.saveMusician.bind(this)(i)} className="fa fa-save optionBtn"></i>
                </td>
                <td><h2 id="stageName" onInput={e=>this.changeCollector.bind(this)(e, i)} ref={this.cEdit}>{musician.stageName || "Not Specified"}</h2></td>
                <td><h2 id="email" onInput={e=>this.changeCollector.bind(this)(e, i)} ref={this.cEdit}>{musician.email || "Not Specified"}</h2></td>
                <td><h2 id="phoneNumber" onInput={e=>this.changeCollector.bind(this)(e, i)} ref={this.cEdit}>{musician.phoneNumber || "Not Specified"}</h2></td>
                <td><h2 id="picture_url" onInput={e=>this.changeCollector.bind(this)(e, i)} ref={this.cEdit}>{musician.picture_url}</h2></td>
                <td><h2>{musician.urlValue}</h2></td>
            </tr>
        )
    }

    render() {
        return (
            <div className="adminAllArtists _adminAllArtists">
                <input type="text" placeholder="Search Artists" className="artistSearch"/>

                <table style={{"tableLayout": "fixed"}} id="musicianTable">
                    <thead>
                        <tr>
                            <th>Delete/Edit</th>
                            <th>Stage Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Picture URL</th>
                            <th>Website ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.musicians.map(
                            (m, i) => this.artist(m, i)
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

class CreateShow extends React.Component {
    constructor(props) {
        super(props);
        this.show = {};
        this.state = {};
    }

    formChange(e) {
        this.show[e.target.name  || e.target.id] = e.target.value;
    }

    async addShow(e) {
        e.preventDefault();
        const copy = this.show;
        copy.isPossibleEvent = !copy.isPossibleEvent ? false : true;
        copy.doorsOpen += ` ${copy.openMeridian}`;
        copy.ShowStarts += ` ${copy.startMeridian}`;
        copy.eventDate = new Date(`${copy.day} ${copy.month} ${copy.year}`);
        copy.numberNeededToSell = parseInt(copy.numberNeededToSell);
        copy.extraAtDoor = parseInt(copy.extraAtDoor);
        copy.cost = parseInt(copy.cost);
        copy.zip_code = parseInt(copy.zip_code);
        const res = await Backend.createEvent(copy);
        if (res.status == "1") {
            Popup.trigger("#eventCreated");
            // clear loaded events for reload
            ATstate.events = [];
            ASstate.events = [];
        }
    }

    render() {
        return (
            <form onChange={this.formChange.bind(this)} onSubmit={this.addShow.bind(this)} className="createShow">
                <h1 className="title">Add a show</h1>
                <h3>All fields are required.</h3>
                <hr/>
                <label>Event Name:</label>
                <input name="eventName" type="text" id="eventName" placeholder="Event name" />
                <label>Headliner:</label>
                <input name="headliner" type="text" id="headliner" placeholder="Headliner" />
                <label>Venue:</label>
                <input name="venue" type="text" id="venue" placeholder="Venue" />
                <h2>Event Date:</h2>
                <div>
                    <select id="day">
                        <option value=""></option>
                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                        <option value="5">05</option>
                        <option value="6">06</option>
                        <option value="7">07</option>
                        <option value="8">08</option>
                        <option value="9">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>
                    <select id="month">
                        <option value=""></option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>
                    <select id="year">
                        <option value=""></option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                    </select>
                </div>
                <h2>Event Image:</h2>
                <input name="image_url" type="text" id="imageUrl" placeholder="Image URL" />
                <h1>Event Time</h1>
                <label>Doors Open:</label>
                <span>
                    <input name="doorsOpen" type="text" id="doorsOpen" placeholder="Doors open time" required />
                    <select id="openMeridian">
                        <option value=""></option>
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                    </select>
                </span>
                <label>Show Starts:</label>
                <span>
                    <input name="ShowStarts" type="text" id="showStarts" placeholder="Show start time" required />
                    <select id="startMeridian">
                        <option value=""></option>
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                    </select>
                </span>
                <h1>Event Location</h1>
                <label>Street:</label>
                <input name="street_name" type="text" id="eventStreet" placeholder="Street" required />
                <label>ZIP Code:</label>
                <input name="zip_code" type="text" id="eventZIP" placeholder="ZIP code" required />
                <label>City:</label>
                <input name="city" type="text" id="eventCity" placeholder="City" required />
                <label>State:</label>
                <input name="state" type="text" id="eventState" placeholder="State" required />
                <h1>Ticket Info</h1>
                <label>Ticket Cost:</label>
                <span><p>$</p><input name="cost" type="text" id="eventCost" placeholder="Event cost" required /></span>
                <label>Extra Cost At Door:</label>
                <span><p>$</p> <input name="extraAtDoor" type="text" id="eventAtDoor" placeholder="Extra cost at door" required /></span>
                <label>Minimum Tickets:</label>
                <input name="numberNeededToSell" type="text" id="ticketsRequired" placeholder="Minimum tickets an artist must sell" required />
                <label>Age Requirement:</label>
                <input name="ageRequirement" type="text" id="eventAge" placeholder="Age requirement" required />
                <label>Make event available to all artists? <input name="isPossibleEvent" type="checkbox" id="availableEvent" /></label>
                <button type="submit">Add Event</button>
            </form>
        );
    }
}

var ATstate = {events: [], tickets: []};
class AllTickets extends React.Component {
    constructor(props) {
        super(props);

        this.state = ATstate;
    }

    async componentDidMount() {
        if (!this.state.events.length) {
            const events = await Backend.getAllEvents();
            this.setState({events: events.events});
        }
    }

    componentWillUnmount() {
        ATstate = this.state;
    }

    async getTickets(eventid) {
        const _tickets = await Backend.getTicketFromEventID(eventid);
        const tickets = _tickets.tickets;
        if (tickets.length) {
            Promise.all(tickets.map(
                ticket => Backend.getMusicianFromFbid(ticket.MusicianFbid)
            )).then(response => {
                response.map(
                    (r, i) => {
                        tickets[i].firstName = r.musician_info.firstName;
                        tickets[i].lastName = r.musician_info.lastName;
                        tickets[i].stageName = r.musician_info.stageName;
                        tickets[i].phoneNumber = r.musician_info.phoneNumber;
                    }
                );
                this.setState({tickets});
            });
        }
        else {
            Popup.trigger("#noTickets")
        }
    }

    clearTickets() {
        this.setState({tickets: []})
    }

    eventView() {
        return (
            <div>
                <input type="text" placeholder="Search Shows"/>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Event Name</th>
                                <th>Event Date</th>
                                <th>Event Headliner</th>
                                <th>Event Venue</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.events.map(
                                _event => (
                                    <tr key={_event.createdAt}>
                                        <td><a onClick={()=>this.getTickets.bind(this)(_event.id)}>{_event.eventName}</a></td>
                                        <td>{fmt(_event.eventDate)}</td>
                                        <td>{_event.headliner}</td>
                                        <td>{_event.venue}</td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    ticketView() {
        const cursor = {cursor: "pointer"};
        return (
            <div>
                <i style={cursor} onClick={this.clearTickets.bind(this)} className="fa fa-chevron-left">
                    <span style={cursor}>Back</span>
                </i>
                <table>
                    <thead>
                        <tr>
                            <th>Ticketholder's Name</th>
                            <th>Created Date</th>
                            <th>Tickets Sold</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tickets.map(
                            ticket => (<tr key={ticket.createdAt}>
                                <td>{ticket.firstName} {ticket.lastName}</td>
                                <td>{ticket.createdAt}</td>
                                <td>{ticket.numberSold}</td>
                            </tr>)
                        )}
                    </tbody>
                </table>
            </div>
        )
    }

    render() {
        var display = null;
        if (!this.state.tickets.length) {
            display = this.eventView();
        }
        else {
            display = this.ticketView();
        }
        return (
            <div className="adminAllTickets _adminAllTickets">
                {display}
            </div>
        )
    }
}

class AdminMain extends React.Component {
    constructor(props) {
        super(props);
        this.cache = {
            allshows: (<AllShows />),
            allartists: (<AllArtists />),
            createshow: (<CreateShow />),
            alltickets: (<AllTickets />)
        };
        this.state = {
            page: "allshows"
        };
    }

    render() {
        const page = this.state.page;

        return (
            <div className="adminPanel" style={{marginTop: "100px"}}>
                <span className="adminTabs">
                    <span className={page == "allshows" ? "active" : ""}
                          onClick={()=>this.setState({page: "allshows"})}>
                          All Shows
                    </span>
                    <span className={page == "allartists" ? "active" : ""}
                          onClick={()=>this.setState({page: "allartists"})}>
                          All Artists
                    </span>
                    <span className={page == "createshow" ? "active" : ""}
                          onClick={()=>this.setState({page: "createshow"})}>
                          Create Show
                    </span>
                    <span className={page == "alltickets" ? "active" : ""}
                          onClick={()=>this.setState({page: "alltickets"})}>
                          All Tickets
                    </span>
                </span>
                <Popup id="eventCreated" type="custom" text="Event Created" />
                <Popup id="noTickets" type="custom" text="No tickets for this event yet" />
                <Popup id="artistEdit" type="custom" text="Musician edited successfully" />
                <Popup id="eventEdit" type="custom" text="Event edited successfully" />
                {this.cache[page]}
            </div>
        );
    }
}

class Admin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false
        };
    }

    async adminLogin(e) {
        e.preventDefault();
        const username = document.getElementById("adminUsername").value;
        const password = document.getElementById("adminPassword").value;
        const v = await Backend.adminLogin(username, password);
        if (v.status == "1") {
            this.setState({loggedIn: true});
        }
    }

    render() {
        var display = (<AdminLogin adminLogin={this.adminLogin.bind(this)} />);
        if (this.state.loggedIn) {
            display = (<AdminMain />)
        }
        return (
            <Content>
                <style>{`
                [contenteditable=true] {
                    padding: 0px;
                }
                span {
                    cursor: text;
                }
                `}</style>
                {display}
            </Content>
        );
    }
}

export default Admin
