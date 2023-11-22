import { React, Component } from 'react';
import { MapContainer, ScaleControl, LayersControl } from 'react-leaflet';

import LayerSelector from '../layer-selector';
import OverlaySelector from '../overlay-selector';
import TextBlock from '../text-block';

import './style.css';
import 'leaflet/dist/leaflet.css';

export default class Map extends Component {
    state = {
        zoom: 6,
        lat: 53.405332,
        lng: 107.673058,
        markerText: ''
    }

    AddNewText = (newText) => {
        this.setState({
            markerText: newText
        });
    }

    render() {
        const zoom = this.state.zoom;
        const startPosition = [this.state.lat, this.state.lng];

        const layers = {
            otm: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
            cycle: 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
            tilegen: 'https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png'
        };

        return(
            <>
                <MapContainer center={startPosition} zoom={zoom}>
                    <ScaleControl position='bottomleft'/>
                    <LayersControl position='bottomright'>
                        <LayerSelector list={layers} />
                        <OverlaySelector text={this.state.markerText}/>
                    </LayersControl>
                </MapContainer>
                <TextBlock Add={this.AddNewText}/>
            </>
        );
    }
}
