import React from "react";
import { ReactComponent as LocationMarker } from '../assets/location.svg';

class LocationComponent extends React.Component {
   

    scrollDown = e => {
        this.scrollToBottom();
    };
    constructor(props){
        super(props);
        this.scrollDown =this.scrollDown.bind(this)
    }

    render() {
        return (
            <div className="row location-section">
                    <div className="col-md-6 marker-container col-xs-12 col-sm-12 col-lg-6">
                        <div className="location-button" >
                        <LocationMarker></LocationMarker>
                        </div>
                      
                    </div>
                    <div className="col-md-6 col-xs-12 col-sm-12 col-lg-6">
                    <div className="scroll-button" onClick={()=>this.scrollToBottom} >
                       
                        <div className="scroll-container" >
                            <div className="scroll-pointer"></div>
                        </div>
                        <div className="scroll-text">Scroll Down</div>
                        </div>
                    </div>
            </div>

        )
    }

}

export default LocationComponent;