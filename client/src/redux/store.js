import { configureStore } from "@reduxjs/toolkit";
import Products from "./features/products/productsSlice";
import User from "./features/users/usersSlice";
import Tiendas from "./features/tiendas/tiendasSlice";
import Stats from "./features/stats/statsSlice";
//import User from "./features/users/usersSlice";

export const store = configureStore({
  reducer: {
    Products,
    User,
    Tiendas,
    Stats,
  },
});
