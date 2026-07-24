import { create } from "zustand";

export const useinv = create((set) => ({
    invItems: [],
    
    setInvItems: (invItems) => set({ invItems }),
    
    createInvItem: async (newInvItem) => {
        // Validation based on the required fields in your Mongoose schema
        if (!newInvItem.InvId || !newInvItem.Location || !newInvItem.invType) {
            return { success: false, message: "Please fill in all required fields (InvId, Location, invType)." };
        }

        const res = await fetch("/api/invItems", { //inventory page missing displays 404
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newInvItem),
        });
        const data = await res.json();
        
        // Add the new inventory item to the UI immediately
        set((state) => ({ invItems: [...state.invItems, data.data] }));
        return { success: true, message: "Inventory item created successfully" };
    },
    
    fetchInvItems: async () => {
        const res = await fetch("/api/invItems");
        const data = await res.json();
        set({ invItems: data.data });
    },
    
    // Using id (which corresponds to MongoDB's _id)
    deleteInvItem: async (id) => {
        const res = await fetch(`/api/invItems/${id}`, {
            method: "DELETE",
        });
        const data = await res.json();
        
        if (!data.success) return { success: false, message: data.message };

        // Update the UI immediately, without needing a refresh
        set((state) => ({ invItems: state.invItems.filter((invItem) => invItem._id !== id) }));
        return { success: true, message: data.message };
    },
    
    updateInvItem: async (id, updatedInvItem) => {
        const res = await fetch(`/api/invItems/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedInvItem),
        });
        const data = await res.json();
        
        if (!data.success) return { success: false, message: data.message };

        // Update the UI immediately, without needing a refresh
        set((state) => ({
            invItems: state.invItems.map((invItem) => (invItem._id === id ? data.data : invItem)),
        }));

        return { success: true, message: data.message };
    },
}));