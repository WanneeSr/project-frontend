export const getCourses = async () => {
    // const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    // const cleanedToken = token.replace(/^"|"$/g, '');

    const response = await fetch('http://localhost:3001/get/courses', {
        // headers: {
        //     'Authorization': `Bearer ${cleanedToken}`
        // }
    });
    const data = await response.json();
    const status = response.status;
    return { data, status };
}


// export const getCouresById = async (data) => {
//     // const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
//     // const cleanedToken = token.replace(/^"|"$/g, '');
    
//     const response = await fetch(`http://localhost:3001/get/course/${data}`,{
//         // headers: {
//         //     'Authorization': `Bearer ${cleanedToken}`
//         // }
//     });

//     const data = await response.json();
//     const status = response.status;
//     return { data, status };
// }