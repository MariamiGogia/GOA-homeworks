import MovieCard from "./MovieCard.jsx";
import bs from './images/black-swan.jpg';
import s from './images/sherlock.jpg';
import y from './images/you.avif';

const App = () =>{
  const movies = [
    {
      title: "Sherlock",
      image: s,
      description: "The movie is about genius detective...",
      rating: "10.0",
      genre: "Detective",
      releaseDate: "2010"
    },
    {
      title: "Black Swan",
      image: bs,
      description: "The movie is about ballerina...",
      rating: "7.3",
      genre: "Thriller",
      releaseDate: "2010"
    },
    {
      title: "YOU",
      image: y,
      description: "a dangerously charming man becomes obsessed with women...",
      rating: "8.5",
      genre: "Psychological thriller / Drama ",
      releaseDate: "2018"
    }
  ];

  return (
    <div>
      <h1>Welcome to Movie Card Gallery!</h1>
      {
        movies.map((curValue, index) =>(
          <MovieCard 
          key={index}
          title={curValue.title} image={curValue.image} description={curValue.description} rating={curValue.rating}
          genre={curValue.genre} releaseDate={curValue.releaseDate} />
        ))
      }
    </div>
  );
};


export default App
