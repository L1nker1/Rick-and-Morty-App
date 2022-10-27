import {configureStore} from "@reduxjs/toolkit";
import characters from "./slice/users/index"
import page from "./slice/pages/index"
import episodes from "./slice/episodes/index";
export default configureStore({
  reducer:{
    characters,
    page,
    episodes
  }
}) 

