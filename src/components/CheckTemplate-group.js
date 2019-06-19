import PropTypes from "prop-types";
import React from "react";
import { CheckTemplateItem } from "../components/CheckTemplate-item";

export class CheckTemplateGroup extends React.Component {
  renderActions = () => (
    <React.Fragment>
      <button className="btn-toggle" onClick={this.handleToggleGroup}>
        <img src={""} alt="Toggle" />
      </button>
      <button className="btn-edit" onClick={this.handleEditCroup}>
        <img src={""} alt="Edit" />
      </button>
      <button className="btn-delete" onClick={this.handleDeleteGroup}>
        <img src={""} alt="Delete" />
      </button>
    </React.Fragment>
  );

  renderItems = group => {
    if (!Array.isArray(group.items)) return <p>Нет вопросов</p>;

    const items = group.items.map((item, index) => {
      return (
        <CheckTemplateItem key={item.id} item={item}>
          {" "}
        </CheckTemplateItem>
      );
    })

    return (<React.Fragment>
  {items}
    <CheckTemplateItem key={0} newItem />
   </React.Fragment> );
  };

  render() {
    const { group, isFetching, error } = this.props;
    return (
      <div className="group">
        <div>
        <span className="group-number">{group.number}</span>
        <span className="group-text">{group.text}</span>
        {this.renderActions()}
        </div>
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
