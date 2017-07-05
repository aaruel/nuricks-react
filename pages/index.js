import React from 'react';
import Link from 'next/link';
import Content from '../components/Content.js';

const Main = () => (
<Content wrapper="mainWrapper">
    <a href="#about" className="navAbout">About Us</a>
    <a href="#contact" className="navContact">Contact Us</a>
    <div id="header">
        <img className="splash" src="/static/main-banner.jpg"/>
        <div>
            <h1 className="title">Nu-Ricks</h1>
        </div>
        <a href="about">
            <i className="fa fa-chevron-down"></i>
        </a>
    </div>
    <div id="about">
        <h1 className="title">About Us</h1>
        <hr/>
        <h2>NU-Ricks is the highest volume independent live music company in the SF Bay Area.</h2>
        <h1>Artists</h1>
        <p>NU-Ricks enables artists to grow their networks, get on stage and build a performance resume all while making money while performing.</p>
        <h1>Venues</h1>
        <p>NU-Ricks can drive foot traffic to your venue. This leads to increased bar sales, better notoriety, and repeat customers.</p>
        <h1>Labels</h1>
        <p>Ensure your artists gain the necessary exposure and notoriety they deserve. With our promotional strategies, you can be assured that your artist will be treated and promoted in the most professional of manners.</p>
        <hr/>
        <a href="contact">
            <i className="fa fa-chevron-down">
            </i>
        </a>
    </div>
    <div id="contact">
        <h1 className="title">Contact Us</h1>
        <hr/>
        <h1>Email: bookings@nu-ricks.com</h1>
        <h1>Phone: 408-755-5522</h1>
        <hr/>
    </div>
</Content>
);

export default Main
