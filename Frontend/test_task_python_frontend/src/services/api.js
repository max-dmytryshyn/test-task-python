import axios from "axios";

export const getAllUsers = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/users/");
    return response;
  } catch (error) {
    throw error;
  }
};

export const getAllGroups = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/groups/");
    return response;
  } catch (error) {
    throw error;
  }
};
