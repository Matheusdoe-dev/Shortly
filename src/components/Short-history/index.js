import React from "react";
// hooks
import useShorterHistory from "../../hooks/shorter-history";
// styles
import { HistoryList, CopyButton } from "./styles";

const ShortHistory = () => {
  const { urls, copyUrlToClipboard, status } = useShorterHistory();

  if (!urls) {
    return null;
  }

  return (
    <HistoryList>
      {Array.from(urls).map(({ url, short_link }) => (
        <li>
          <a href={url}>{url}</a>
          <div>
            <a href={short_link} id="short-link">
              {short_link}
            </a>
            <CopyButton
              className={status ? "active" : ""}
              onClick={copyUrlToClipboard}
            >
              {status ? "Copied!" : "Copy"}
            </CopyButton>
          </div>
        </li>
      ))}
    </HistoryList>
  );
};

export default ShortHistory;
