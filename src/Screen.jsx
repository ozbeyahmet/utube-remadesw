import React from 'react'
import Body from './components/BodyNavbar'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import styled from "styled-components";
import MainBody from './components/Body';



function Screen() {
    return (
        <div>
            <Navbar/>
            <MainBody/>
        </div>
    )
}

export default Screen
