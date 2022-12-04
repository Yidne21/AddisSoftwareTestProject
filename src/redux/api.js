import axios from "axios";

//uncomment This code when using it on your lacal Machine 
/** 
export const loadUsersApi = async () =>
  await axios.get("http://localhost:3500/users");

export const creaeteUserApi = async (user) =>
  await axios.post("http://localhost:3500/users", user);

export const deleteUserApi = async (userId) =>
  await axios.delete(`http://localhost:3500/users/${userId}`);

export const updateUserApi = async (userId, userInfo) =>
  await axios.put(`http://localhost:3500/users/${userId}`, userInfo);

*/

//Comment those below code when using it on your local Machine
export const loadUsersApi = async () =>
  await axios.get("https://my-json-server.typicode.com/Yidne21/AddisSoftwareTestProject");

export const creaeteUserApi = async (user) =>
  await axios.post("https://my-json-server.typicode.com/Yidne21/AddisSoftwareTestProject", user);

export const deleteUserApi = async (userId) =>
  await axios.delete(`https://my-json-server.typicode.com/Yidne21/AddisSoftwareTestProject/${userId}`);

export const updateUserApi = async (userId, userInfo) =>
  await axios.put(`https://my-json-server.typicode.com/Yidne21/AddisSoftwareTestProject/${userId}`, userInfo);