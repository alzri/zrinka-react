import React from 'react';

const SidebarMenu = ({ menuData }) => {
  return (
    <div className="sidebar-list__menu">
      <span className="sidebar-list__menu__title">{menuData.label}</span>
      <ul>
        {menuData.items.map((menuItem) => {
          return (
            <li>
              <a href={menuItem.href}>
                {menuItem.icon}{menuItem.label}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export { SidebarMenu }