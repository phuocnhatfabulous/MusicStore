import { useSession } from "next-auth/react";
import {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
} from "react";
import { spotifyApi } from "../config/spotify";
import { IPlaylistContext, PlaylistContextState } from "../types";
import useSpotify from "../hooks/useSpotify";

const defaultPlaylistContextState: PlaylistContextState = {
    playlists: [],
    selectedPlaylistId: null,
    selectedPlaylist: null,
};
export const PlaylistContext = createContext<IPlaylistContext>({
    playlistContextState: defaultPlaylistContextState,
    updatePlaylistContextState: () => {},
});
export const usePlaylistContext = () => useContext(PlaylistContext);
const PlaylistContextProvider = ({ children }: { children: ReactNode }) => {
    const spotifyApi = useSpotify();
    const { data: session } = useSession();
    const [playlistContextState, setPlaylistContextState] = useState(
        defaultPlaylistContextState
    );
    const updatePlaylistContextState = (
        updatedObj: Partial<PlaylistContextState>
    ) => {
        setPlaylistContextState((previousPlaylistContextState) => ({
            ...previousPlaylistContextState,
            ...updatedObj,
        }));
    };
    useEffect(() => {
        const getUserPlaylist = async () => {
            const userPlaylistResponse = await spotifyApi.getUserPlaylists();
            updatePlaylistContextState({
                playlists: userPlaylistResponse.body.items,
            });
        };
        if (spotifyApi.getAccessToken()) {
            getUserPlaylist();
        }
    }, [session, spotifyApi]);
    const PlaylistContextProviderData = {
        playlistContextState,
        updatePlaylistContextState,
    };
    return (
        <PlaylistContext.Provider value={PlaylistContextProviderData}>
            {children}
        </PlaylistContext.Provider>
    );
};
export default PlaylistContextProvider;
