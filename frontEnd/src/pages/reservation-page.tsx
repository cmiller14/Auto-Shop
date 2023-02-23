import React, { useState, useEffect } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { Rentals } from "../DummyData"
import CarListing from '../Components/CarListing';
import { Car } from '../DataTypes';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export default function BasicDateTimePicker() {
  
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs());
  const [minEndDate, setMinEndDate] = useState<Dayjs | null>(dayjs());
  const [carList, setCarList] = useState<Car[]>([]);
  
  let currentDate = new Date();
  let cDay = currentDate.getDate();
  let cMonth = currentDate.getMonth() + 1;
  let cYear = currentDate.getFullYear();
  const today = dayjs(`${cYear}-${cMonth}-${cDay}`)

  useEffect(() => {
    setStartDate(today);
    setEndDate(today);
    setMinEndDate(today);
  }, [])

  return (
    <div className='root'>
      <div className='container' id='dateContainer'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          label="Start Date"
          value={startDate}
          minDate={today}
          onChange={(newDate) => {
            setStartDate(newDate);
            setMinEndDate(newDate);
            if (endDate != null && newDate != null && endDate < newDate) {
              setEndDate(newDate);
            }
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <DesktopDatePicker
          label="End Date"
          value={endDate}
          minDate={minEndDate}
          onChange={(newDate) => {
            setEndDate(newDate);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
          {/* <StaticDatePicker
          renderInput={(props) => <TextField {...props} />}
          disablePast={true}
          showDaysOutsideCurrentMonth={true}
          label="Start Date"
          value={startDate}
          onChange={(date) => {
            setStartDate(date);
            setMinEndDate(date);
            if (endDate != null && date != null && endDate < date) {
              setEndDate(date);
            }
          }}
          />
          <StaticDatePicker
            renderInput={(props) => <TextField {...props} />}
            disablePast={true}
            showDaysOutsideCurrentMonth={true}
            label="End Date"
            value={endDate}
            minDate={minEndDate}
            onChange={(date) => {
              setEndDate(date);
            }}
          /> */}
        </LocalizationProvider>
        <button
          className='dateButton'
          onClick={() => {
            //Make a POST request to reserve a vehicle for these days
            console.log(startDate);
            console.log(endDate);
            setCarList(Rentals);
          }}  
        >Submit</button>
      </div>
      <div className='carList'>
        <ul>
          {carList.map((rental) => (
              <CarListing car={rental} />
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export function ReservationPage() {
  return <h1>Welcome to the Reservation Page</h1>;
}
// export default ReservationPage;
