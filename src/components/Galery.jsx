import { Link } from "react-router-dom";


function Galery({ data: { results } }) {
  return (
    <div className="galery">
      <ul>
        {results.map((image) => {
          console.log(image)
          return (
            <li key={image.id}>
              <Link to={`singlepage/${image.id}`}>
              <img 
              src={image.urls.regular}
              alt={image.alt_description}
              width={300} 
              height={300} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Galery;
