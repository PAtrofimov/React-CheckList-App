import PropTypes from "prop-types";
import React from "react";
import { CheckTemplateGroup } from "../components/CheckTemplate-group";

export class CheckTemplate extends React.Component {
  handleRefresh = e => {
    this.props.getCheckTemplates();
  };

  renderHeader = () => (
    <React.Fragment>
      <button onClick={this.handleRefresh} className="btn">
        Refresh
      </button>
      <h2 className="">Редактирование шаблона </h2>
      <p className="check-tpl">Основной</p>
      <button onClick={this.handleRefresh} className="btn">
        Edit
      </button>
    </React.Fragment>
  );

  renderActions = () => (
    <div className="btn">
      <button onClick={this.handleRefresh} className="btn">
        Добавить
      </button>

      <button onClick={this.handleRefresh} className="btn">
        Добавить раздел
      </button>
    </div>
  );

  renderGroups = () => {
    const { checkTemplates, isFetching, error } = this.props;

    if (error) {
      return <p className="error">Произошла ошибка!</p>;
    }

    console.log({ checkTemplates });

    if (isFetching) {
      return <p>Загрузка ...</p>;
    } else if (checkTemplates.length) {
      return checkTemplates[0].groups.map((group, index) => {
        return (
          <CheckTemplateGroup key={group.id} group={group}>
            {" "}
          </CheckTemplateGroup>
        );
      });
    }
  };

  render() {
    const { checkTemplates } = this.props;

    return (
      <div className="ib page">
        {this.renderHeader()}
        {this.renderActions()}
        {this.renderGroups()}
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
