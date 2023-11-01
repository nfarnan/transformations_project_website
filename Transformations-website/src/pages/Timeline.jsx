import { Chrono } from "react-chrono";

function Timeline() { 

  const items = [
  {
    title: "October 14, 1883",
    cardTitle: "The “Pittsburgh Proclamation.”",
    cardDetailedText: "Decription of document",
    url: "/src/assets/Historical_Material/1014-iwpa-pittsburgh.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/1014-iwpa-pittsburgh-1.png',
      },
    },
  },
  {
    title: "April 1, 1911",
    cardTitle: "SIXTEENTH_NEGRO_COLORED_ACC",
    url: "/src/assets/Historical_Material/SIXTEENTH_NEGRO_COLORED_ACC.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/SIXTEENTH_NEGRO_COLORED_ACC-1.png',
      },
    },
  },
  {
    title: "April 15, 1911",
    cardTitle: "New Chapter in Human History",
    url: "/src/assets/Historical_Material/New Chapter in Human History .pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/New Chapter in Human History -1.png',
      },
    },
  },
  {
    title: "May 6, 1911",
    cardTitle: "Ninth Cavalry Placed",
    url: "/src/assets/Historical_Material/Ninth Cavalry Placed.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/Ninth Cavalry Placed-1.png',
      },
    },
  },
  {
    title: "May 27, 1911",
    cardTitle: "Chat on Current Literature",
    url: "/src/assets/Historical_Material/Chat on Current Literature .pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/Chat on Current Literature -1.png',
      },
    },
  },
  {
    title: "June 24, 1911",
    cardTitle: "Colored Physician urges Cleanliness",
    url: "/src/assets/Historical_Material/Colored Physician urges Cleanliness.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/Colored Physician urges Cleanliness-1.png',
      },
    },
  },
  {
    title: "September 2, 1911",
    cardTitle: "Colored Men in Pittsburgh",
    url: "/src/assets/Historical_Material/Colored Men in Pittsburgh.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/Colored Men in Pittsburgh-1.png',
      },
    },
  },
  {
    title: "September 16, 1911",
    cardTitle: "Missionary Needed in Africa",
    url: "/src/assets/Historical_Material/Missionary Needed in Africa.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/Missionary Needed in Africa-1.png',
      },
    },
  },
  {
    title: "October 21, 1911",
    cardTitle: "Colored Colleged Students ",
    url: "/src/assets/Historical_Material/Colored Colleged Students .pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/Colored Colleged Students -1.png',
      },
    },
  },
  {
    title: "November 11, 1911",
    cardTitle: "Assistance for ",
    url: "/src/assets/Historical_Material/Assistance for .pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/Assistance for -1.png',
      },
    },
  },
  {
    title: "December 16, 1911",
    cardTitle: "Negro Labor ",
    url: "/src/assets/Historical_Material/Negro Labor .pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/Negro Labor -1.png',
      },
    },
  },
  {
    title: "January 13, 1912",
    cardTitle: "Afro-american Curie",
    url: "/src/assets/Historical_Material/Afro-american Curie.pdf"
    ,media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/Afro-american Curie-1.png',
      },
    },
  },
  {
    title: "May 18, 1912",
    cardTitle: "Annual Banquet of the Health",
    url: "/src/assets/Historical_Material/Annual Banquet of the Health.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/Annual Banquet of the Health-1.png',
      },
    },
  },
  {
    title: "October 4, 1912",
    cardTitle: "Evidence of African Origin ",
    url: "/src/assets/Historical_Material/Evidence of African Origin .pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/Evidence of African Origin.png',
      },
    },
  },
  {
    title: "November 1, 1912",
    cardTitle: "Afro-American Cullings",
    url: "/src/assets/Historical_Material/Afro-American Cullings.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/Evidence of African Origin.png',
      },
    },
  },
  {
    title: "November 22, 1912",
    cardTitle: "PRESBYTERIANS_IN_UPLIFT_WORK_F",
    url: "/src/assets/Historical_Material/PRESBYTERIANS_IN_UPLIFT_WORK_F.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/PRESBYTERIANS_IN_UPLIFT_WORK_F.png',
      },
    },
  },
  {
    title: "September 1, 1923",
    cardTitle: "South_Loses_Power_by_Migratio",
    url: "/src/assets/Historical_Material/South_Loses_Power_by_Migratio.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/South_Loses_Power_by_Migratio-1.png',
      },
    },
  },
  {
    title: "September 8, 1923",
    cardTitle: "N. Carolina sets Pace for ",
    url: "/src/assets/Historical_Material/N. Carolina sets Pace for .pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/N. Carolina sets Pace for.png',
      },
    },
  },
  {
    title: "April 5, 1924",
    cardTitle: "THE-DIGEST_LIBERIA_TODAY_A_TH",
    url: "/src/assets/Historical_Material/THE-DIGEST_LIBERIA_TODAY_A_TH.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/THE-DIGEST_LIBERIA_TODAY_A_TH-1.png',
      },
    },
  },
  {
    title: "April 19, 1924",
    cardTitle: "Competition in Africa Between Black & White",
    url: "/src/assets/Historical_Material/Competition in Africa Between Black & White.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/Competition in Africa Between Black & White-1.png',
      },
    },
  },
  {
    title: "December 27, 1924",
    cardTitle: "THE_-_DIGEST_THE_SOUTHERNER_T",
    url: "/src/assets/Historical_Material/THE_-_DIGEST_THE_SOUTHERNER_T.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/THE_-_DIGEST_THE_SOUTHERNER_T-1.png',
      },
    },
  },
  {
    title: "February 14, 1925",
    cardTitle: "Mexico Objects ",
    url: "/src/assets/Historical_Material/Mexico Objects .pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/Mexico Objects -1.png',
      },
    },
  },
  {
    title: "September 5, 1925",
    cardTitle: "Say_Mexico_Refuses_To_Admit_Ne",
    url: "/src/assets/Historical_Material/Say_Mexico_Refuses_To_Admit_Ne.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/Say_Mexico_Refuses_To_Admit_Ne-1.png',
      },
    },
  },
  {
    title: "September 11, 1926",
    cardTitle: "Effort to Abolish race labor",
    url: "/src/assets/Historical_Material/Effort to Abolish race labor.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/Effort to Abolish race labor-1.png',
      },
    },
  },
  {
    title: "November 13, 1926",
    cardTitle: "National Negro Health week",
    url: "/src/assets/Historical_Material/National Negro Health week.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/National Negro Health week-1.png',
      },
    },
  },
  {
    title: "Nobvember 20, 1926",
    cardTitle: "Mexico Anti-Negro Propaganda",
    url: "/src/assets/Historical_Material/Mexico Anti-Negro Propaganda.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/Mexico Anti-Negro Propaganda-1.png',
      },
    },
  },
  {
    title: "December 4, 1926",
    cardTitle: "Rain,_Freezing_Temperatures,_N",
    url: "/src/assets/Historical_Material/Rain,_Freezing_Temperatures,_N.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/Rain,_Freezing_Temperatures,_N-1.png',
      },
    },
  },
  {
    title: "February 26, 1927",
    cardTitle: "SEGREGATED_SWIMMING_POOLS_ARE_",
    url: "/src/assets/Historical_Material/SEGREGATED_SWIMMING_POOLS_ARE_.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/SEGREGATED_SWIMMING_POOLS_ARE_-1.png',
      },
    },
  },
  {
    title: "April 9, 1927",
    cardTitle: "Black Labor and Black Diamonds",
    url: "/src/assets/Historical_Material/Black Labor and Black Diamonds.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/Black Labor and Black Diamonds-1.png',
      },
    },
  },
  {
    title: "July 16, 1927",
    cardTitle: "Migration from South to North",
    url: "/src/assets/Historical_Material/Migration from South to North.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/Migration from South to North-1.png',
      },
    },
  },
  {
    title: "October 1, 1927",
    cardTitle: "Kansas City Educator Surveys ",
    url: "/src/assets/Historical_Material/Kansas City Educator Surveys .pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/Kansas City Educator Surveys -1.png',
      },
    },
  },
  {
    title: "November 26, 1927",
    cardTitle: "ROGERS_UNEARTHS_INTERESTING_DA",
    url: "/src/assets/Historical_Material/ROGERS_UNEARTHS_INTERESTING_DA.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/ROGERS_UNEARTHS_INTERESTING_DA-1.png',
      },
    },
  },
  {
    title: "March 25, 1928",
    cardTitle: "Now its the Mexican",
    url: "/src/assets/Historical_Material/Now its the Mexican.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/Now its the Mexican-1.png',
      },
    },
  },
  {
    title: "April 28, 1928",
    cardTitle: "Claim Death Rate and Bad Health",
    url: "/src/assets/Historical_Material/Claim Death Rate and Bad Health.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/Claim Death Rate and Bad Health-1.png',
      },
    },
  },
  {
    title: "September 1, 1928",
    cardTitle: "A.N.L.C. Leader Cheered by",
    url: "/src/assets/Historical_Material/A.N.L.C. Leader Cheered by.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/A.N.L.C. Leader Cheered by-1.png',
      },
    },
  },
  {
    title: "February 23, 1929",
    cardTitle: "The_NEGRO_WHO_FREED_MEXICO_Fr",
    url: "/src/assets/Historical_Material/The_NEGRO_WHO_FREED_MEXICO_Fr.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/The_NEGRO_WHO_FREED_MEXICO_Fr.png',
      },
    },
  },
  {
    title: "July 6, 1929",
    cardTitle: "N.A.A.C.P CONFAB Largely attended",
    url: "/src/assets/Historical_Material/N.A.A.C.P CONFAB Largely attended.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/N.A.A.C.P CONFAB Largely attended-1.png',
      },
    },
  },
  {
    title: "October 28, 1929",
    cardTitle: "America Leads in Education",
    url: "/src/assets/Historical_Material/America Leads in Education.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/America Leads in Education-1.png',
      },
    },
  },
  {
    title: "July 5, 1930",
    cardTitle: "THE_MEXICAN_JOB_MENACE",
    url: "/src/assets/Historical_Material/THE_MEXICAN_JOB_MENACE.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/THE_MEXICAN_JOB_MENACE-1.png',
      },
    },
  },
  {
    title: "November 8, 1930",
    cardTitle: "'Black Manhattan'",
    url: "/src/assets/Historical_Material/'Black Manhattan'.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/Black Manhattan-1.png',
      },
    },
  },
  {
    title: "January 9, 1932",
    cardTitle: "Nation Mourns Death of Rosenwald",
    url: "/src/assets/Historical_Material/Nation Mourns Death of Rosenwald.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/Nation Mourns Death of Rosenwald.png',
      },
    },
  },
  {
    title: "May 28, 1932",
    cardTitle: "RESULT_OF_NEGRO_MIGRATION_SHOW",
    url: "/src/assets/Historical_Material/RESULT_OF_NEGRO_MIGRATION_SHOW.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/RESULT_OF_NEGRO_MIGRATION_SHOW-1.png',
      },
    },
  },
  {
    title: "December 24, 1932",
    cardTitle: "Columbia Professor ",
    url: "/src/assets/Historical_Material/Columbia Professor .pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/Columbia Professor -1.png',
      },
    },
  },
  {
    title: "July 8, 1933",
    cardTitle: "New Radicalism Among Negroes",
    url: "/src/assets/Historical_Material/New Radicalism Among Negroes.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/New Radicalism Among Negroes-1.png',
      },
    },
  },
  {
    title: "August 12, 1933",
    cardTitle: "Davis Champions Cause of Steel Worker",
    url: "/src/assets/Historical_Material/Davis Champions Cause of Steel Worker.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/Davis Champions Cause of Steel Worker-1.png',
      },
    },
  },
  {
    title: "October 13, 1934",
    cardTitle: "National Urban League Has Expanded",
    url: "/src/assets/Historical_Material/National Urban League Has Expanded.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/National Urban League Has Expanded-1.png',
      },
    },
  },
  {
    title: "August 17, 1935",
    cardTitle: "Chinese Millionaire Wants Jazz",
    url: "/src/assets/Historical_Material/Chinese Millionaire Wants Jazz.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/Chinese Millionaire Wants Jazz-1.png',
      },
    },
  },
  {
    title: "August 27, 1938",
    cardTitle: "Roosevelt_Aide_Blasts_Inequali",
    url: "/src/assets/Historical_Material/Roosevelt_Aide_Blasts_Inequali.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/Roosevelt_Aide_Blasts_Inequali-1.png',
      },
    },
  },
  {
    title: "November 1, 1938",
    cardTitle: "General Education Board will end service",
    url: "/src/assets/Historical_Material/General Education Board will end service.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/General Education Board will end service-1.png',
      },
    },
  },
  {
    title: "November 11, 1939",
    cardTitle: "W._P._A._Bibliography_Digs_Up_",
    url: "/src/assets/Historical_Material/W._P._A._Bibliography_Digs_Up_.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/W._P._A._Bibliography_Digs_Up_-1.png',
      },
    },
  },
  {
    title: "April 23, 1940",
    cardTitle: "THE_COMING_NEGRO_MIGRATION",
    url: "/src/assets/Historical_Material/THE_COMING_NEGRO_MIGRATION.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/THE_COMING_NEGRO_MIGRATION-1.png',
      },
    },
  },
  {
    title: "December 14, 1940",
    cardTitle: "RACE_WORKERS_LOST_CHAMPION_WH",
    url: "/src/assets/Historical_Material/RACE_WORKERS_LOST_CHAMPION_WH.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/RACE_WORKERS_LOST_CHAMPION_WH.png',
      },
    },
  },
  {
    title: "August 25, 1954",
    cardTitle: "OPPORTUNITIES_AWAIT_RACE_IN_BU",
    url: "/src/assets/Historical_Material/OPPORTUNITIES_AWAIT_RACE_IN_BU.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/OPPORTUNITIES_AWAIT_RACE_IN_BU.png',
      },
    },
  },
  {
    title: "December 10, 1995",
    cardTitle: "December_10,_1995_(Page_21_of_",
    url: "/src/assets/Historical_Material/December_10,_1995_(Page_21_of_.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/December_10,_1995_(Page_21_of_-1.png',
      },
    },
  },
  {
    title: "December 10, 1995",
    cardTitle: "December_10,_1995_(Page_23_of_",
    url: "/src/assets/Historical_Material/December_10,_1995_(Page_23_of_.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/December_10,_1995_(Page_23_of_-1.png',
      },
    },
  },
  {
    title: "September 2, 1999",
    cardTitle: "September_2,_1999_(Page_35_of_",
    url: "/src/assets/Historical_Material/September_2,_1999_(Page_35_of_.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/September_2,_1999_(Page_35_of_-1.png',
      },
    },
  },
  {
    title: "October 3, 1999",
    cardTitle: "October_3,_1999_(Page_88_of_65",
    url: "/src/assets/Historical_Material/October_3,_1999_(Page_88_of_65.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/October_3,_1999_(Page_88_of_65-1.png',
      },
    },
  },
  {
    title: "October 3, 1999",
    cardTitle: "October_3,_1999_(Page_99_of_65",
    url: "/src/assets/Historical_Material/October_3,_1999_(Page_99_of_65.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/October_3,_1999_(Page_99_of_65-1.png',
      },
    },
  },
  {
    title: "October 3, 1999",
    cardTitle: "October_3,_1999_(Page_100_of_6",
    url: "/src/assets/Historical_Material/October_3,_1999_(Page_100_of_6.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/October_3,_1999_(Page_100_of_6-1.png',
      },
    },
  },
  {
    title: "September 26, 2002",
    cardTitle: "September_26,_2002_(Page_25_of",
    url: "/src/assets/Historical_Material/September_26,_2002_(Page_25_of.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/September_26,_2002_(Page_25_of-1.png',
      },
    },
  },
  {
    title: "October 2, 2002",
    cardTitle: "October_2,_2002_(Page_46_of_12",
    url: "/src/assets/Historical_Material/October_2,_2002_(Page_46_of_12.pdf",
    media: {
      type: 'IMAGE',
      source: {
        url: '/src/assets/Historical_Material_png/October_2,_2002_(Page_46_of_12-1.png',
      },
    },
  },
  ]

  return ( 
      <div  style={{ width: "100%", height: "900px" }}> 
          <h1> This is the Timeline page </h1> 
          <Chrono 
          items={items} 
          mode = "HORIZONTAL"
          showAllCardsHorizontal
          textOverlay 
          cardWidth = {500}
          cardHeight = {600}
          mediaSettings= {{align: 'center', fit: 'contain'}}
          
          />
    </div> 
  ); 
} 
export default Timeline; 