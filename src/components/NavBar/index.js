import React from 'react';
import { Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class NavBar extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    render() {
        const { current } = this.state;
        return (
            <>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1"><a href="/diaries">Home</a></Menu.Item>
                {/* <Menu.Item key="2">About Me</Menu.Item>
                <Menu.Item key="3">Graph</Menu.Item> */}
            </Menu>
            </>
        );
    }
}

export default NavBar;