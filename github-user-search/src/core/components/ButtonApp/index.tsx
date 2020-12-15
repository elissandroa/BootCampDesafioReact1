import React from 'react';
import './styles.scss';

type Props = {
    text: string;
}

const ButtonApp = ({text}:Props) => {
    return (
        <div className="button-container">
            <button className="btn btn-primary button-text  ">
               <h5>{text}</h5>
            </button>
        </div>
    );
}

export default ButtonApp;