import { create } from 'zustand'

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) => set({selectedConversation}),
  messages:[],
  setMessage:(messages)=>set({messages}),
  notifications:[],
  setNotification: (newNotification) => set((state) => ({
    notifications: [...state.notifications, newNotification],
  })),
  removeNotification: (userId) => set((state) => ({
    notifications: state.notifications.filter(notification => notification.senderId !== userId),
  })),
}));
export default useConversation;