import axiosClient from "@/axiosClient";

export function searchCoctailName({ commit }, drink) {
  axiosClient
    .get(`search.php?s=${drink}`)
    .then((response) => {
      const data = response.data;
      commit("searchName", data.drinks);
    })
    .catch((error) => {
      console.error(error);
    });
}
