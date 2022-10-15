import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Center from "../components/Center";

const Home: NextPage = () => {
    return (
        <div className="bg-black h-screen overflow-hidden">
            <Head>
                <title>Spotify</title>
                <meta name="description" content="Spotify by P.N fabulous" />
                <link rel="icon" href="" />
            </Head>
            <main className="flex">
                <Sidebar />
                <Center />
            </main>
        </div>
    );
};

export default Home;
