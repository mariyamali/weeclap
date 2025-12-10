import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "About us",
    newTab: false,
    path: "/#features",
  },
  // {
  //   id: 2.1,
  //   title: "Blog",
  //   newTab: false,
  //   path: "/blog",
  // },
  // {
  //   id: 2.3,
  //   title: "Docs",
  //   newTab: false,
  //   path: "/docs",
  // },
  {
    id: 3,
    title: "Use Cases",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Use Case 1",
        newTab: false,
        path: "/#case1",
      },
      {
        id: 34,
        title: "Use Case 2",
        newTab: false,
        path: "/#case2",
      },
      
    ],
  },
  {
    id: 4,
    title: "Our Services",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Service 1",
        newTab: false,
        path: "/#service1",
      },
      {
        id: 34,
        title: "Service 2",
        newTab: false,
        path: "/#service2",
      },
      
    ],
  },

  {
    id: 5,
    title: "Blog",
    newTab: false,
    path: "/#Blog",
  },
];

export default menuData;
