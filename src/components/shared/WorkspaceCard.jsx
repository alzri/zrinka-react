import React from "react";
import Card from "./Card";

const cardsItems = [
 {
    items: [
      {
        gitLink: '#',
        linkText: 'hash/owner',
        title: 'Workspace name',
      }
    ],
    items: [
        {
            gitLink: '#',
            linkText: 'hash/owner',
            title: 'Workspace name',
        }
    ],
    items: [
        {
            gitLink: '#',
            linkText: 'hash/owner',
            title: 'Workspace name',
        }
    ],
 }
] 


const WorkspaceCard = () => {
    return (
        <div className="list__item">
            <div className="list__item__content">
            {cardsItems.map((card) => {
                return (
                    <Card cardData={card} />
                )
            })}
            </div>
        </div>
    )
}

export { WorkspaceCard }