import { useEffect, useState } from "react";

import ZoomMtgEmbedded from "@zoom/meetingsdk/embedded";

import queryString from "query-string";
import { useNavigate } from "react-router-dom";

const Meeting = () => {
  const client = ZoomMtgEmbedded.createClient();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const params = queryString.parse(location.search);
  const meetingConfig = {
    signature: params?.signature,
    sdkKey: params?.sdkKey,
    meetingNumber: params.mn,
    userName: params.name || "Guest",
    password: params.pwd,
    userEmail: params.email || "",
    leaveUrl: "http://localhost:5173",
    zak: "",
    role: params.role,
  };

  console.log({ meetingConfig });

  const startMeeting = () => {
    let meetingSDKElement = document.getElementById("meetingSDKElement");

    try {
      client
        .init({
          zoomAppRoot: meetingSDKElement,
          language: "en-US",
          patchJsMedia: true,
          leaveOnPageUnload: true,

          customize: {
            video: {
              isResizable: true,
              viewSizes: {
                default: {
                  width: 800,
                  height: 600,
                },
                ribbon: {
                  width: 100,
                  height: 200,
                },
              },
            },
          },
        })
        .then(() => {
          client
            .join(meetingConfig)
            .then(() => {
              console.log("joined successfully");
            })
            .catch((error) => {
              console.log("errorerror", error);
              setError(error?.reason);
              //   if (error?.reason === "Signature is invalid.") {
              //     startMeeting();
              //   }
            });
        })
        .catch((error) => {
          console.log("errorerror", error);
        });
    } catch (error) {
      console.log("this is a error", error);
    }
  };

  useEffect(() => {
    console.log({ meetingConfig });
    if (params?.signature) {
      startMeeting();
    }
  }, [params?.signature, meetingConfig]);

  useEffect(() => {
    client.on("connection-change", (payload) => {
      console.log({ payload });

      if (payload.state === "Closed") {
        navigate(-1);
      }
      if (
        payload.state === "Signature is invalid." ||
        error === "Signature is invalid."
      ) {
        console.log("inside pyaloadd");
        window.location.reload();
        startMeeting();
      }
    });
  }, [client, navigate, error]);

  console.log([error]);

  return (
    <div className="max-w-lg mx-auto mt-20">
      <div className="flex flex-col justify-center items-center gap-2">
        <div
          id="meetingSDKElement"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        />
      </div>
    </div>
  );
};

export default Meeting;
