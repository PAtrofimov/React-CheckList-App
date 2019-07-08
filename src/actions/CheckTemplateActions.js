export const GET_CheckTemplates_REQUEST = "GET_CheckTemplates_REQUEST";
export const GET_CheckTemplates_SUCCESS = "GET_CheckTemplates_SUCCESS";
export const GET_CheckTemplates_FAIL = "GET_CheckTemplates_FAIL";

export const ADD_CheckTemplate = "ADD_CheckTemplate";

export const TYPES_MARKS = {
  YesNoMiddle: "YesNoMiddle",
  IntervalFrom1To5: "IntervalFrom1To5",
  YesNo: "YesNo"
};

const checkTemplates = [
  {
    id: 1,
    сhangeDate: new Date(2018, 1, 20),
    name: "Основной",
    author: "Вася",

    groups: [
      {
        id: 1,
        text: "Наружный вид магазина",
        number: 1,
        items: [
          {
            id: 1,
            number: "1.1",
            text: "Cостояние магазина снаружи?",
            typeMark: TYPES_MARKS.IntervalFrom1To5,
            required: true
          },

          {
            id: 2,
            number: "1.2",
            text: "Хранение соответсвует норме ?",
            typeMark: TYPES_MARKS.YesNo,
            required: true
          }
        ]
      },

      {
        id: 2,
        text: "Техника безопасности на объекте",
        number: 2,
        items: [
          {
            id: 1,
            number: "2.1",
            text: "Техника безопасности соблюдается ?",
            typeMark: TYPES_MARKS.YesNo,
            required: true
          },

          {
            id: 2,
            number: "2.2",
            text: "Состояние сигнализации в норме ?",
            typeMark: TYPES_MARKS.IntervalFrom1To5,
            required: true
          }
        ]
      }
    ]
  }
];

// function getMorePhotos(offset, count, year, dispatch) {
//   //eslint-disable-next-line no-undef
//   VK.Api.call(
//     "photos.getAll",
//     { extended: 1, count: count, offset: offset, v: "5.80" },
//     r => {
//       try {
//         photosArr = photosArr.concat(r.response.items);
//         if (offset <= r.response.count) {
//           offset += 200;
//           getMorePhotos(offset, count, year, dispatch);
//         } else {
//           cashed = true;
//           let photos = makeYearPhotos(photosArr, year);
//           dispatch({
//             type: GET_PHOTOS_SUCCESS,
//             payload: photos
//           });
//         }
//       } catch (e) {
//         dispatch({
//           type: GET_PHOTOS_FAIL,
//           payload: new Error(e),
//           error: true
//         });
//       }
//     }
//   );
// }


let id=0;
export const createCheckTemplate = ({ name, author }) => {
  return (dispatch) => {
    return dispatch(createCheckTemplateSuccess({id:++id, changeDate: new Date(), name, author}));
    // return axios.post(`${apiUrl}/add`, {title, body})
    //   .then(response => {
      //  dispatch(createPostSuccess(response.data))
      // })
      // .catch(error => {
      //   throw(error);
      // });
  };
};

export const createCheckTemplateSuccess =  (data) => {
  return {
    type: ADD_CheckTemplate,
    payload: {...data}
  }
};

// export const deletePostSuccess = id => {
//   return {
//     type: DELETE_POST,
//     payload: {
//       id
//     }
//   }
// }

// export const deletePost = id => {
//   return (dispatch) => {
//     return axios.get(`${apiUrl}/delete/${id}`)
//       .then(response => {
//         dispatch(deletePostSuccess(response.data))
//       })
//       .catch(error => {
//         throw(error);
//       });
//   };
// };

// export const fetchPosts = (posts) => {
//   return {
//     type: FETCH_POST,
//     posts
//   }
// };

// export const fetchAllPosts = () => {
//   return (dispatch) => {
//     return axios.get(apiUrl)
//       .then(response => {
//         dispatch(fetchPosts(response.data))
//       })
//       .catch(error => {
//         throw(error);
//       });
//   };
// };

export function getCheckTemplates() {
  return dispatch => {
    // dispatch({
    //   type: GET_CheckTemplates_REQUEST,
    //   payload: "templates"
    // });

    // setTimeout(
    //   () =>
    dispatch({
      type: GET_CheckTemplates_SUCCESS,
      payload: checkTemplates
    });
    //   ,100
    // );

    // if (cashed) {
    //   let photos = makeYearPhotos(photosArr, year);

    //   dispatch({
    //     type: GET_PHOTOS_SUCCESS,
    //     payload: photos
    //   });
    // } else {
    //   getMorePhotos(0, 200, year, dispatch);
    // }
  };
}
