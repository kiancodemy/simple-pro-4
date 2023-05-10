import { FcCollapse, FcExpand } from "react-icons/fc";
import { useState } from "react";

const Single = ({ title, info, id, a, c }) => {
  const [showinfo, setshowinfo] = useState(false);
  const final = a === id;

  const sett = (i) => {
    c(i);
  };
  return (
    <article className="question">
      <header>
        <h5>
          {title}
          <button onClick={() => sett(id)} style={{ marginLeft: "5px" }}>
            {final ? <FcExpand /> : <FcCollapse />}
          </button>
        </h5>
      </header>
      <p>{final && info}</p>
    </article>
  );
};

export default Single;
