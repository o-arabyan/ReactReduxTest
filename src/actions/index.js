import axios from "axios";

export function getData(loadCount, nat) {
  return dispatch => {
    return axios
      .get("https://randomuser.me/api/?results=" + loadCount + "&nat=" + nat)
      .then(res => {
        dispatch(loadData(res.data.results));
      });
  };
}

export function selectUserNat(nat) {
  return dispatch => dispatch(setUserNat(nat));
}

export function loadData(users) {
  return {
    type: "LOAD_USERS",
    users: users
  };
}

export function setUserNat(nat) {
  return {
    type: "SET_NAT",
    nat: nat
  };
}
