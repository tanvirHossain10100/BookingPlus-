import "./TraversNumDetails.css";
import "./TraversNumDetails.css";
import { FaMinus, FaPlus } from "react-icons/fa";

export const TraversNumDetails = ({ details, men }) => {
  const { totalmen, setTotalMen } = details;
  return (
    <>
      <li className="traverLersCalculaion">
        <span className="menIdentifier">{men}</span>
        <span>
          <span>
            <button
              disabled={totalmen[men] < 1}
              onClick={(e) => {
                e.stopPropagation();
                setTotalMen({
                  ...totalmen,
                  [men]: [+totalmen[men] - 1],
                });
              }}
            >
              <FaMinus />
            </button>
          </span>
          <span>{totalmen[men]}</span>

          <span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setTotalMen({
                  ...totalmen,
                  [men]: [+totalmen[men] + 1],
                });
              }}
            >
              <FaPlus />
            </button>
          </span>
        </span>
      </li>
    </>
  );
};
