import React from 'react';
import styled from 'styled-components';
// import './Data.css';

const DataClass = styled.div`
    font-size: 12px;
    line-height: 12px;
    color: rgb(142, 142, 146);
    padding-top: 6px;
    width: 100%;
    text-align: right;
`

export default function Name(props) {
    const {dateLastMessage} = props;
    return (
        <DataClass>
            {dateLastMessage}
        </DataClass>
    )
}