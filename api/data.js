import fetch from "isomorphic-fetch";

export function getApplauds() {
  return fetch("https://b4c7-61-2-23-86.ngrok.io/applaud", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
}

export function getSentApplaudById(user_id) {
  return fetch(
    `https://b4c7-61-2-23-86.ngrok.io/sent_applaud?user_id=${user_id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
}

export function getRecApplaudById(user_id) {
  return fetch(
    `https://b4c7-61-2-23-86.ngrok.io/received_applaud?user_id=${user_id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
}

export function getBreaks(user_id) {
  return fetch(`https://b4c7-61-2-23-86.ngrok.io/break?user_id=${user_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
}
