import {MapContainer, TileLayer, LayersControl,GeoJSON} from 'react-leaflet'
import {useState } from 'react'
import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/leaflet'
import zipcodeData from '../pages/mapData/Zip and Tract/pitt.json'
import tractData from '../pages/mapData//Zip and Tract/1980.json'
import geo2020 from '../pages/mapData/Geojson/2020_zipCode.json'
import geo1980 from '../pages/mapData/Geojson/geo1980.json'
import Legend from '../pages/mapData/Legend'
import '../App.css'
const center = [40.44, -79.99]
export default function Map() { 

    const [map, setMap] = useState(null)
    const table = []
    
    // add 2022 map data with layer control
    for(let key in zipcodeData){
      table.push(<LayersControl.BaseLayer key = {key} checked name = {key}>
          <GeoJSON  style={{color:"black"}}  data= {pittZips()} onEachFeature= {onEachZipCodeCloser(zipcodeData[key])}/>         
      </LayersControl.BaseLayer> )   
    }
     
    // add 1980 map data with a layer control
    for(let key in tractData){
      table.push(<LayersControl.BaseLayer key = {key} checked={false} name = {key}> 
        < GeoJSON  data= {geo1980} onEachFeature={onEachTract(tractData[key])}/>          
      </LayersControl.BaseLayer> )  
    }
    return ( 
      <MapContainer center={center} zoom={11} scrollWheelZoom={false}  whenReady={(map) =>{setMap(map.target)}}  >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LayersControl position="topright" style={{width: "100px"}} >                                         
          {table}
        </LayersControl>  
     <Legend map={map} data ={getColor} />
    </MapContainer>
    )
  } 

function pittZips(){
    const zips = [15201,15122,15202,15203,15204,15205,15206,15207,15208,15209,15210,15211,15212,15213,15214,15215,15216,15217,15218,15219,15220,15221,15222,15223,15224,15225,15226,15227,15228,15229,15230,15231,15232,15233,15234,15235,15236,15237,15238,15239,15240,15241,15242,15243,15244,15250,15251,15260,15264,15272,15274,15275,15276,15290,15295]
    const pittsburghData = []
    for(let i=1; i < geo2020.features.length; i++){
      let zipcode = parseInt(geo2020.features[i].properties["ZCTA5CE10"])
      if (zips.includes(zipcode)){
          pittsburghData.push(geo2020.features[i])
      }
    }
    return pittsburghData
  }

// adds the colors based on population for each zip code region
function onEachZipCodeCloser(data){
  return function onEachFeature(feature,layer){
    Object.entries(data).forEach((entry) => {
      let [zip, value] = entry;
      value = value.toString().replaceAll(',','')
      if(feature.properties.ZCTA5CE10 == zip){
        layer.setStyle({
          fillColor: getColor(value),
          weight: 2,
          opacity: 1,
          color: 'black',
          dashArray: '3',
          fillOpacity: 0.7
          })
      }
    });
  }
}
// adds the colors based on population for each tract region
function onEachTract(data){
  return function onEachFeature(feature,layer){
    Object.entries(data).forEach((entry) => {
      let [tract, pop] = entry;
      pop = pop.toString().replaceAll(',','')
      if(feature.properties.tract == tract){
        layer.setStyle({
         color: "black",
         fill:true,
         fillColor: getColor(pop),
         fillOpacity: .7,
       })
      } 
    });
    
  }
}
function getColor(d) {
  return d > 30000 ?'#c20c05':
         d > 25000 ?'#f2200d':
         d > 20000 ?'#f04b0f':
         d > 15000 ?'#f46e0b':
         d > 10000 ?'#f79b08':
         d > 7500 ?'#f4d30b':
         d > 5000 ?'#ccf906':
         d > 2500 ?"#8af609":
         d > 1000 ? "#2af50a":
         d > 500 ? "#21de90":
         d > 100 ? "#0ff0dc":
         d > 50 ? "#93efe4":
         "#e4fbf8"   
}
