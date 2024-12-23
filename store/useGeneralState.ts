import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

const customAsyncStorage = {
  getItem: async (key: string) => {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null; 
  },
  setItem: async (key: string, value: any) => {
    await AsyncStorage.setItem(key, JSON.stringify(value)); 
  },
  removeItem: async (key: string) => {
    await AsyncStorage.removeItem(key);
  },
};

interface AuthState {
  isSignedIn: boolean;
  user: { id: string; name: string } | null;
  error: string | null;
  signIn: (mobileNum: string) => void;
  signOut: () => void;
  storedPhoneNumber: string;
  storedEmail: string;
  resetError: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      isSignedIn: false,
      user: null,
      error: null,
      storedPhoneNumber: '9789414802',  
      storedEmail: 'test@example.com',
      signIn: (mobileNum) => {
        const phoneRegex = /^[0-9]{10}$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (phoneRegex.test(mobileNum)) {
          if (mobileNum === get().storedPhoneNumber) {
            set({ isSignedIn: true, user: { id: '1', name: 'Abiya' }, error: null });
          } else {
            set({ error: 'Invalid phone number' });
          }
        } else if (emailRegex.test(mobileNum)) {
          if (mobileNum === get().storedEmail) {
            set({ isSignedIn: true, user: { id: '2', name: 'Jane Doe' }, error: null });
          } else {
            set({ error: 'Invalid email address' });
          }
        } else {
          set({ error: 'Invalid email or phone number format' });
        }
      },
      signOut: () => {
        set({ isSignedIn: false, user: null, error: null });
      },

      resetError: () => {
        set({ error: null });
      },
    }),
    {
      name: 'auth-store', 
      storage: customAsyncStorage, 
    }
  )
);

export default useAuthStore;
