import { MapContainer, TileLayer} from 'react-leaflet'
import '../App.css' 
function Map() { 
    return ( 
       <div> 
            <h1> This is the Map page </h1>
             <MapContainer center={[40.440624,-79.995888]} zoom={14}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              </MapContainer> 
      </div> 
    ); 
} 
export default Map; 