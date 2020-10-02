import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './NavBar.css';
import { FaGem, FaHeart, FaGoogle } from "react-icons/fa"

export default class NavBar extends React.Component {

    render() {
        return (
            <ProSidebar className= "Nav-bar">
                <Menu iconShape="square">
                    <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
                    <SubMenu title="Components" icon={<FaHeart />}>
                        <MenuItem><a href="https://www.facebook.com"> fb </a></MenuItem>
                    </SubMenu>
                    <SubMenu title="Google" icon={<FaGoogle />}>
                        <MenuItem><a href="https://www.google.com">Go to</a></MenuItem>
                    </SubMenu>
                </Menu>
            </ProSidebar>
        )
    }
}