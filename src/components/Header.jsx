import React, { Fragment } from 'react';

const Header = ({titulo}) => {

    return ( 
        <Fragment>
            <nav className="header">
                <h3>{titulo}</h3>
            </nav>
        </Fragment>
     );
}
 
export default Header;