import React from 'react';
import styled from 'styled-components';

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
    )
}