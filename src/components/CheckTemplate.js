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

  renderTemplate = tpl => {
    return (
      <React.Fragment>
        <h2 className="">Редактирование шаблона </h2>
        <div>
        <span className="check-tpl">{tpl.name}</span>
        <button onClick={this.handleRefresh} className="">
          Edit
        </button>
        </div>
      </React.Fragment>
    );
  };

  renderAddGroup = () => {
    return (
      <div className="actions">
       
        <input type="text" placeholder="Введите раздел ..." className="add-group"   name="add_group"  defaultValue={""}/>
     
        <button onClick={this.handleAddGroup} className="btn-add">
          Add
        </button>
      </div>
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
        {this.renderTemplate(filteredCheckTemplates[0])}
        {this.renderAddGroup()}
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
