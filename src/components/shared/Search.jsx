import React from "react";
import { SearchIcon } from "../icons/SearchIcon";

const Search = () => {
    return (
        <div class="search-field">
            <SearchIcon />
            <input id="search" type="search" name="search" placeholder="Search" class="search-input" />
        </div>
    )
}

export { Search }