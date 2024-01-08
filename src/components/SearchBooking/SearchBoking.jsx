import { DateRange } from "react-date-range";
import { FaCalendarCheck } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

import "react-date-range/dist/styles.css";

import "react-date-range/dist/theme/default.css";
import { SearachBookingHeader } from "../SearchBookingHeader/SearchBookingHeader";
import "./SearchBoking.css";

import { addDays, format } from "date-fns";
import { useState } from "react";
import { MdDateRange } from "react-icons/md";
import { TraversNumDetails } from "../TraversNumDetails/TraversNumDetails";

export const SearchBooking = () => {
  const [totalmen, setTotalMen] = useState({
    children: 0,
    adults: 1,
    rooms: 1,
  });
  const [showModal, setShowModal] = useState(false);
  const [dateTxt, setDateTxt] = useState("MM/dd/yyyy");
  const [dateFeild, setDateFeild] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  console.log(state);
  // console.log(dateTxt);
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
                      setState((prevSelection) => {
                        // Update the first state
                        const newSelection = [item.selection];

                        // Update the second state using the latest value of the first state
                        setDateTxt(
                          `${format(
                            newSelection[0].startDate,
                            "MM/dd/yyyy"
                          )} to ${format(
                            newSelection[0].endDate,
                            "MM/dd/yyyy"
                          )}`
                        );

                        // Return the new value for the first state
                        return newSelection;
                      });
                    }}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                    months={2}
                    minDate={new Date()}
                    direction="horizontal"
                  />
                )}
                {dateFeild ? <MdDateRange></MdDateRange> : <FaCalendarCheck />}
              </li>
              <li
                className="traverlerInfoContainer"
                onClick={(e) => {
                  console.log(e);
                  e.stopPropagation();
                  setShowModal(!showModal);
                }}
              >
                <span className="traverlsInputFeild">
                  <span>
                    <FaUserAlt />
                  </span>
                  <span>
                    <p>Travelers</p>
                    <p>
                      {`${
                        1 * totalmen.children + totalmen.adults * 1
                      } traveler , ${totalmen.rooms} room`}
                    </p>
                  </span>
                </span>
                {showModal ? (
                  <span
                    className="traverCounterParent"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ul>
                      <div>
                        <TraversNumDetails
                          details={{ totalmen, setTotalMen }}
                          men={"adults"}
                        />
                      </div>
                      <div>
                        <TraversNumDetails
                          details={{ totalmen, setTotalMen }}
                          men={"children"}
                        />
                      </div>
                      <div>
                        <TraversNumDetails
                          details={{ totalmen, setTotalMen }}
                          men={"rooms"}
                        />
                      </div>

                      <button
                        className="doneBtn"
                        onClick={() => setShowModal(!showModal)}
                      >
                        Done
                      </button>
                    </ul>
                  </span>
                ) : (
                  ""
                )}
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
