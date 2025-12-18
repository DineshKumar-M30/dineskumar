import React, { createContext, useReducer, useEffect } from "react";

// Initial state
const initialState = {
    watchlist: localStorage.getItem("watchlist")
        ? (() => {
            try {
                return JSON.parse(localStorage.getItem("watchlist"));
            } catch (e) {
                console.error("Failed to parse watchlist:", e);
                return [];
            }
        })()
        : [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Reducer
const AppReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_WATCHLIST":
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist],
            };
        case "REMOVE_FROM_WATCHLIST":
            return {
                ...state,
                watchlist: state.watchlist.filter(
                    (movie) => movie.id !== action.payload
                ),
            };
        default:
            return state;
    }
};

// Provider component
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    }, [state]);

    const addMovieToWatchlist = (movie) => {
        dispatch({ type: "ADD_TO_WATCHLIST", payload: movie });
    };

    const removeMovieFromWatchlist = (id) => {
        dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: id });
    };

    return (
        <GlobalContext.Provider
            value={{
                watchlist: state.watchlist,
                addMovieToWatchlist,
                removeMovieFromWatchlist,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};
