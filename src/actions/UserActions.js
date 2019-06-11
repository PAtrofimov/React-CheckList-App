export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export function handleLogin(year) {
  return dispatch => {
    dispatch({
      type: LOGIN_REQUEST
    });

    setTimeout(
      () =>
        dispatch({
          type: LOGIN_SUCCESS,
          payload: "Anton"
        }),
      100
    );
    //eslint-disable-next-line no-undef
    // VK.Auth.login(r => {
    //   if (r.session) {
    //     let user = r.session.user.first_name;

    //     dispatch({
    //       type: LOGIN_SUCCESS,
    //       payload: user
    //     });
    //   } else {
    //     dispatch({
    //       type: LOGIN_FAIL,
    //       error: true,
    //       payload: new Error("Ошибка авторизации!")
    //     });
    //   }
    // }, 4);
  };
}
