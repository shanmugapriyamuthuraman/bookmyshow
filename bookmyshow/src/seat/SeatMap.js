import React, { useEffect, useState } from "react";
import Seat from "./Seat";
import "./Seat.css"
import { useParams } from "react-router-dom";

const SeatMap = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  console.log(selectedSeats);
  const {id}=useParams();

useEffect(()=>{
  
},[selectedSeats])

const handleSeatSelect = (seatNumber) => {
  if(id>selectedSeats.length){
   if (selectedSeats.includes(seatNumber)) {
     setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
   } else {
     setSelectedSeats([...selectedSeats, seatNumber]);
   }
  }
   
 };


  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  const seats = rows.map((row) => (
    <div className="row" key={row}>
      {Array.from({ length: 22}, (_, i) => i + 1).map((seat) => {
        const seatNumber = `${row}${seat}`;
        // const isBooked = Math.random() < 0.2;
        return (
          <Seat
            key={seatNumber}
            seatNumber={seatNumber}
            // isBooked={id}
            isSelected={selectedSeats.includes(seatNumber)}
            onSeatSelect={handleSeatSelect}
          />
        );
      })}
    </div>
  ));
console.log(seats);
  return <div className="seat-map">{seats}</div>;
};

export default SeatMap;