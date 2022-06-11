import logo from "./logo.svg";
import "../src/index.css";
import Item from "./Components/Item/item";
import { io } from "socket.io-client";
function User() {
  const arr = Array.from(Array(10).keys());
  return (
    <div className="w-full block p-0 ">
      <h2 className="font-bold text-xl">All Pizzas</h2>
      <div className="flex flex-wrap h-screen">
        {arr.map((item, id) => {
          return (
            <>
              <Item data={item} />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default User;
