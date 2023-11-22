import React from 'react';
import { LayersControl, TileLayer } from 'react-leaflet';

export default function LayerSelector(props) {
    const { list } = props;

    return (
        <>
            {
                Object.keys(list).map((key, index) => {
                    const isChecked = index === 0 ? true : false;
                    return (
                        <LayersControl.BaseLayer key={key} name={key.toUpperCase()} checked={isChecked}>
                            <TileLayer url={list[key]} />
                        </LayersControl.BaseLayer>
                    );
                })
            }
        </>
    );
}
