import { useEffect, useState } from "react";
// services
import shrtcodeApi from "../services/shrtcodeApi";

// https://app.shrtco.de/docs

export const useShorter = () => {
  const [url, setURL] = useState("");

  const [error, setError] = useState("");

  const handleSubmitURL = async (event) => {
    event.preventDefault();

    if (!url) {
      setError("Please add a link");
      return;
    }

    await shrtcodeApi.post(`${url}`).catch((err) => {
      setError("Unable to short url, try again");
      alert(err);
    });
  };

  return { handleSubmitURL, url, setURL };
};
