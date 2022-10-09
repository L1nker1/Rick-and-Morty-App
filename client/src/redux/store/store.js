import {configureStore} from "@reduxjs/toolkit";
import characters from "./slice/users/"

export default configureStore({
  reducer:{
    characters
  }
}) 

/* const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
); */
// thunk nos permite trabajar con asincronismo en el front

//export default store;
