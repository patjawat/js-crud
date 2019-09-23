import React, { Component } from 'react'
import Header from "./Header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import Content from './content';

export default class layout extends Component {
    render() {
        return (
            <div>
            <Header />
                <Sidebar />
                <Content title={this.props.contentTitle}>
                  {this.props.children}
                </Content>
                <Footer />
            </div>
        )
    }
}
