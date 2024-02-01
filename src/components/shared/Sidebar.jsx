import React from 'react';
import { SidebarMenu } from '.';
import { BranchIcon, DocumentationIcon, EnvVariablesIcon, GuidesIcon, MemberIcon, PreBuildsIcon, SettingsIcon, SubscriptionIcon, UsageIcon, WorkspaceIcon } from '../icons/index.js';

const sidebarMenus = [
  {
    label: '',
    items: [
      {
        label: 'Workspace',
        icon: <WorkspaceIcon />,
        href: '#'
      }
    ],
  },
  {
    label: 'Projects',
    items: [
      {
        label: 'Branches',
        icon: <BranchIcon />,
        href: '#'
      },
      {
        label: 'Pre-Builds',
        icon: <PreBuildsIcon />,
        href: '#'
      },
      {
        label: 'Settings',
        icon: <SettingsIcon />,
        href: '#'
      }
    ],
  },
  {
    label: 'Team',
    items: [
      {
        label: 'Subscriptions',
        icon: <SubscriptionIcon />,
        href: '#'
      },
      {
        label: 'Usage',
        icon: <UsageIcon />,
        href: '#'
      },
      {
        label: 'Members',
        icon: <MemberIcon />,
        href: '#'
      },
      {
        label: 'Env variables',
        icon: <EnvVariablesIcon />,
        href: '#'
      },
      {
        label: 'Settings',
        icon: <SettingsIcon />,
        href: '#'
      }
    ],
  },
  {
    label: 'Resources',
    items: [
      {
        label: 'Documentation',
        icon: <DocumentationIcon />,
        href: '#'
      },
      {
        label: 'Guides',
        icon: <GuidesIcon />,
        href: '#'
      }
    ],
  },
]

const Sidebar = () => {
  return (
    <div className="dashboard-page__sidebar">
    <div className="sidebar-list">
      {sidebarMenus.map((menu) => {
        return (
          <SidebarMenu menuData={menu} />
        )
      })}
    </div>
    </div>
  )
}

export { Sidebar }