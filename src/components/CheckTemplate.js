import PropTypes from "prop-types";
import React from "react";
import { CheckTemplateGroup } from "../components/CheckTemplate-group";

export class CheckTemplate extends React.Component {
  handleRefresh = e => {
    this.props.getCheckTemplates();
  };

  componentDidMount() {
    this.props.getCheckTemplates();
  }

  renderHeader = tpl => {
    return (
      <React.Fragment>
        <button onClick={this.handleRefresh} className="btn">
          Refresh
        </button>
        <h2 className="">Редактирование шаблона </h2>
        <p className="check-tpl">{tpl.name}</p>
        <button onClick={this.handleRefresh} className="btn">
          Edit
        </button>
      </React.Fragment>
    );
  };

  renderGroups = tpl => {
    return tpl.groups.map((group, index) => {
      return (
        <CheckTemplateGroup key={group.id} group={group}>
          {" "}
        </CheckTemplateGroup>
      );
    });
  };

  render() {
    const id = this.props.id || 0;
    const { checkTemplates, isFetching, error } = this.props;

    console.log({ props3: this.props });

    if (error) {
      return <p className="error">Произошла ошибка!</p>;
    }

    if (isFetching) {
      return <p>Загрузка ...</p>;
    }

    if (!checkTemplates.length) {
      return null;
    }

    const filteredCheckTemplates = checkTemplates.filter(elem => elem.id == id);
    console.log({ filteredCheckTemplates});
    if (!filteredCheckTemplates.length) {
      return null;
    }

    return (
      <div className="ib page">
        {this.renderHeader(filteredCheckTemplates[0])}
        {this.renderGroups(filteredCheckTemplates[0])}
      </div>
    );
  }
}

CheckTemplate.propTypes = {
  //checkTemplates: PropTypes.array.isRequired,
  getCheckTemplates: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string
};
