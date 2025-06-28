import { useState } from "react";

const MovieCard = ({ title, image, description, rating, genre, releaseDate }) =>{
    const [more, setMore] = useState(false);

    
    const handleShowMore = () =>{
        setMore(!more)
    }

    return(
        <div>
            <img src={image} alt={title} width={200} />
            <h2>{title}</h2>
            <p>{genre}</p>
            <p>{description}</p>
            {more && (
                 <p>ReleaseDate: {releaseDate} / Rating: {rating}</p>)}
            <button onClick={handleShowMore}>{more ? "Hide More Information" : "Show More Information"}</button>
            <br /><br /><br />
        </div>
    );

}

export default MovieCard;