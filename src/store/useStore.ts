import { create } from 'zustand';

interface AppState {
    theme: 'dark' | 'light';
    toggleTheme: () => void;
    soundEnabled: boolean;
    toggleSound: () => void;
    cursorVariant: 'default' | 'hover' | 'project';
    setCursorVariant: (variant: 'default' | 'hover' | 'project') => void;
    viewerType: 'student' | 'parent' | 'admin';
    setViewerType: (type: 'student' | 'parent' | 'admin') => void;
}

export const useStore = create<AppState>((set) => ({
    theme: 'dark',
    viewerType: 'student',
    setViewerType: (type) => set({ viewerType: type }),
    toggleTheme: () => set((state) => {
        const newTheme = state.theme === 'dark' ? 'light' : 'dark';
        if (typeof window !== 'undefined') {
            if (newTheme === 'dark') {
                document.documentElement.classList.add('dark');
                document.documentElement.style.setProperty('--background', '#0a0a0a');
                document.documentElement.style.setProperty('--foreground', '#ffffff');
            } else {
                document.documentElement.classList.remove('dark');
                document.documentElement.style.setProperty('--background', '#f0f0f0');
                document.documentElement.style.setProperty('--foreground', '#0a0a0a');
            }
        }
        return { theme: newTheme };
    }),
    soundEnabled: true,
    toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),
    cursorVariant: 'default',
    setCursorVariant: (variant) => set({ cursorVariant: variant }),
}));
