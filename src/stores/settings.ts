import { defineStore } from "pinia";

export const useSettingsStore = defineStore('settings', {
    state: () => {
        return {
            theme: 'dark'
        }
    },
    getters: {
        getTheme: (state) => state.theme,
    },
    actions: {
        toggleTheme() {
            this.theme = this.theme === 'light' ? 'dark' : 'light'
            localStorage.setItem('theme', this.theme);
            console.log(`Theme toggled! Theme now: ${this.theme}`);
        },
        initTheme() {
            const themeLocalStorage = localStorage.getItem('theme');
            this.theme = themeLocalStorage === null ? 'dark' : themeLocalStorage;
        }
    }
})