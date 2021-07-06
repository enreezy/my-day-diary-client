import React from 'react';
import { Layout, Breadcrumb } from 'antd';

const { Header, Content, Sider } = Layout;
import NavBar from './NavBar';
import SideBar from './SideBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ContentRoutes from 'routes/contentRoutes';



export default function App() {

    return (
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <NavBar />
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <SideBar />
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>Diary</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <ContentRoutes />
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
    );
}