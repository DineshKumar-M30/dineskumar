import React, { useState, useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from '../api/tmdb';
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';
import { GlobalContext } from '../context/GlobalState';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const base_url = "https://image.tmdb.org/t/p/original/";

function SearchScreen() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const { watchlist, addMovieToWatchlist, removeMovieFromWatchlist } = useContext(GlobalContext);

    useEffect(() => {
        if (query) {
            axios.get(`/search/multi?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
                .then((response) => {
                    setMovies(response.data.results.filter(m => m.poster_path || m.backdrop_path));
                })
                .catch(err => console.error(err));
        }
    }, [query]);

    const isInWatchlist = (movieId) => watchlist.some(m => m.id === movieId);

    return (
        <div className="bg-[#111] min-h-screen text-white">
            <Navbar />
            <div className="pt-24 px-8">
                <h1 className="text-2xl font-bold mb-4">Results for "{query}"</h1>

                {movies.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {movies.map((movie) => (
                            <div
                                key={movie.id}
                                className="relative group transition-all duration-200 hover:scale-105 hover:z-10 bg-[#181818] rounded-md overflow-hidden cursor-pointer"
                                onClick={() => setSelectedMovie(movie)}
                            >
                                <img
                                    className="w-full h-auto object-cover"
                                    src={`${base_url}${movie.poster_path || movie.backdrop_path}`}
                                    alt={movie.name || movie.title}
                                />
                                <div className="p-2">
                                    <h3 className="text-sm font-semibold truncate">{movie.title || movie.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No results found.</p>
                )}

                {selectedMovie && (
                    <Modal
                        movie={selectedMovie}
                        onClose={() => setSelectedMovie(null)}
                        onAddToWatchlist={addMovieToWatchlist}
                        onRemoveFromWatchlist={removeMovieFromWatchlist}
                        isInWatchlist={isInWatchlist(selectedMovie.id)}
                    />
                )}
            </div>
        </div>
    );
}

export default SearchScreen;
