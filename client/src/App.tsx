import React, { Component, Fragment } from "react";
import "./App.css";
import Regions from "./components/regions/regionsContainer";
import Timezones from "./components/timezone/index";
import Details from "./components/detail";
import WebfontLoader from "webfontloader";
import Footer from "./components/footer";
import Header from "./components/header";

class App extends Component<{}, { fontsLoaded: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }
  componentWillMount() {
    WebfontLoader.load({
      google: {
        families: ["Open Sans:n4,n5,n6"]
      },
      active: () => {
        this.setState({
          fontsLoaded: true
        });
      }
    });
  }
  render() {
    return (
      <section className="App">
        <Header />
        {this.state.fontsLoaded ? (
          <div className="app-main">
            <Regions />
            <Timezones />
            <Details />
          </div>
        ) : null}
        <Footer />
      </section>
    );
  }
}

export default App;
