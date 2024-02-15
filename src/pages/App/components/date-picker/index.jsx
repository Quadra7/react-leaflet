import { useState } from "react";
import DatePicker from "react-datepicker";

import "./style.css";
import "react-datepicker/dist/react-datepicker.module.css";

const DatePickerComponent = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="date-picker-wrapper">
            <DatePicker selected={startDate}
                        onChange={(date)=> setStartDate(date)}
                        dateFormat={"dd/MM/yyyy"}/>
        </div>
    );
};

export default DatePickerComponent;
