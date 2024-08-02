// users-controller.js
import { privateReq } from "./axios-config";

const doSearch = (emailid) => {
  return privateReq.get(`/user/get-user?emailid=${emailid}`);
};

export { doSearch };
