import React, { Component } from 'react'
import Layout from "../components/layout/Layout";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
export default class settings extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <Layout contentTitle="ตั้งค่า">

                <style jsx>{`
      .blog-container {
        width: 100%;
        // background-color: #17a2b8;
        display: flex;
      }
      .blog-item{
        height: 180px;
        width: 200px;
        background-color:#ddd;
        flex-direction: row;
        margin: 5px;
        border-radius: 5px;
        text-align: center;
      }
      .blog-item > img{
        height: 90px;
        display: flex;
        margin: auto;
        margin-bottom: 10px;
        margin-top: 15px;
        
        
      }
    `}</style>


                <div>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}
                            >
                                สิาค้า
            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}
                            >
                                ผู้ใช้งาน
            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '3' })}
                                onClick={() => { this.toggle('3'); }}
                            >
                                ค่าระบบ
            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '4' })}
                                onClick={() => { this.toggle('4'); }}
                            >
                                44
            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <div className="blog-container">
                                <div className="blog-item">
                                <img src="../static/img/icon1.png"/>
                                <a href="#" >สินค้า</a>
                                </div>
                                <div className="blog-item">
                                <img src="../static/img/icon2.png"/>
                                <a href="#" >ประกาศ</a>
                                </div>
                                <div className="blog-item">
                                <img src="../static/img/icon3.png"/>
                                <a href="#" >เขียนบทความ</a>
                                </div>
                                <div className="blog-item"></div>
                                <div className="blog-item"></div>
                            </div>
                            <div className="blog-container">
                                <div className="blog-item"></div>
                                <div className="blog-item"></div>
                                <div className="blog-item"></div>
                                <div className="blog-item"></div>
                                <div className="blog-item"></div>
                            </div>

                        </TabPane>
                        <TabPane tabId="2">
                            dd
                        </TabPane>
                        <TabPane tabId="3">
                            3333
                        </TabPane>
                        <TabPane tabId="4">
                            4444
                        </TabPane>
                    </TabContent>



                </div>
            </Layout>
        )
    }
}
