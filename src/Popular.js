import React from "react";
import Card from "./Card";
import TopStars from "./TopStars";
import Header from "./Header";

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLanguage: "All",
    };
  }
  handleClick = (language) => {
    this.setState({ activeLanguage: language });
  };

  render() {
    return (
      <div>
        <Header />
        <TopStars
          handleClick={this.handleClick}
          activeLanguage={this.state.activeLanguage}
        />
        <Card activeLanguage={this.state.activeLanguage} />
      </div>
    );
  }
}

export default Popular;
