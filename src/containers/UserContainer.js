import React, { Component } from "react";
import { connect } from "react-redux";
import { User } from "../components/User";
import { handleLogin } from "../actions/UserActions";

class UserContainer extends Component {
  render() {
    const { user, handleLogin } = this.props;
    return (
      <div className="row">
        <User
          name={user.name}
          isFetching={user.isFetching}
          handleLogin={handleLogin}
          error={user.error}
        />
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log(store);
  return {
    user: store.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: () => dispatch(handleLogin())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);
