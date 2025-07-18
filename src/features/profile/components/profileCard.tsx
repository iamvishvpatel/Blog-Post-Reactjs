import { useAuth } from "../../../context";
import PermissionList from "./PermissionList";

const ProfileCard = () => {
  const { user } = useAuth();
  const currentUser = user;

  if (!currentUser) return null;

  return (
    <div className="max-w-3xl mx-auto mt-12 p-8 bg-white/90 backdrop-blur-md shadow-xl rounded-3xl border-2 border-dashed border-gray-300">
      <div className="flex items-center gap-6">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white text-4xl font-bold flex items-center justify-center shadow-inner">
          {currentUser.username.charAt(0).toUpperCase()}
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-gray-800">{currentUser.username}</h2>
          <p className="text-gray-600 text-md">{currentUser.email}</p>
          <p className="mt-2 text-sm text-gray-500 italic">
            {currentUser.profile?.bio || "No bio available"}
          </p>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t-2 border-dashed border-gray-200">
        <h3 className="text-xl font-semibold text-gray-700">
          Role:
          <span className="ml-2 px-4 py-1 bg-orange-100 text-orange-700 text-sm rounded-full border border-orange-300">
            {currentUser.role?.name}
          </span>
        </h3>
        <p className="text-sm text-gray-500 mt-1">{currentUser.role?.description}</p>
      </div>

      <PermissionList permissions={currentUser.role?.permissions || []} />
    </div>
  );
};

export default ProfileCard;
