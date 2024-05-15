import axios from "axios";

const url = process.env.NODE_ENV === 'production' ? "https://bingo-2z83.onrender.com/auth" : "http://localhost:5000/auth";
const profileURl = process.env.NODE_ENV === 'production' ? "https://bingo-2z83.onrender.com/profile" : "http://localhost:5000/profile";
const gameURl = process.env.NODE_ENV === 'production' ? "https://bingo-2z83.onrender.com/game" : "http://localhost:5000/game";

export const fetchUsers= () => axios.get(url);
export const signUpUser= (data) => axios.post(`${url}/signUp`,data);
export const signInUser= (data) => axios.post(`${url}/signIn`,data);
export const googleSignInUser= (data) => axios.post(`${url}/googleSignIn`,data);

export const getProfile = (email) => axios.get(`${profileURl}/getMyProfile/${email}`);
export const getOpponents = (email) => axios.get(`${profileURl}/getAllOpponents/${email}`);
export const getLeaderBoard = () => axios.get(`${profileURl}/getLeaderboardData`);
export const updatePlayerData = (email,data) => axios.patch(`${profileURl}/updateProfile/${email}`,data);
export const updatePlayerImage = (email, data) => axios.patch(`${profileURl}/updateImage/${email}`, data);

export const fetchRoom = (id) => axios.get(`${gameURl}/fetchRoomData/${id}`)
export const createRoom = (data) => axios.post(`${gameURl}/createPlayer`,data);
export const joinRoom = (data) => axios.post(`${gameURl}/joinPlayer`,data);
export const lockRoom = (roomID) => axios.patch(`${gameURl}/lockRoom/${roomID}`);
