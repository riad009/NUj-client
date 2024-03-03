import { Bar } from "react-chartjs-2";
import "chart.js/auto";
const ToxicDetectionResponseDisplay = ({ result }) => {
  const { rating, plan, suggestion, psaIntroduction } = result;

  return (
    <div>
      <h1 className="text-xl md:text-2xl font-semibold">Result</h1>
      <div className="  space-y-5 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          <div className="rounded-xl shadow-lg p-5 md:p-10 h-full bg-base-100">
            <h1 className="text-lg font-semibold">Rating: </h1>
            <Bar
              data={{
                labels: ["Toxicity"],
                datasets: [
                  {
                    label: "Your score",
                    data: [2],
                    maxBarThickness: 20,
                    backgroundColor: ["#4a154b"],
                  },
                  {
                    label: "Max Possible Score",
                    data: [5],
                    maxBarThickness: 20,
                    backgroundColor: ["#e5e7eb"],
                  },
                ],
              }}
              options={{
                scales: {
                  y: {
                    beginAtZero: true,
                    // suggestedMin: 0,
                    // suggestedMax: 5,
                    max: 5,
                    min: 0,
                    ticks: {
                      precision: 0, // Set precision to 0 to display only integers
                    }, // Set the maximum limit for the y-axis
                  },
                },
              }}
            />
          </div>
          <div className="rounded-xl shadow-lg p-5 md:p-10 h-full bg-base-100 space-y-4">
            <div>
              <h1 className="text-lg font-semibold">Comprehensive Plan: </h1>
              <p>
                Your comprehensive success plan needs to include
                <span className="link">{plan}</span>
              </p>
            </div>
            <div>
              <h1 className="text-lg font-semibold">PSA: </h1>
              {/* <p>Title - {psaTitle}</p> */}
              <p>Introduction - {psaIntroduction}</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl shadow-lg p-5 md:p-10 w-full bg-base-100 space-y-2">
          <h1 className="text-lg font-semibold">Suggestion: </h1>
          <p>{suggestion}</p>
        </div>
      </div>
    </div>
  );
};

export default ToxicDetectionResponseDisplay;
