import React from "react";
import { ReactComponent as LifeMealDishs } from '../assets/hero_section_left_bg.svg';

class HeroComponent extends React.Component {
    state = {
        size: 'large',
    };

    handleSizeChange = e => {
        this.setState({ size: e.target.value });
    };

    render() {
        return (
            <div className="row hero-main">
                    <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6">
                        <div className="here-container hero-dishes" >
                           <LifeMealDishs></LifeMealDishs>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6">
                        <div className="tasty-text" >
                         <p className="homepage-title">
                         Enjoy Healthy, Tasty Homemade meals everyday
                             </p>
                         <p className="tasty-text-desc">
                         We understand the importance of healthy and nutritious meals and we believe that You eat to live and not the other way round. We offer a wide variety of nutritious, home-made and tasty meals, prepared to excite your taste buds and meet your unique needs.
                         </p>
                        </div>
                    </div>
            </div>

        )
    }

}

export default HeroComponent;