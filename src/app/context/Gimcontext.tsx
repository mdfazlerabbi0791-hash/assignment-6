
'use client'
import React, { createContext, ReactNode, useState } from 'react';
import { IWorkout } from '../type/GimTypes';

interface IGimContextType {
    plan: IWorkout[]
    setPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>
    saved: IWorkout[]
    setSaved: React.Dispatch<React.SetStateAction<IWorkout[]>>
}


export const gimContext= createContext<IGimContextType>({
    plan: [],
    setPlan: () => {},
    saved: [],
    setSaved: () => {}

})

const GimProvider = ({children}: {children: ReactNode}) => {

    const [plan, setPlan] = useState<IWorkout[]>([])
    const [saved, setSaved] = useState<IWorkout[]>([])

    const sheard = {
        plan,
        setPlan,
        saved,
        setSaved
    }
    return (
        <gimContext.Provider value={sheard}>
            {children}
        </gimContext.Provider>
    );
};

export default GimProvider;