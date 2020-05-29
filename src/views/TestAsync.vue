<template>
  <div class="container">
      <h3>实践 async await</h3>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted () {
    this.todo()
  },
  methods: {
    query () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('1 :>> ', 1)
          resolve(1)
        }, 10)
      })
    },
    query2 () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('2 :>> ', 2)
          resolve(2)
        }, 10)
      })
    },
    async todo () {
      console.log('0 :>> ', 0)
      const res = await this.query()
      const res2 = await this.query2()
      console.log('3 :>> ', 3)
      console.log('----------')
      console.log('res :>> ', res)
      console.log('res :>> ', res2)
    }
  }
}
</script>

<style scoped lang="less">
</style>
