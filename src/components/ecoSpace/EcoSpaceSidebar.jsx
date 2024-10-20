import { Badge, Collapse, Dropdown, Space } from 'antd';
import { useContext, useState } from 'react';
import CoworkerListCard from './CoworkerListCard';
import { IoMdAdd, IoIosClose } from 'react-icons/io';
import AddCoworkerModal from './AddCoworkerModal';
import { DownOutlined } from '@ant-design/icons';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import config from '../../config';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import EcoSpaceProfileEditMpdal from '../../pages/companyProfile/EcoSpaceProfileEditModal';
import { FaPlusCircle, FaRegEdit } from 'react-icons/fa';
import ChannelListCard from './ChannelListCard';
import AddChannelModal from './AddChannelModal';
import { GoPlus } from 'react-icons/go';
import { IoHomeOutline, IoNotifications } from 'react-icons/io5';

import AddNewProject from './AddNewProject';
import { LiaHandshakeSolid } from 'react-icons/lia';
import { MdAssessment } from 'react-icons/md';
import NotificationModal from './NotificationModal';

const EcoSpaceSidebar = ({ ecoSpace }) => {
  const [open, setOpen] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const [openProjectModal, setOpenProjectModal] = useState(false);
  const [openChannel, setOpenChannel] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const { user, userDB, setEcoSpaceLeftBarOpen } = useContext(AuthContext);
  const navigate = useNavigate();

  const isCoWorker = ecoSpace?.coWorkers?.includes(userDB?.email);
  const isOwner = userDB?._id === ecoSpace?.owner;
  const { data: ecoSpacesList } = useQuery({
    queryKey: [user, user?.email, userDB, userDB?._id, 'email'],
    queryFn: async () => {
      const res = await fetch(
        `${config.api_url}/eco-spaces/list?ownerId=${userDB?._id}&email=${userDB?.email}`
      );
      const data = await res.json();
      return data?.data;
    },
  });

  const { data: projects, refetch } = useQuery({
    queryKey: ['projects', ecoSpace?._id, 'email', userDB?.email],
    queryFn: async () => {
      const res = await fetch(
        `${config.api_url}/project/${ecoSpace?._id}?email=${userDB?.email}&role=${userDB?.role}&isCoWorker=${isCoWorker}&isOwner=${isOwner}`
      );
      const data = await res.json();
      return data?.data;
    },
  });

  const items = ecoSpacesList?.length
    ? ecoSpacesList.map((item, i) => ({
        key: i,
        label: (
          <Link to={`/profile/eco-space/${item?._id}`}>{item?.company}</Link>
        ),
      }))
    : [];

  // const starredItems = [
  //   {
  //     key: "1",
  //     label: <h2 className="font-semibold  tracking-wider">Starred</h2>,
  //     children: (
  //       <div className="space-y-2">
  //         {projects?.length
  //           ? projects.map((channel, i) => (
  //               <ChannelListCard {...channel} key={i} />
  //             ))
  //           : ""}
  //       </div>
  //     ),
  //   },
  // ];

  const projectItems = [
    {
      key: '1',
      label: (
        <div className='flex items-center  justify-between'>
          <p className='font-semibold  tracking-wider'>Projects</p>
          {(isCoWorker || isOwner || userDB?.role === 'superAdmin') && (
            <FaPlusCircle
              className='h-4 w-4'
              onClick={() => setOpenProjectModal(true)}
            />
          )}
        </div>
      ),
      children: (
        <div className='space-y-2'>
          {projects?.length
            ? projects.map((channel, i) => (
                <ChannelListCard
                  {...channel}
                  key={i}
                  isOwner={isOwner}
                  isCoWorker={isCoWorker}
                  isSuperAdmin={userDB?.role === 'superAdmin'}
                  ecoSpaceId={ecoSpace?._id}
                  refetchProjects={refetch}
                />
              ))
            : ''}
        </div>
      ),
    },
  ];

  const handlePricing = (planId) => {
    navigate('/pricing', {
      state: {
        planId,
      },
    });
  };

  const handleNavigate = () => {
    const clients = projects
      .map((project) => project.clients)
      .reduce((acc, clients) => acc.concat(clients), []);

    navigate(`/make-appointment/${ecoSpace?._id}`, {
      state: {
        isCoWorker,
        clients,
      },
    });
  };

  const { data: notifications, refetch: refetchNoti } = useQuery({
    queryKey: ['notification'],
    queryFn: async () => {
      const res = await fetch(
        `${config.api_url}/notification?email=${userDB?.email}`
      );
      const data = await res.json();
      return data.data;
    },
  });

  const isNotification = notifications?.[0]?.isViewed;

  console.log({ notifications, isNotification });

  return (
    <>
      <div className='col-span-1 border-r-[.5px] border-gray-600 h-[100vh] w-full py-5 bg-[#6a2b70] flex flex-col justify-between items-center gap-6 overflow-y-auto overflow-x-clip'>
        <div className='flex flex-col items-center justify-start gap-2'>
          <Link
            className='text-white bg-gray-400 flex justify-center items-center size-12 rounded-md'
            to={`/home`}
          >
            <IoHomeOutline className='size-6' />
          </Link>
          {ecoSpacesList?.length
            ? ecoSpacesList.map((ecoSpace, i) => (
                <NavLink
                  key={i}
                  className={({ isActive }) =>
                    `bg-secondary size-12 rounded-md flex justify-center items-center  text-white ${
                      isActive ? 'border-2 font-bold' : ''
                    }`
                  }
                  to={`/eco-space/${ecoSpace?._id}`}
                >
                  {ecoSpace?.company
                    ?.split(' ')
                    .map((word) => word.charAt(0).toUpperCase())
                    .join('')
                    ?.slice(0, 2)}
                </NavLink>
              ))
            : ''}
        </div>
        <div className='flex flex-col gap-2 items-center'>
          {isOwner && (
            <>
              <Link
                className='text-white bg-gray-400 rounded-[50%]'
                to={`/create-eco-space/banner`}
              >
                <GoPlus className='size-12' />
              </Link>
              <div onClick={() => handlePricing(ecoSpace?.plan?.uid)}>
                <img
                  className='size-12 rounded-md'
                  src='/subscription.png'
                  alt=''
                />
              </div>
            </>
          )}
          <div
            onClick={() => setOpenNotification(true)}
            className='cursor-pointer'
          >
            <Badge
              count={isNotification === false ? 1 : 0}
              offset={[-8, 7]}
              size='small'
            >
              <IoNotifications className='text-slate-300 text-5xl' />
            </Badge>
          </div>
          <Link className='' to={`/profile/user`}>
            <img className='size-12 rounded-md' src={userDB?.photo} alt='' />
          </Link>
        </div>
      </div>
      <div className='col-span-4 h-[100vh]  bg-[#d8c0d6] '>
        <div className=''>
          <div className='p-4 h-16 flex items-center justify-between border-b-[.5px] bg-[#6a2b70] border-gray-400 space-x-2 text-white'>
            <div className='flex items-center gap-2'>
              <Dropdown
                className=''
                menu={{
                  items: items,
                }}
                trigger={['click']}
              >
                <Space className='text-lg font-semibold'>
                  {ecoSpace?.company}
                  <DownOutlined />
                </Space>
              </Dropdown>

              <p className='text-sm'>{ecoSpace?.plan?.title} Plan</p>
            </div>

            <div className='flex items-center gap-2'>
              {(isOwner || userDB?.role === 'superAdmin') && (
                <button onClick={() => setOpenEditModal(true)}>
                  <FaRegEdit className='size-6' />
                </button>
              )}
              <button onClick={() => setEcoSpaceLeftBarOpen(false)}>
                <IoIosClose className='size-8 block md:hidden' />
              </button>
            </div>
          </div>
        </div>
        <div className='overflow-y-auto overflow-x-clip h-[90vh]'>
          {userDB?.role !== 'superAdmin' && (
            <div className='space-y-4 py-6 font-medium p-4'>
              {/* <h3 className="text-sm font-semibold">Make an appointment</h3> */}
              {!isOwner && (
                <>
                  <button
                    onClick={handleNavigate}
                    // to={`/make-appointment/${ecoSpace?._id}`}
                    className={`flex items-center gap-2 rounded-lg `}
                  >
                    <LiaHandshakeSolid className='text-xl text-primary' />
                    <span>Make an Appointment</span>
                  </button>

                  <NavLink
                    // onClick={onClose}
                    to={`/requested-appointments/${ecoSpace?._id}`}
                    className={({ isActive }) =>
                      `flex items-center gap-2 rounded-lg  ${
                        isActive ? 'bg-gray-200' : ''
                      }`
                    }
                  >
                    <LiaHandshakeSolid className='text-xl text-primary' />
                    <span>My Requested Appointments</span>
                  </NavLink>

                  <NavLink
                    // onClick={onClose}
                    to='/assessment'
                    className={({ isActive }) =>
                      `flex items-center gap-2 rounded-lg  ${
                        isActive ? 'bg-gray-200' : ''
                      }`
                    }
                  >
                    <MdAssessment className='text-xl text-primary' />
                    <span>Assessment</span>
                  </NavLink>
                </>
              )}

              {isOwner && (
                <NavLink
                  // onClick={onClose}
                  to={`/appointment-requests/${ecoSpace?._id}`}
                  className={({ isActive }) =>
                    `flex items-center gap-2 rounded-lg  ${
                      isActive ? 'bg-gray-200' : ''
                    }`
                  }
                >
                  <LiaHandshakeSolid className='text-xl text-primary' />
                  <span>Appointment Requests</span>
                </NavLink>
              )}
            </div>
          )}
          <div className=''>
            <Collapse
              bordered={false}
              accordion
              className=''
              items={projectItems}
              expandIconPosition='end'
              defaultActiveKey={['1']}
            />
          </div>
          <div className='space-y- p-4'>
            <h3 className='text-sm font-semibold'>Co-worker</h3>
            <div className='flex flex-col gap-2 text-gray-700 text-sm mt-3 mb-6'>
              {ecoSpace?.coWorkers?.length
                ? ecoSpace?.coWorkers.map((coworker, i) => (
                    <CoworkerListCard key={i} coworker={coworker} />
                  ))
                : ''}
            </div>
            {(isOwner || userDB?.role === 'superAdmin') && (
              <button
                onClick={() => setOpen(true)}
                className='flex gap-1 items-center font-semibold '
              >
                <IoMdAdd />
                <p className='text-sm'>Add Coworker</p>
              </button>
            )}
          </div>
        </div>
      </div>
      <AddNewProject
        ecoSpace={ecoSpace}
        open={openProjectModal}
        setOpen={setOpenProjectModal}
        refetch={refetch}
      />
      <NotificationModal
        open={openNotification}
        setOpen={setOpenNotification}
        notifications={notifications}
        refetch={refetchNoti}
      />
      <AddCoworkerModal ecoSpace={ecoSpace} open={open} setOpen={setOpen} />
      <AddChannelModal
        ecoSpace={ecoSpace}
        open={openChannel}
        setOpen={setOpenChannel}
        refetch={refetch}
      />
      <EcoSpaceProfileEditMpdal
        open={openEditModal}
        setOpen={setOpenEditModal}
        ecoSpace={ecoSpace}
      />
    </>
  );
};

export default EcoSpaceSidebar;
