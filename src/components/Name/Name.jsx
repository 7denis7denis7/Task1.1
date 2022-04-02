import React from 'react';
import styled from 'styled-components';
// import './Name.css';

const NameClass = styled.div`
    font-size: 16px;
    line-height: 24px;
    color: #000;
`


export default function Name(props) {  
    const {userName} = props
    return (
        <NameClass>
            {userName}
        </NameClass>
        // <div className="name">
        //     {userName}
        // </div>
    )
}