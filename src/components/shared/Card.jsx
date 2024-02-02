import React from "react";

const Card = ({ cardData }) => {
    return (
        <div className="list__item">
            <div className="list__item__content__link">
                {cardData.items.map((linkItem) => (
                    <div key={linkItem.id}>
                        <span>GitSource</span>
                        <a href={linkItem.gitLink}>
                            {linkItem.linkText}
                        </a>
                    </div>
                ))}
            </div>

            <div className="list__item__content__header">
                <h2>
                    {cardData.title}
                </h2>
            </div>
        </div>
    );
};

export default Card;
