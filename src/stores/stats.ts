import { defineStore } from "pinia";

export const useStatsStore = defineStore('stats', {
    state: () => {
        return {
            views: {} as Record<string, number>,
            downloads: {} as Record<string, number>,
            likes: {} as Record<string, number>,
            likedByUser: {} as Record<string, boolean>
        }
    },
    getters: {
        getViews: (state) => {
            return (appId: string) => state.views[appId] || 0;
        },
        getDownloads: (state) => {
            return (appId: string) => state.downloads[appId] || 0;
        },
        getLikes: (state) => {
            return (appId: string) => state.likes[appId] || 0;
        },
        getLikeState: (state) => {
            return (appId: string) => state.likedByUser[appId] || false;
        },
        getScore: (state) => {
            return (appId: string) => (state.views[appId] || 0) +
                (state.downloads[appId] || 0) * 2 +
                (state.likes[appId] || 0) * 3;
        }
    },
    actions: {
        addView(appId: string) {
            this.views[appId] = this.getViews(appId) + 1;
            this.save();
        },
        addDownload(appId: string) {
            this.downloads[appId] = this.getDownloads(appId) + 1;
            this.save();
        },
        toggleLike(appId: string) {
            if (!this.likedByUser[appId]) {
                this.likes[appId] = this.getLikes(appId) + 1;
                this.likedByUser[appId] = true;
            }
            else {
                this.likes[appId] = this.getLikes(appId) - 1;
                this.likedByUser[appId] = false;
            }
            this.save();
        },
        save() {
            localStorage.setItem('appStats', JSON.stringify(this.$state));
        },
        load() {
            const data = localStorage.getItem('appStats');
            if (data) {
                this.$patch(JSON.parse(data));
            }
        }
    }
})