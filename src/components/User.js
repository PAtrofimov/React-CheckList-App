import PropTypes from "prop-types";
import React from "react";

export class User extends React.Component {
  renderTemplate() {
    const { name, error, isFetching, handleLogin } = this.props;

    if (error) {
      return <p>Во время загрузки произошла ошибка. Обновите страницу!</p>;
    }

    if (isFetching) {
      return <p>Загружаю ... </p>;
    }

    if (name) {
      return <p>Hello, {name} </p>;
    } else {
      return (
        <button className="btn" onClick={handleLogin}>
          Войти
        </button>
      );
    }
  }

  render() {
    console.log("<User/> render!");

    return <div className="ib user">{this.renderTemplate()}</div>;
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired
};
