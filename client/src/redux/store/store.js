import {configureStore} from "@reduxjs/toolkit";
import characters from "./slice/users/index"
import page from "./slice/pages/index"

export default configureStore({
  reducer:{
    characters,
    page
  }
}) 

