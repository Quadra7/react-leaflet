import React from "react";
import L from 'leaflet';
import { LayersControl, GeoJSON, Marker, Popup } from 'react-leaflet';

import russia from '../../assets/russia-territory.json';
import novosibirsk from '../../assets/novosibirsk-territory.json';

export default function OverlaySelector(props) {
    const markerIcon = new L.Icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/128/5092/5092916.png',
        iconSize: [40, 40],
    });

    return (
        <>
            <LayersControl.Overlay name='Russia'>
                <GeoJSON
                    data={russia} 
                    style={{
                        color: 'red', 
                        fillColor: 'transparent'
                    }} 
                />
            </LayersControl.Overlay>
            <LayersControl.Overlay name='Novosibirsk'>
                <GeoJSON data={novosibirsk}/>
            </LayersControl.Overlay>
            <LayersControl.Overlay name='CI NSU'>
                <Marker position={[54.84642050540606, 83.05174330270722]} icon={markerIcon}>
                    <Popup>{props.text}</Popup>
                </Marker>
            </LayersControl.Overlay>
        </>
    );
}
