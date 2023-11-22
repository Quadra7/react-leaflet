import React from 'react';

import DatePickerComponent from '../date-picker';
import Map from '../map';

import 'leaflet/dist/leaflet.css';

function App() {
  return(
    <>
      <DatePickerComponent/>
      <Map />
    </>
  )
}

export default App;
