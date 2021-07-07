import "./Widget.css";

export const Widget = ({ title, units, display }) => {
  return (
    <div className="widget">
      <div className="title-lockup">
        <h2>{title || "No Data"}</h2>
        <p>{units || "(n/a)"}</p>
      </div>
      <p className="display-num">{display || "N/A"}</p>
    </div>
  );
};
