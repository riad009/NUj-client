import { Popconfirm } from 'antd';
import axios from 'axios';

import { MdDelete, MdEdit } from 'react-icons/md';

import config from '../../config';
import { toast } from 'sonner';
import { IoEye } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import EcoSpaceProfileEditMpdal from '../../pages/companyProfile/EcoSpaceProfileEditModal';

const DashboardEcoSpacesListItem = ({ ecoSpace, refetch, setrefetch }) => {
  const { company, coWorkers, plan, _id } = ecoSpace;
  const [openEditModal, setOpenEditModal] = useState(false);
  console.log({ ecoSpace });

  const confirmDelete = async () => {
    try {
      const res = await axios.delete(
        `${config.api_url}/eco-spaces/delete/eco-space/${_id}`
      );

      if (res?.status === 200) {
        setrefetch(!refetch);
        toast.success('Eco space deleted!', {
          position: 'top-center',
        });
      }
    } catch (error) {
      console.log(error);
      return toast.error(
        error.response.data.message || `Something went wrong!`,
        {
          id: 'login',
          duration: 2000,
          position: 'top-center',
        }
      );
    }
  };
  const cancelDelete = (e) => {
    console.log(e);
  };

  return (
    <tr>
      <td>
        <div>
          <div className='font-bold'>{company}</div>
        </div>
      </td>
      {/* <td>{serviceId?.title}</td> */}

      <td>{coWorkers?.length || 'N/A'}</td>
      <td>{plan?.title || 'N/A'}</td>
      <td className='flex items-center justify-start gap-2'>
        <MdEdit
          className='text-xl text-primary cursor-pointer'
          onClick={() => setOpenEditModal(true)}
        />

        <Link to={`/eco-space/${_id}`}>
          <IoEye className='text-xl text-primary' />
        </Link>
        <Popconfirm
          title='Delete the eco space!'
          description='Are you sure to delete this eco space?'
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
          okText='Yes'
          cancelText='No'
          okButtonProps={{
            style: {
              background: '#1677ff',
            },
          }}
        >
          <MdDelete className='text-xl text-red-600 cursor-pointer' />
        </Popconfirm>
      </td>
      <EcoSpaceProfileEditMpdal
        open={openEditModal}
        setOpen={setOpenEditModal}
        ecoSpace={ecoSpace}
        refetch={refetch}
        setrefetch={setrefetch}
      />
    </tr>
  );
};

export default DashboardEcoSpacesListItem;
