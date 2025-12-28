const clientID = import.meta.env.VITE_CLIENT_ID;
const redirectUri = import.meta.env.VITE_REDIRECT_URI;
const scopes = ["user-top-read", "user-read-email"];

export const accessURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&show_dialog=true`;
