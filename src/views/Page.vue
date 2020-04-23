<template>
  <div>
    <component :is="$route.query.name"></component>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
