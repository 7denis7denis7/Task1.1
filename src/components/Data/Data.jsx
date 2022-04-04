import React from 'react';
import styled from 'styled-components';

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

    const year = dateLastMessage.substring(0,4);
    const month = dateLastMessage.substring(4,6);
    const day = dateLastMessage.substring(6,8);

    return (
        <DataClass>
            {day}/{month}/{year}
        </DataClass>
    )
}