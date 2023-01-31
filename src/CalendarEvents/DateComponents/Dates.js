import { Date } from "./Date";
import datesOfMonth from "./Date.json";
export const Dates = ({ onclickHandler }) => {
  return (
    <div
      style={{
        display: "flex",
        overflow: "auto",
      }}
    >
      {datesOfMonth.map((date) => (
        <div key={date.date}>
          <Date
            date={date.date}
            week={date.week}
            onclickHandler={onclickHandler}
          />
        </div>
      ))}
    </div>
  );
};
