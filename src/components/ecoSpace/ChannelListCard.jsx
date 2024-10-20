import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Popconfirm, Modal, Input } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import { FaHashtag } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import config from '../../config';
import { toast } from 'sonner';

const ChannelListCard = ({
  ecoSpaceId,
  projectName,
  _id,
  isOwner,
  isCoWorker,
  isSuperAdmin,
  refetchProjects,
}) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProjectName, setNewProjectName] = useState(projectName);

  const confirmDelete = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      const res = await axios.delete(`${config.api_url}/project/${_id}`);

      if (res?.status === 200) {
        refetchProjects();
        toast.success('Project deleted!', {
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

  const handleEdit = async () => {
    try {
      if (newProjectName.trim() === '') {
        return toast.error('Project name cannot be empty!', {
          position: 'top-center',
        });
      }
      const res = await axios.patch(`${config.api_url}/project/update/${_id}`, {
        projectName: newProjectName,
      });

      if (res?.status === 200) {
        refetchProjects();
        toast.success('Project updated!', {
          position: 'top-center',
        });
        setIsModalOpen(false);
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
      <NavLink
        to={`/eco-space/${ecoSpaceId}/${_id}`}
        className={({ isActive }) =>
          `flex items-center justify-between gap-2 rounded-lg p-2 ${
            isActive ? 'bg-[#83388b] text-white' : ''
          }`
        }
      >
        <div className='flex items-center gap-2'>
          <FaHashtag className='size-4' />
          <p className='text-sm'>{projectName}</p>
        </div>

        {(isOwner || isCoWorker || isSuperAdmin) && (
          <div className='flex gap-2'>
            <button
              className='bg-blue-500 px-1 rounded-md'
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setIsModalOpen(true);
              }}
            >
              <EditOutlined className='cursor-pointer text-white' />
            </button>
            <Popconfirm
              title='Are you sure you want to delete this item?'
              onConfirm={confirmDelete}
              okText='Yes'
              cancelText='No'
            >
              <button className='bg-red-500 px-1 rounded-md'>
                <DeleteOutlined className='cursor-pointer text-white' />
              </button>
            </Popconfirm>
          </div>
        )}
      </NavLink>

      <Modal
        title='Rename Project'
        open={isModalOpen}
        onOk={handleEdit}
        onCancel={() => setIsModalOpen(false)}
      >
        <Input
          value={newProjectName}
          onChange={(e) => setNewProjectName(e.target.value)}
        />
      </Modal>
    </>
  );
};

export default ChannelListCard;
