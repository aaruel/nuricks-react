import React from 'react';
import Link from 'next/link';
import Content from '../components/Content.js';

const Musician = (props) => (
<Content wrapper="mainWrapper">
    <div> {props.url.query.slug } </div>
</Content>
);

export default Musician
