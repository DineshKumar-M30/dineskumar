// src/Components/SettingsPage.jsx
import React from 'react';
import { useSettings } from '../Components/context/SettingsContext.jsx';
import './SettingsPage.css';

function SettingsPage() {
    const { settings, updateSettings } = useSettings();

    const handleColorChange = (e) => {
        updateSettings({ accentColor: e.target.value });
    };

    const handleDarkModeToggle = () => {
        updateSettings({ isDarkMode: !settings.isDarkMode });
    };
    
    const handleNotificationToggle = () => {
        updateSettings({ notificationsEnabled: !settings.notificationsEnabled });
    };

    return (
        <div className="settings-page-container">
            <div className="page-header">
                <h1>App Settings</h1>
            </div>

            <div className="settings-card">
                
                {/* 1. Sidebar/Nav Color Change */}
                <div className="setting-item">
                    <div className="setting-details">
                        <h4>Sidebar/Nav Color Change</h4>
                        <p>Change the main primary color used throughout the dashboard for highlights and buttons.</p>
                    </div>
                    <div className="setting-control color-picker-group">
                        <input
                            type="color"
                            value={settings.accentColor}
                            onChange={handleColorChange}
                            className="color-picker-input"
                        />
                        <span className="color-code">{settings.accentColor.toUpperCase()}</span>
                    </div>
                </div>
                
                {/* 2. Dark Mode Toggle */}
                <div className="setting-item">
                    <div className="setting-details">
                        <h4>Dark Mode</h4>
                        <p>Switch between the light and dark theme for a different viewing experience.</p>
                    </div>
                    <label className="setting-control switch-label">
                        <input
                            type="checkbox"
                            checked={settings.isDarkMode}
                            onChange={handleDarkModeToggle}
                            className="switch-input"
                        />
                        <span className="slider round"></span>
                        <span className="switch-text">{settings.isDarkMode ? 'Dark Mode Active' : 'Light Mode Active'}</span>
                    </label>
                </div>
                
                {/* 3. Notification Receive Toggle */}
                <div className="setting-item">
                    <div className="setting-details">
                        <h4>Notification Receive</h4>
                        <p>Disable or enable receiving in-app notifications and alerts.</p>
                    </div>
                    <label className="setting-control switch-label small-switch">
                        <input
                            type="checkbox"
                            checked={settings.notificationsEnabled}
                            onChange={handleNotificationToggle}
                            className="switch-input"
                        />
                        <span className="slider round"></span>
                        <span className="switch-text">{settings.notificationsEnabled ? 'Enabled' : 'Disabled'}</span>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default SettingsPage;