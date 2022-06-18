import {
  COUNTER_ADD,
  COUNTER_DECREMENT,
  COUNTER_DIVIDE,
  COUNTER_INCREMENT,
  COUNTER_MULTIPLAY,
  COUNTER_SUBTRACT,
} from "./action.type";

export const add = () => ({ type: COUNTER_INCREMENT });
export const subtract = () => ({ type: COUNTER_DECREMENT });
export const inadd = (value) => ({ type: COUNTER_ADD, payload: value });
export const Myltiplay = (value) => ({
  type: COUNTER_MULTIPLAY,
  payload: value,
});
export const insubtract = (value) => ({
  type: COUNTER_SUBTRACT,
  payload: value,
});
export const divide = (value) => ({ type: COUNTER_DIVIDE, payload: value });
