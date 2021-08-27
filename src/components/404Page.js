import React from "react";
import { Layout, Input, Button } from 'antd';
import HeroComponent from "./Hero";
import FooterComponent from "./Footer";
import HeaderComponent from "./Header";
const { TextArea } = Input;
const { Header, Content } = Layout;


class _404PageComponent extends React.Component {
    state = {
        value: '',
        size: 'large',
    };

    
      handleSizeChange = e => {
        this.setState({ size: e.target.value });
      };

    onChange = ({ target: { value } }) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;
        const { size } = this.state;
        return (
            <div>
                <Header>
                    <HeaderComponent></HeaderComponent>
                </Header>
                <Layout>
                    <Content>
                        <HeroComponent img_url="/assets/contactus_hero.png" text="Our Representatives Are Always Ready To Serve You" />
                        <div className="contact-container container">
                            <br/>
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xl-12 col-xs-12">

                                    <h4 className="text-center contact-heading">Contact Us</h4>
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12 col-xl-12 col-xs-12">
                                            <div className="form-group">
                                                <label className="">Name:<strong>*</strong></label>
                                                <Input placeholder="Enter Your Fullname" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label className="">Email:<strong>*</strong></label>
                                                <Input placeholder="Enter email address" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label className="">Subject:<strong>*</strong></label>
                                                <Input placeholder="Enter Subject" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label className="">Message:<strong>*</strong></label>
                                                <TextArea value={value} showCount onChange={this.onChange} placeholder="Type your message here"  autoSize={{ minRows: 8, maxRows: 20 }}
                                                />
                                            </div>
                                        </div>
                                      
                                        <p className="marked-caution">All fields mark * are mandatory</p>
                                      
                                    </div>
                                    <div className="col-md-6 contact-btns ml-auto">
                                        <Button type="default"  size={size} >Cancel</Button>
                                        <Button type="primary"  size={size} >Send</Button>
                                        </div>
                                    <div className="col-md-12">
                                    <h4 className="text-center here-we-are-text">We Are Here</h4>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className="container-fluid footer-img">
                        <div className="col-md-12">
                                        <div className="footer-img-contact" style={{'backgroundImage': 'url(assets/contactus.png)'}}>
                                        </div>
                                    </div>
                        </div>
                    </Content>
                    <FooterComponent />
                </Layout>
            </div>);

    }

}


export default _404PageComponent;