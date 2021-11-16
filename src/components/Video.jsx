import React from 'react'
import styled from 'styled-components';


const VideoCard= styled.div`
    width:370px;
    display:flex;
    flex-direction:column;
    position:relative;
    margin-right:20px;
`;

const VideoImage = styled.img`
    width:370px;
    height:210px;
`;

const VideoCardInfo = styled.div`
    width:370px;
    display:flex;
    align-items:flex-start;
    margin-top:10px;
`;

const VideoChannel = styled.img`
    height:40px;
    width:40px;
    border-radius:100%;
    margin-right:15px;
`;

const VideoExp =styled.h3`

`;

const ChannelName=styled.h3`
    color:#666666;
    font-weight:500;
`;

function Video(props) {
    return (
        <VideoCard>
            <VideoImage src ={props.videoimage}></VideoImage>
            <VideoCardInfo>
                <VideoChannel src={props.videochannel}></VideoChannel>
                <div>
                    <VideoExp>{props.videoExp}</VideoExp>
                    <ChannelName>{props.channelName}</ChannelName>
                </div>
                
            </VideoCardInfo>
        </VideoCard>
    )
}

export default Video
