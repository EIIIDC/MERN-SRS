import { create } from "zustand";

export const useCctv = create((set) => ({
    cctvs: [],
    
    setCctvs: (cctvs) => set({ cctvs }),
    
    createCctv: async (newCctv) => {
        // Validation based on the required fields in your Mongoose schema
        if (!newCctv.CctvId || !newCctv.Location || !newCctv.cctvType) {
            return { success: false, message: "Please fill in all required fields (CctvId, Location, cctvType)." };
        }
        
        const res = await fetch("/api/cctvs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCctv),
        });
        const data = await res.json();
        
        // Add the new CCTV to the UI immediately
        set((state) => ({ cctvs: [...state.cctvs, data.data] }));
        return { success: true, message: "CCTV created successfully" };
    },
    
    fetchCctvs: async () => {
        const res = await fetch("/api/cctvs");
        const data = await res.json();
        set({ cctvs: data.data });
    },
    
    // Using id (which corresponds to MongoDB's _id)
    deleteCctv: async (id) => {
        const res = await fetch(`/api/cctvs/${id}`, {
            method: "DELETE",
        });
        const data = await res.json();
        
        if (!data.success) return { success: false, message: data.message };

        // Update the UI immediately, without needing a refresh
        set((state) => ({ cctvs: state.cctvs.filter((cctv) => cctv._id !== id) }));
        return { success: true, message: data.message };
    },
    
    updateCctv: async (id, updatedCctv) => {
        const res = await fetch(`/api/cctvs/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedCctv),
        });
        const data = await res.json();
        
        if (!data.success) return { success: false, message: data.message };

        // Update the UI immediately, without needing a refresh
        set((state) => ({
            cctvs: state.cctvs.map((cctv) => (cctv._id === id ? data.data : cctv)),
        }));

        return { success: true, message: data.message };
    },
}));