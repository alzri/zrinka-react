import React from "react";
import { PlusIcon } from "../icons/PlusIcon";

const AddNewButton = () => {
    return (
        <div class="add-new-btn">
            <button type="button" class="button primary-button">
                <span class="tooltip-window">New workspace <span class="shortcut-combination">⌘+O</span></span>
                <span class="shortcut-text">New</span>
               <PlusIcon />
            </button>
        </div>
    )
}

export { AddNewButton }