import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { connect, useDispatch } from "react-redux";
import { removeFavorite, getFavorites } from "../../redux/actions";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";

function Card({ id, name, species, gender, image, onClose, myFavorites }) {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();

  //   Si el estado isFav es true, entonces settea ese estado en false, y despacha la función deleteFavorite que recibiste por props pasándole el ID del personaje como argumento.
  // Si el estado isFav es false, entonces settea ese estado en true, y despacha la función addFavorite que recibiste por props, pasándole props como argumento.

  const addFavorite = (character) => {
    axios
      .post("http://localhost:3001/rickandmorty/fav", character)
      .then((res) => console.log("ok"));
  };

  const removeFavorite = async (id) => {
    await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
    dispatch(getFavorites());
    alert("Eliminado con éxito");
  };

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite(id);
    } else {
      setIsFav(true);
      //
      addFavorite({
        id,
        name,
        species,
        gender,
        image,
      });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={style.container}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button onClick={() => onClose(id)} className={style.closeButton}>
        X
      </button>
      <Link to={`/detail/${id}`}>
        <h2> {name}</h2>
      </Link>
      <img src={image} alt="" />

      <h2>Species: {species}</h2>
      <h2>Gender: {gender}</h2>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFavorite: (id) => {
      dispatch(removeFavorite(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
