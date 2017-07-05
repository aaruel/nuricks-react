import React from 'react';
import Link from 'next/link';

import Header from './Header.js';
import Backend from './Backend.js';
import Loading from './Loading.js';
import { initStore } from './GlobalStore.js';
import { fadeIn, fadeOut } from './Animation.js';
import { Provider, inject, observer } from 'mobx-react';

// Injects global store for user
@inject('store') @observer
class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logoText: "NR",
            user: null,
            loading: true
        }
    }

    // mouse hover logic
    logoHover(mouseIn) {
        if (mouseIn) {
            return this.setState({logoText: "Nu-Ricks"});
        }
        else {
            return this.setState({logoText: "NR"});
        }
    }

    // logout on click
    logoutEvent() {
        Backend.logout()
        .then(() => {
            window.reload();
        });
    }

    // clientside request to bundle JWT with request to get back correct auth info
    componentDidMount() {
        Backend.getAuth()
        .then(response => {
            this.setState({loading: false})
            this.props.loaded();
            if (response.musician_info) {
                console.log("musician");
                return this.props.store.setUser(response.musician_info, true);
            }
            else if (response.user_info) {
                console.log("user");
                return this.props.store.setUser(response.user_info, false);
            }
            return console.log("no one");
        });

        // attach listener to fade out nav bar
        window.addEventListener('scroll', function(e) {
            if (window.scrollY == 0) {
                fadeIn("#mainNav");
            }
            else {
                fadeOut("#mainNav");
            }
        })
    }

    render() {
        var bar = null;

        // Loading state -> Musician Nav / User Nav / Logged Out Nav
        if (this.state.loading) {
            bar = (
                <ul className="pages">
                    Loading...
                </ul>
            )
        }
        // Musician Nav
        else if (this.props.store.user.isMusician) {
            bar = (
                <ul className="pages">
                    <li style={{fontWeight: 900}}><a>{this.props.store.user.firstName}</a></li>
                    <li><a>Account</a></li>
            		<li style={{fontWeight: 100}}><Link href="/dashboard"><a>Musician Dashboard</a></Link></li>
                    <li style={{fontWeight: 100}} onClick={this.logoutEvent}><a>logout</a></li>
                </ul>
            )
        }
        // User Nav
        else if (this.props.store.user.isUser) {
            bar = (
                <ul className="pages">
                    <li style={{fontWeight: 900}}><a>{this.props.store.user.firstName}</a></li>
                    <li><a>Account</a></li>
                    <li onClick={this.logoutEvent} style={{fontWeight: 100}}><a>logout</a></li>
                </ul>
            )
        }
        // Logged Out Nav
        else {
            bar = (
                <ul className="pages">
                    <li style={{fontWeight: 900}} onClick={this.props.login} id="mLogin" className="login"><a>Login</a></li>
                </ul>
            )
        }

        // Nav Structure
        return (
        <nav id="mainNav" style={{top: 0, opacity: 1}}>
        	<div className="navbar">
        	</div>
            <Link href="/">
            	<a className="logo" onMouseEnter={()=>this.logoHover(true)} onMouseLeave={()=>this.logoHover(false)}>
                    {this.state.logoText}
                </a>
            </Link>
        	{bar}
        </nav>)
    }
}

export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bodyClasses: "",
            login: false,
            loading: true
        }
        this.store = initStore();
    }

    // called on load
    loaded() {
        this.setState({loading: false})
    }

    // called on login click
    loginDropdown() {
        if (!this.state.bodyClasses) {
            this.setState(
                {bodyClasses: "drop", login: true},
                () => {
                    fadeIn('.loginOverlay');
                }
            );
        }
        else {
            fadeOut('.loginOverlay')
            .then(() => {
                this.setState({bodyClasses: "", login: false});
            });
        }
    }

    render() {
        // Login popup triggered by NavBar callback
        var login = null;
        if (this.state.login) {
            login = (
                <div className="loginOverlay">
                	<div className="center">
                		<a className="visitorLogin" href="http://localhost:3000/api/users/auth/facebook">
                			<h1>Visitor Access</h1>
                			<span><i className="fa fa-facebook"></i>Facebook Login</span>
                		</a>
                		<a className="musicianLogin" href="http://localhost:3000/api/musicians/auth/facebook">
                			<h1>Musician Access</h1>
                			<span><i className="fa fa-facebook"></i>Facebook Login</span>
                		</a>
                	</div>
                </div>
            )
        }

        // Main page structure after loading
        var main = (
            <div className={this.state.bodyClasses}>
                <Header />
                <NavBar login={this.loginDropdown.bind(this)} />
                {login}
                <div className={this.props.wrapper}>
                    {this.props.children}
                </div>
            </div>
        );

        // Loading stage
        if (this.state.loading) {
            main = (
                <div className={this.state.bodyClasses}>
                    <Header />
                    <NavBar loaded={this.loaded.bind(this)} login={this.loginDropdown.bind(this)} />
                    <Loading />
                </div>
            );
        }

        // Render structure
        return (
            <Provider store={this.store}>
                <div>
                    {main}
                </div>
            </Provider>
        )
    }
}
