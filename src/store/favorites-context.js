
import { func } from "prop-types";
import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0
});


function FavoritesContextProvider(props){

    const [userFavorites,setUserFavorites]= useState([]);

function addFavoritesHandler(favoriteMeetup){
    setUserFavorites(userFavorites.concat(favoriteMeetup));
    
}

function removeFavoritesHadler() {}

function itemIsFavoriteHandler() {}


    const context ={
    favorites:userFavorites,
    totalFavorites:userFavorites.length,
};

    return <FavoritesContext.Provider>
 {props.children}
    </FavoritesContext.Provider>
}


