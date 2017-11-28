export const types = {
  FETCH_CLIENTS: 'FETCH_CLIENTS',
  RENDER_CLIENTS: 'RENDER_CLIENTS',
  FILTER_CLIENTS: 'FILTER_CLIENTS',
  SAVE_CLIENT: 'SAVE_CLIENT',
  TEST: 'TEST',
};
export const actions = {
  test: (thing) => ({
    type: types.TEST,
    meta: {
      type: 'test',
      thing,
    },
  }),
};
const initialState = {
  clients: [{first_name: "Heather"}, {first_name: "Bryttany"}],
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RENDER_CLIENTS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
