import React from 'react';

import Shows from '../components/Shows.js';
import Content from '../components/Content.js';
import Loading from '../components/Loading.js';
import BuyTicket from '../components/BuyTicket.js';
import MusicianInfo from '../components/MusicianInfo.js';
import MusicianPanel from '../components/MusicianPanel.js';

import Backend from '../components/Backend.js';

class Musician extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }

    componentDidMount() {
        var _this = this;
        Backend.getMusicianFromURL(this.props.url.query.slug)
        .then((response) => {
            _this.setState({user: response.musician_info})
        })
    }

    render() {
        var loading = (<Loading />);

        if (this.state.user) {
            loading = (
                <div className="musicianWrapper">

                    <MusicianPanel user={this.state.user} _public />

            		<div className="row">

                        <MusicianInfo user={this.state.user} _public />

                        <Shows user={this.state.user} _public />

            		</div>

            	</div>
            );
        }

        return (
            <Content wrapper="mainWrapper">
                {loading}
            </Content>
        )
    }
}

export default Musician
