import PropTypes from "prop-types";
import React from "react";
import { CheckTemplateItem } from "../components/CheckTemplate-item";

export class CheckTemplateGroup extends React.Component {
  state = {
    showItems: false,
    readOnly: true
  };

  handleToggleGroup = () => {
    this.setState({ showItems: !this.state.showItems });
  };

  handleEditGroup = () => {
    this.setState({ readOnly: !this.state.readOnly });
  };

  handleEditCancel = () => {
    this.setState({ readOnly: true });
  };

  handleEditSave = () => {
    
  };

  renderActions = readOnly => {
    if (readOnly)
      return (
        <React.Fragment>
          <button className="btn-toggle" onClick={this.handleToggleGroup}>
            <img src={""} alt="Toggle" />
          </button>
          <button className="btn-edit" onClick={this.handleEditGroup}>
            <img src={""} alt="Edit" />
          </button>
          <button className="btn-delete" onClick={this.handleDeleteGroup}>
            <img src={""} alt="Delete" />
          </button>
        </React.Fragment>
      );

    return (
      <React.Fragment>
        <button className="btn-save" onClick={this.handleEditSave}>
          <img src={""} alt="Save" />
        </button>
        <button className="btn-cancel" onClick={this.handleEditCancel}>
          <img src={""} alt="Cancel" />
        </button>{" "}
      </React.Fragment>
    );
  };

  renderGroup = (group, readOnly) => {
    if (readOnly)
      return (
        <div>
          <span className="group-number">{group.number}</span>
          <span className="group-text">{group.text}</span>
          {this.renderActions(readOnly)}
        </div>
      );

    return (
      <div>
        <input
          type="text"
          className="group-number-input"
          name="group_number_input"
          defaultValue={group.number}
          placeholder="Введите номер ..."
        />
        <input
          type="text"
          className="group-text-input"
          name="group_text_input"
          defaultValue={group.text}
          placeholder="Введите текст ..."
        />
        {this.renderActions(readOnly)}
      </div>
    );
  };

  renderItems = group => {
    if (!Array.isArray(group.items)) return <p>Нет вопросов</p>;

    const items = group.items.map((item, index) => {
      return (
        <CheckTemplateItem key={item.id} item={item}>
          {" "}
        </CheckTemplateItem>
      );
    });

    return (
      <React.Fragment>
        {items}
        <CheckTemplateItem key={0} newItem />
      </React.Fragment>
    );
  };

  render() {
    const { group, isFetching, error } = this.props;
    const { showItems, readOnly } = this.state;
    return (
      <div className="group-wrapper">
        {this.renderGroup(group, readOnly)}
        {showItems && this.renderItems(group)}
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
