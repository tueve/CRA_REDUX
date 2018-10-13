import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import routes from "./routes";
import Header from "./Header";
import Footer from "./Footer";
import NotFoundPage from "../NotFoundPage";

export default class Layout extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Header />
          <Switch>
            {routes.map(({ path, component, exact }, key) => (
              <Route
                path={path}
                exact={exact}
                component={component}
                key={key}
              />
            ))}
            <Route component={NotFoundPage} />
          </Switch>
          <Footer />
        </Container>
      </Router>
    );
  }
}
