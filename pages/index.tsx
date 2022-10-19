import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Center from "../components/Center";
import PlaylistContextProvider from "../contexts/PlaylistContext";

const Home: NextPage = () => {
    return (
        <div className="bg-black h-screen overflow-hidden">
            <PlaylistContextProvider>
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
            </PlaylistContextProvider>
        </div>
    );
};

export default Home;
