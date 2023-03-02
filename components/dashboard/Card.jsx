import { useState } from "react";
import { Card } from "react-bootstrap";
import StyleCards from "./cards.module.css";
import { AiFillHeart } from "react-icons/ai";
import { BsCameraFill } from "react-icons/bs";
import { UpdateLike } from "../../db/level";
import { useSelector } from "react-redux";

export default function ImageCard(props) {
  const user = useSelector((state) => state.user.value);
  const [isLiked, setIsLiked] = useState(false);
  const LikedHandler = async () => {
    try {
      await UpdateLike(user.email, props.id);
      setIsLiked(true);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <Card className={StyleCards.card}>
        <img
          className={StyleCards.img}
          src={props.urls.small}
          alt={props.user.name}
          loading="lazy"
        />

        <article className={StyleCards.article}>
          <div className={StyleCards.cardBody}>
            <img
              className={StyleCards.profileImg}
              src={props.user.profile_image.large}
              alt={props.user.name}
              loading="lazy"
            />
            <h6 className={StyleCards.name}>{props.user.name}</h6>
          </div>

          <div>
            <ul className={StyleCards.icons}>
              <li>
                {" "}
                <AiFillHeart className={StyleCards.icon} size={15} />
                {props.likes}
              </li>
              <li>
                {" "}
                <BsCameraFill className={StyleCards.icon} size={15} />
                {props.user.total_photos}
              </li>
            </ul>
          </div>
        </article>
        <button onClick={LikedHandler} className={StyleCards.likeIcon}>
          <AiFillHeart /> {isLiked ? "Liked" : "Like"}
        </button>
      </Card>
    </>
  );
}
