<template>
  <h3>这是list页面组件 : {{data}}</h3>
</template>

<script>
export default {
  props:{
    data:{
      type : String,
      default :'no data'
    }
  }
}
</script>

<style>

</style>