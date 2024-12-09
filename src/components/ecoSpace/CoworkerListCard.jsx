import { MdMessage } from 'react-icons/md';
import unknown from '../../assets/home/unknown.jpg';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';
import config from '../../config';
import { toast } from 'sonner';

const CoworkerListCard = ({ coworker, refetchEcoSpace }) => {
  const { ecoSpaceId } = useParams();
  const { userDB } = useContext(AuthContext);
  const navigate = useNavigate();

  const confirmDelete = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      const res = await axios.patch(
        `${config.api_url}/eco-spaces/delete/co-worker/${ecoSpaceId}`,
        {
          email: coworker,
        }
      );

      if (res?.status === 200) {
        refetchEcoSpace();
        toast.success('Coworker deleted!', {
          position: 'top-center',
        });

        navigate(`/eco-space/${ecoSpaceId}`);
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

  return (
    <>
      {userDB?.email !== coworker && (
        <NavLink
          to={`/eco-space/${ecoSpaceId}/${coworker}`}
          className={({ isActive }) =>
            `flex items-center justify-between gap-2 rounded-lg p-2 ${
              isActive ? 'bg-[#83388b] text-white' : ''
            }`
          }
        >
          <div className='flex gap-2 items-center'>
            <img className='size-6 rounded-lg' src={unknown} alt='' />
            <p className='text-sm'>{coworker}</p>
          </div>
          <div className='flex gap-2'>
            <button className='bg-blue-500 px-1 rounded-md'>
              <MdMessage className='cursor-pointer text-white' />
            </button>
            <Popconfirm
              title='Are you sure you want to delete this coworker ?'
              onConfirm={confirmDelete}
              okText='Yes'
              cancelText='No'
            >
              <button
                className='bg-red-500 px-1 rounded-md'
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                <DeleteOutlined className='cursor-pointer text-white' />
              </button>
            </Popconfirm>
          </div>
          {/* <MdMessage />
          {isOwner && <MdDelete />} */}
        </NavLink>
      )}
    </>
  );
};

export default CoworkerListCard;
