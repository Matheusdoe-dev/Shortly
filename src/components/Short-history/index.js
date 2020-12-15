import React from "react";
// hooks
import useShorterHistory from "../../hooks/shorter-history";

const ShortHistory = () => {
  const { urls } = useShorterHistory();

  if (!urls) {
    return null;
  }

  return (
    <ul>
      {Array.from(urls).map(({ url, short_link }) => (
        <li>
          <a href={url}>{url}</a>
          <div>
            <a href={short_link}>{short_link}</a>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ShortHistory;
