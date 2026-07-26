import { create } from "zustand";

export const useRepairLog = create((set) => ({
    repairLogs: [],
    
    setRepairLogs: (repairLogs) => set({ repairLogs }),
    
    createRepairLog: async (newRepairLog) => {
        // Validation based on the required fields
        if (!newRepairLog.device || !newRepairLog.issue || !newRepairLog.assignedTechnician) {
            return { success: false, message: "Please fill in all required fields (device, issue, assignedTechnician)." };
        }
        
        const res = await fetch("/api/repairLogs", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newRepairLog),
        });
        const data = await res.json();
        
        // Add the new repair log to the UI immediately
        set((state) => ({ repairLogs: [...state.repairLogs, data.data] }));
        return { success: true, message: "Repair log created successfully" };
    },
    
    fetchRepairLogs: async () => {
        const res = await fetch("/api/repairLogs");
        const data = await res.json();
        set({ repairLogs: data.data });
    },
    
    // Using id (which corresponds to MongoDB's _id)
    deleteRepairLog: async (id) => {
        const res = await fetch(`/api/repairLogs/${id}`, {
            method: "DELETE",
        });
        const data = await res.json();
        
        if (!data.success) return { success: false, message: data.message };

        // Update the UI immediately, without needing a refresh
        set((state) => ({ repairLogs: state.repairLogs.filter((log) => log._id !== id) }));
        return { success: true, message: data.message };
    },
    
    updateRepairLog: async (id, updatedRepairLog) => {
        const res = await fetch(`/api/repairLogs/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedRepairLog),
        });
        const data = await res.json();
        
        if (!data.success) return { success: false, message: data.message };

        // Update the UI immediately, without needing a refresh
        set((state) => ({
            repairLogs: state.repairLogs.map((log) => (log._id === id ? data.data : log)),
        }));

        return { success: true, message: data.message };
    },
}));