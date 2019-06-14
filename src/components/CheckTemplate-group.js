import PropTypes from "prop-types";
import React from "react";
import { CheckTemplateItem } from "../components/CheckTemplate-item";

export class CheckTemplateGroup extends React.Component {
  renderActions = () => (
    <div className="point-actions">
      <button className="btn-toggle" onClick={this.handleToggleGroup}>
        <img src={""} alt="Toggle" />
      </button>
      <button className="btn-edit" onClick={this.handleEditCroup}>
        <img src={""} alt="Edit" />
      </button>
      <button className="btn-delete" onClick={this.handleDeleteGroup}>
        <img src={""} alt="Delete" />
      </button>
    </div>
  );

  renderItems = group => {
    if (!Array.isArray(group.items)) return <p>Нет вопросов</p>;

    return group.items.map((item, index) => {
      return (
        <CheckTemplateItem key={index} item={item}>
          {" "}
        </CheckTemplateItem>
      );
    });
  };

  render() {
    const { group, isFetching, error } = this.props;
    return (
      <div className="group">
        <span className="group-number">{group.number}</span>
        <span className="group-text">{group.text}</span>
        {this.renderActions()}
        {this.renderItems(group)}
      </div>
    );
  }
}

CheckTemplateGroup.propTypes = {
  group: PropTypes.shape.isRequired
  // getCheckTemplates: PropTypes.func.isRequired,
  // isFetching: PropTypes.bool.isRequired,
  // error: PropTypes.string
};
