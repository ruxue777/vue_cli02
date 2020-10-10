<template>
  <div>
    <h3>User Id :{{$route.params.id}}</h3>
    <router-view/>
  </div> 
</template>

<script>
export default {
    name :'User'
}
</script>

<style>

</style>