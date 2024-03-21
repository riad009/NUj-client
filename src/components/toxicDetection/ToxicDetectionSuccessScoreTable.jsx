import React from "react";

const ToxicDetectionSuccessScoreTable = () => {
  return (
    <table className="table shadow-lg mb-6">
      {/* head */}
      <thead className="bg-gray-200">
        <tr>
          <th>Success</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Low</td>
          <td>12 or more</td>
        </tr>
        <tr>
          <td>Moderate</td>
          <td>9 to 12</td>
        </tr>
        <tr>
          <td>High</td>
          <td>7 to 9</td>
        </tr>
        <tr>
          <td>Extremely High</td>
          <td>5 or Less</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ToxicDetectionSuccessScoreTable;
