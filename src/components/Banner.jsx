import React, { useState, useEffect } from 'react';
import axios from '../api/tmdb';
import { requests } from '../api/tmdb';
import { Info, Play } from 'lucide-react';

function Banner({ onMovieClick }) {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header
            className="relative h-[448px] text-white object-contain flex flex-col justify-end pb-32"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
          "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
                backgroundPosition: "center center",
            }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111] via-transparent to-transparent" />

            <div className="ml-8 pt-36 relative z-10 max-w-2xl">
                <h1 className="text-5xl font-extrabold pb-1">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className="flex gap-2 py-4">
                    <button
                        onClick={() => onMovieClick && onMovieClick(movie)}
                        className="cursor-pointer text-black outline-none border-none font-bold rounded px-8 py-2 mr-4 bg-white hover:bg-[#e6e6e6] transition-all flex items-center gap-2"
                    >
                        <Play className="fill-black w-5 h-5" /> Play
                    </button>
                    <button
                        onClick={() => onMovieClick && onMovieClick(movie)}
                        className="cursor-pointer text-white outline-none border-none font-bold rounded px-8 py-2 bg-[rgba(109,109,110,0.7)] hover:bg-[rgba(109,109,110,0.4)] transition-all flex items-center gap-2"
                    >
                        <Info className="w-5 h-5" /> More Info
                    </button>
                </div>

                <h1 className="w-full pt-4 text-sm max-w-[360px] h-[80px] leading-[1.3] drop-shadow-md">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
        </header>
    );
}

export default Banner;
