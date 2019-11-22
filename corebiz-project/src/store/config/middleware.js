import { UPDATE } from "../cart";

const middleware = action => next => {
  if (action.type === UPDATE) {
    console.log(action);
  }

  next(action);
};

export default middleware;
