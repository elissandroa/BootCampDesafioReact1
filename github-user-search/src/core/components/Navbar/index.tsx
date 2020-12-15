import React from 'react';
import './styles.scss';
type Props = {
    text : string;
}

const Navbar = ({text}:Props) => (
    <nav className="row bg-primary main-nav navbar-expand-lg">
      <div className="col-3" >
      <h4>{text}</h4>
      </div>
    </nav>
);


export default Navbar;