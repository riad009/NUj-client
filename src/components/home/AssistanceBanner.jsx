import hammer from "../../assets/home/hammer.jpg";
import hand from "../../assets/home/hand.jpg";

const AssistanceBanner = () => {
  return (
    <div className="bg-accent my-10">
      <div
        style={{ gridTemplateColumns: "1fr 2fr 1fr" }}
        className="min-h-[130vh] flex flex-col md:grid justify-center items-center text-base-200 gap-10 py-10 px-5"
      >
        <img className="w-[90%] " src={hammer} alt="" />
        <div className="flex flex-col gap-10">
          <h3 className="text-lg md:text-xl text-center md:text-left">
            GET FIERCE LEGAL SUPPORT
          </h3>
          <h2
            style={{ fontFamily: "Protest Revolution, sans-serif" }}
            className="text-2xl md:text-4xl tracking-wider text-center md:text-left"
          >
            Best Friendly And Afford Legal Assistance Services
          </h2>
          <div className="grid grid-cols-2">
            <div
              style={{ fontFamily: "Protest Revolution, sans-serif" }}
              className="bg-t flex justify-center items-center h-52 text-3xl font-thin"
            >
              20 +<br /> Lawyers
            </div>
            <div
              style={{ fontFamily: "Protest Revolution, sans-serif" }}
              className=" flex justify-center items-center h-52 text-3xl font-thin"
            >
              100 +
              <br /> Reviews
            </div>
            <div
              style={{ fontFamily: "Protest Revolution, sans-serif" }}
              className=" flex justify-center items-center h-52 text-3xl font-thin"
            >
              0 5 +<br /> Branchs
            </div>
            <div
              style={{ fontFamily: "Protest Revolution, sans-serif" }}
              className="bg-t flex justify-center items-center h-52 text-3xl font-thin"
            >
              200 +
              <br /> Cases
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-10">
          <p className="text-center">
            Non curabitur gravida arcu ac tortor dignissim convallis aenean.
            Quis enim lobortis scelerisque fermentum dui. Sit amet consectetur
            adipiscing.
          </p>
          <div>
            <button className="p-btn-sm">Meet Our Consultants</button>
          </div>
          <img src={hand} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AssistanceBanner;
