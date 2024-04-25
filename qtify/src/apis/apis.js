import axios from "axios";

export const BACKEND_END_POINT = "https://qtify-backend-labs.crio.do";

export const triggerGetTopAlbumsAPI = async () => {
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
