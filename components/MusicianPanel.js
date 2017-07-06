import React from 'react';

import Popup from './Popup.js';

import { inject, observer } from 'mobx-react';

// MUSICIAN PANEL
@inject('store') @observer
class MusicianPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            biolinks: [
                {cls: "fa fa-instagram",   val: () => (this.props.store.user.instagramLink)},
                {cls: "fa fa-facebook",    val: () => (this.props.store.user.facebookLink)},
                {cls: "fa fa-youtube-play",val: () => (this.props.store.user.youtubeLink)},
                {cls: "fa fa-soundcloud",  val: () => (this.props.store.user.soundcloudLink)}
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

    // Panel render
    render() {
        const bannerStyle = {
            backgroundImage: `url("/static/banner.jpg")`
        }
        const bannerPfP = {
            backgroundImage: `url("${this.props.store.user.picture_url}")`
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
                                return
                                (<li key={l.cls}>
                                    <a>
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
                <Popup type="editSuccess" />
                {banner}
            </div>
        );
    }
}

export default MusicianPanel
