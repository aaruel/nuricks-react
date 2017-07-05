import React from 'react';

import Link from 'next/link';
import Content from '../components/Content.js';
import Popup from '../components/Popup.js';
import SoundCloud from 'react-soundcloud-widget';
import Backend from '../components/Backend.js';

import { LoadingRelative } from '../components/Loading.js';
import { inject, observer } from 'mobx-react';
import { autorun } from 'mobx';
import { addClass, removeClass } from '../components/Utils.js';

// EDITOR PANEL
@inject('store') @observer
class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            biolinks: [
                {cls: "fa fa-instagram"},
                {cls: "fa fa-facebook"},
                {cls: "fa fa-youtube-play"},
                {cls: "fa fa-soundcloud"}
            ],
            bioEditLinks: [
                {
                    id: "instagram-url",
                    placeholder: "Instagram",
                    val: () => (this.props.store.user.instagramLink)
                },
                {
                    id: "facebook-url",
                    placeholder: "Facebook",
                    val: () => (this.props.store.user.facebookLink)
                },
                {
                    id: "youtube-url",
                    placeholder: "Youtube",
                    val: () => (this.props.store.user.youtubeLink)
                },
                {
                    id: "soundcloud-url",
                    placeholder: "Soundcloud",
                    val: () => (this.props.store.user.soundcloudLink)
                },
                {
                    id: "profile-url",
                    placeholder: "Profile Picture URL",
                    val: () => (this.props.store.user.picture_url)
                }
            ]
        }
    }

    // Panel edit toggle
    toggleEditing() {
        if (this.state.editing) {
            Popup.trigger();
        }
        this.setState({editing: !this.state.editing});
    }

    // Editor render
    render() {
        const bannerStyle = {
            backgroundImage: `url("/static/banner.jpg")`
        }
        const bannerPfP = {
            backgroundImage: `url("${this.props.store.user.picture_url}")`
        }

        // Normal banner state
        var banner = (
            <div style={bannerStyle} className="bioBanner">
                <div style={bannerPfP} className="bioPic"></div>
                <ul className="bioLinks">
                    {this.state.biolinks.map(
                        l => (
                            <li key={l.cls}>
                                <a>
                                    <i className={l.cls}></i>
                                </a>
                            </li>
                        )
                    )}
                </ul>
                <span onClick={this.toggleEditing.bind(this)} className="edit">EDIT <i className="fa fa-edit" aria-hidden="true"></i></span>
            </div>
        )

        // Editing banner state
        if (this.state.editing) {
            banner = (
                <div style={bannerStyle} className="bioBanner">
                    <div style={bannerPfP} className="bioPic"></div>
                    <span onClick={this.toggleEditing.bind(this)} className="submit">SAVE <i className="fa fa-lock" aria-hidden="true"></i></span>
                    <ul className="bioEditLinks">
                        {this.state.bioEditLinks.map(
                            l => (
                                <input defaultValue={l.val()} key={l.placeholder} type="text" id={l.id} placeholder={l.placeholder} />
                            )
                        )}
                    </ul>
                    <span className="uploadBanner">UPLOAD BANNER <i className="fa fa-camera" aria-hidden="true"></i></span>
                </div>
            )
        }

        // Main banner render
        return (
            <div>
                <Popup type="editSuccess" />
                {banner}
            </div>
        );
    }
}

// MUSICIAN INFO PANEL
@inject('store') @observer
class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {playUrl: []}
    }

    // Extract soundtrack link from bio
    soundcloudParser(content) {
        const regex = new RegExp(/([\S]+)?(soundcloud\.com[^\s]+)/g);
        const thot = this;
        function recurse(capture) {
            if (capture != null) {
                if (capture[2]) {
                    const soundcloudLink = "https://" + capture[2];
                    return soundcloudLink;
                }
            }
            else {
                return content;
            }
        }
        return recurse(regex.exec(content));
    }

    // replace with bio load
    componentDidMount() {
        const pu = this.state.playUrl;
        const bio = "hey https://soundcloud.com/remi112/howdy-bitch-reupload";
        this.setState({playUrl: pu.concat(this.soundcloudParser(bio))});
    }

    // Musician panel render
    render() {
        const user = this.props.store.user;

        var email = null;
        var phoneNumber = null;

        if (user.email) {
            email = (
                <div>
                    <label>Email: </label>
                    <div id="artistEmail">{user.email}</div>
                </div>
            )
        }
        if (user.phoneNumber) {
            phoneNumber = (
                <div>
                    <label>Phone Number: </label>
                    <div id="artistPhone">{user.phoneNumber}</div>
                </div>
            )
        }

        return (
            <div className="container half bio">
                <h2>Share your profile with fans:</h2>
                <Link href={`/musician/${user.urlValue}`}><a>http://www.nrshows.com/musician/{user.urlValue}</a></Link>
                {email}
                {phoneNumber}
                <h1 id="stage-name" className="title">{user.stageName}</h1>
                <div id="bio" style={{whiteSpace: "pre-wrap"}}>{user.bio}
                    {this.state.playUrl.map(
                        url => (
                            <SoundCloud key={url} url={url} opts={{visual: true, auto_play: false}} />
                        )
                    )}
                </div>
            </div>
        );
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
            shows: []
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
            if (this.state.shows.length) {
                display = (
                    <div className="showList myShowsList">
                        {this.state.shows.map(
                            s => (
                                <div key={s.createdAt} className="showBlock">
                                    <a style={{backgroundImage: `url("${s.image_url}")`}} className="showImg"></a>
                                    <div className="showDetails">
                                        <h1></h1>
                                        <h2>Headliner: {s.headliner}</h2>
                                        <h3>Address: {s.street_name}, {s.city}, {s.state} {s.zip_code}</h3>
                                        <h3>Venue: {s.venue}</h3>
                                        <h3>${s.extraAtDoor} at door</h3>
                                        <a className="btn">Buy Ticket</a>
                                        <a className="btn">Buyout Tickets</a>
                                        <h3 className="progress">
                                            Sold: <span className="sold">{s.numberSold}/{s.numberNeededToSell}</span>
                                        </h3>
                                    </div>
                                </div>
                            )
                        )}
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
                                <a className="btn">Join Show</a>
                            </div>
                        </div>
                    )
                ));
            }

            page = (
                <div className="showList availableShowsList">
                    {msgs.map(m => m)}
                </div>
            )
        }

        return (
        <div className="container half shows">
            <span className="showTabs">
                <span onClick={this.myShowsPage.bind(this)} className="tab myShows activeTab">My Shows</span>
                <span onClick={this.availableShowsPage.bind(this)} className="tab availableShows">Available Shows</span>

                {page}

            </span>


        </div>)
    }
}

// DASHBOARD MAIN
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render () {
        return (
            <Content wrapper="mainWrapper">

                <div className="musicianWrapper">

                    <h1 className="musicianTitle">Musician Dashboard</h1>

                    <Editor />

            		<div className="row">

                        <Info />

                        <Shows />

            		</div>

            	</div>

            </Content>
        )
    }
}


export default Dashboard
