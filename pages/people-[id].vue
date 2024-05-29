<script setup lang="js">
  const route = useRoute()

  const name = "luigi bruzzese"
  const role = "helper"
  const shortPresentation = "This is just a try... aaaa aaaaaa aa aaaaaaaaa aaaaa aaaaaa "
</script>

<template>

    <GeneralInfoComponent
            :id = "route.params.id"
            :full-name = "name"
            :role = "role"
            :short-presentation = "shortPresentation"

    >

    </GeneralInfoComponent>
</template>

<style scoped>

</style>