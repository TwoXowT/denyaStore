import React from 'react';
import {Box, Center, Flex, Image, Input} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import logo from "../img/logo.png";
import './Navbar.css';
export const Navbar = ()=>{

    return(
            <Flex className='navbar-container' height="80px" justifyContent='center' alignItems='center' >
                <Box >
                    <Image h='80px' src={logo} alt='logo'/>
                </Box>

                <Center w="7%" h='80px' className='nav-item'>
                    <Link to="man">Мужчинам</Link>
                </Center>
                <Center w="7%" h='80px' className='nav-item'>
                    <Link to="woman">Женщинам</Link>
                </Center>
                <Input color='#fafafa' width='400px'  placeholder='Поиск по товарам и брендам' size='lg' />

                <Center w="7%" h='80px' className='nav-item'>
                    <Link to="account">Профиль</Link>
                </Center>
                <Center  w="7%" h='80px' className='nav-item'>
                    <Link to="bag">Корзина</Link>
                </Center>
                <Center  w="12%" h='80px' className='nav-item'>
                    <Link to="provider">Стать партнером</Link>
                </Center>



            </Flex>

    )
}