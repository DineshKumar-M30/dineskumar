const LS_KEY = 'lms_courses_v2';

export const loadCourses = () => {
    try {
        const raw = localStorage.getItem(LS_KEY);
        if (!raw) return null;
        return JSON.parse(raw);
    } catch (e) {
        console.error('Failed to load courses', e);
        return null;
    }
};

export const saveCourses = (data) => {
    try {
        localStorage.setItem(LS_KEY, JSON.stringify(data));
    } catch (e) {
        console.error('Failed to save courses', e);
    }
};

export const resetCourses = () => {
    localStorage.removeItem(LS_KEY);
};
