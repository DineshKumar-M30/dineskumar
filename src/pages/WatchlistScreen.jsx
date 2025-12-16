import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';
import { X } from 'lucide-react';
import { useState } from 'react';

const base_url = "https://image.tmdb.org/t/p/original/";

function WatchlistScreen() {
    const { watchlist, removeMovieFromWatchlist, addMovieToWatchlist } = useContext(GlobalContext);
    const [selectedMovie, setSelectedMovie] = useState(null);

    return (
        <div className="bg-[#111] min-h-screen text-white">
            <Navbar />

            <div className="pt-24 px-8">
                <h1 className="text-3xl font-bold mb-8">My List</h1>

                {watchlist.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {watchlist.map((movie) => (
                            <div key={movie.id} className="relative group transition-all duration-200 hover:scale-105 hover:z-10 bg-[#181818] rounded-md overflow-hidden"
                                onClick={() => setSelectedMovie(movie)}>
                                <img
                                    className="w-full h-auto object-cover cursor-pointer"
                                    src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
                                    alt={movie.name}
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                                    {/* Remove button handling needs to be separate from card click if we want to support both */}
                                </div>
                                <div className="absolute top-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                        onClick={(e) => { e.stopPropagation(); removeMovieFromWatchlist(movie.id); }}
                                        className="p-1 bg-red-600 rounded-full hover:bg-red-700"
                                        title="Remove from watchlist"
                                    >
                                        <X className="w-4 h-4 text-white" />
                                    </button>
                                </div>
                                <div className="p-2">
                                    <h3 className="text-sm font-semibold truncate">{movie.title || movie.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-500 mt-20">
                        <h2 className="text-xl">Your watchlist is empty.</h2>
                        <p className="mt-2">Add movies and TV shows to keep track of what you want to watch.</p>
                    </div>
                )}

                {selectedMovie && (
                    <Modal
                        movie={selectedMovie}
                        onClose={() => setSelectedMovie(null)}
                        onAddToWatchlist={addMovieToWatchlist}
                        onRemoveFromWatchlist={removeMovieFromWatchlist}
                        isInWatchlist={true}
                    />
                )}
            </div>
        </div>
    );
}

export default WatchlistScreen;
