import PropTypes from "prop-types";
import React from "react";

export class CheckTemplateItem extends React.Component {
  state = {
    selectedOption: "YesNo"
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    // this.setState({
    //   [name]: value
    // });
  }

  handleOptionChange = e => {
    this.setState({
      selectedOption: e.target.value
    });
  };

  renderActions = () => {
    return (
      <React.Fragment>
        <button className="btn-edit" onClick={this.handleEditItem}>
          <img src={""} alt="Edit" />
        </button>

        <button className="btn-delete" onClick={this.handleDeleteItem}>
          <img src={""} alt="Delete" />
        </button>
      </React.Fragment>
    );
  };

  renderActionAdd = () => {
    return (
      <React.Fragment>
        <button className="btn-add" onClick={this.handleAddItem}>
          <img src={""} alt="Add" />
        </button>
      </React.Fragment>
    );
  };

  renderInputAdd = () => {
    return (
      <React.Fragment>
        <input
          type="text"
          className="btn-add"
          name="btn-add-item"
          defaultValue={""}
          placeholder="Введите вопрос"
        />
      </React.Fragment>
    );
  };

  renderInputs = (item, newItem = false) => {
    return (
      <div className="point-actions">
        {newItem && this.renderInputAdd()}
        <p className="radio-text">Укажите тип ответа</p>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="YesNo"
              checked={this.state.selectedOption === "YesNo"}
              onChange={this.handleOptionChange}
            />
            Да/Нет
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="IntervalFrom1To5"
              checked={this.state.selectedOption === "IntervalFrom1To5"}
              onChange={this.handleOptionChange}
            />
            От 1 до 5
          </label>
        </div>

        <label>
          Required:
          <input
            name="required"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>

        {!newItem && this.renderActions()}
        {newItem && this.renderActionAdd()}
      </div>
    );
  };

  renderTemplate = (item, newItem) => {
    return (
      <div className="wrapper-point">
        {newItem ? (
          ""
        ) : (
          <React.Fragment>
            <span className="point-number">{item.number}</span>
            <span className="point-text">{item.text}</span>
          </React.Fragment>
        )}
        {this.renderInputs(item, newItem)}
      </div>
    );
  };

  render() {
    const { item, isFetching, error, newItem } = this.props;
    return this.renderTemplate(item, newItem);
  }
}

CheckTemplateItem.propTypes = {
  item: PropTypes.object.isRequired
  //getCheckTemplates: PropTypes.func.isRequired,
  // isFetching: PropTypes.bool.isRequired,
  // error: PropTypes.string
};
