import React, { Fragment } from 'react';

const Header = ({titulo}) => {

    return ( 
        <Fragment>
            <nav class="navbar navbar-dark header">
                <h2>{titulo}</h2>
            </nav>
        </Fragment>
     );
}
 
export default Header;