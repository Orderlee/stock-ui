export const navigations = [
  {
    name: "HOME",
    path: "/home",
    icon: "home"
  },
  
  {
    name: "Kospi",
    icon: "dashboard",
    children:[

      {name: "Current Marekt",
      icon: "multiline_chart",
      children:[
        {name: "LG Chem",
         path: "/kospi/Lgchem",
         icon:"battery_charging_full"},
         
         {name: "LG Innotek",
          path: "/kospi/Lginnotek",
          icon:"camera"
        }
      ]
    },
    
    {
      name: "Kospi Prediction",
      icon: "multiline_chart",
      children: [
        {
          name: "LG Chem",
          path: "/kospi_pred/Lgchem_pred",
          icon:"battery_charging_full",
          iconText: "C"
        },
        {
          name: "LG Innotek",
          icon:"camera",
          path: "/kospi_pred/Lginnotek_pred",
          iconText: "S"
        }

      ]
    }]
},
 
];
