import { useState } from "react";
import axios from "axios";
// import { validateProductData } from "./Validation/validateProductData";
import LinkButton from "../../../../components/Button/LinkButton";
// name,img,price,description,stock,specie,breed,brand,weight,color,size

function FormModifyProduct(props) {
  const [form, setForm] = useState({
    name: "",
    img: "",
    price: "",
    description: "",
    stock: "",
    specie: "",
    breed: "",
    brand: "",
    weight: null,
    color: null,
    size: null,
    storeId: "",
  });
  const [error, setError] = useState({
    name: "",
    img: "",
    price: "",
    description: "",
    stock: "",
    specie: "",
    breed: "",
    brand: "",
    weight: "",
    color: "",
    size: "",
    storeId: "",
  });

  const changeHandler = (e) => {
    let property = e.target.name;
    let value = e.target.value;
    setError(validateProductData(property, value));
    setForm({ ...form, [property]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const errorValues = Object.values(error);
    const isFormValid = errorValues.every((val) => val === "");
    const data = {
      ...form,
      weight: parseFloat(form.weight),
      price: parseInt(form.price),
      stock: parseInt(form.stock),
      StoreId: parseInt(form.storeId),
    };
    if (isFormValid) {
      axios.post("/products/create", data);
    } else {
      console.log("Hay errores en el formulario");
    }
  };

  return (
    <div className="mb-28 flex h-screen justify-center py-28 pt-20">
      <form
        onSubmit={submitHandler}
        className="rounded-xl p-3 shadow-2xl lg:h-[950px] lg:w-2/5"
      >
        <h3 className="mb-6">Create</h3>
        <div className="group relative z-0 mb-6 h-11 w-full">
          <input
            type="text"
            value={form.name}
            name="name"
            onChange={changeHandler}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-3 px-0 text-sm text-gray-900  focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
            placeholder=" "
            autoComplete="off"
          />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
            Name:
          </label>
          {error.name && <span className="text-red-500">{error.name}</span>}
        </div>
        <div className="group relative z-0 mb-6 h-11 w-full">
          <input
            type="text"
            value={form.img}
            name="img"
            onChange={changeHandler}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-3 px-0 text-sm text-gray-900  focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
            placeholder=" "
            autoComplete="off"
          />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
            Image:{" "}
          </label>
          {error.img && <span className="text-red-500">{error.img}</span>}
        </div>
        <div className="group relative z-0 mb-6 h-11 w-full">
          <input
            type="text"
            value={form.price}
            name="price"
            onChange={changeHandler}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-3 px-0 text-sm text-gray-900  focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
            placeholder=" "
            autoComplete="off"
          />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
            Price:{" "}
          </label>
          {error.price && <span className="text-red-500">{error.price}</span>}
        </div>
        <div className="group relative z-0 mb-6 h-11 w-full">
          <input
            type="text"
            value={form.description}
            name="description"
            onChange={changeHandler}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-3 px-0 text-sm text-gray-900  focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
            placeholder=" "
            autoComplete="off"
          />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
            Description:{" "}
          </label>
          {error.description && (
            <span className="text-red-500">{error.description}</span>
          )}
        </div>
        <div className="group relative z-0 mb-6 h-11 w-full">
          <input
            type="number"
            value={form.stock}
            name="stock"
            onChange={changeHandler}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-3 px-0 text-sm text-gray-900  focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
            placeholder=" "
            autoComplete="off"
          />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
            Stock:{" "}
          </label>
          {error.stock && <span className="text-red-500">{error.stock}</span>}
        </div>
        <div className="group relative z-0 mb-6 h-11 w-full">
          <input
            type="text"
            value={form.specie}
            name="specie"
            onChange={changeHandler}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-3 px-0 text-sm text-gray-900  focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
            placeholder=" "
            autoComplete="off"
          />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
            Specie:{" "}
          </label>
          {error.specie && <span className="text-red-500">{error.specie}</span>}
        </div>
        <div className="group relative z-0 mb-6 h-11 w-full">
          <input
            type="text"
            value={form.breed}
            name="breed"
            onChange={changeHandler}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-3 px-0 text-sm text-gray-900  focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
            placeholder=" "
            autoComplete="off"
          />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
            Breed:{" "}
          </label>
          {error.breed && <span className="text-red-500">{error.breed}</span>}
        </div>
        <div className="group relative z-0 mb-6 h-11 w-full">
          <input
            type="text"
            value={form.brand}
            name="brand"
            onChange={changeHandler}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-3 px-0 text-sm text-gray-900  focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
            placeholder=" "
            autoComplete="off"
          />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
            Brand:{" "}
          </label>
          {error.brand && <span className="text-red-500">{error.brand}</span>}
        </div>
        <div className="group relative z-0 mb-6 h-11 w-full">
          <input
            type="text"
            value={form.weight}
            name="weight"
            onChange={changeHandler}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-3 px-0 text-sm text-gray-900  focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
            placeholder=" "
            autoComplete="off"
          />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
            Weight:{" "}
          </label>
          {error.weight && <span className="text-red-500">{error.weight}</span>}
        </div>
        <div className="group relative z-0 mb-6 h-11 w-full">
          <input
            type="text"
            value={form.color}
            name="color"
            onChange={changeHandler}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-3 px-0 text-sm text-gray-900  focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
            placeholder=" "
            autoComplete="off"
          />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
            Color:{" "}
          </label>
          {error.color && <span className="text-red-500">{error.color}</span>}
        </div>
        <div className="group relative z-0 mb-6 h-11 w-full">
          <input
            type="text"
            value={form.size}
            name="size"
            onChange={changeHandler}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-3 px-0 text-sm text-gray-900  focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
            placeholder=" "
            autoComplete="off"
          />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
            Size:{" "}
          </label>
          {error.size && <span className="text-red-500">{error.size}</span>}
        </div>
        <div className="group relative z-0 mb-6 h-11 w-full">
          <input
            type="number"
            value={form.storeId}
            name="storeId"
            onChange={changeHandler}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-3 px-0 text-sm text-gray-900  focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
            placeholder=" "
            autoComplete="off"
          />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
            StoreId:{" "}
          </label>
          {error.storeId && (
            <span className="text-red-500">{error.storeId}</span>
          )}
        </div>
        <LinkButton component={"Create"} />
      </form>
    </div>
  );
}

export default FormModifyProduct;
