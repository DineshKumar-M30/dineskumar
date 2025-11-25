import React, { createContext, useState, useContext, useEffect } from 'react';


const initialSettings = {
    isDarkMode: false,
    accentColor: '#4c6fff', 
    notificationsEnabled: true,
};

export const SettingsContext = createContext(initialSettings);

export const SettingsProvider = ({ children }) => {
    const [settings, setSettings] = useState(initialSettings);

    const updateSettings = (newSettings) => {
        setSettings(prev => ({ ...prev, ...newSettings }));
    };

    useEffect(() => {
        const root = document.documentElement;

        // Apply Dark/Light Mode
        if (settings.isDarkMode) {
            root.style.setProperty('--bg-main', '#111827');
            root.style.setProperty('--bg-card', '#1f2937');
            root.style.setProperty('--text-main', '#f9fafb');
            root.style.setProperty('--text-muted', '#9ca3af');
            root.style.setProperty('--border-soft', '#374151');
            root.style.setProperty('--bg-sidebar', '#1f2937');
        } else {
            root.style.setProperty('--bg-main', '#f5f6fb');
            root.style.setProperty('--bg-card', '#ffffff');
            root.style.setProperty('--text-main', '#272b3b');
            root.style.setProperty('--text-muted', '#8b8fa3');
            root.style.setProperty('--border-soft', '#e3e5f0');
            root.style.setProperty('--bg-sidebar', '#050608'); 
        }

        //  Apply Accent Color
        root.style.setProperty('--accent', settings.accentColor);

    }, [settings]);

    return (
        <SettingsContext.Provider value={{ settings, updateSettings }}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettings = () => useContext(SettingsContext);