import axios from "axios";

const HOSTED_PORT = `https://alienspacestation.herokuapp.com/`;
const LOCAL_PORT = `http://localhost:3002/`;

const deleteData = async (route, data) => {
  console.log(route);
  const res = await axios.post(`${HOSTED_PORT}${route}`, data).catch((err) => {
    console.log(err);
    return false;
  });
  return res;
};

export default deleteData;
