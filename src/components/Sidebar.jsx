import { useState } from 'react';
import '../App.css';

const Sidebar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const openNav = () => {
        setSidebarOpen(true);
    };

    const closeNav = () => {
        setSidebarOpen(false);
    };

    return (
        <div>
            <div className={`sidebar ${isSidebarOpen ? 'show' : ''}`}>
                <button className="closebtn" onClick={closeNav}>×</button>
                <h2>Sidebar</h2>
                <p>Some content in the Sidebar.</p>
            </div>

            <div id="main">
                <button className="openbtn" onClick={openNav}>☰ Open Sidebar</button>
            </div>
        </div>
    );
};

export default Sidebar;