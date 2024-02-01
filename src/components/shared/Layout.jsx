import React from 'react';
import { Sidebar } from '.';

const Layout = () => {
    return (
        <main>
            <div className="dashboard-page">
            <Sidebar />
            </div>
        </main>
    );
}

export { Layout }