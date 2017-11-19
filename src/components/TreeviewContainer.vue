<!-- My equivalent of LeftPanel.vue -->
<template lang="html">
  <div id="treeview-container">
    <treeview :treeview="treeview"></treeview>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Treeview from '@/components/Treeview'
export default {
  name: 'TreeviewContainer',
  data: function () {
    return {
      treeview: null
    }
  },
  components: {Treeview},
  computed: {
    ...mapGetters(['getTree'])
  },
  created: function () {
    const treeview = this.$store.getters.getTree
    console.log('treeview ', treeview)
    this.treeview = treeview
  }
}
</script>

<style lang="css">
  #treeview-container {
    border-right: 1px solid #000;
    float: left;
    height: 100%;
    min-height: 1000px;
    width: 30%;
  }
</style>
