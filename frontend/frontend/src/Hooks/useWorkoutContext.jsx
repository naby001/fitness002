// ...existing code...
import {WorkoutsContext} from '../context/WorkoutContext';
// ...existing code...
import {useContext} from 'react';

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext);
    if (!context) {
        throw new Error('useWorkoutsContext must be used within a WorkoutsProvider');
    }
    return context;
}