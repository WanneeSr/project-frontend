export default defineNuxtRouteMiddleware((to, from) => {
    const router = useRouter()
    const user: any = checkToken() // ดึงข้อมูลผู้ใช้จาก token ที่ decode แล้ว

    if (import.meta.client) {
        if(to.path.startsWith('/admin')) {
            if (!user) {
                return navigateTo('/login')
            } else if (user.role !== 1) {
                return navigateTo('/403')
            }
        }else if (to.path.startsWith('/login')) {
            if (user) {
                return navigateTo('/')
            }
        }
    }
})
