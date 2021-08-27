import React from "react";
import FooterComponent from "./Footer";
import FAQCard from "./generic/FAQCard";
import HeaderComponent from "./Header";

const faqs = [
  {
    title: "What is Lifemeal all about?",
    content:
      " We are an online food ordering and delivery company that offers Healthy meals that taste and feel homely. Prepared with the uniqueness of every individual in mind. ",
  },
  {
    title: "How do i become a Partner Cook?",
    content:
      "Head on to register on the platform, provide the essential details requiredand after a period set aside for verification and validation, your account wouldbe activated.",
  },
  {
    title: "What happens when my order is rejected by a cook?",
    content:
      "Meal requests are categorized into direct orders and schedules, feel free to choose from the wide range of options, make combinations as you please.",
  },
  {
    title: "How to be a cook or partnerAre there any hidden charges involved in ordering a meal?",
    content:
      "There are no hidden charges involved on our platform, you get charged the exact price for what your  meal and it’s delivery costs and nothing else, all payments are made directly through the app.",
  },
  {
    title: "What happens when my order is rejected by a cook?",
    content:
      "If at all a cook declines an order or fails to accept an order within the stipulated allowed time, our system’s algorithm immediately matches your order to another cook seamlessly.",
  },
  {
    title: "Who do i contact if there are issues with receiving my orders?",
    content:
      "You can fill form on the contact us page and explain the details surrounding the particular issue or you can send us an email attaching any needed document for better understanding to hello@lifemeal.ng",
  },
];

class FAQPageComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-12">
            <div className="faq-container">
              <HeaderComponent></HeaderComponent>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 faq-main-container">
            <div className="faq-body">
              <div className="faq-header-title">Frequently asked questions</div>
              <div className="col-md-12">
                <div className="right-dotted-square-faq"></div>
              </div>
              <div className="accordion" id="accordionFAQ">
                {faqs.map((item, index) => (
                  <FAQCard
                    key={index}
                    item={item}
                    parentID="accordionFAQ"
                    index={index}
                  />
                ))}
              </div>
              <div className="left-dotted-square-faq"></div>
            </div>
          </div>
        </div>
        <div className="">
          <FooterComponent />
        </div>
      </div>
    );
  }
}

export default FAQPageComponent;
