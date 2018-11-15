import React, { Component, Fragment } from "react";
import "./App.css";
import Regions from "./components/regions/regionsContainer";
import Timezones from "./components/timezone/index";
import Details from "./components/detail";
import WebfontLoader from "webfontloader";
import Footer from "./components/footer";
import Header from "./components/header";
import Favorite from "./components/favorite";
import Sidebar from "./components/sidebar";
import MainState from "./components/common/mainState";
import { Subscribe } from "unstated";

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
      <Subscribe to={[MainState]}>
        {(mainStateContainer: MainState) => (
          <section className="App">
            {this.state.fontsLoaded ? (
              <Fragment>
                <Header />
                <Sidebar />
                <div className="app-main">
                  <Regions
                    defaultRegion={mainStateContainer.state.defaultRegion}
                  />
                  <Timezones />
                  <Favorite />
                  <Details />
                </div>
                <Footer />
              </Fragment>
            ) : null}
          </section>
        )}
      </Subscribe>
    );
  }
}

export default App;
