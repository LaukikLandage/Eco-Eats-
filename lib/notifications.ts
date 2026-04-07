export const sendMealNotification = (type: 'received' | 'sold' | 'success' | 'cutoff', details: any) => {
    console.log(`[Notification] ${type.toUpperCase()}:`, details);
    // In a real app, this would use Firebase Cloud Messaging or similar
};

export const CHECK_CUTOFF = (mealTime: string) => {
    // Current time
    const now = new Date();
    const [hours, minutes] = mealTime.split(':').map(Number);
    const mealDate = new Date();
    mealDate.setHours(hours, minutes, 0, 0);

    const diff = (mealDate.getTime() - now.getTime()) / (1000 * 60 * 60); // hours
    return diff > 2; // Returns true if it's more than 2 hours before meal
};
