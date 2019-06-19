import PropTypes from "prop-types";
import React from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import CheckTemplateContainer from "../containers/CheckTemplateContainer";
import { CheckTemplateJournal } from "./CheckTemplate-journal";

export class CheckTemplateRoute extends React.Component {
  renderRoute = match => {
    return (
      <Switch>
        <Route exact path={`${match.path}`} component={CheckTemplateJournal} />
        <Route path={`${match.path}/:id`} component={CheckTemplateContainer} />
      </Switch>
    );
  };

  render() {
    const { checkTemplates, match } = this.props;

    return this.renderRoute(match);
  }
}

CheckTemplateRoute.propTypes = {
  //checkTemplates: PropTypes.array.isRequired,
  // getCheckTemplates: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string
};
