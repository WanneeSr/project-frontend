<template>
    <div class="w-full bg-linear-to-r from-violet-700 to-violet-500 text-white ">
        <div class="flex flex-rows justify-between items-center p-4">
            <div class="w-1/3 flex flex-rows justify-center ">
                <div>Project</div>
                
            </div>
            <div class="w-1/3">
                <div>
                    home
                </div>
            </div>
            <div class="w-1/3 flex flex-rows justify-center gap-4">
                <div>
                    <ColorModeButton />
                </div>
                <div class="flex flex-rows items-center gap-4">
                    <div>
                        <UButton
                        to="/register"
                        color="neutral"
                        variant="outline"
                        :ui="{
                            leadingIcon: 'text-primary'
                        }">
                            Register
                        </UButton>
                    </div>
                    <div>
                        <UButton
                        to="/login"
                        color="neutral"
                        variant="outline"
                        :ui="{
                            leadingIcon: 'text-primary'
                        }">
                            Login
                        </UButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>