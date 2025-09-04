export default defineNuxtRouteMiddleware((to, from) => {
    const router = useRouter();
    if (import.meta.client) {
        let user: any = {}
        // user = checkToken();
        // if (to.path.startsWith('/admin')) {
        //     let segments = to.fullPath.split('/').filter(Boolean);
        //     if (user?.user_role === 3) {
        //         // router.push('/');
        //         window.location.href = '/'
        //     } else {
        //         if (to.path.startsWith('/admin/settings')) {
        //             if (user?.user_role !== 1) {
        //                 alert('ไม่มีสิทธิ์');
        //                 router.go(-1)
        //             }
        //         }
        //         if (to.path.startsWith('/admin/courses/category')) {
        //             if (user?.user_role !== 1) {
        //                 alert('ไม่มีสิทธิ์');
        //                 router.go(-1)
        //             }
        //         }
        //         if (segments.includes('students')) {
        //             if (segments.includes('edit')) {
        //                 if (user?.user_id !== +to.params.id && user?.user_role === 2) {
        //                     alert('ไม่มีสิทธิ์');
        //                     return router.go(-1);
        //                 }
        //             }
        //             if (to.path.endsWith('/add') && user?.user_role !== 1){
        //                 alert('ไม่มีสิทธิ์');
        //                 return router.go(-1);
        //             }
        //             if (user?.user_role !== 1) {
        //                 alert('ไม่มีสิทธิ์');
        //                 return router.go(-1);
        //             }
        //         }
        //         if (segments.includes('teachers')) {
        //             if (segments.includes('edit')) {
        //                 if (user?.user_id !== +to.params.id && user?.user_role === 2) {
        //                     alert('ไม่มีสิทธิ์');
        //                     return router.go(-1);
        //                 }
        //             }
        //             if (to.path.endsWith('/add') && user?.user_role !== 1) {
        //                 alert('ไม่มีสิทธิ์');
        //                 return router.go(-1);
        //             }
        //             if (user?.user_role !== 1) {
        //                 alert('ไม่มีสิทธิ์');
        //                 return router.go(-1);
        //             }
        //         }
        //     }
        //     if (!user) {
        //         window.location.href = '/login'
        //     }
        // }
        // if ((to.path.startsWith('/user') || to.path.startsWith('/learning')) && !user) {
        //     window.location.href = '/login'
        // }
        user = checkToken() // { user_id, user_role, ... } หรือ null
console.log(user);

        // ถ้ายังไม่ได้ login แต่จะเข้า /admin, /user, /users/courses → ไป login
        if ((to.path.startsWith('/admin') || to.path.startsWith('/user') || to.path.startsWith('/users/courses')) && !user) {
            return navigateTo('/login')
        }

        // 🔹 ส่วนของ /admin
        if (to.path.startsWith('/admin')) {
            const segments = to.fullPath.split('/').filter(Boolean)

            // role=3 (user ธรรมดา) → ไม่มีสิทธิ์เข้า admin
            if (user?.user_role === 3) {
                return navigateTo('/403')
            }

            // /admin/settings → เฉพาะ admin
            if (to.path.startsWith('/admin/settings') && user?.user_role !== 1) {
                return navigateTo('/403')
            }

            // /admin/courses/category → เฉพาะ admin
            if (to.path.startsWith('/admin/courses/category') && user?.user_role !== 1) {
                return navigateTo('/403')
            }

            // /admin/students
            if (segments.includes('students')) {
                // ครูแก้ไขได้เฉพาะของตัวเอง
                if (segments.includes('edit')) {
                    if (user?.user_id !== +to.params.id && user?.user_role === 2) {
                        return navigateTo('/403')
                    }
                }
                // เพิ่ม student ได้เฉพาะ admin
                if (to.path.endsWith('/add') && user?.user_role !== 1) {
                    return navigateTo('/403')
                }
                // อื่น ๆ → admin เท่านั้น
                if (user?.user_role !== 1) {
                    return navigateTo('/403')
                }
            }

            // /admin/teachers
            if (segments.includes('teachers')) {
                // ครูแก้ไขได้เฉพาะของตัวเอง
                if (segments.includes('edit')) {
                    if (user?.user_id !== +to.params.id && user?.user_role === 2) {
                        return navigateTo('/403')
                    }
                }
                // เพิ่ม teacher ได้เฉพาะ admin
                if (to.path.endsWith('/add') && user?.user_role !== 1) {
                    return navigateTo('/403')
                }
                // อื่น ๆ → admin เท่านั้น
                if (user?.user_role !== 1) {
                    return navigateTo('/403')
                }
            }
        }
    }
})