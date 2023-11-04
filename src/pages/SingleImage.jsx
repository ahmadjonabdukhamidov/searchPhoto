import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function SingleImage() {
  const { id } = useParams();
  const url = `https://api.unsplash.com/photos/${id}?client_id=${
    import.meta.env.VITE_APP_SCCESS_KEY
  }`;
  const { data: image, isPending, error } = useFetch(url);

  return (
    <div>
      {image && (
        <>
          <img
            src={image.urls.regular}
            alt={image.alt_description}
            height="500px"
          />
          <h2>Description:</h2>
          <p>{image.description || "No Description"}</p>
          <h2>Author name : {image.user.name}</h2>
          <h3>Social network : {image.user.social.instagram_username || "Social network is not defined"}</h3>
          <img className="profile_image" src={image.user.profile_image.large} alt="" />
          <p>Likes: {image.likes}</p>
          <hr />
        </>
      )}
    </div>
  );
}

export default SingleImage;
