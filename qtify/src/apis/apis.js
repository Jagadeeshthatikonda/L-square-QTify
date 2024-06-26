import axios from "axios";

export const BACKEND_END_POINT = "https://qtify-backend-labs.crio.do";

export const getTopAlbums = async () => {
  try {
    const response = await axios.get(`${BACKEND_END_POINT}/albums/top`);
    return response.data;
  } catch (error) {
    if (error.request) {
      console.log("Request made but no response is received from the server.");
    } else {
      console.log("Error occured while setting up the request");
    }
    return null;
  }
};

export const getNewAlbums = async () => {
  try {
    const response = await axios.get(`${BACKEND_END_POINT}/albums/new`);
    return response.data;
  } catch (error) {
    if (error.request) {
      console.log("Request made but no response is received from the server.");
    } else {
      console.log("Error occured while setting up the request");
    }
    return null;
  }
};

export const getSongs = async () => {
  try {
    const response = await axios.get(`${BACKEND_END_POINT}/songs`);
    return response.data;
  } catch (error) {
    if (error.request) {
      console.log("Request made but no response is received from the server.");
    } else {
      console.log("Error occured while setting up the request");
    }
    return null;
  }
};

export const getGenresData = async () => {
  try {
    const response = await axios.get(`${BACKEND_END_POINT}/genres`);
    return response.data;
  } catch (error) {
    if (error.request) {
      console.log("Request made but no response is received from the server.");
    } else {
      console.log("Error occured while setting up the request");
    }
    return null;
  }
};
