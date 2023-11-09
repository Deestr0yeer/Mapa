var map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

var slides = [
  {
    location: [44.427963, -110.588455], // Yellowstone National Park, USA
    description: "Odkryj cuda Parku Narodowego Yellowstone w USA."
  },
  {
    location: [51.4968, -115.9281], // Banff National Park, Kanada
    description: "Zwiedź zapierające dech w piersiach krajobrazy Parku Narodowego Banff w Kanadzie."
  },
  {
    location: [44.8659, 15.5820], // Plitvice Lakes National Park, Chorwacja
    description: "Podziwiaj kaskadowe wodospady Parku Narodowego Jezior Plitwickich w Chorwacji."
  },
  {
    location: [-0.9537, -91.0966], // Galápagos National Park, Ekwador
    description: "Spotkaj unikalną faunę w Parku Narodowym Galapagos w Ekwadorze."
  },
  {
    location: [-51.2592, -73.2323], // Torres del Paine National Park, Chile
    description: "Doświadcz oszałamiającej urody Parku Narodowego Torres del Paine w Chile."
  },
  {
    location: [-2.1540, 34.6857], // Serengeti National Park, Tanzania
    description: "Obserwuj widowisko przyrody w Parku Narodowym Serengeti w Tanzanii."
  },
  {
    location: [-18.2866, 147.6992], // Great Barrier Reef Marine Park, Australia
    description: "Zanurz się w barwnym życiu morskim Wielkiej Rafy Koralowej w Australii."
  },
  {
    location: [33.2588, 103.9180], // Jiuzhaigou Valley National Park, Chiny
    description: "Odkryj kolorowe krajobrazy Parku Narodowego Doliny Jiuzhaigou w Chinach."
  },
  {
    location: [37.2982, -113.0263], // Zion National Park, USA
    description: "Wędruj przez majestatyczne kaniony Parku Narodowego Zion w USA."
  },
  {
    location: [-23.9884, 31.5547], // Kruger National Park, RPA
    description: "Poczuj ekscytację safari w Parku Narodowym Kruger w RPA."
  }
];

L.control.storymap({
  stories: slides
}).addTo(map);
