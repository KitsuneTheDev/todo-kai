import { useEffect, useState } from "react";
import { format } from "date-fns";

export default function Routine() {
    
    const [currentDay, setCurrentDay] = useState("");
    const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    
    useEffect(() => {
        const getCurrentDay = () => {
            const day = format(new Date(), "EEE").toLowerCase();
            setCurrentDay(day);
        }

        getCurrentDay();

        const interval = setInterval(() => {
            getCurrentDay();
        }, 10 * 60 * 1000);

        return () => clearInterval(interval);
    }, []);

    const isToday = (day) => currentDay === day.toLowerCase();

    return (
        <>
            <div className="routine_layout w-full bg-white/[70%] h-[30%] mb-2 rounded-t-xl grid grid-cols-7 grid-rows-7">
                <div className="days_of_week col-span-7 row-span-7 grid grid-cols-7 grid-rows-1 text-xl text-green-950 font-bold">
                    {
                    daysOfWeek.map((day, index) => {
                        if(index === 0) { 
                            return (
                                    <div key={index} className={`week_day ${isToday(day) ? 'bg-green-700/[70%]' : 'bg-white/[70%]'} border-b-1`}>{day}</div>
                                );
                        } else {
                            return (
                                <div key={index} className={`week_day ${isToday(day) ? 'bg-green-700/[40%]' : 'bg-white/[70%]'} border-b-1 border-l-1`}>{day}</div>
                            );
                        }
                    })
                    }
                </div>
            </div>
            <button className="routine_button !bg-green-200">Create a Routine</button>
        </>
    );
} 