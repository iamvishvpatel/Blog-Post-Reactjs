import { useAuth } from "../../../context";
import ProfileCard from "../components/profileCard";
import { ProfileCardSkeleton } from "../../../components";


const ProfilePage = () => {
  const { user } = useAuth(); 
  if (!user) return <ProfileCardSkeleton />; 


  return (
    <div className="bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-orange-600 mb-5">My Profile</h1>
      <ProfileCard currentUser={user}/>
    </div>
  );
};

export default ProfilePage;
