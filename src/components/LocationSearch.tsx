import React, { FC, useState } from "react";

interface LocationSearchProps {
  onSearch: (search: string) => void;
}

export const LocationSearch: FC<LocationSearchProps> = ({ onSearch }) => {
  const [locationSearch, setLocationSearch] = useState("");
  const disableSearch = locationSearch.trim() === "";

  const addLocation = () => {
    onSearch(locationSearch);
    setLocationSearch("");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <label style={{ display: "flex", justifyContent: "center" }}>
        {/* Add Location */}
        <input
          className="ml-1 mr-1"
          style={{
            fontSize: "20px",
            fontWeight: "500",
            fontStyle: "italic",
          }}
          type="text"
          value={locationSearch}
          onChange={(e) => setLocationSearch(e.target.value)}
          placeholder="Add Location"
        />
        <button
          className="btn btn-primary"
          onClick={addLocation}
          disabled={disableSearch}
        >
          Search
        </button>
      </label>
    </div>
  );
};
