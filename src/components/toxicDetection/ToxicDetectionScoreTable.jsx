import React from "react";

const ToxicDetectionScoreTable = ({ assessmentObject }) => {
  console.log(assessmentObject);
  return (
    <table className="table shadow-lg mb-6">
      {/* head */}
      <thead className="bg-gray-200">
        <tr>
          <th>Value</th>
          <th>Word</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(assessmentObject).map(([key, value]) => (
          <tr key={key}>
            <td>{value}</td>
            <td className="capitalize">{key}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ToxicDetectionScoreTable;
