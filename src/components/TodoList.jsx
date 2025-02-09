import { useEffect, useState } from "react";
import { format } from "date-fns";
import PropTypes from "prop-types";

export default function TodoList(props) {

    const [currentTimer, setCurrentTimer] = useState({});
    const [isMorning, setIsMorning] = useState("AM");

    useEffect(() => {
        const getCurrentTime = () => {
            const hour = format(new Date(), "HH");
            const minute = format(new Date(), "mm");
            setCurrentTimer({
                hour: hour > 12 ? hour - 12 : hour,
                minute: minute
            });
            hour >= 12 ? setIsMorning("PM") : setIsMorning("AM");
        }

        getCurrentTime();

        const interval = setInterval(() => {
            getCurrentTime();
        }, 60 * 1000);

        return () => clearInterval(interval);
    }, []);

    const markerPosition = 8.2 + (currentTimer.hour * 7.05) + (currentTimer.minute * (7.05 / 60)); // DONE
    console.log("marker position -->", markerPosition);
    return (
        <>
            <div className="todo_list relative col-span-3 row-span-10 bg-white/[70%] rounded-xl border-1 grid grid-rows-24 grid-cols-24">
                <hr className="absolute w-full h-1 border-0 bg-amber-600/[40%]" style={{top: `${markerPosition}%`}}/>
                <div className="top_display col-span-24 row-span-2 bg-white rounded-t-xl border-b-1 grid grid-cols-2 grid-rows-1">
                    <div className="date_display col-span-1 row-span-1 flex items-center justify-start ml-2 text-xl text-green-950">
                        06/02/2025
                    </div>
                    <div className="button_display col-span-1 row-span-1 grid place-items-end items-center">
                        <button className="add_todo_button h-[50%] w-[50%] mr-4 !bg-green-200 flex items-center justify-center" onClick={props.onAddClick}>Add</button>
                    </div>
                </div>
                <div className="left_display col-span-2 row-span-24 bg-white rounded-bl-xl border-r-1 grid grid-cols-1 grid-rows-13">
                    <div className="set_ampm border-b-1 col-span-1 row-span-1">{isMorning}</div>
                    <div className="hours_of_day col-span-1 row-span-12 grid grid-cols-1 grid-rows-12">
                        <div className="hour col-span-1 row-span-1 border-b-1 grid place-items-center text-xl text-green-950">1</div>
                        <div className="hour col-span-1 row-span-1 border-b-1 grid place-items-center text-xl text-green-950">2</div>
                        <div className="hour col-span-1 row-span-1 border-b-1 grid place-items-center text-xl text-green-950">3</div>
                        <div className="hour col-span-1 row-span-1 border-b-1 grid place-items-center text-xl text-green-950">4</div>
                        <div className="hour col-span-1 row-span-1 border-b-1 grid place-items-center text-xl text-green-950">5</div>
                        <div className="hour col-span-1 row-span-1 border-b-1 grid place-items-center text-xl text-green-950">6</div>
                        <div className="hour col-span-1 row-span-1 border-b-1 grid place-items-center text-xl text-green-950">7</div>
                        <div className="hour col-span-1 row-span-1 border-b-1 grid place-items-center text-xl text-green-950">8</div>
                        <div className="hour col-span-1 row-span-1 border-b-1 grid place-items-center text-xl text-green-950">9</div>
                        <div className="hour col-span-1 row-span-1 border-b-1 grid place-items-center text-xl text-green-950">10</div>
                        <div className="hour col-span-1 row-span-1 border-b-1 grid place-items-center text-xl text-green-950">11</div>
                        <div className="hour col-span-1 row-span-1 grid place-items-center text-xl text-green-950">12</div>
                    </div>
                </div>
                <div className="tod_display row-span-22 col-span-22 bg-white"></div>
            </div>
        </>
    );
}

TodoList.propTypes = {
    onAddClick: PropTypes.func.isRequired,
}