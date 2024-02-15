import { useState } from 'react';
import { useMapEvent } from 'react-leaflet';

import { MapContainer, TileLayer, ScaleControl, GeoJSON } from 'react-leaflet';
import DialogButton from '../dialog-button';
import Dialog from '../dialog';
import Location from '../location';
import LogoutButton from '../logout-button';

import './style.css';
import 'leaflet/dist/leaflet.css';

import layers from '../../../../assets/data/layers';
import overlays from '../../../../assets/data/overlays';

import russia from '../../../../assets/geojson/russia-territory.json';
import reserves from '../../../../assets/geojson/reserves.json';

export default function Map() {
    const [form, setForm] = useState({
        lat: 53.405332,
        lng: 107.673058,
        zoom: 6,
        layer: 'otm',
        overlays: {
            russia: false,
            reserves: false
        },

        isDialogActive: false
    });

    const GetCenter = () => {
        const map = useMapEvent({
            move: () => {
                const newCenter = map.getCenter();
                setForm((prev) => ({
                    ...prev,
                    lat: newCenter.lat,
                    lng: newCenter.lng
                }))
            }
        });
        return null;
    };

    const changeDialogState = () => {
        setForm((prev) => ({
            ...prev,
            isDialogActive: !prev.isDialogActive
        }));
    };

    const changeLayer = (newLayer) => {
        setForm((prev) => ({
            ...prev,
            layer: newLayer
        }));
    };

    const changeOverlay = (overlay) => {
        setForm((prev) => ({
            ...prev,
            overlays: {
                russia: overlay === 'russia' ? !prev.overlays.russia : prev.overlays.russia,
                reserves: overlay === 'reserves' ? !prev.overlays.reserves : prev.overlays.reserves
            }
        }));
    };

    return(
        <>
            <DialogButton isActive={form.isDialogActive} onClick={changeDialogState} />
            {
                form.isDialogActive && 
                <Dialog 
                    layers={layers} 
                    currLayer={form.layer}
                    changeLayer={changeLayer} 
                    overlays={overlays}
                    currOverlay={form.overlays}
                    changeOverlay={changeOverlay} />
            }

            <Location lat={form.lat} lng={form.lng} />
            
            <div disabled={form.isDialogActive}>
                <MapContainer center={[53.405332, 107.673058]} zoom={form.zoom}>
                    <GetCenter />
                    <TileLayer url={layers[form.layer]} />
                    <ScaleControl position='bottomleft' />

                    {form.overlays['reserves'] && <GeoJSON data={reserves} style={{color: 'red'}} />}
                    {form.overlays['russia'] && <GeoJSON data={russia} />}
                </MapContainer>
            </div>

            <LogoutButton />
        </>
    );
}