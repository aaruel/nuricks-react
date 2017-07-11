import React from 'react';

import Content from '../components/Content.js';
import BuyTicket from '../components/BuyTicket.js';
import MusicianPanel from '../components/MusicianPanel.js';
import Shows from '../components/Shows.js';
import MusicianInfo from '../components/MusicianInfo.js';

// DASHBOARD MAIN
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editing: false}
    }

    toggleEditing(s) {
        this.setState({editing: s});
    }

    render () {
        return (
            <Content wrapper="mainWrapper">

                <div className="musicianWrapper">

                    <h1 className="musicianTitle">Musician Dashboard</h1>

                    <MusicianPanel toggleEditing={this.toggleEditing.bind(this)} />

            		<div className="row">

                        <MusicianInfo editing={this.state.editing} />

                        <Shows />

            		</div>

            	</div>

            </Content>
        )
    }
}


export default Dashboard
