import { useLoaderData } from "react-router-dom";
import { getMenu } from "@/services/apiRestaurant";
import { Pizza } from "@/types";
import MenuItem from "./MenuItem";

function Menu() {
  // there is no typescript support for useLoaderData
  const menu = useLoaderData() as Pizza[];
  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
