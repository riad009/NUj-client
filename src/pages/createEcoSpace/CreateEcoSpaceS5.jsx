import { Form, Input, Tag } from "antd";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import BackButton from "../../components/BackButton";
import { toast } from "sonner";

const CreateEcoSpaceS5 = () => {
  const { newEcoSpaceData, setNewEcoSpaceData } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [coWorkers, setCoWorkers] = useState(
    newEcoSpaceData?.coWorkers?.length ? newEcoSpaceData?.coWorkers : []
  );
  const navigate = useNavigate();
  const handleCreateEcoSpace5 = (data) => {
    if (!coWorkers?.length) {
      return toast.error("Add atleast one co worker");
    }
    setNewEcoSpaceData((prevValue) => ({
      ...prevValue,
      coWorkers,
    }));

    navigate("/create-eco-space/s6");
  };

  const handleAddCoWorkers = async () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && emailPattern.test(email) && !coWorkers.includes(email)) {
      setCoWorkers((prevValues) => [...prevValues, email]);
      setEmail("");
    } else if (!email) {
      toast.error("Please enter an email", { id: email });
    } else if (coWorkers.includes(email)) {
      toast.error("Email already added", { id: email });
    } else {
      toast.error("Add valid email", { id: email });
    }
  };

  const removeItem = (itemToRemove) => {
    const updatedItems = coWorkers.filter((item) => item !== itemToRemove);
    setCoWorkers(updatedItems);
  };

  console.log({ coWorkers, newEcoSpaceData });

  return (
    <div className="w-11/12 md:w-[60%] space-y-5">
      <div className="flex gap-2 items-center">
        <BackButton target={"/create-eco-space/s4"} />
        <h4 className="text-xs text-gray-500">Step 5 of 6</h4>
      </div>
      <h1 className="text-2xl md:text-4xl font-semibold">Add Co-Worker</h1>
      {/* <p className="text-sm">Add Coworker.</p> */}
      <Form
        className=""
        name="basic"
        initialValues={{
          coWorkers: newEcoSpaceData?.coWorkers?.[0],
        }}
        autoComplete="off"
        onFinish={handleCreateEcoSpace5}
      >
        {/* name */}

        <div className="flex flex-col gap-1 ">
          <div>
            {coWorkers?.length
              ? coWorkers.map((item, i) => (
                  <Tag
                    className="px-2 py-1"
                    key={i}
                    closeIcon
                    onClose={() => removeItem(item)}
                  >
                    {item}
                  </Tag>
                ))
              : ""}
          </div>
          <Form.Item
            className=""
            name="coWorkers"
            rules={[
              {
                // required: true,
              },
            ]}
          >
            <Input
              className="h-20 bg-transparent  focus:bg-transparent placeholder:text-gray-500"
              size="large"
              placeholder="Enter email of your co worker"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>
        </div>
        <div className="space-x-2">
          <button type="button" onClick={handleAddCoWorkers} className="p-btn">
            Add
          </button>
          <button type="submit" className="p-btn ">
            Next
          </button>
        </div>
      </Form>
    </div>
  );
};

export default CreateEcoSpaceS5;
