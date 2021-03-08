import React from 'react';
import MenuHeader from '../MenuHeader/MenuHeader';
import Header from './../Header/Header';

const Layout = (props) => {
    return (
        <>
            <Header />
            <MenuHeader />
            {props.children}
        </>
    )
}

export default Layout
