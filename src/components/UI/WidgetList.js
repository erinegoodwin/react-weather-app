import { Widget } from ".";
import './Widget.css';

const widgetDummyInfo = [
  {
    title: "Precipitation",
    units: "(mm/hr)",
    display: "3.7",
    id: "1",
  },
  {
    title: "Humidity",
    units: "%",
    display: "42",
    id: "2",
  },
  {
    title: "Wind Speed",
    units: "(mph)",
    display: "4.6",
    id: "3",
  },
];

export const WidgetList = () => {
  return (
    <div className="widget-list">
      {widgetDummyInfo.map((widget) => (
        <Widget title={widget.title} units={widget.units} display={widget.display} id={widget.id} />
      ))}
    </div>
  );
};
