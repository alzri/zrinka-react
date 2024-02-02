import React from 'react';
import { Sidebar, ListHeader, WorkspaceCard } from '.';

const Layout = () => {
    return (
        <main>
            <div className="dashboard-page">
                <Sidebar />
                <div className="dashboard-page__content">
                    <h1>Workspace</h1>
                    <div className="list">
                        <ListHeader />
                        <WorkspaceCard />
                    </div>
                </div>
            </div>
        </main>
    );
}

export { Layout }