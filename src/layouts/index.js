import React from "react";
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export default class DefaultLayout extends React.PureComponent {
    // constructor(props) {
    //     super(props);
    // }

    render() {
       return <>
            <Layout>
                <Sider style={{background: "mediumslateblue"}}>Sider</Sider>
                <Layout>
                    <Header  style={{background: "blueviolet"}} >Header</Header>
                    <Content>{this.props.children}</Content>
                    <Footer style={{background: "slateblue"}}>Footer</Footer>
                </Layout>
            </Layout>
        </>
    }
}