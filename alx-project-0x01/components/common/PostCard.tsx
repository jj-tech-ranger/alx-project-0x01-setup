import { PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ title, body }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 hover:shadow-lg transition">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600">{body}</p>
    </div>
  );
};

export default PostCard;
