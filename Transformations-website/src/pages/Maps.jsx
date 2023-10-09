import { MapContainer, TileLayer,GeoJSON,
  Marker,Popup,Rectangle,Circle,Polygon,Tooltip
} from 'react-leaflet'
import '../App.css'
import 'leaflet/dist/leaflet.css'
import mapdata from './mapData/zip_codes.json'

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

const zips = [15122,15201,15202,15203,15204,15205,15206,15207,15208,15209,15210,15211,15212,15213,15214,15215,15216,15217,15218,15219,15220,15221,15222,15223,15224,15225,15226,15227,15228,15229,15230,15231,15232,15233,15234,15235,15236,15237,15238,15239,15240,15241,15242,15243,15244,15250,15251,15260,15264,15272,15274,15275]
const pittsburghData = []
for(let i=1; i < mapdata.features.length; i++){
  let zipcode = parseInt(mapdata.features[i].properties["ZCTA5CE10"])
  if (zips.includes(zipcode)){
      pittsburghData.push(mapdata.features[i])
  }
}
function Map() { 
  const styleContent = {
    color:"black"
  }
  return ( 
    <MapContainer center={[40.4406,-79.9959]} zoom={13}>
    <GeoJSON style={styleContent} data={pittsburghData} />
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

              