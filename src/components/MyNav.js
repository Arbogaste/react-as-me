import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

function MyNav(props) {
    return (
        <div>
            <section>
                <nav>
                    <ul>
                        <li><Link to="/">Samuele Guarnaccia</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/dev">Dev</Link></li>
                        <li><Link to="/photography">Photography</Link></li>
                        <li><Link to="/music">Music</Link></li>
                        <li><Link to="/contacts">Contacts</Link></li>
                    </ul>
                </nav>
            </section>
        </div>
    )
}

export default MyNav;