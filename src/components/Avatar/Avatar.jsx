import React from 'react';
import styled from 'styled-components';

const AvatarWrapper = styled.div`
    margin-right: 10px;
    position: relative;
    &:after {
        content: '';
        position: absolute;
        bottom: 5px;
        right: 3px;
        width: 10px;
        height: 10px;
        background: ${props => props.online ? 'lightgreen' : 'transprent'};
        z-index: 1;
        border-radius: 50%;
    }
`
const AvatarImage = styled.img`
    border-radius: 50%;
    min-width: 54px;
    max-width: 54px;
    max-height: 54px;
    object-fit: cover;
    position: relative;
`


export default function Avatar(props) {
    const {userPhoto, online, alternativeText} = props;
    return (
        <AvatarWrapper online={online}>
            <AvatarImage src={'img/'+`${userPhoto}`} alt={alternativeText} />
        </AvatarWrapper>
    )
}