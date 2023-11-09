var map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

var slides = [
  {
    location: [48.8566, 2.3522], // Paryż
    description: "Eiffla Tower i wiele więcej..."
  },
  {
    location: [-16.5000, -151.7500], // Bora Bora
    description: "Egzotyczne plaże i relaks..."
  },
  {
    location: [27.9878, 86.9250], // Himalaje
    description: "Wspinaczka w Himalajach - majestatyczne szczyty..."
  },
  {
    location: [-2.1540, 34.6857], // Serengeti
    description: "Safari w Serengeti - dzikie zwierzęta na wolności..."
  },
  {
    location: [-13.1631, -72.5450], // Machu Picchu
    description: "Podróż do Machu Picchu - historyczne miejsce na szczycie gór..."
  },
  {
    location: [-16.5000, 145.7400], // Wielka Rafa Koralowa
    description: "Podwodna przygoda w Wielkiej Rafie Koralowej - kolorowe rafy i bogactwo morskiego życia..."
  },
  {
    location: [35.6895, 139.6917], // Japonia
    description: "Wycieczka po Japonii - kulturowe atrakcje i piękne krajobrazy..."
  },
  // Dodaj kolejne lokalizacje
];

L.control.storymap({
  stories: slides
}).addTo(map);
