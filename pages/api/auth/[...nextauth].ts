import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import { scopes } from "../../../config/spotify";

export default NextAuth({
    providers: [
        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID as string,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
            authorization: {
                url: "https://account.spotify.com/authorize",
                params: {
                    scopr: scopes,
                },
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
});
