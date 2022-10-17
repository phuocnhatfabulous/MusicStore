import NextAuth, { CallbacksOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import { scopes } from "../../../config/spotify";
import { ExtendedToken } from "../../../types";

const jwtCallBack: CallbacksOptions["jwt"] = ({ token, account, user }) => {
    let extendedToken: ExtendedToken;
    //User logs in for the first times
    if (account && user) {
        extendedToken = {
            ...token,
            user,
            accessToken: account.access_token as string,
            refreshToken: account.refresh_token as string,
            accessTokenExpiresAt: (account.expires_at as number) * 1000, //converted to miliseconds
        };
        console.log("FIRST TIMES LOGIN, EXTENDED TOKEN: ", extendedToken);
        return extendedToken;
    }
    return token;
};
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
    callbacks: {
        jwt: jwtCallBack,
    },
});
