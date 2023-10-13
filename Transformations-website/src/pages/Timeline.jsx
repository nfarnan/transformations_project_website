import { Chrono } from "react-chrono";

function Timeline() { 

  const items = [{
    title: "May 6, 1972",
    cardTitle: "Event Name",
    cardSubtitle: "Subtitle text ",
    cardDetailedText: "Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.    ",
    url: "/src/assets/neighborhood.pdf"
  },
  {
    title: "May 19, 1972",
    cardTitle: "Event Name 2",
    cardSubtitle: "Subtitle text 2",
    items: [
      {
        cardTitle: "Nested timeline 1",
        cardSubtitle: "Subtitle text 1",
        cardDetailedText: "Detailed nested text 1",
      },
      {
        cardTitle: "Nested timeline 1",
        cardDetailedText: "Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.    ",
    
      },
    ]
  },
  {
    title: "January 30, 1989",
    cardTitle: "Event Name 3",
    cardSubtitle: "Subtitle text 3",
    cardDetailedText: "Detailed text 3",
  },
  {
    title: "January 30, 2000",
    cardTitle: "Event Name 3",
    cardSubtitle: "Subtitle text 3",
    cardDetailedText: "Detailed text 3",
  }]

  return ( 
      <div  style={{ width: "50vp", height: "600px" }}> 
          <h1> This is the Timeline page </h1> 
          <Chrono items={items} mode="VERTICAL_ALTERNATING" cardHeight={250}/>
    </div> 
  ); 
} 
export default Timeline; 