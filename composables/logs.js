// export const getActionLogs = async () => {
//   try {
//     const response = await fetch('http://localhost:3001/get/action/logs');
//     const data = await response.json();
//     return { data, status: response.status };
//   } catch (err) {
//     console.error('Error fetching action logs:', err);
//     return { data: [], status: 500 };
//   }
// };

// export const getEventLogs = async () => {
//   try {
//     const response = await fetch('http://localhost:3001/get/event/logs');
//     const data = await response.json();
//     return { data, status: response.status };
//   } catch (err) {
//     console.error('Error fetching event logs:', err);
//     return { data: [], status: 500 };
//   }
// };