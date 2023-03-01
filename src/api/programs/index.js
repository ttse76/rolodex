import axios from "axios";

const URL = '/api/programs';

export function addNewLoyaltyProgram(data) {
  return axios.post(URL, { ...data });
}