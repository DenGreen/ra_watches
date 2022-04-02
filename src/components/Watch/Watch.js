import React, { useState } from "react";
import moment from "moment";
import "moment/locale/ru";
import momentZone from "moment-timezone";
import "./main.css";

let watchArr = [];

function Converter() {
  moment.locale("ru");
  const min = momentZone().tz("Europe/London").format('mm');
  let [sec, setSec] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    watchArr.push({
      id: Math.random(),
      name: e.target[0].value,
      hour: momentZone
        .tz("Europe/London")
        .add(e.target[1].value, "h")
        .format("HH"),
    });
  };

  const watchMap = watchArr.map((value) => (
    <div key={value.id}>
      {value.name} {value.hour}:{min}:{sec}
    </div>
  ));

  setTimeout(
    () => setSec((sec = momentZone.tz("Europe/London").format("ss"))),
    1000
  );

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <span>Название</span>
          <input />
        </div>
        <div>
          <span>Временная зона</span>
          <input />
        </div>
        <button>Добавить</button>
      </form>
      <div className="time-box">{watchMap}</div>
    </React.Fragment>
  );
}

export default Converter;
