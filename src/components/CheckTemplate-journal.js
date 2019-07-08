import PropTypes from "prop-types";
import React from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import CheckTemplateContainer from "../containers/CheckTemplateContainer";

const LinkButton = withRouter(({ history }) => {
  return (
    <button onClick={() => history.push("/checktemplates/1")}>Добавить</button>
  );
});

export class CheckTemplateJournal extends React.Component {
  renderTemplate = match => {
    return (
      <React.Fragment>
        <table>
          <caption>Шаблоны чек-листов</caption>
          <thead>
            <tr>
              <th>Название</th>
              <th>Дата изменения</th>
              <th>Автор</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link to={`${match.path}/1`}>Основной</Link>
              </td>
              <td>06.06.2019</td>
              <td>В. Сталин</td>
            </tr>
            <tr>
              <td>Техника безопасности</td>
              <td>01.01.2019</td>
              <td>И. Ленин</td>
            </tr>
            <tr>
              <td>Должностные инструкции</td>
              <td>01.01.2011</td>
              <td>А. Берия</td>
            </tr>
          </tbody>
        </table>
        <div className="add-pan">
          <input
            type="text"
            className="add-template"
            name="add_template"
            defaultValue={""}
            placeholder="Введите название шаблона"
          />
          <LinkButton className="btn-add">
            <img src={""} alt="Добавить" />
          </LinkButton>
        </div>
        
      </React.Fragment>
    );
  };

  render() {
    const { checkTemplates, match } = this.props;
    return <div className="checktemplates">{this.renderTemplate(match)}</div>;
  }
}

CheckTemplateJournal.propTypes = {
  //checkTemplates: PropTypes.array.isRequired,
  // getCheckTemplates: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string
};
