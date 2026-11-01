import localforage from "localforage";
import { canvasStorageName } from "./likeai-storage";
import type { StateStorage } from "zustand/middleware";

localforage.config({
    name: canvasStorageName,
    storeName: "app_state",
});

export const localForageStorage: StateStorage = {
    getItem: async (name) => {
        if (typeof window === "undefined") return null;
        try {
            return (await localforage.getItem<string>(name)) || null;
        } catch {
            return window.localStorage.getItem(`${canvasStorageName}:${name}`);
        }
    },
    setItem: async (name, value) => {
        if (typeof window === "undefined") return;
        try {
            await localforage.setItem(name, value);
        } catch {
            window.localStorage.setItem(`${canvasStorageName}:${name}`, value);
        }
    },
    removeItem: async (name) => {
        if (typeof window === "undefined") return;
        try {
            await localforage.removeItem(name);
        } catch {
            window.localStorage.removeItem(`${canvasStorageName}:${name}`);
        }
    },
};
