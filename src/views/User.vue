<template>
  <div>
    <h3>User Id :{{id}}</h3>
    <router-view/>
  </div> 
</template>

<script>
export default {
    name :'User',
    props:['id']
}
</script>

<style>

</style>