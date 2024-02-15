import './style.css';

function ConvertLocation(pos) {
    let num = pos;

    const hours = Math.trunc(pos);
    num = pos - hours;

    const minutes = Math.trunc(num * 60);
    num = num * 60 - minutes;

    const seconds = Math.trunc(num * 60);

    return(`${hours}° ${minutes}' ${seconds}"`);
}

export default function Location({lng, lat}) {
    return(
        <div className="location-block">
            <p><b>Longitude</b> {ConvertLocation(lng)}</p>
            <p><b>Latitude</b> {ConvertLocation(lat)}</p>
        </div>
    );
}