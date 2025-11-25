import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

import {
    AiFillHome,
    AiOutlineUser,
    AiOutlineSetting,
    AiOutlineCalendar,
    AiOutlineMessage
} from "react-icons/ai";

import { FaChalkboardTeacher } from "react-icons/fa";
import { MdGroups, MdPayments } from "react-icons/md";
import { IoReceiptOutline } from "react-icons/io5";
import { BsTable } from "react-icons/bs";

const menuItems = [
    { name: "Dashboard", path: "/", icon: <AiFillHome size={18} /> },
    { name: "Teachers", path: "/2", icon: <FaChalkboardTeacher size={18} /> },
    { name: "Students", path: "/students", icon: <MdGroups size={18} /> },

    {
        name: "Finance",
        path: "/finance",
        icon: <MdPayments size={18} />,
        subItems: [
            { name: "Fees Management", path: "/fees/management", icon: <IoReceiptOutline size={16} /> },
            { name: "School Expenses", path: "/fees/expenses", icon: <IoReceiptOutline size={16} /> },
        ]
    },

    { name: "Calendar", path: "/3", icon: <AiOutlineCalendar size={18} /> },
    { name: "Time Table", path: "/4", icon: <BsTable size={18} /> },
    { name: "Message", path: "/5", icon: <AiOutlineMessage size={18} /> },
    { name: "Settings", path: "/6", icon: <AiOutlineSetting size={18} /> },
];

function Sidebar({ isMobileOpen, toggleMobileSidebar }) {
    const location = useLocation();
    const [expandedMenu, setExpandedMenu] = useState(location.pathname.split('/')[1]);

    useEffect(() => {

        if (isMobileOpen && window.innerWidth <= 768) {
            setTimeout(() => {
                toggleMobileSidebar();
            }, 100);
        }

        const currentPathSegment = location.pathname.split('/')[1];
        if (currentPathSegment === 'fees') {
            setExpandedMenu('finance');
        }

    }, [location.pathname]);

    const handleMenuClick = (item) => {
        if (item.name === "Finance") {
            setExpandedMenu(expandedMenu === item.path.substring(1) ? null : item.path.substring(1));
        }
    };

    const isActive = (path) => {
        return location.pathname.startsWith(path) && path !== "/";
    };

    const isDashboardActive = location.pathname === "/";
    const isExpanded = expandedMenu === 'finance';


    return (
        <aside className={`sidebar ${isMobileOpen ? 'sidebar-open' : ''}`}>
            <div className="sidebar-header">
                <div className="logo-circle">S</div>
                <span className="logo-text">Smansys</span>
                {isMobileOpen && <button className="mobile-close-btn" onClick={toggleMobileSidebar}>X</button>}
            </div>

            <nav className="sidebar-nav">
                {menuItems.map((item) => (
                    <div key={item.name}>
                        <Link
                            to={item.subItems ? '#' : item.path}
                            onClick={() => handleMenuClick(item)}
                            className={`sidebar-link ${item.path === '/'
                                    ? isDashboardActive
                                        ? "sidebar-link-active"
                                        : ""
                                    : isActive(item.path)
                                        ? "sidebar-link-active"
                                        : ""
                                }`}
                        >
                            {/* Icon added here */}
                            <span className="sidebar-icon">{item.icon}</span>

                            <span>{item.name}</span>

                            {item.subItems && (
                                <span
                                    style={{
                                        marginLeft: 'auto',
                                        transform: isExpanded ? 'rotate(180deg)' : 'none',
                                        transition: 'transform 0.5s'
                                    }}
                                >
                                    ▼
                                </span>
                            )}
                        </Link>

                        {item.subItems && isExpanded && (
                            <div className="sidebar-submenu">
                                {item.subItems.map((subItem) => (
                                    <Link
                                        key={subItem.name}
                                        to={subItem.path}
                                        className={`sidebar-sub-link ${location.pathname === subItem.path
                                                ? "sidebar-sub-link-active"
                                                : ""
                                            }`}
                                    >
                                        {/* Submenu icon */}
                                        <span className="sidebar-sub-icon">{subItem.icon}</span>

                                        {subItem.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </nav>

            <button className="logout-btn">Log Out</button>
        </aside>
    );
}

export default Sidebar;