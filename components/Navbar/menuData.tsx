type Menu = {
  id?: number;
  title?: string;
  path?: string;
  newTab?: boolean;
  submenu?: Menu[];
};
// href="./about-us.html">About Us</a>
          // <a href="./how-we-farm.html">How We Farm</a>
          // <a href="./why-choose-us.html">Why Choose Us?</a>
          // <a href="./vegetables-products.html">Vegetables</a>
          // <a href="./poultry-products.html">Poultry</a>
          // <a href="./dairy-products.html">Dairy</a>
export const menuData: Menu[] = [
  {
    id: 1,
    title: "About Us",
    path: "/new-about-us",
    newTab: false,
  },
  {
    id: 2,
    title: "How We Farm",
    path: "/how-we-farm",
    newTab: false,
  },
  {
    id: 3,
    title: "Vegetables",
    path: "/vegetables-products",
    newTab: false,
  },
  {
    id: 4,
    title: "Poutry",
    path: "/poutry-products",
    newTab: false,
  },
  {
    id: 5,
    title: "Dairy",
    path: "/dairy-products",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },

];
export const menuData2: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Crops",
    path: "/crops",
    newTab: false,
  },
  {
    id: 3,
    title: "Dairy",
    path: "/dairy",
    newTab: false,
  },
  {
    id: 4,
    title: "Poutry",
    path: "/poultry",
    newTab: false,
  },
  // {
  //   id: 5,
  //   title: "Contact",
  //   path: "/contact",
  //   newTab: false,
  // },
  // {
  //   id: 4,
  //   title: "Vegetables",
  //   path: "/vegetables-products",
  //   newTab: false,
  // },

];
