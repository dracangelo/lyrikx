import { SongCard } from '../components';
import { genres } from '../assets/constants';

const Discover = () => {
    const genreTitle = 'Pop';

    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>

                <select
                    onChange={(e) => console.log(e.target.value)}
                    value="pop" // Replace 'pop' with the default genreListId value you want to set.
                    className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
                >
                    {genres.map((genre) => (
                        <option key={genre.value} value={genre.value}>
                            {genre.title}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {/* Replace [1,2,3 ...] with the actual array of songs */}
                {songs.map((song, i) => (
                    <SongCard key={song.key} song={song} i={i} />
                ))}
            </div>
        </div>
    );
};

export default Discover;
