import React from 'react'
import SidebarOptions from './SidebarOptions'
import styled from 'styled-components';

import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import AlbumOutlinedIcon from '@mui/icons-material/AlbumOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';

import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import PodcastsOutlinedIcon from '@mui/icons-material/PodcastsOutlined';
import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined';

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';

const SideNav = styled.div`
background-color:white;
height:100%;
position:fixed;
overflow-y: scroll;
`;

const SideNavBlock = styled.div`
    border-bottom:1px solid grey;
    padding-bottom: 15px;
`;

function Sidebar() {
    return (
        <SideNav>
            <SideNavBlock>
                <SidebarOptions  red={true} icon={<HomeIcon fontSize="large"/>} tag= "Home"/> 
                <SidebarOptions icon={<ExploreOutlinedIcon fontSize="large"/>} tag= "Explore"/> 
                <SidebarOptions icon={<SubscriptionsOutlinedIcon fontSize="large"/>} tag= "Subscriptions"/> 
                <SidebarOptions icon={<OndemandVideoOutlinedIcon fontSize="large"/>} tag= "Originals"/> 
                <SidebarOptions icon={<AlbumOutlinedIcon fontSize="large"/>} tag= "Youtube Music"/> 
            </SideNavBlock>
            <SideNavBlock>
                <SidebarOptions icon={<VideoLibraryOutlinedIcon fontSize="large"/>} tag= "Library"/> 
                <SidebarOptions icon={<RestoreOutlinedIcon fontSize="large"/>} tag= "History"/> 
                <SidebarOptions icon={<PlayCircleOutlinedIcon fontSize="large"/>} tag= "Your Videos"/> 
                <SidebarOptions icon={<AccessTimeOutlinedIcon fontSize="large"/>} tag= "Watch Later"/> 
                <SidebarOptions icon={<ThumbUpOutlinedIcon fontSize="large"/>} tag= "Liked Videos"/>
                <SidebarOptions icon={<KeyboardArrowDownOutlinedIcon fontSize="large"/>} tag= "Show More"/> 
            </SideNavBlock>
            <SideNavBlock>
                <SidebarOptions icon="SUBSCRIPTIONS"/> 
                <SidebarOptions img="https://yt3.ggpht.com/ytc/AKedOLQRyuaTiK8o8v2aQHjSGY1rAjQAW39hpWAz4M_T5A=s88-c-k-c0x00ffffff-no-rj" tag= "History"/> 
                <SidebarOptions img="https://yt3.ggpht.com/FjeN785fVWx0Pr6xCbwPhhq8hHj_gocc3FygDXYDEQgp2gE_FQzRNsFHFAjQ3oE-VJaeGR1a=s88-c-k-c0x00ffffff-no-rj" tag= "History"/> 
                <SidebarOptions img="https://yt3.ggpht.com/ytc/AKedOLSok3cFOZ0C3QM7V6NQ9b6ErJBLOY7Y8PR3upnz7Q=s88-c-k-c0x00ffffff-no-rj" tag= "History"/> 
                <SidebarOptions img="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s88-c-k-c0x00ffffff-no-rj" tag= "History"/> 
                <SidebarOptions img="https://yt3.ggpht.com/ytc/AKedOLTh3o5-VnEQd-TGLDFXioMDDJ20GAGx0xKoG4L5Kw=s88-c-k-c0x00ffffff-no-rj" tag= "History"/>
                <SidebarOptions img="https://yt3.ggpht.com/ytc/AKedOLTG5G3FfQNhvcAhHLaxi5J_vqryGkYzSw-pjOKx6w=s88-c-k-c0x00ffffff-no-rj" tag= "History"/>
                <SidebarOptions icon={<KeyboardArrowDownOutlinedIcon fontSize="large"/>} tag= "Show More"/>   
            </SideNavBlock>
            <SideNavBlock>
                <SidebarOptions icon="MORE FROM YOUTUBE"/> 
                <SidebarOptions icon={<SportsEsportsOutlinedIcon fontSize="large"/>} tag= "Gaming"/> 
                <SidebarOptions icon={<PodcastsOutlinedIcon fontSize="large"/>} tag= "Live"/>
                <SidebarOptions icon={<SportsSoccerOutlinedIcon fontSize="large"/>} tag= "Sport"/> 
            </SideNavBlock>
            <SideNavBlock>
                <SidebarOptions icon={<SettingsOutlinedIcon fontSize="large"/>} tag= "Gaming"/> 
                <SidebarOptions icon={<FlagOutlinedIcon fontSize="large"/>} tag= "Live"/>
                <SidebarOptions icon={<HelpOutlineOutlinedIcon fontSize="large"/>} tag= "Sport"/> 
                <SidebarOptions icon={<FeedbackOutlinedIcon fontSize="large"/>} tag= "Sport"/> 
            </SideNavBlock>
       
        </SideNav>
           
     
    )
}

export default Sidebar
