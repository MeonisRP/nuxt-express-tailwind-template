<template>
    <div class="relative flex h-screen flex-col items-center justify-center bg-[#001E26]">
        <div class="text-4xl font-bold text-primary-500">
            ⚡
            <span class="text-primary-500">{{ frameworks[0].name }}</span>
            -
            <span class="text-yellow-300">{{ frameworks[1].name }}</span>
            -
            <span class="text-sky-500">{{ frameworks[2].name }}</span>
            template ⚡
        </div>
        <div class="absolute bottom-0 w-full">
            <img :src="require('../assets/img/background.svg')" alt="" class="h-full w-full object-contain" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    async asyncData({ $axios, route, error }) {
        return $axios
            .get('/frameworks')
            .then((res) => {
                return { frameworks: res.data }
            })
            .catch(() => {
                error({ statusCode: 404, message: `This page doesn't exist` })
            })
    }
}
</script>
