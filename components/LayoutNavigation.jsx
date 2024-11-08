"use client"

import React, { useState } from 'react'
import Navbar from './Navbar';
import Menu from './Menu';

function LayoutNavigation() {

    const [open, setOpen] = useState(false);

    function handleOpen() {
        setOpen(!open);
    }
    return (
        <>
            <Navbar open={open} handleOpen={handleOpen} />
            {<Menu open={open} handleClick={handleOpen} />}
        </>
    )
}

export default LayoutNavigation
