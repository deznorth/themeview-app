import React from 'react';
import './Placeholder.scss';
import GearsLoader from '../../elements/GearsLoader/GearsLoader.jsx';

const Placeholder = props => {
    return (
        <div className="placeholder-page">
            <GearsLoader fill="#D1CEBE" width="20rem"/>
            <div>
                <h1>Themeview</h1>
                <h2>Great things are on their way here!</h2>
            </div>
            <GearsLoader fill="#D1CEBE" width="20rem"/>
        </div>
    );
}

export default Placeholder;