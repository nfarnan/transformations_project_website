import { Chrono } from "react-chrono";

function Timeline() { 

  const items = [
  {
    title: "October 14, 1883",
    cardTitle: "The “Pittsburgh Proclamation.”",
    cardSubtitle: "Adopted by the Founding Congress of the American Federation of the International Working People’s Association",
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
    cardTitle: "Sixteenth Negro “Colored”",
    cardSubtitle: "According to Kentuck Court Term Colored Applies to Any one With Negro Blood",
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
    cardSubtitle: "First Universal Races Congress Will Mark Its Beginning",
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
    cardSubtitle: "Negro Regiment Will Be Used For Patrol Duty In Texas",
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
    cardTitle: "Chat on Current Literature Converning the Negro",
    cardSubtitle: "",

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
    cardSubtitle: "Dr. john A. Kenney of Tuskegee Institute Is Issuing Series of Health Bulletins",

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
    cardTitle: "Colored Men in Pittsburgh To Join The American Federation of Labor",
    cardSubtitle: "Large Attendance at First Meeting in Labor Temple Last Sunday",

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
    cardTitle: "Missionary Need in Africa",
    cardSubtitle: "Mrs. Dr. A. A. Wal. Rankin Pa. Graduate from Trained Nurse Department Shaw University",

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
    cardSubtitle: "",

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
    cardTitle: "Assistance for Negros",
    cardSubtitle: "Board of Education Endorses Denominational School at Augusta, Ga",

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
    cardTitle: "Negro Labor Ignored",
    cardSubtitle: "",

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
    cardSubtitle: "",

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
    cardTitle: "Annual Banquet of the Health Culture Club",
    cardSubtitle: "Rev. Patterson Says Race Must Change Mode of Life or Suffer the Fate of the Indians",

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
    cardTitle: "Evidence of African Origin Of Egyptians",
    cardSubtitle: "Migration and Colonization of the Chief Causes of Amalgamation of Primitive Races",

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
    cardSubtitle: "",

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
    cardTitle: "Presbyterians in Uplift Work For Afro-Americans",
    cardSubtitle: "The Experement of Establishing Colored Persons on Individual Farms Thoroughly Explained",

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
    cardTitle: "South Loses Power by Migration",
    cardSubtitle: "Solid South's Power Doomed by Migration",

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
    cardTitle: "N. Carolina sets Pace for South",
    cardSubtitle: "Program of Inducement at Wilmington - Both Races Agree on Migration",

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
    cardTitle: "The-Digest:",
    cardSubtitle: "Liberia Today A third Party Congradulations - Negro Education",

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
    cardTitle: "Competition in Africa Between Black & White Labor Keen, Says Tourist",
    cardSubtitle: "",

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
    cardTitle: "The-Digest__T",
    cardSubtitle: "The Southerner, The Mouthpiece, Mexico's Press, Christmas, Dixie to S'way, Negro Cities",

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
    cardTitle: "Mexico Objects to All-Negro Colony",
    cardSubtitle: "",

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
    cardTitle: "Say Mexico Refuses To Admit Negroes",
    cardSubtitle: "",

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
    cardTitle: "Effort to Abolish Race Labor in Cotton Fields Blocked",
    cardSubtitle: "Foreign Workers Opposed",

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
    cardSubtitle: "",

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
    cardTitle: "Mexico Anti-Negro Propaganda Started",
    cardSubtitle: "White Oil Interests Active in Keeping Negro Out of Mexico",

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
    cardTitle: "Rain, Freezing Temperatures, Negro Migration Hindering Cotton Harvest",
    cardSubtitle: "Negro Farmers See Wisdom of Diversification of Crops",

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
    cardTitle: "Segragated Swimming Pools are Advocated",
    cardSubtitle: "Advocates Separate Pool For Negroes and Mexicans in Town of 13,000 Population",

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
    cardSubtitle: "",

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
    cardTitle: "Migration from South to North Raised Race's Standard of Living",
    cardSubtitle: "Compulsory Education and Superior Health Instruction Gains Seen By C. S. Johnson",

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
    cardTitle: "Kansas City Educator Surveys Field of Negro Education",
    cardSubtitle: "Find Defects In Negro Eduaction Also Exist In Our American System",

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
    cardTitle: "Rogers Unearths Interesting Data",
    cardSubtitle: "Discovers Negro Was Mexican President in 1825",
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
    cardSubtitle: "",
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
    cardTitle: "Claim Death Rate and Bad Health Due to Poor Diet",
    cardSubtitle: "Negro Eats Too Many Greasy Preperations",
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
    cardTitle: "A.N.L.C. Leader Cheered by Brooklyn Citizens",
    cardSubtitle: "",
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
    cardTitle: "The Negro Who Freed Mexico",
    cardSubtitle: "From Slave to President",
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
    cardSubtitle: "Cleaveland Proves Royal Hostess To Interesting Delegates - Race Problems Discussed",

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
    cardTitle: "America Leads in Education, But Lags in Giving Opportunity And Protection To Its Black Citizens",
    cardSubtitle: "",

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
    cardTitle: "The Mexican Job Menace",
    cardSubtitle: "",
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
    cardTitle: "'Black Manhattan' And The Negro Literati",
    cardSubtitle: "William H. Ferris Contends That the Negro's Self Assertion Since 1915 Has Caused Miracle In Harlem",
    
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
    cardSubtitle: "",
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
    cardSubtitle: "",
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
    cardSubtitle: "",
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
    cardSubtitle: "",
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
    cardSubtitle: "",
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
    cardSubtitle: "",
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
    cardSubtitle: "",
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
    cardSubtitle: "",
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
    cardSubtitle: "",
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
    cardSubtitle: "",
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
    cardSubtitle: "",
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
    cardSubtitle: "",
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
    cardSubtitle: "",
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
    cardSubtitle: "",
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
    cardSubtitle: "",
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
    cardSubtitle: "",
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
    cardSubtitle: "",
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
    cardSubtitle: "",
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
    cardSubtitle: "",
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
    cardSubtitle: "",
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
    cardSubtitle: "",
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