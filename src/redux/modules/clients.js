export const types = {
  FETCH_CLIENTS: 'FETCH_CLIENTS',
  RENDER_CLIENTS: 'RENDER_CLIENTS',
  FILTER_CLIENTS: 'FILTER_CLIENTS',
  SAVE_CLIENT: 'SAVE_CLIENT',
  TEST: 'TEST',
};
export const actions = {
  fetchClients: () => ({
    type: types.FETCH_CLIENTS,
    meta: {
      type: "fetchClients",
    }
  }),
  test: (thing) => ({
    type: types.TEST,
    meta: {
      type: 'test',
      thing,
    },
  }),
};
const initialState = {
  // clients: [{first_name: "Heather"}, {first_name: "Bryttany"}],
  clients: [],
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
