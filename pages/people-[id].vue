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
    <br>
    <div class="test">
      <ElementInfoComponent
          :id = "route.params.id"
          :full-name = "name"
          :role = "role"
          :short-presentation = "shortPresentation">
      </ElementInfoComponent>
      <ElementInfoComponent
          :id = "1"
          :full-name = "name"
          :role = "role"
          :short-presentation = "shortPresentation">
      </ElementInfoComponent>
      <ElementInfoComponent
          :id = "route.params.id"
          :full-name = "name"
          :short-presentation = "shortPresentation">
      </ElementInfoComponent>
      <ElementInfoComponent
        :id = "route.params.id"
        :full-name = "name"
        :role = "role"
        :short-presentation = "shortPresentation">
      </ElementInfoComponent>
    </div>

    <br>
    <br>
</template>

<style scoped>
  .test{
    display: flex;
  }
</style>