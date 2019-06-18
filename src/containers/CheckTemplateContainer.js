import React, { Component } from "react";
import { connect } from "react-redux";
import { CheckTemplate } from "../components/CheckTemplate";
import { getCheckTemplates } from "../actions/CheckTemplateActions";

class CheckTemplateContainer extends Component {
  render() {
    const { checkTemplate, getCheckTemplates } = this.props;
    const id = this.props.match.params.id || 0;
    console.log({ props2: this.props, id });

    if (!checkTemplate) return null;
    return (
      <div className="row">
        <CheckTemplate
          checkTemplates={checkTemplate.checkTemplates}
          isFetching={checkTemplate.isFetching}
          getCheckTemplates={getCheckTemplates}
          error={checkTemplate.error}
          id={id}
        />
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log({ store });
  return {
    checkTemplate: store.checkTemplate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCheckTemplates: () => dispatch(getCheckTemplates())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckTemplateContainer);
