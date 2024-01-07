import { DateRange, DateRangePicker } from "react-date-range";
import { FaCalendarCheck } from "react-icons/fa";

import "react-date-range/dist/styles.css";

import "react-date-range/dist/theme/default.css";
import { SearachBookingHeader } from "../SearchBookingHeader/SearchBookingHeader";
import "./SearchBoking.css";

import { addDays, format } from "date-fns";
import { useEffect, useState } from "react";
import { MdDateRange } from "react-icons/md";

export const SearchBooking = () => {
  const [dateTxt, setDateTxt] = useState("MM/dd/yyyy");
  const [dateFeild, setDateFeild] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  console.log(dateTxt, "tdgdgf");
  const fromDATe = format(state[0].startDate, "MM/dd/yyyy");
  const toDate = format(state[0].endDate, "MM/dd/yyyy");
  // console.log(fromDATe);
  // useEffect(() => {
  //   setDateTxt(
  //     `${format(state[0].startDate, "MM/dd/yyyy")} to ${format(
  //       state[0].endDate,
  //       "MM/dd/yyyy"
  //     )}`
  //   );
  // }, [state]);
  return (
    <>
      <div className="searchBookingContainer">
        <div className="searchBookingHeade">
          <SearachBookingHeader></SearachBookingHeader>
          <div className="searchInputDetails">
            <ul className="seacLocationAndDate">
              <li>
                <input
                  type="text"
                  name="location"
                  id=""
                  placeholder="Type your location"
                />
              </li>
              <li className="dateRangerParent">
                <p>{dateTxt}</p>
                <div
                  className="dateFeildContainer"
                  onClick={(e) => {
                    setDateFeild(!dateFeild);
                    e.stopPropagation();
                  }}
                ></div>
                {dateFeild && (
                  <DateRange
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log(e);
                    }}
                    className="dateRanger"
                    editableDateInputs={true}
                    onChange={(item) => {
                      setState([item.selection]);
                      setDateTxt(
                        `${format(
                          state[0].startDate,
                          "MM/dd/yyyy"
                        )} to ${format(state[0].endDate, "MM/dd/yyyy")}`
                      );
                    }}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                    months={2}
                    direction="horizontal"
                  />
                )}
                {dateFeild ? <MdDateRange></MdDateRange> : <FaCalendarCheck />}
              </li>
              <li>
                <input type="text" placeholder="Type your traverls" />
              </li>
              <li>
                <button className="searchBtn">Search</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
