<template>
    <div>
        {{ error.statusCode }}
        {{ error.message }}
    </div>
</template>

<script>
export default {
    props: {
        error: {
            type: Object,
            default: () => ({})
        }
    }
}
</script>
