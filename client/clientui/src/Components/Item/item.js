import "./Item.css";
// import ""
function Item() {
    const name =["Mariana","Marghiata","Americana"]
  return (
    <div className="lg:h-max lg:basis-1/4 lg:grow-0 lg:shrink-0 ">
      <div className="text-center p-3  w-full">
        <div className="p-3 h-80 w-auto flex justify-center">
          <img
            className="w-auto h-1/2 object-cover"
            src="https://d1s8393lsf2lpw.cloudfront.net/assets/categories/alternate-menu/pizzas-568cbd2ca6e3ff38a7d3517f5a324dccdce099125f0c4b8bcd6647f4f18b4e3f.png"
          />
        </div>
        <h3>Marghiata</h3>  
        <div className="bg-slate-300 min-w-max">Medium</div>
        <div className="flex p-1 justify-between">
            <h2>3.99$</h2>
            <button className="p-1 border border-red-400 rounded-lg px-2"> + Add </button>
        </div>
      </div>
    </div>
  );
}
export default Item;
