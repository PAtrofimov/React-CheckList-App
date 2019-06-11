import React, { Component } from "react";
import { connect } from "react-redux";
import { CheckTemplate } from "../components/CheckTemplate";
import { getCheckTemplates } from "../actions/CheckTemplateActions";

class CheckTemplateContainer extends Component {
  render() {
    const { checkTemplate, getCheckTemplates } = this.props;
    console.log({props:this.props});

    if (!Array.isArray(checkTemplate)) return null;
    return (
      <div className="row">
        <CheckTemplate
          checkTemplates={checkTemplate.checkTemplates}
          isFetching={checkTemplate.isFetching}
          getCheckTemplates={getCheckTemplates}
          error={checkTemplate.error}
        />
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log({store});
  return {
    CheckTemplate: store.CheckTemplate
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
