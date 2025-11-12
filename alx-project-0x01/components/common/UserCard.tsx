import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, username, email, address, phone, website }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 hover:shadow-lg transition">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600 mb-1">@{username}</p>
      <p className="text-gray-600 mb-1">{email}</p>
      <p className="text-gray-600 mb-1">{address.city}, {address.street}</p>
      <p className="text-gray-600 mb-1">{phone}</p>
      <p className="text-blue-600">{website}</p>
    </div>
  );
};

export default UserCard;
