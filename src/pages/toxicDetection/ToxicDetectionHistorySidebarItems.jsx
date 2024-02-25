import React from "react";

const ToxicDetectionHistorySidebarItems = ({ onClose, setResult }) => {
  const history = {
    rating: 3,
    plan: "Education",
    psaTitle: "Effective Project Management",
    psaIntroduction:
      "This PSA highlights effective project management strategies, emphasizing the importance of addressing challenges collaboratively.",
    suggestion:
      "You need education and everything, You need education and everything, You need education and everything, You need education and everything, You need education and everything, You need education and everything, You need education and everything, ",
    text: "I eat Rice",
  };

  const handleClick = () => {
    setResult(history);
    onClose();
  };

  return (
    <div className="flex flex-col items-start text-base tracking-wider space-y-2">
      <button className="hover:link" onClick={handleClick}>
        I eat rice
      </button>
    </div>
  );
};

export default ToxicDetectionHistorySidebarItems;
