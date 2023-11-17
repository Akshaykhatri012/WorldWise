import { CITY_LIST } from "../../data/city";

export function getCitiesData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: CITY_LIST,
      });
    }, 500);
  });
}

export function getCityById(id) {
  if (!id) return "city id missing...";
  console.log("id by getcity", id);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const filteredCity = CITY_LIST.filter((item) => item.id == id);
      console.log("filtered city", filteredCity);
      resolve({ data: filteredCity });
    }, 500);
  });
}
