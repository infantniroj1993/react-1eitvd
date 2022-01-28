import React from 'react';
import { useSelector } from 'react-redux';
export default function () {
  const buses = useSelector((state) => state.buses);
  const search = useSelector((state) => state.search);
  return (
    <div>
      <h1 class="text-center">Bus Availability </h1>
      <h4>
        Buses for {search.from} to {search.to} on {search.date}
      </h4>
      <div class="buses-avail-container">
        {buses.map((bus) => {
          return (
            <div class="bus-avail">
              <div class="d-flex">
                <p class="name">{bus.name}</p>
                <p class="fare">Fare:{bus.fare}</p>
              </div>
              <div class="d-flex">
                <p>Arrl Time: {bus.arrivalTime}</p>
                <p>Dept Time: {bus.depatureTime}</p>
                <p>{bus.offers}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
