import React from 'react';
import './App.css';
import {ChakraProvider} from '@chakra-ui/react'
import {Link, Outlet} from "react-router-dom";
import {Navbar} from "./componets/Navbar";

export const App =()=>{
    return(

        <div>
            <ChakraProvider>
                <Navbar/>
            </ChakraProvider>

            <Outlet/>
        </div>

    )
}

