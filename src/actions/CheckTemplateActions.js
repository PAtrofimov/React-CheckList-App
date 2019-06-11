export const GET_CheckTemplates_REQUEST = "GET_CheckTemplates_REQUEST";
export const GET_CheckTemplates_SUCCESS = "GET_CheckTemplates_SUCCESS";
export const GET_CheckTemplates_FAIL = "GET_CheckTemplates_FAIL";

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
    items: [
      {
        id: 1,
        text: "Cостояние магазина снаружи ок ?",
        category: "Наружный вид магазина",
        typeMark: [TYPES_MARKS.YesNo, TYPES_MARKS.IntervalFrom1To5],
        required: true
      },

      {
        id: 2,
        text: "Хранение соответсвует норме ?",
        category: "Овощной отдел",
        typeMark: [TYPES_MARKS.YesNo, TYPES_MARKS.IntervalFrom1To5],
        required: true
      }
    ]
  },

  {
    id: 2,
    сhangeDate: new Date(2019, 2, 21),
    name: "Техника безопасности",
    author: "Петя",
    items: [
      {
        id: 10,
        text: "Камеры в порядке и охранник на месте ?",
        category: "Состояние охраны",
        typeMark: [TYPES_MARKS.YesNo, TYPES_MARKS.IntervalFrom1To5],
        required: true
      },

      {
        id: 20,
        text: "Рыба свежая ?",
        category: "Отдел рыбы",
        typeMark: [TYPES_MARKS.YesNo, TYPES_MARKS.IntervalFrom1To5],
        required: false
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
        })
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
