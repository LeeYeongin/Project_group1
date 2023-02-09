import { create } from 'zustand';

interface UserStores {
    user: any;
    setUser: (user: any) => void;
    removeUser: () => void;
}
const useStores = create<UserStores>((set) => ({
    user: null,
    setUser: (user: any) => {
        set((state) => ({ ...state, user }));
    },
    removeUser: () => {
        set((state) => ({ ...state, user: null }));
    }
}));

export default useStores;
