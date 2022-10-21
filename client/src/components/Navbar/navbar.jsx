import React from "react";
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import SearchBar from "../SearchBar/SearchBar";

export default function Nav(){
    return (
        <nav>
            <SearchBar/>
        </nav>
    )
    
}