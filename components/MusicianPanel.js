import React from 'react';

import Popup from './Popup.js';
import Backend from './Backend.js';

import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';

// MUSICIAN PANEL
@inject('store') @observer
class MusicianPanel extends React.Component {
    constructor(props) {
        super(props);
        var user = this.props.user || this.props.store.user;
        this.state = {
            editing: false,
            biolinks: [
                {cls: "fa fa-instagram",   val: () => (this.getAttr("instagramLink"))},
                {cls: "fa fa-facebook",    val: () => (this.getAttr("facebookLink"))},
                {cls: "fa fa-youtube-play",val: () => (this.getAttr("youtubeLink"))},
                {cls: "fa fa-soundcloud",  val: () => (this.getAttr("soundcloudLink"))}
            ],
            bioEditLinks: [
                {
                    id: "instagram-url",
                    placeholder: "Instagram",
                    val: () => (this.getAttr("instagramLink"))
                },
                {
                    id: "facebook-url",
                    placeholder: "Facebook",
                    val: () => (this.getAttr("facebookLink"))
                },
                {
                    id: "youtube-url",
                    placeholder: "Youtube",
                    val: () => (this.getAttr("youtubeLink"))
                },
                {
                    id: "soundcloud-url",
                    placeholder: "Soundcloud",
                    val: () => (this.getAttr("soundcloudLink"))
                },
                {
                    id: "profile-url",
                    placeholder: "Profile Picture URL",
                    val: () => (this.getAttr("picture_url"))
                }
            ]
        }
    }

    // Get live attributes
    getAttr(attr) {
        const user = this.props.user || this.props.store.user;
        return user[attr];
    }

    // Panel edit toggle
    async toggleEditing() {
        // save route
        if (this.state.editing) {
            // copy observable into JSON
            const _user = toJS(this.props.store.user);
            _user.instagramLink = document.getElementById("instagram-url").value;
            _user.facebookLink = document.getElementById("facebook-url").value;
            _user.youtubeLink = document.getElementById("youtube-url").value;
            _user.soundcloudLink = document.getElementById("soundcloud-url").value;
            _user.picture_url = document.getElementById("profile-url").value;
            _user.email = document.getElementById("artistEmail").innerHTML;
            _user.phoneNumber = document.getElementById("artistPhone").innerHTML;
            _user.stageName = document.getElementById("stage-name").innerHTML;
            // strip tags
            _user.bio = (document.getElementById("bio").innerHTML).replace(/(<([^>]+)>)/ig,"");
            const res = await Backend.saveMusician(_user);
            if (res.status == "1") {
                this.props.store.setUser(_user);
                Popup.trigger("#editSuccess");
            }
        }
        this.props.toggleEditing(!this.state.editing);
        this.setState({editing: !this.state.editing});
    }

    // Panel render
    render() {
        var user = this.props.user || this.props.store.user;

        const bannerStyle = {
            backgroundImage: `url("/static/banner.jpg")`
        }
        const bannerPfP = {
            backgroundImage: `url("${user.picture_url}")`
        }
        var editButton = (<span onClick={this.toggleEditing.bind(this)} className="edit">EDIT <i className="fa fa-edit" aria-hidden="true"></i></span>);
        if (this.props._public) {
            editButton = null;
        }

        // Normal banner state
        var banner = (
            <div style={bannerStyle} className="bioBanner">
                <div style={bannerPfP} className="bioPic"></div>
                <ul className="bioLinks">
                    {this.state.biolinks.map(
                        l => {
                            if (l.val()) {
                                return (
                                <li key={l.cls}>
                                    <a href={l.val()} target="_blank" data-url={l.val()}>
                                        <i className={l.cls}></i>
                                    </a>
                                </li>);
                            }
                            else {
                                return null;
                            }
                        }
                    )}
                </ul>
                {editButton}
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
                <Popup id="editSuccess" type="editSuccess" />
                {banner}
            </div>
        );
    }
}

export default MusicianPanel
