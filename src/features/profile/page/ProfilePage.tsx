import ProfileCard from "../components/profileCard";


const ProfilePage = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">My Profile</h1>
      <ProfileCard />
    </div>
  );
};

export default ProfilePage;
