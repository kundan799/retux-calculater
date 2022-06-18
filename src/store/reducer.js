import {
  COUNTER_ADD,
  COUNTER_DECREMENT,
  COUNTER_DIVIDE,
  COUNTER_INCREMENT,
  COUNTER_MULTIPLAY,
  COUNTER_SUBTRACT,
} from "./action.type";

export const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case COUNTER_INCREMENT: {
      state.count++;
      return { ...state };
    }
    case COUNTER_DECREMENT: {
      state.count--;
      return { ...state };
    }
    case COUNTER_ADD: {
      state.count = state.count +action.payload;
      return { ...state };
    }
    case COUNTER_MULTIPLAY: {
      state.count = state.count *action.payload;
      return { ...state };
    }
    case COUNTER_SUBTRACT: {
      state.count = state.count -action.payload;
      return { ...state };
    }
    case COUNTER_DIVIDE: {
      state.count = state.count / action.payload;
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
