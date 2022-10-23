import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Center from "../components/Center";
import PlaylistContextProvider from "../contexts/PlaylistContext";
import Player from "../components/Player";
import SongContextProvider from "../contexts/SongContext";

const Home: NextPage = () => {
    return (
        <div className="bg-black h-screen overflow-hidden">
            <PlaylistContextProvider>
                <SongContextProvider>
                    <Head>
                        <title>Spotify</title>
                        <meta
                            name="description"
                            content="Spotify by P.N fabulous"
                        />
                        <link rel="icon" href="" />
                    </Head>
                    <main className="flex">
                        <Sidebar />
                        <Center />
                    </main>
                    <div className="sticky bottom-0 text-white">
                        <Player />
                    </div>
                </SongContextProvider>
            </PlaylistContextProvider>
        </div>
    );
};

export default Home;
