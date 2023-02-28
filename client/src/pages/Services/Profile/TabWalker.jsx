import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Contruccion from "../../Services/Services";

import PhotoWalker from "./components/Walker/PhotoWalker";
import InfoWalker from "./components/Walker/InfoWalker";
import ContactsWalker from "./components/Walker/ContactsWalker";
import Ubication from "./Ubication";

import interrogation from "../../../assets/general/interrogation.svg";

import React from "react";
import { getWalkerByUser } from "../../../redux/features/users/usersActions";

function TabWalker() {
  const id = localStorage.getItem("id");
  const dispatch = useDispatch();
  const [showInfo, setShowInfo] = useState("profile");
  const user = useSelector((state) => state.User?.userStoreId);
  const handleShowInfo = (e) => {
    setShowInfo(e.target.name);
  };
  useEffect(() => {
    dispatch(getWalkerByUser(id));
  }, []);

  return (
    <div className="flex justify-start bg-adopcion pb-28 pt-10 lg:items-center">
      <div className=" jborder-2 flex h-full w-full flex-row ">
        <div className="mb-3p-3 xl:w-96 ">
          <div className="mb-3  h-full rounded-2xl border-4 border-cornflowerblue  p-3 xl:w-96 ">
            <PhotoWalker img={user?.img} name={user?.name} />
            <div className="mb-4 mt-4 border-gray-200  dark:border-gray-200">
              <ul className="-mb-px text-center text-sm font-medium">
                <li className="mr-2 rounded-lg border-b-2 hover:bg-slate-100 hover:text-gray-500">
                  <button
                    onClick={handleShowInfo}
                    name="storeProfile"
                    className="inline-block p-4"
                    title="informacion del propietario"
                  >
                    Perfil de Tienda
                  </button>
                </li>
                <li className="mr-2 rounded-lg border-b-2 hover:bg-slate-100 hover:text-gray-500">
                  <button
                    onClick={handleShowInfo}
                    name="contact"
                    className="inline-block border-b-2 border-transparent p-4 "
                    title="aquie puede ver la informacion de contacto de la tienda"
                  >
                    Contacto
                  </button>
                </li>
                <li className="mr-2 rounded-lg border-b-2 hover:bg-slate-100 hover:text-gray-500">
                  <button
                    onClick={handleShowInfo}
                    name="location"
                    className="inline-block p-4"
                    title="aqui puedes ver la direccion de la tienda"
                  >
                    Direcciones
                  </button>
                </li>
                <li className="mr-2 rounded-lg border-b-2 hover:bg-slate-100 hover:text-gray-500">
                  <button
                    onClick={handleShowInfo}
                    name="products"
                    className="inline-block p-4"
                    title="aqui puedes ver tus productos disponibles"
                  >
                    Productos
                  </button>
                </li>
                <li className="mr-2 rounded-lg border-b-2 hover:bg-slate-100 hover:text-gray-500">
                  {/* Reveer esto de volver al hacer Health/Services */}
                  <Link to={`/profile/${user.id}`}>
                    <button
                      title="vuelve a tu perfil"
                      className="inline-block p-4"
                    >
                      Volver
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* este es el div que contiene el renderizado condicional del titulo */}
        <div className=" ml-28  flex w-full flex-col flex-wrap rounded-2xl border-4  border-cornflowerblue">
          {showInfo == "profile" ? (
            <div className="border-gray-400 p-3 lg:border-b-2">
              <h1 className="flex justify-center pl-2 text-3xl font-semibold">
                Perfil de Paseador
              </h1>
            </div>
          ) : showInfo == "contact" ? (
            <div className="border-gray-400 p-3 lg:border-b-2">
              <h1 className="flex justify-center pl-2 text-3xl font-semibold">
                Contacto
              </h1>
            </div>
          ) : showInfo == "location" ? (
            <div className="border-gray-400 p-3 lg:border-b-2">
              <h1 className="flex justify-center pl-2 text-3xl font-semibold">
                Direcciones
              </h1>
            </div>
          ) : (
            <div className="border-gray-400 p-3 lg:border-b-2">
              <h1 className="flex justify-center pl-2 text-3xl font-semibold">
                Perfil de Paseador
              </h1>
            </div>
          )}
          <div className="flex flex-col pt-2 lg:flex xl:flex">
            {showInfo == "profile" ? (
              <InfoWalker name={user?.name} />
            ) : showInfo == "contact" ? (
              <ContactsWalker
                area_code={user?.area_code}
                number={user?.number}
                mail={user?.mail}
              />
            ) : showInfo == "location" ? (
              <Ubication
                province={user?.province}
                locality={user?.locality}
                zip_code={user.zip_code}
                street_name={user.street_name}
                street_number={user.street_number}
              />
            ) : (
              <Contruccion />
            )}
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default TabWalker;
