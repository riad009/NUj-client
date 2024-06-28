import AppointmentEcoSpaceListItem from "../../components/appointment/AppointmentEcoSpaceListItem";
import config from "../../config";
import LoadingScreen from "../../components/LoadingScreen";

import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const AppointmentRequests = () => {
  const { ecoSpaceId } = useParams();

  const {
    data: appointments,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointment-requests", ecoSpaceId],
    queryFn: async () => {
      const { data } = await axios.get(
        `${config.api_url}/appointments/requested-appointments?ecoSpaceId=${ecoSpaceId}&query=requests`
      );

      console.log(data.data);
      return data.data;
    },
  });

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

export default AppointmentRequests;
