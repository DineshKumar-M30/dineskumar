import React from 'react';
import { X, Play, Plus, Check } from 'lucide-react';

const base_url = "https://image.tmdb.org/t/p/original/";

function Modal({ movie, onClose, onAddToWatchlist, onRemoveFromWatchlist, isInWatchlist }) {
    if (!movie) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto" onClick={onClose}>
            <div
                className="relative w-full max-w-4xl bg-[#181818] rounded-md shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#181818] flex items-center justify-center cursor-pointer hover:bg-zinc-800"
                >
                    <X className="text-white w-6 h-6" />
                </button>

                <div className="relative h-[400px]">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent z-10" />
                    <img
                        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
                        alt={movie.title || movie.name}
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute bottom-10 left-10 z-20 flex flex-col gap-4">
                        <h1 className="text-4xl font-bold text-white">{movie.title || movie.name}</h1>
                        <div className="flex gap-4">
                            <button className="flex items-center gap-2 px-8 py-2 bg-white text-black font-bold rounded hover:bg-opacity-80 transition">
                                <Play className="fill-black w-5 h-5" /> Play
                            </button>
                            <button
                                onClick={() => isInWatchlist ? onRemoveFromWatchlist(movie.id) : onAddToWatchlist(movie)}
                                className="flex items-center gap-2 px-8 py-2 bg-zinc-600/80 text-white font-bold rounded hover:bg-zinc-600 transition border border-white/20"
                            >
                                {isInWatchlist ? (
                                    <><Check className="w-5 h-5" /> Remove from List</>
                                ) : (
                                    <><Plus className="w-5 h-5" /> Add to My List</>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="p-10 grid grid-cols-[2fr_1fr] gap-10 text-white">
                    <div>
                        <div className="flex items-center gap-4 mb-4 text-sm font-semibold text-green-400">
                            <span>{(movie.vote_average * 10).toFixed(0)}% Match</span>
                            <span className="text-gray-400">{movie.release_date || movie.first_air_date}</span>
                        </div>
                        <p className="text-lg leading-relaxed text-gray-300">
                            {movie.overview}
                        </p>
                    </div>
                    <div className="text-sm text-gray-400 flex flex-col gap-2">
                        <div><span className="text-gray-500">Original Language:</span> {movie.original_language?.toUpperCase()}</div>
                        <div><span className="text-gray-500">Popularity:</span> {movie.popularity}</div>
                        <div><span className="text-gray-500">Vote Count:</span> {movie.vote_count}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
