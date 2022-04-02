import React from 'react';
// import './Message.css';
import styled from 'styled-components';

const MessageClass = styled.div`
    color: rgb(142, 142, 146);
    font-size: 15px;
    line-height: 27px;
    max-width: 250px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`


export default function Message(props) {
    const {userLastMessage} = props;
    return (
        <MessageClass>
            {userLastMessage}
        </MessageClass>
        // <div className="message">
        //     {userLastMessage}
        // </div>
    )
}