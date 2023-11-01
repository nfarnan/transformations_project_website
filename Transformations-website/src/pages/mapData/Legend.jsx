import L from "leaflet";
import './legend.css'

function Legend({ map,data}) {
    if (map) {
      console.log("hi",data)
      const legend = L.control({ position: "bottomright" });
      legend.onAdd = function () {
        const div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 50, 100,500,1000,2500,5000,7500,10000,15000,20000,25000,30000]
        div.innerHTML = '<span class="title"> Population by Zip Code</span>'
        for (var i = 0; i < grades.length; i++) {
          const color = data(grades[i] + 1)
          let second=""
          const first = grades[i].toLocaleString("en-US").toString()
          if (i + 1 < grades.length){
            second = grades[i+1].toLocaleString("en-US").toString()
          }
          
          div.innerHTML +=
              '<i style="background:' + color + '"></i> ' +
              first + (second ? '&ndash;' + second + '<br>' : '+');
        }
        return div;
      }
      legend.addTo(map);
    }
}

export default Legend;