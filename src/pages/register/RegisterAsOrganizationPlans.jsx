import { Link } from "react-router-dom";
import deal from "../../assets/home/deal.jpg";
import { toast } from "sonner";

const RegisterAsOrganizationPlans = () => {
  return (
    <div className="">
      <div className="w-full grid md:grid-cols-2 justify-center items-center  min-h-[120vh] ">
        <img src={deal} className="h-full w-full" alt="" />
        <div className="flex flex-col gap-5 items-center my-10 md:m-0 ">
          <div className="w-full">
            <h2 className="text-xl text-center uppercase tracking-wider">
              Choose a Plan
            </h2>
            <section className="text-gray-900">
              <div className="container mx-auto flex flex-col items-center justify-center max-w-lg p-4 lg:max-w-full sm:p-10 lg:flex-row">
                <div className="flex flex-col items-center justify-center flex-1 p-4 pb-8 sm:p-8 lg:p-16 bg-gray-50">
                  <span className="text-sm">Basic</span>
                  <p className="text-5xl font-bold text-center">00$</p>
                  <p className="font-semibold text-center">
                    Nemo deserunt possimus quo provident recusandae! Dolores qui
                    architecto omnis pariatur
                  </p>
                  <Link
                    to="/"
                    onClick={() => toast.success("Successfully purchased demo")}
                    className="px-8 py-3 mt-6 text-lg font-semibold border rounded sm:mt-12 border-gray-300"
                  >
                    Continue
                  </Link>
                </div>
                <div className="flex flex-col items-center justify-center flex-1 p-4 pb-8 text-center rounded-md sm:p-8 lg:p-16 bg-violet-600 text-gray-50">
                  <span className="text-sm font-semibold">Advanced</span>
                  <p className="text-5xl font-bold">00$</p>
                  <p className="font-semibold">
                    Nemo deserunt possimus quo provident recusandae! Dolores qui
                    architecto omnis pariatur
                  </p>
                  <Link
                    to="/"
                    onClick={() => toast.success("Successfully purchased demo")}
                    className="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 bg-gray-100 text-gray-900"
                  >
                    Continue
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterAsOrganizationPlans;
