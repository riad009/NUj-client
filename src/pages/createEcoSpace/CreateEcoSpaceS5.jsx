import { Form, Input } from "antd";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const CreateEcoSpaceS5 = () => {
  const { setNewEcoSpaceData } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleCreateEcoSpace5 = (data) => {
    setNewEcoSpaceData((prevValue) => ({
      ...prevValue,
      staffs: [data.staffs],
    }));

    navigate("/create-eco-space/s6");
  };
  return (
    <div className="w-11/12 md:w-[60%] space-y-5">
      <h4 className="text-xs text-gray-500">Step 5 of 6</h4>
      <h1 className="text-2xl md:text-4xl font-semibold">
        Who else is in your xyz Ecospace?
      </h1>
      {/* <p className="text-sm">Add Coworker.</p> */}
      <Form
        className=""
        name="basic"
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
        onFinish={handleCreateEcoSpace5}
      >
        {/* name */}

        <div className="flex flex-col gap-1 ">
          <label>Add Coworker by email </label>
          <Form.Item
            className=""
            name="staffs"
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Input
              className="h-20 bg-transparent  focus:bg-transparent placeholder:text-gray-500"
              size="large"
              placeholder="Details of company provided services"
            />
          </Form.Item>
        </div>
        <div className="space-x-2">
          <button type="submit" className="p-btn ">
            Next
          </button>
          {/* <Link to="/create-eco-space/s6" type="submit" className="p-btn ">
            Next
          </Link> */}

          {/* <button to="/" type="submit" className="p-btn ">
            Copy Invite Link
          </button> */}
        </div>
      </Form>
    </div>
  );
};

export default CreateEcoSpaceS5;
