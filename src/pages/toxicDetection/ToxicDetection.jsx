import { Drawer } from "antd";
import { useState } from "react";
import ToxicDetectionHistorySidebarItems from "./ToxicDetectionHistorySidebarItems";
import ToxicDetectionResponseDisplay from "./ToxicDetectionResponseDisplay";
import { MdHistory } from "react-icons/md";

const ToxicDetection = () => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState(null);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const fileHandler = (e) => {
    console.log(e.target.value);
  };

  console.log({ text });

  const response = {
    rating: 4,
    plan: "Family Counseling",
    suggestion:
      "Your comprehensive success plan needs to include Family Counseling,Your comprehensive success plan needs to include Family CounselingYour comprehensive success plan needs to include Family CounselingYour comprehensive success plan needs to include Family CounselingYour comprehensive success plan needs to include Family Counseling",
  };

  const handleDetect = (e) => {
    e.preventDefault();
    if (text) {
      setResult(response);
    }
  };
  console.log(result);
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
              <div className="flex flex-col gap-1 ">
                <label>Upload Pdf: </label>
                <input
                  onChange={fileHandler}
                  type="file"
                  accept="application/pdf, application/vnd.ms-excel"
                />
              </div>
              <div className="flex flex-col gap-1 ">
                <label>Text to process: </label>
                <textarea
                  onChange={(e) => setText(e.target.value)}
                  className="h-28 bg-base-200 rounded-lg p-2 focus:outline-none"
                  defaultValue={result?.text ? result?.text : ""}
                ></textarea>
              </div>
              <button className="p-btn" type="submit">
                Detect
              </button>
            </form>
          </div>

          {result ? <ToxicDetectionResponseDisplay result={result} /> : ""}
        </div>
      </section>
      <Drawer
        title="Previous Records"
        placement="right"
        closable={true}
        onClose={onClose}
        open={open}
      >
        <ToxicDetectionHistorySidebarItems
          setResult={setResult}
          onClose={onClose}
        />
      </Drawer>
    </>
  );
};

export default ToxicDetection;
