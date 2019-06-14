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

  renderInputs = inputs => {
    return (
      <div className="point-actions">
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

        <button className="btn-edit" onClick={this.handleEditItem}>
          <img src={""} alt="Edit" />
        </button>

        <button className="btn-delete" onClick={this.handleDeleteItem}>
          <img src={""} alt="Delete" />
        </button>
      </div>
    );
  };

  renderTemplate = (item) => {
    
     return ( <div className="wrapper-point">
        <span className="point-number">{item.number}</span>
        <span className="point-text">{item.text}</span>
        {this.renderInputs(item)}
      </div>
    );
  };

  render() {
    const { item, isFetching, error } = this.props;
    return this.renderTemplate(item);
  }
}

CheckTemplateItem.propTypes = {
  item: PropTypes.object.isRequired,
  //getCheckTemplates: PropTypes.func.isRequired,
 // isFetching: PropTypes.bool.isRequired,
 // error: PropTypes.string
};
