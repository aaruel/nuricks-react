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
        this.state = {}
    }

    render () {
        return (
            <Content wrapper="mainWrapper">

                <div className="musicianWrapper">

                    <h1 className="musicianTitle">Musician Dashboard</h1>

                    <MusicianPanel />

            		<div className="row">

                        <MusicianInfo />

                        <Shows />

            		</div>

            	</div>

            </Content>
        )
    }
}


export default Dashboard
