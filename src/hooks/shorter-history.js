import { useEffect, useState } from "react";

const useShorterHistory = () => {
  const [urls, setURLs] = useState([]);

  // copy button status
  const [status, setStatus] = useState(false);

  // parsing shorter history array from string in sessionStorage
  const storage = JSON.parse(sessionStorage.getItem("urls"));

  const copyUrlToClipboard = async () => {
    const input = document.getElementById("short-link");

    await navigator.clipboard.writeText(input.innerText).then(() => {
      setStatus(true);

      // reseting the button after 5s
      setTimeout(() => {
        setStatus(false);
      }, 5000);
    });
  };

  useEffect(() => {
    setURLs(storage);
  }, [storage]);

  return { urls, copyUrlToClipboard, status };
};

export default useShorterHistory;
