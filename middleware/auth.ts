export default defineNuxtRouteMiddleware((to, from) => {
    // ตรวจสอบเฉพาะบน client เท่านั้น
    if (!import.meta.client) return;

    const user: any = checkToken(); // ต้องแน่ใจว่า checkToken() รันแค่ client

    // ถ้าผู้ใช้พยายามเข้าหน้า admin
    if (to.path.startsWith('/admin')) {

        // ถ้ายังไม่ได้ login (ไม่มี token หรือ token หมดอายุ)
        if (!user) {
            return navigateTo('/login')
        } else if (user.role !== 1) {
            return navigateTo('/403')
        }

        // ถ้า login แล้ว แต่ role ไม่ใช่ admin (role !== 1)
        if (!user.role || user.role !== 1) {
            return navigateTo('/403'); // redirect ไปหน้าห้ามเข้าถึง
        }
    }


    // // ถ้าผู้ใช้ login แล้วแต่พยายามเข้าหน้า /login
    // if (to.path.startsWith('/login') && user) {
    //     return navigateTo('/'); // ไม่ต้อง login ซ้ำ, ส่งกลับไปหน้าหลัก
    // }
});
