import React from 'react';
import { Menu } from 'antd';
import { UserOutlined, PlusCircleOutlined, BookOutlined, SettingFilled, PoweroffOutlined } from '@ant-design/icons';
import { Link, Redirect, useHistory } from "react-router-dom";

const { SubMenu } = Menu;

export default function NavBar() {

    const history = useHistory();

    function handleLogout() {
        localStorage.clear();
    }

    return (
        <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
        >
            <SubMenu key="sub1" icon={<UserOutlined />} title="Diaries">
                <Menu.Item key="1" icon={<BookOutlined />}><Link to="/diaries">Diaries</Link></Menu.Item>
                <Menu.Item key="2" icon={<PlusCircleOutlined />}><Link to="/create">Create New</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title="More">
                <Menu.Item key="5" icon={<SettingFilled />}>Settings</Menu.Item>
                <Menu.Item key="6" icon={<PoweroffOutlined />} onClick={handleLogout}><a href="/signin">Logout</a></Menu.Item>
            </SubMenu>
            {/* <SubMenu key="sub3" icon={<SettingFilled />} title="Settings">
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
            </SubMenu> */}
        </Menu>
    );
}
