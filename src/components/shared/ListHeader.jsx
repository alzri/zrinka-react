import React from "react";
import { Search } from "./Search";
import { AddNewButton } from "./AddNewButton";

const ListHeader = () => {
    return (
        <div class="list-header">
            <Search />
            <AddNewButton />
        </div>
    )
}

export { ListHeader }