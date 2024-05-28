import { useContext, useEffect, useState } from "react";

import AppointmentEcoSpaceListItem from "../../components/appointment/AppointmentEcoSpaceListItem";
import config from "../../config";
import LoadingScreen from "../../components/LoadingScreen";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";

const RequestedAppointments = () => {
  const { userDB } = useContext(AuthContext);
  const { ecoSpaceId } = useParams();
  const [appointments, setappointments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refetch, setrefetch] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `${config.api_url}/appointments/requested-appointments?userId=${userDB?._id}&requestedBy=${userDB?._id}&ecoSpaceId=${ecoSpaceId}&query=requested`
    )
      .then((res) => res.json())
      .then((data) => {
        setappointments(data.data);
        setIsLoading(false);
      })
      .catch((err) => setIsLoading(false));
  }, [ecoSpaceId, userDB?._id, refetch]);

  return (
    <div className="my-24">
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col p-2 md:p-5 gap-2 md:gap-5 bg-[#ecdeec] rounded-lg">
          {isLoading ? <LoadingScreen /> : ""}
          {appointments?.length ? (
            appointments.map((appointment, i) => (
              <AppointmentEcoSpaceListItem
                key={i}
                appointment={appointment}
                refetch={refetch}
                setrefetch={setrefetch}
              />
            ))
          ) : (
            <h2>No Appointment found</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default RequestedAppointments;
