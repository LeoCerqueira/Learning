import { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Morro do Chaopéu - BA");

  function updateLocation(e) {
    setLocation(e.target.value);
  }

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            // onChange={(e) => setLocation(e.target.value)}
            onChange={updateLocation}
            value={location}
            placeholder="location"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
