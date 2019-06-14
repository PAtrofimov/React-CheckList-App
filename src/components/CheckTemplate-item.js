import PropTypes from "prop-types";
import React from "react";

export class CheckTemplate extends React.Component {

  state = {
    selectedOption: 'YesNo'
  }

  handleRefresh = e => {
    this.props.getCheckTemplates();
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    // this.setState({
    //   [name]: value
    // });
  }

  handleOptionChange = (e) => {
    this.setState({
      selectedOption: e.target.value
    });

  }

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
            <img src={""} alt="Edit"/>
        </button>

        
        <button className="btn-delete" onClick={this.handleDeleteItem}>
            <img src={""} alt="Delete"/>
        </button>

      </div>
    );
  };

  renderItem = (group, groupIndex) => {
    if (!Array.isArray(group.items) || group.items.length === 0) {
      return <p className="point-text">Нет вопросов!</p>;
    }

    return group.items.map((item, index) => (
      <div key={item.id} className="wrapper-point">
        <span className="point-number">{item.number}</span>
        <span className="point-text">{item.text}</span>

        {this.renderInputs(item)}
      </div>
    ));
  };

  renderTemplate = () => {
    const { checkTemplates, isFetching, error } = this.props;

    if (error) {
      return <p className="error">Произошла ошибка!</p>;
    }

    console.log({checkTemplates})

    if (isFetching ) {
      return <p>Загрузка ...</p>;


    } 
    
    else if (checkTemplates.length) {
      return checkTemplates[0].groups.map((item, index) => {
        return (
          <div key={item.id} className="check-template">
            <span className="group-number">{item.number}</span>
            <span className="group-text">{item.text}</span>
            <button className="btn-active" onClick={this.handleActiveGroup}>
            <img src={""} alt="Active"/>
            </button>
            {this.renderItem(item, index)}
          </div>
        );
      });
    }
  };

  render() {
    const { checkTemplates } = this.props;

    return (
      <div className="ib page">
        <button onClick={this.handleRefresh} className="btn">
          Refresh
        </button>
        <h2 className="">Редактирование шаблона </h2>
        <p className="check-tpl">Основной</p>
        <button onClick={this.handleRefresh} className="btn">
          Edit
        </button>

        <div className="btn"> 
        <button onClick={this.handleRefresh} className="btn">
          Добавить
        </button> 
        
        <button onClick={this.handleRefresh} className="btn">
          Добавить раздел
       
        </button>

        </div>

        {this.renderTemplate()}
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
