import { Drawer } from "antd";
import { useState } from "react";
// import ToxicDetectionHistorySidebarItems from "./ToxicDetectionHistorySidebarItems";
import ToxicDetectionResponseDisplay from "./ToxicDetectionResponseDisplay";
import { MdHistory } from "react-icons/md";
import axios from "axios";

const ToxicDetection = () => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [responses, setResponses] = useState([]);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const fileHandler = (e) => {
    console.log(e.target.value);
  };

  const response = {
    rating: Number(responses[0]?.response.replace(/[^0-9]/g, "")),
    plan: responses[1]?.response,
    // psaTitle: "title",
    psaIntroduction: responses[2]?.response,
    suggestion: responses[3]?.response,
  };

  const handleDetect = async (e) => {
    e.preventDefault();
    if (text) {
      setLoading(true);
      try {
        const payload = "test";

        const res = await axios.post(
          "http://localhost:5000/api/v1/eco-space-documents/toxicity-detection",
          {
            payload,
          }
        );
        const result = res.data.data;
        setResponses(result);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching data:", error);
      }
    }
  };

  return (
    <>
      <section className="min-h-screen flex justify-center items-center overflow-hidden">
        <div className="w-11/12 mx-auto my-20 space-y-5">
          <div className="flex justify-between items-start md:items-center">
            <h1 className="text-2xl md:text-4xl font-semibold">
              Toxicity Detection
            </h1>
            <button
              onClick={showDrawer}
              className="flex gap-2 items-center text-xl"
            >
              <p>Records</p>
              <MdHistory />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <form onSubmit={handleDetect} className="space-y-3 md:w-6/12">
              {/* <div className="flex flex-col gap-1 ">
                <label>Upload Pdf: </label>
                <input
                  onChange={fileHandler}
                  type="file"
                  accept="application/pdf, application/vnd.ms-excel"
                />
              </div> */}
              <div className="flex flex-col gap-1 ">
                <label>Text to process: </label>
                <textarea
                  required
                  onChange={(e) => setText(e.target.value)}
                  className="h-28 bg-base-200 rounded-lg p-2 focus:outline-none"
                ></textarea>
              </div>
              <button className="p-btn" type="submit" disabled={loading}>
                {loading ? "Detecting.." : "Detect"}
              </button>
            </form>
          </div>

          {responses.length > 0 ? (
            <ToxicDetectionResponseDisplay result={response} />
          ) : (
            ""
          )}
        </div>
      </section>
      <Drawer
        title="Previous Records"
        placement="right"
        closable={true}
        onClose={onClose}
        open={open}
      >
        {/* <ToxicDetectionHistorySidebarItems
          setResult={setResult}
          onClose={onClose}
        /> */}
      </Drawer>
    </>
  );
};

export default ToxicDetection;
