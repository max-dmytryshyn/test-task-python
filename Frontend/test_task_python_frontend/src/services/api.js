import axios from "axios";

//-----------------------------------------Users----------------------------------------------
export const getAllUsers = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/users/");
    return response;
  } catch (error) {
    throw error;
  }
};

export const createUser = async (username, groupId) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/users/", {
      username: username,
      group: groupId,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateUserById = async (userId, username, groupId) => {
  try {
    const response = await axios.put(`http://127.0.0.1:8000/users/${userId}/`, {
      username: username,
      group: groupId,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteUserById = async (userId) => {
  try {
    const response = await axios.delete(`http://127.0.0.1:8000/users/${userId}/`);
    return response;
  } catch (error) {
    throw error;
  }
};
//-----------------------------------------Groups----------------------------------------------
export const getAllGroups = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/groups/");
    return response;
  } catch (error) {
    throw error;
  }
};

export const createGroup = async (name, description) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/groups/", {
      name: name,
      description: description,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateGroupById = async (groupId, name, description) => {
  try {
    const response = await axios.put(`http://127.0.0.1:8000/groups/${groupId}/`, {
      name: name,
      description: description,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteGroupById = async (groupId) => {
  try {
    const response = await axios.delete(`http://127.0.0.1:8000/groups/${groupId}/`);
    return response;
  } catch (error) {
    throw error;
  }
};
