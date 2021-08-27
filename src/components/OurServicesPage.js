import React from "react";
import { Layout } from 'antd';
import HeroComponent from "./Hero";
import FooterComponent from "./Footer";
import HeaderComponent from "./Header";
import ServiceCard from "./ServicesCard";

const { Header,  Content } = Layout;

const services = [
    {
        header: "Web Development",
        position: 'right',
        bgcolor:"#fff",
        imgUrl: "assets/webdevelopment.png",
        text: "graphic design is defined as “the art and practice of planning and projecting ideas and experiences with visual and textual content.” In other terms, graphic design communicates certain ideas or messages in a visual way. These visuals can be..."
    },
    {
        header: "Software Development",
        position: 'left',
        bgcolor:"#CFCFCF",
        imgUrl: "assets/softwaredevelopment.png",
        text: "Software development is the process of developing the software for various applications and for the maintenance of the system so that developer knows the lifecycle of the software from the business requirement to the maintenance of..."
    },
    {
        header: "Digital Marketing",
        position: 'right',
        bgcolor:"#fff",
        imgUrl: "assets/webdevelopment.png",
        text: "Digital marketing refers to any online marketing efforts or assets. Email marketing, pay-per-click advertising, social media marketing and even blogging are all great examples of digital marketing—they help introduce people to your..."
    },
    {
        header: "UX/UI Design",
        position: 'left',
        bgcolor:"#CFCFCF",
        imgUrl: "assets/softwaredevelopment.png",
        text: "Digital marketing refers to any online marketing efforts or assets. Email marketing, pay-per-click advertising, social media marketing and even blogging are all great examples of digital marketing—they help introduce people to your..."
    }
]

class OurServicesPageComponent extends React.Component {

    render() {
        return (
            <div>
                <Header>
                    <HeaderComponent></HeaderComponent>
                </Header>
                <Layout>
                    <Content>
                        <HeroComponent img_url={process.env.PUBLIC_URL+"/assets/services_hero.png"} text="Creating the Best Leading Web Applications and, Proving Reliable IT Solutions for your Businesses.Creating the Best Leading Web Applications and, Proving Reliable IT Solutions for your Businesses." />
                        <div className="">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <h3 className="service-header">Our Services</h3>
                                </div>
                            </div>
                            <div className="row">
                                {services.map((service, index) => { service.key = index; return <ServiceCard key={index} service={service} /> })}
                            </div>
                        </div>
                    </Content>
                    <FooterComponent />
                </Layout>
            </div>);

    }

}


export default OurServicesPageComponent;