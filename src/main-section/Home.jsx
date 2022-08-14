import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar.jsx";
import { BsCalendar3 } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineDown } from "react-icons/ai";
import { parseISO } from "date-fns";
import useFetch from "../utils/axios-fetch-hook/useFetch.js";

const Home = () => {
  const { response, loading, error } = useFetch({
    method: "get",
    url: "",
  });

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    if (response !== null) {
      console.log(response.dataset_data);
    //   setStartDate(parseISO(response.dataset_data.start_date));
    //   setEndDate(response.dataset_data.end_date);
    }
  }, [response]);

  return (
    <div className="drawer-content flex flex-col items-start justify-start ">
      {/* The navbar is only seen on smaller screens */}
      <Navbar />
      <main className="w-full">
        <header className="navbar bg-base-100 gap-3 sm:flex-col md:flex-row mb-5">
          <div className="navbar-start">
            <a className=" sm:text-lg md:text-xl text-primary uppercase">
              Company name
            </a>
          </div>
          <div className="sm:navbar-center md:navbar-end">
            <BsCalendar3 className="h-5 w-5 mr-3 text-primary" />
            <div className="dates p-2 rounded-md  bg-primary text-base-100 w-fit flex justify-between gap-2">
              <DatePicker
                selected={startDate}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="Start date"
                onChange={(date) => setStartDate(date)}
                className="bg-primary  w-24"
              />
              <DatePicker
                selected={endDate}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                placeholderText="End date"
                onChange={(date) => setEndDate(date)}
                className="bg-primary w-24"
              />
            </div>
          </div>
        </header>
        <div className="w-full flex p-4">
          <div className="card card-compact w-full bg-base-100 shadow-xl p-5">
            <div className="card-actions justify-start">
              <div className="dropdown">
                <label
                  tabIndex={0}
                  className="btn btn-sm text-xs m-1 btn-primary flex justify-between gap-2"
                >
                  <span>closing price</span>
                  <AiOutlineDown />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-body">
              <figure></figure>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
