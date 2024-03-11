// import  { useState } from 'react';
// import '../assets/profile.css';
// import Navbar from './navbar';
// const ProfilePage = () => {
//   const [profile, setProfile] = useState({
//     username: 'JohnDoe',
//     email: 'johndoe@example.com',
//     bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     avatarUrl: 'https://via.placeholder.com/150',
//   });
  
  
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedProfile, setEditedProfile] = useState({ ...profile });

//   const handleEditProfile = () => {
//     setIsEditing(true);
//   };

//   const handleSaveProfile = () => {
//     setProfile({ ...editedProfile });
//     setIsEditing(false);
//   };

//   const handleCancelEdit = () => {
//     setEditedProfile({ ...profile });
//     setIsEditing(false);
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setEditedProfile((prevProfile) => ({
//       ...prevProfile,
//       [name]: value,
//     }));
//   };

//   return (
//     <div>
//     <Navbar />
//     <div className="profile">
//       <div className="profile-header">
//         <img src={profile.avatarUrl} alt="Profile Avatar" className="avatar" />
//         {isEditing ? (
//           <input
//             type="text"
//             name="username"
//             value={editedProfile.username}
//             onChange={handleInputChange}
//           />
//         ) : (
//           <h2>{profile.username}</h2>
//         )}
//         {isEditing ? (
//           <input
//             type="email"
//             name="email"
//             value={editedProfile.email}
//             onChange={handleInputChange}
//           />
//         ) : (
//           <p>{profile.email}</p>
//         )}
//         {isEditing ? (
//           <textarea
//             name="bio"
//             value={editedProfile.bio}
//             onChange={handleInputChange}
//           />
//         ) : (
//           <p>{profile.bio}</p>
//         )}
//         {isEditing ? (
//           <button onClick={handleSaveProfile}className='button-profile'>Save</button>
//         ) : (
//           <button onClick={handleEditProfile}className='button-profile'>Edit Profile</button>
//         )}
//         {isEditing && <button onClick={handleCancelEdit}className='button-profile'>Cancel</button>}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default ProfilePage;

// ProfilePage.jsx

import React from 'react';
import '../assets/profile.css';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <h1>User Profile</h1>
      <div className="profile-details">
        {/* <img src="profile-pic.jpg" alt="Profile" className="profile-picture" /> */}
        <div className="user-info">
          <h2>Keerthi varman S M</h2>
          <p>Email: keerthivarman</p>
          <p>Role: User</p>
        </div>
      </div>
      <div className="profile-actions">
        <button>Edit Profile</button>
        <button>Change Password</button>
      </div>
    </div>
  );
};

export default ProfilePage;
