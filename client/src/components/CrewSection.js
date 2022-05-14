import React, { useContext } from "react";
import CrewCard from "./CrewCard";
import { DataContext } from "../pages/Movies";

export default function CrewSection(props) {
  const data = useContext(DataContext);
  console.log(DataContext);
  return (
    <>
      <div className="">
        <p className="font-semibold mb-3 text-center lg:text-left border-b-2 pb-[2px] border-slate-400 md:border-slate-300">
          Yönetmen
        </p>
        <CrewCard data={props.data?.director[0]} />
      </div>

      <div className="">
        {props.data?.screenplay[0] ? (
          <p className="font-semibold mb-3 text-center lg:text-left border-b-2 pb-[2px] border-slate-400 md:border-slate-300">
            Senarist
          </p>
        ) : (
          ""
        )}
        <div className="flex flex-row ">
          {props.data?.screenplay.slice(0, 2).map((item) => (
            <CrewCard data={item} />
          ))}
        </div>
      </div>

      <div className="">
        {props.data?.writer[0] ? (
          <p className="font-semibold mb-3 text-center lg:text-left border-b-2 pb-[2px] border-slate-400 md:border-slate-300">
            <p className="">Yazar</p>
          </p>
        ) : (
          ""
        )}
        <div className="flex flex-row">
          {props.data?.writer.slice(0, 2).map((item) => (
            <CrewCard data={item} />
          ))}
        </div>
      </div>
    </>
  );
}
