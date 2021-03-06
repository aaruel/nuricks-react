import React from 'react';

import { Link } from '../routes.js';
import Linkify from 'react-linkify';
import SoundCloud from 'react-soundcloud-widget';

import { inject, observer } from 'mobx-react';

// MUSICIAN INFO PANEL
@inject('store') @observer
class MusicianInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
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
    }

    cEdit(e) {
        if (e) {
            e.contentEditable = this.props.editing || false;
        }
    }

    // Musician panel render
    render() {
        const user = this.props.user || this.props.store.user;

        var email = null;
        var phoneNumber = null;

        if (user.email) {
            email = (
                <div>
                    <label>Email: </label>
                    <div ref={this.cEdit.bind(this)} id="artistEmail">{user.email}</div>
                </div>
            )
        }
        if (user.phoneNumber) {
            phoneNumber = (
                <div>
                    <label>Phone Number: </label>
                    <div ref={this.cEdit.bind(this)} id="artistPhone">{user.phoneNumber}</div>
                </div>
            )
        }

        var headInfo = (
            <div>
                <h2>Share your profile with fans:</h2>
                <Link route="musician" params={{slug: user.urlValue}}>
                    <a>http://www.nrshows.com/musician/{user.urlValue}</a>
                </Link>
                {email}
                {phoneNumber}
            </div>
        )

        if (this.props._public) {
            headInfo = null;
        }

        return (
            <div className="container half bio">
                {headInfo}
                <h1 ref={this.cEdit.bind(this)} id="stage-name" className="title">{user.stageName}</h1>
                <Linkify>
                    <div ref={this.cEdit.bind(this)} id="bio" style={{whiteSpace: "pre-wrap"}}>
                        {user.bio}
                    </div>
                </Linkify>
                <div>
                    <SoundCloud url={this.soundcloudParser(user.bio)} opts={{visual: true, auto_play: false}} />
                </div>
            </div>
        );
    }
}

export default MusicianInfo
