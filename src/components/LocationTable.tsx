import React, { FC } from "react";
import { WeatherLocation } from "../model/Weather";

interface LocationTableProps {
  locations: WeatherLocation[];
  current: WeatherLocation | null;
  onSelect: (location: WeatherLocation) => void;
}

export const LocationTable: FC<LocationTableProps> = ({
  locations,
  onSelect,
  current,
}) => (
  <div>
    <h2>Locations</h2>
    <table className="table table-hover">
      <thead>
        <tr>
          <th style={{ color: "#0d6efd", fontSize: "20px" }}>Name</th>
        </tr>
      </thead>
      <tbody>
        {locations.map((location) => (
          <tr
            key={location.id}
            className={current?.id === location.id ? "table-primary" : ""}
            onClick={() => onSelect(location)}
          >
            <td style={{ color: "#0d6efd", fontSize: "20px" }}>
              {location.name}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
