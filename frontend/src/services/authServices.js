// import axios from 'axios';

// const API_URL = 'http://localhost:5050/api/auth';

// const authService = {
//   // Register (Sign-Up)
//   register: async (userData) => {
//     try {
//       const response = await axios.post(`${API_URL}/register`, userData);
//       return response.data;
//     } catch (error) {
//       console.error('Error registering user:', error);
//       throw error;
//     }
//   },

//   // Login (Sign-In)
//   login: async (credentials) => {
//     try {
//       const response = await axios.post(`${API_URL}/login`, credentials);
//       return response.data;
//     } catch (error) {
//       console.error('Error during login:', error);
//       throw error;
//     }
//   },

//   // Logout
//   logout: async (token) => {
//     try {
//       const response = await axios.post(`${API_URL}/logout`, {}, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       return response.data;
//     } catch (error) {
//       console.error('Error during logout:', error);
//       throw error;
//     }
//   },

//   // Update (Edit Profile) - Commented out for future use
//   // updateProfile: async (userData, token) => {
//   //   try {
//   //     const response = await axios.put(`${API_URL}/profile`, userData, {
//   //       headers: {
//   //         Authorization: `Bearer ${token}`
//   //       }
//   //     });
//   //     return response.data;
//   //   } catch (error) {
//   //     console.error('Error updating profile:', error);
//   //     throw error;
//   //   }
//   // }
// };

// export default authService;
