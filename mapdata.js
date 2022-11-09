var simplemaps_usmap_mapdata={
    main_settings: {
      //General settings
          width: "responsive", //or 'responsive'
      background_color: "#FFFFFF",
      background_transparent: "no",
      border_color: "#ffffff",
      popups: "on_hover",
      
          //State defaults
          state_description: "",
      state_color: "#88A4BC",
      state_hover_color: "#3B729F",
      state_url: "",
      border_size: 1.5,
      all_states_inactive: "no",
      all_states_zoomable: "no",
      
      //     //Location defaults
      //     location_description: "Store closest to you!",
      // location_color: "#FF0067",
      // location_opacity: 0.8,
      // location_hover_opacity: 1,
      // location_url: "",
      // location_size: 25,
      // location_type: "square",
      // location_image_source: "frog.png",
      // location_border_color: "#FFFFFF",
      // location_border: 2,
      // location_hover_border: 2.5,
      // all_locations_inactive: "no",
      // all_locations_hidden: "no",
      
          //Label defaults
          label_color: "#d5ddec",
      label_hover_color: "#d5ddec",
      label_size: 22,
      label_font: "Arial",
      hide_labels: "no",
     
          //Zoom settings
          manual_zoom: "no",
      back_image: "no",
      arrow_color: "#cecece",
      arrow_color_border: "#808080",
      initial_back: "no",
      initial_zoom: -1,
      initial_zoom_solo: "no",
      region_opacity: 1,
      region_hover_opacity: 0.6,
      zoom_out_incrementally: "yes",
      zoom_percentage: 0.99,
      zoom_time: 0.5,
      
          //Popup settings
          popup_color: "white",
      popup_opacity: 0.9,
      popup_shadow: 1,
      popup_corners: 5,
      popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
      popup_nocss: "no",
      
          //Advanced settings
          div: "map",
      auto_load: "yes",
      url_new_tab: "no",
      images_directory: "default",
      fade_time: 0.1,
      link_text: "View Website"
    },
    state_specific: {
      HI: {
        name: "Hawaii",
        description: "Less than 15.0 percent: 9.50%<br>15.0 to 19.9 percent: 11.30%<br>20.0 to 24.9 percent: 10.30%<br>25.0 to 29.9 percent: 10.90%<br>30.0 to 34.9 percent: 10.70%<br>35.0 percent or more: 47.30%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      AK: {
        name: "Alaska",
        description: "Less than 15.0 percent: 13.30%<br>15.0 to 19.9 percent: 13.40%<br>20.0 to 24.9 percent: 11.80%<br>25.0 to 29.9 percent: 11.90%<br>30.0 to 34.9 percent: 10.60%<br>35.0 percent or more: 39.00%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      FL: {
        name: "Florida",
        description: "Less than 15.0 percent: 8.40%<br>15.0 to 19.9 percent: 9.70%<br>20.0 to 24.9 percent: 11.90%<br>25.0 to 29.9 percent: 11.20%<br>30.0 to 34.9 percent: 9.70%<br>35.0 percent or more: 49.20%",
        color: "default",
        hover_color: "default",
        url: "default",
        inactive: "no"
      },
      NH: {
        name: "New Hampshire",
        description: "Less than 15.0 percent: 12.50%<br>15.0 to 19.9 percent: 16.30%<br>20.0 to 24.9 percent: 12.20%<br>25.0 to 29.9 percent: 14.00%<br>30.0 to 34.9 percent: 8.20%<br>35.0 percent or more: 36.70%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      VT: {
        name: "Vermont",
        description: "Less than 15.0 percent: 11.30%<br>15.0 to 19.9 percent: 14.10%<br>20.0 to 24.9 percent: 12.80%<br>25.0 to 29.9 percent: 11.80%<br>30.0 to 34.9 percent: 9.50%<br>35.0 percent or more: 40.50%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      ME: {
        name: "Maine",
        description: "Less than 15.0 percent: 14.10%<br>15.0 to 19.9 percent: 12.90%<br>20.0 to 24.9 percent: 11.80%<br>25.0 to 29.9 percent: 13.60%<br>30.0 to 34.9 percent: 11.80%<br>35.0 percent or more: 35.80%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      RI: {
        name: "Rhode Island",
        description: "Less than 15.0 percent: 13.00%<br>15.0 to 19.9 percent: 11.60%<br>20.0 to 24.9 percent: 14.40%<br>25.0 to 29.9 percent: 12.60%<br>30.0 to 34.9 percent: 9.20%<br>35.0 percent or more: 39.10%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      NY: {
        name: "New York",
        description: "Less than 15.0 percent: 13.50%<br>15.0 to 19.9 percent: 11.20%<br>20.0 to 24.9 percent: 11.60%<br>25.0 to 29.9 percent: 10.40%<br>30.0 to 34.9 percent: 9.30%<br>35.0 percent or more: 44.00%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      PA: {
        name: "Pennsylvania",
        description: "Less than 15.0 percent: 15.70%<br>15.0 to 19.9 percent: 12.70%<br>20.0 to 24.9 percent: 12.40%<br>25.0 to 29.9 percent: 11.30%<br>30.0 to 34.9 percent: 9.10%<br>35.0 percent or more: 38.80%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      NJ: {
        name: "New Jersey",
        description: "Less than 15.0 percent: 12.50%<br>15.0 to 19.9 percent: 11.80%<br>20.0 to 24.9 percent: 12.60%<br>25.0 to 29.9 percent: 11.50%<br>30.0 to 34.9 percent: 8.30%<br>35.0 percent or more: 43.30%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      DE: {
        name: "Delaware",
        description: "Less than 15.0 percent: 12.40%<br>15.0 to 19.9 percent: 12.60%<br>20.0 to 24.9 percent: 12.80%<br>25.0 to 29.9 percent: 12.00%<br>30.0 to 34.9 percent: 6.60%<br>35.0 percent or more: 43.50%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      MD: {
        name: "Maryland",
        description: "Less than 15.0 percent: 10.80%<br>15.0 to 19.9 percent: 12.10%<br>20.0 to 24.9 percent: 13.90%<br>25.0 to 29.9 percent: 11.00%<br>30.0 to 34.9 percent: 9.00%<br>35.0 percent or more: 43.10%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      VA: {
        name: "Virginia",
        description: "Less than 15.0 percent: 13.20%<br>15.0 to 19.9 percent: 13.40%<br>20.0 to 24.9 percent: 12.30%<br>25.0 to 29.9 percent: 11.60%<br>30.0 to 34.9 percent: 8.80%<br>35.0 percent or more: 40.70%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      WV: {
        name: "West Virginia",
        description: "Less than 15.0 percent: 13.00%<br>15.0 to 19.9 percent: 13.80%<br>20.0 to 24.9 percent: 12.60%<br>25.0 to 29.9 percent: 10.90%<br>30.0 to 34.9 percent: 8.30%<br>35.0 percent or more: 41.30%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      OH: {
        name: "Ohio",
        description: "Less than 15.0 percent: 15.90%<br>15.0 to 19.9 percent: 14.50%<br>20.0 to 24.9 percent: 13.10%<br>25.0 to 29.9 percent: 12.10%<br>30.0 to 34.9 percent: 8.30%<br>35.0 percent or more: 36.20%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      IN: {
        name: "Indiana",
        description: "Less than 15.0 percent: 15.20%<br>15.0 to 19.9 percent: 14.00%<br>20.0 to 24.9 percent: 12.50%<br>25.0 to 29.9 percent: 11.40%<br>30.0 to 34.9 percent: 9.60%<br>35.0 percent or more: 37.30%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      IL: {
        name: "Illinois",
        description: "Less than 15.0 percent: 14.40%<br>15.0 to 19.9 percent: 12.90%<br>20.0 to 24.9 percent: 12.90%<br>25.0 to 29.9 percent: 11.70%<br>30.0 to 34.9 percent: 8.70%<br>35.0 percent or more: 39.40%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      CT: {
        name: "Connecticut",
        description: "Less than 15.0 percent: 11.70%<br>15.0 to 19.9 percent: 11.50%<br>20.0 to 24.9 percent: 12.40%<br>25.0 to 29.9 percent: 12.20%<br>30.0 to 34.9 percent: 9.30%<br>35.0 percent or more: 42.90%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      WI: {
        name: "Wisconsin",
        description: "Less than 15.0 percent: 17.20%<br>15.0 to 19.9 percent: 14.80%<br>20.0 to 24.9 percent: 13.20%<br>25.0 to 29.9 percent: 11.50%<br>30.0 to 34.9 percent: 8.90%<br>35.0 percent or more: 34.40%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      NC: {
        name: "North Carolina",
        description: "Less than 15.0 percent: 14.70%<br>15.0 to 19.9 percent: 13.20%<br>20.0 to 24.9 percent: 12.60%<br>25.0 to 29.9 percent: 10.80%<br>30.0 to 34.9 percent: 9.40%<br>35.0 percent or more: 39.40%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      DC: {
        name: "District of Columbia",
        description: "Less than 15.0 percent: 13.50%<br>15.0 to 19.9 percent: 13.80%<br>20.0 to 24.9 percent: 13.50%<br>25.0 to 29.9 percent: 11.20%<br>30.0 to 34.9 percent: 9.20%<br>35.0 percent or more: 38.80%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      MA: {
        name: "Massachusetts",
        description: "Less than 15.0 percent: 12.00%<br>15.0 to 19.9 percent: 11.50%<br>20.0 to 24.9 percent: 12.30%<br>25.0 to 29.9 percent: 12.50%<br>30.0 to 34.9 percent: 9.70%<br>35.0 percent or more: 41.90%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      TN: {
        name: "Tennessee",
        description: "Less than 15.0 percent: 14.40%<br>15.0 to 19.9 percent: 12.10%<br>20.0 to 24.9 percent: 13.00%<br>25.0 to 29.9 percent: 12.30%<br>30.0 to 34.9 percent: 8.90%<br>35.0 percent or more: 39.20%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      AR: {
        name: "Arkansas",
        description: "Less than 15.0 percent: 16.50%<br>15.0 to 19.9 percent: 13.40%<br>20.0 to 24.9 percent: 13.40%<br>25.0 to 29.9 percent: 11.30%<br>30.0 to 34.9 percent: 10.10%<br>35.0 percent or more: 35.30%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      MO: {
        name: "Missouri",
        description: "Less than 15.0 percent: 15.40%<br>15.0 to 19.9 percent: 13.60%<br>20.0 to 24.9 percent: 13.80%<br>25.0 to 29.9 percent: 11.50%<br>30.0 to 34.9 percent: 9.10%<br>35.0 percent or more: 36.60%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      GA: {
        name: "Georgia",
        description: "Less than 15.0 percent: 12.20%<br>15.0 to 19.9 percent: 12.40%<br>20.0 to 24.9 percent: 12.50%<br>25.0 to 29.9 percent: 11.50%<br>30.0 to 34.9 percent: 9.10%<br>35.0 percent or more: 42.40%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      SC: {
        name: "South Carolina",
        description: "Less than 15.0 percent: 13.70%<br>15.0 to 19.9 percent: 12.50%<br>20.0 to 24.9 percent: 12.00%<br>25.0 to 29.9 percent: 11.00%<br>30.0 to 34.9 percent: 9.20%<br>35.0 percent or more: 41.60%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      KY: {
        name: "Kentucky",
        description: "Less than 15.0 percent: 16.20%<br>15.0 to 19.9 percent: 12.40%<br>20.0 to 24.9 percent: 12.70%<br>25.0 to 29.9 percent: 13.00%<br>30.0 to 34.9 percent: 8.70%<br>35.0 percent or more: 36.90%",
        color: "default",
        zoomable: "no",
        hover_color: "default",
        url: "default"
      },
      AL: {
        name: "Alabama",
        description: "Less than 15.0 percent: 15.10%<br>15.0 to 19.9 percent: 13.10%<br>20.0 to 24.9 percent: 11.00%<br>25.0 to 29.9 percent: 10.90%<br>30.0 to 34.9 percent: 9.00%<br>35.0 percent or more: 40.90%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      LA: {
        name: "Louisiana",
        description: "Less than 15.0 percent: 12.40%<br>15.0 to 19.9 percent: 10.70%<br>20.0 to 24.9 percent: 10.60%<br>25.0 to 29.9 percent: 10.60%<br>30.0 to 34.9 percent: 8.10%<br>35.0 percent or more: 47.60%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      MS: {
        name: "Mississippi",
        description: "Less than 15.0 percent: 15.20%<br>15.0 to 19.9 percent: 12.30%<br>20.0 to 24.9 percent: 10.70%<br>25.0 to 29.9 percent: 9.50%<br>30.0 to 34.9 percent: 8.90%<br>35.0 percent or more: 43.40%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      IA: {
        name: "Iowa",
        description: "Less than 15.0 percent: 16.80%<br>15.0 to 19.9 percent: 14.40%<br>20.0 to 24.9 percent: 12.60%<br>25.0 to 29.9 percent: 11.20%<br>30.0 to 34.9 percent: 8.30%<br>35.0 percent or more: 36.70%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      MN: {
        name: "Minnesota",
        description: "Less than 15.0 percent: 12.80%<br>15.0 to 19.9 percent: 12.70%<br>20.0 to 24.9 percent: 14.40%<br>25.0 to 29.9 percent: 11.70%<br>30.0 to 34.9 percent: 10.00%<br>35.0 percent or more: 38.30%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      OK: {
        name: "Oklahoma",
        description: "Less than 15.0 percent: 15.70%<br>15.0 to 19.9 percent: 13.30%<br>20.0 to 24.9 percent: 13.30%<br>25.0 to 29.9 percent: 11.20%<br>30.0 to 34.9 percent: 9.30%<br>35.0 percent or more: 37.30%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      TX: {
        name: "Texas",
        description: "Less than 15.0 percent: 11.50%<br>15.0 to 19.9 percent: 12.60%<br>20.0 to 24.9 percent: 13.30%<br>25.0 to 29.9 percent: 11.80%<br>30.0 to 34.9 percent: 8.80%<br>35.0 percent or more: 42.00%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      NM: {
        name: "New Mexico",
        description: "Less than 15.0 percent: 15.90%<br>15.0 to 19.9 percent: 12.50%<br>20.0 to 24.9 percent: 10.60%<br>25.0 to 29.9 percent: 11.90%<br>30.0 to 34.9 percent: 8.40%<br>35.0 percent or more: 40.60%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      KS: {
        name: "Kansas",
        description: "Less than 15.0 percent: 15.90%<br>15.0 to 19.9 percent: 15.30%<br>20.0 to 24.9 percent: 14.70%<br>25.0 to 29.9 percent: 11.10%<br>30.0 to 34.9 percent: 8.20%<br>35.0 percent or more: 34.70%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      NE: {
        name: "Nebraska",
        description: "Less than 15.0 percent: 15.50%<br>15.0 to 19.9 percent: 14.10%<br>20.0 to 24.9 percent: 12.00%<br>25.0 to 29.9 percent: 12.40%<br>30.0 to 34.9 percent: 8.20%<br>35.0 percent or more: 37.80%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      SD: {
        name: "South Dakota",
        description: "Less than 15.0 percent: 18.60%<br>15.0 to 19.9 percent: 16.10%<br>20.0 to 24.9 percent: 15.00%<br>25.0 to 29.9 percent: 11.70%<br>30.0 to 34.9 percent: 9.80%<br>35.0 percent or more: 28.80%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      ND: {
        name: "North Dakota",
        description: "Less than 15.0 percent: 22.00%<br>15.0 to 19.9 percent: 14.40%<br>20.0 to 24.9 percent: 13.50%<br>25.0 to 29.9 percent: 8.80%<br>30.0 to 34.9 percent: 8.70%<br>35.0 percent or more: 32.60%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      WY: {
        name: "Wyoming",
        description: "Less than 15.0 percent: 15.50%<br>15.0 to 19.9 percent: 13.70%<br>20.0 to 24.9 percent: 10.90%<br>25.0 to 29.9 percent: 11.80%<br>30.0 to 34.9 percent: 7.70%<br>35.0 percent or more: 40.20%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      MT: {
        name: "Montana",
        description: "Less than 15.0 percent: 19.90%<br>15.0 to 19.9 percent: 14.70%<br>20.0 to 24.9 percent: 13.00%<br>25.0 to 29.9 percent: 10.20%<br>30.0 to 34.9 percent: 8.30%<br>35.0 percent or more: 33.90%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      CO: {
        name: "Colorado",
        description: "Less than 15.0 percent: 9.90%<br>15.0 to 19.9 percent: 11.70%<br>20.0 to 24.9 percent: 12.90%<br>25.0 to 29.9 percent: 12.20%<br>30.0 to 34.9 percent: 10.00%<br>35.0 percent or more: 43.30%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      UT: {
        name: "Utah",
        description: "Less than 15.0 percent: 13.00%<br>15.0 to 19.9 percent: 12.90%<br>20.0 to 24.9 percent: 13.30%<br>25.0 to 29.9 percent: 12.50%<br>30.0 to 34.9 percent: 10.10%<br>35.0 percent or more: 38.00%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      AZ: {
        name: "Arizona",
        description: "Less than 15.0 percent: 12.10%<br>15.0 to 19.9 percent: 12.10%<br>20.0 to 24.9 percent: 12.20%<br>25.0 to 29.9 percent: 12.20%<br>30.0 to 34.9 percent: 8.90%<br>35.0 percent or more: 42.50%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      NV: {
        name: "Nevada",
        description: "Less than 15.0 percent: 10.50%<br>15.0 to 19.9 percent: 11.40%<br>20.0 to 24.9 percent: 11.80%<br>25.0 to 29.9 percent: 10.60%<br>30.0 to 34.9 percent: 9.40%<br>35.0 percent or more: 46.30%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      OR: {
        name: "Oregon",
        description: "Less than 15.0 percent: 11.70%<br>15.0 to 19.9 percent: 12.00%<br>20.0 to 24.9 percent: 11.80%<br>25.0 to 29.9 percent: 12.90%<br>30.0 to 34.9 percent: 8.50%<br>35.0 percent or more: 43.00%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      WA: {
        name: "Washington",
        description: "Less than 15.0 percent: 12.60%<br>15.0 to 19.9 percent: 12.80%<br>20.0 to 24.9 percent: 13.50%<br>25.0 to 29.9 percent: 12.10%<br>30.0 to 34.9 percent: 9.00%<br>35.0 percent or more: 40.00%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      CA: {
        name: "California",
        description: "Less than 15.0 percent: 10.20%<br>15.0 to 19.9 percent: 10.90%<br>20.0 to 24.9 percent: 12.00%<br>25.0 to 29.9 percent: 11.20%<br>30.0 to 34.9 percent: 9.40%<br>35.0 percent or more: 46.40%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      MI: {
        name: "Michigan",
        description: "Less than 15.0 percent: 13.50%<br>15.0 to 19.9 percent: 12.30%<br>20.0 to 24.9 percent: 12.30%<br>25.0 to 29.9 percent: 11.70%<br>30.0 to 34.9 percent: 9.10%<br>35.0 percent or more: 41.00%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      ID: {
        name: "Idaho",
        description: "Less than 15.0 percent: 14.60%<br>15.0 to 19.9 percent: 13.00%<br>20.0 to 24.9 percent: 14.50%<br>25.0 to 29.9 percent: 11.20%<br>30.0 to 34.9 percent: 10.20%<br>35.0 percent or more: 36.50%",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      GU: {
        name: "Guam",
        description: "default",
        color: "default",
        hover_color: "default",
        url: "default",
        hide: "yes"
      },
      VI: {
        name: "Virgin Islands",
        image_source: "x.png",
        description: "default",
        color: "default",
        hover_color: "default",
        url: "default",
        hide: "yes"
      },
      PR: {
        name: "Puerto Rico",
        description: "Less than 15.0 percent: 11.90%<br>15.0 to 19.9 percent: 12.60%<br>20.0 to 24.9 percent: 11.70%<br>25.0 to 29.9 percent: 12.10%<br>30.0 to 34.9 percent: 9.00%<br>35.0 percent or more: 42.70%",
        color: "default",
        hover_color: "default",
        url: "default",
        hide: "yes"
      },
      AS: {
        name: "American Samoa",
        description: "default",
        color: "default",
        hover_color: "default",
        url: "default",
        hide: "yes"
      },
      MP: {
        name: "Northern Mariana Islands",
        description: "default",
        color: "default",
        hover_color: "default",
        url: "default",
        hide: "yes"
      }
    },
    locations: {
      "0": {
        name: "New York",
        lat: "40.71",
        lng: "-74.0059731",
        image_url: "default",
        opacity: "default"
      },
      "1": {
        name: "Anchorage",
        lat: "61.2180556",
        lng: "-149.9002778"
      }
    },
    labels: {
      HI: {
        color: "default",
        hover_color: "default",
        font_family: "default",
        pill: "yes",
        width: "default"
      }
    }
  };