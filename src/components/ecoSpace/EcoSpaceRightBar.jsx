import { useContext, useEffect, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { IoIosMore } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import { IoPersonAddOutline, IoVideocam } from 'react-icons/io5';
import { Collapse, Popconfirm } from 'antd';
import CoworkerListCard from './CoworkerListCard';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

import moment from 'moment';
import { useQuery } from '@tanstack/react-query';
import config from '../../config';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';
import { queryClient } from '../../main';
import MeetingModal from './MeetingModal';

const EcoSpaceRightBar = ({ ecoSpace }) => {
  const { projectId, ecoSpaceId } = useParams();
  const { userDB } = useContext(AuthContext);
  const navigate = useNavigate();
  const [openMeeting, setOpenMeeting] = useState(false);

  const isCoWorker = ecoSpace?.coWorkers?.includes(userDB?.email);
  const isOwner = userDB?._id === ecoSpace?.owner;

  const { setEcoSpaceRightBarOpen, openAddClientModal } =
    useContext(AuthContext);

  const {
    data: project,

    refetch,
  } = useQuery({
    queryKey: ['project', projectId],
    queryFn: async () => {
      const res = await fetch(`${config.api_url}/project/single/${projectId}`);
      const data = await res.json();
      return data.data;
    },
  });
  useEffect(() => {
    refetch();
  }, [projectId, refetch]);

  const aboutContent = (
    <div className='bg-base-200 p-2 rounded-md space-y-4 text-gray-500'>
      <div>
        <h2 className='font-semibold'>Description</h2>
        <p className='text-sm'>{ecoSpace?.description}</p>
      </div>
      <div>
        <p className='text-sm'>
          Created on{' '}
          {moment(project?.createdAt).format('MMM DD, YYYY hh:mm:ss A')}
        </p>
      </div>
    </div>
  );

  const items = [
    {
      key: '1',
      label: 'About',
      children: aboutContent,
    },
    {
      key: '2',
      label: 'Clients',
      children: (
        <div className='flex flex-col bg-base-200 p-2 rounded-md space-y-4 text-gray-500'>
          {project?.clients?.length
            ? project?.clients.map((coworker, i) => (
                <CoworkerListCard key={i} coworker={coworker} />
              ))
            : ''}
        </div>
      ),
    },
  ];

  const refetchProjects = async () => {
    await queryClient.refetchQueries({
      queryKey: ['projects'],
      type: 'active',
    });
  };

  const confirmDelete = async () => {
    try {
      const res = await axios.delete(`${config.api_url}/project/${projectId}`);

      if (res?.status === 200) {
        refetchProjects();
        toast.success('Project deleted!', {
          position: 'top-center',
        });
        setEcoSpaceRightBarOpen(false);
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
  const cancelDelete = (e) => {
    console.log(e);
  };
  return (
    <>
      <div className=' flex flex-col gap-5 relative h-[100vh] max-h-[100vh]'>
        <div className='overflow-y-auto'>
          <div className='border-b-[.5px]  border-b-gray-300 h-16 flex justify-between items-center px-5'>
            <div>
              <h2 className='font-semibold'>Details</h2>
            </div>
            <RxCross2
              onClick={() => setEcoSpaceRightBarOpen(false)}
              className='size-6 cursor-pointer'
            />
          </div>
          <div className='border-b-[.5px] border-b-gray-300 flex gap-10 items-center p-5 '>
            {(isOwner || userDB?.role === 'superAdmin' || isCoWorker) && (
              <div
                className='flex flex-col items-center justify-center'
                onClick={openAddClientModal}
              >
                <IoPersonAddOutline className='size-10 text-gray-500 cursor-pointer bg-gray-200 p-2 rounded-[50%]' />
                <span className='text-sm '>Add</span>
              </div>
            )}
            {(userDB?.role === 'superAdmin' || isOwner) && (
              <Popconfirm
                title='Delete the project'
                description='Are you sure to delete this project?'
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
                <div className='flex flex-col items-center justify-center'>
                  <MdDelete className='size-10 text-gray-500 cursor-pointer bg-gray-200 p-2 rounded-[50%]' />
                  <span className='text-sm '>Delete</span>
                </div>
              </Popconfirm>
            )}
            {isOwner && (
              <div
                onClick={() => setOpenMeeting(!openMeeting)}
                className='flex flex-col items-center justify-center'
              >
                <IoVideocam className='size-10 text-gray-500 cursor-pointer bg-gray-200 p-2 rounded-[50%]' />
                <span className='text-sm '>Zoom Call</span>
              </div>
            )}
            <div className='flex flex-col items-center justify-center'>
              <IoIosMore className='size-10 text-gray-500 cursor-pointer bg-gray-200 p-2 rounded-[50%]' />
              <span className='text-sm '>More</span>
            </div>
          </div>
          <div className=''>
            <Collapse
              bordered={false}
              accordion
              className='!bg-base-100'
              items={items}
              expandIconPosition='end'
            />
          </div>
        </div>
      </div>

      <MeetingModal
        open={openMeeting}
        setOpen={setOpenMeeting}
        project={project}
        ecoSpace={ecoSpace}
      />
    </>
  );
};

export default EcoSpaceRightBar;
