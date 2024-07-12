import './App.css'
import BasketballPlayerCard from './Components/BasketballPlayerCard';

function App() {

  const player = {
    name: "LeBron James",
    image: "https://wallpapers.com/images/high/4k-nba-lebron-james-ulq9mkvloqxdkm44.webp",
    position: "Forward",
    stats: {
      pointsPerGame: 25.4,
      assistsPerGame: 7.1,
      reboundsPerGame: 10.5
    }
  };

  return (
    <div className="container">
      <BasketballPlayerCard
        name={player.name}
        image={player.image}
        position={player.position}
        stats={player.stats}
      />
    </div>
  )
}

export default App
