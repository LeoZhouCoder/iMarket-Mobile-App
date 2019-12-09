import { locale } from "../utils/Localization";

export const getHomeCategories = () => {
  return require("../mockData/en/homeCategories.json");
};

export const getListData = listName => {
  switch (listName) {
    case "christmas":
      return require("../mockData/en/homeCategories.json");
    default:
      return require("../mockData/en/homeCategories.json");
  }
};
