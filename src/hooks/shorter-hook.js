import { useState } from "react";
// services
import shrtcodeApi from "../services/shrtcodeApi";

// https://app.shrtco.de/docs

const useShorter = () => {
  const [url, setURL] = useState("");

  // user input error status
  const [error, setError] = useState("");

  const [loadingStatus, setLoadingStatus] = useState(false);

  const handleSubmitURL = async (event) => {
    event.preventDefault();
    setLoadingStatus(true);

    if (!url) {
      setError("Please add a link");
      setLoadingStatus(false);
      return;
    }

    await shrtcodeApi({
      method: "GET",
      url: "/shorten",
      params: {
        url,
      },
    })
      .then((r) => {
        const urlInput = document.querySelector('[data-anime="url"]');

        if (sessionStorage.getItem("urls")) {
          const old_data = JSON.parse(sessionStorage.getItem("urls"));

          old_data.push({ url, short_link: r.data.result.short_link });

          sessionStorage.setItem("urls", JSON.stringify(old_data));
        } else {
          const new_data = [{ url, short_link: r.data.result.short_link }];

          sessionStorage.setItem("urls", JSON.stringify(new_data));
        }

        setURL(r.data.result.short_link);
        urlInput.select();
        document.execCommand("Copy");

        alert("URL shorted succesful");
      })
      .catch((err) => {
        setError(err);
        alert(`Unable to short url, ${err}`);
      })
      .finally(() => setLoadingStatus(false));
  };

  return { handleSubmitURL, url, setURL, error, loadingStatus, setError };
};

export default useShorter;
