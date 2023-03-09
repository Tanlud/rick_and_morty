import style from "./Card.module.css";

export default function Card({ id, name, species, gender, image, onClose }) {
  return (
    <div className={style.container}>
      <button onClick={() => onClose(id)} className={style.closeButton}>
        X
      </button>
      <img src={image} alt="" />
      <h2>Name: {name}</h2>
      <h2>Species: {species}</h2>
      <h2>Gender: {gender}</h2>
    </div>
  );
}
