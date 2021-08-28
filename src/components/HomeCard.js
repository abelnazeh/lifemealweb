import React from "react";
import { Card } from "react-bootstrap";
const bgStyle = { background: "##cfcfcf0f" };
const borderStyle = { border: "1px solid #ccc" };
class HomeCard extends React.Component {
  render() {
    const { content } = this.props;

    return (
      <div>
        <div className="row ">
          <div
            className="col-md-12 col-sm-12 col-xs-12 col-lg-12 card-container"
            style={content.key % 2 === 0 ? borderStyle : bgStyle}
          >
            {content.position === "right" ? (
              <div className="rightcard">
                <div
                  className={`row ${
                    content.key % 2 === 0 ? "dd" : "row-reverse"
                  }`}
                >
                  <div className="col-md-5 col-sm-12 col-xs-12">
                    <div className="card-left">
                      <Card
                        className="img-card"
                        style={{
                          backgroundImage:
                            "url(" +
                            process.env.PUBLIC_URL +
                            "/" +
                            content.imgUrl +
                            ")",
                        }}
                      ></Card>
                    </div>
                  </div>
                  <div className="col-md-7 col-sm-12 col-xs-12">
                    <div className="card-right">
                      <Card
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "11px",
                          border: "none",
                        }}
                      >
                        <Card.Header className="cardh-header">
                          {content.header}
                        </Card.Header>
                        <Card.Body className="card-body">
                          <Card.Text className="card-text">
                            {content.text}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="leftcard">
                <div
                  className={`row ${
                    content.key % 2 === 0 ? "dd" : "row-reverse"
                  }`}
                >
                  <div className="col-md-7 col-sm-12 col-xs-12">
                    <div className="card-right">
                      <Card
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "11px",
                          border: "none",
                        }}
                      >
                        <Card.Header className="cardh-header">
                          {content.header}
                        </Card.Header>
                        <Card.Body className="card-body">
                          <Card.Text className="card-text">
                            {content.text}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-12 col-xs-12">
                    <div className="card-left">
                      <Card
                        className="img-card"
                        style={{
                          backgroundImage:
                            "url(" +
                            process.env.PUBLIC_URL +
                            "/" +
                            content.imgUrl +
                            ")",
                        }}
                      ></Card>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default HomeCard;
