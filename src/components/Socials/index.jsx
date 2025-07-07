import "./Socials.css";
import { socialHandles } from "../../data";
import { cssPerfectShape, convertHexToRgba } from "../../util";
const Socials = () => {
  return (
    <div className="socials">
      {socialHandles.map((list, index) => (
        <a
          href={list.link}
          target="_blank"
          className="icon"
          style={{
            ...cssPerfectShape(40, 40),
            background: convertHexToRgba("--primary", 0.2),
          }}
          key={index}
        >
          <list.icon />
        </a>
      ))}
    </div>
  );
};

export default Socials;
