import axios from "axios";

export const getOkrsData = async () => {
  return await axios.get("https://okrcentral.github.io/sample-okrs/db.json").then((res) => res.data);
};
