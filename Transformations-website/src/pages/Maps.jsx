import { MapContainer, TileLayer,GeoJSON,
  Marker,Popup,Rectangle,Circle,Polygon,Tooltip
} from 'react-leaflet'
import '../App.css'
import 'leaflet/dist/leaflet.css'
import mapData from './mapData/2020_block.json'
const rectangle = [
  [40.443643,-80.004614],
  [40.440624,-79.995888],
]
const multiPolygon = [
  [
    [40.453642, -79.999088],
    [40.452597, -80.007845],
    [40.448090, -80.009562],
  ],
  [
   [40.462393,-79.948274],
   [40.460695,-79.950076],
   [40.463111,-79.954627],
   [40.469380,-79.953854]
  ],
]
function Map() { 
  const styleContent = {
    color:"black"
  }
  return ( 
    <MapContainer center={[40.4406,-79.9959]} zoom={12.5}>
    <GeoJSON style={styleContent} data={mapData} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> 
      <Marker position={[40.440624,-79.995888]}>
        <Popup>
          Pittsburgh
        </Popup>
      </Marker>
      <Rectangle bounds={rectangle} pathOptions={{ color: 'black' }}/>
      <Circle
        center={[40.447824,-79.989068]}
        pathOptions={{ fillColor: 'blue' }}
        radius={400}>
        <Tooltip>Marker</Tooltip>
      </Circle>
      <Polygon pathOptions={{ color: 'purple' }} positions={multiPolygon}>
        <Tooltip sticky>sticky Tooltip for Polygon</Tooltip>
      </Polygon>       
    </MapContainer> 
   ); 
   
} 
export default Map; 

              