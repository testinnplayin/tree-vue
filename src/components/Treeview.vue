<!-- My equivalent of Treeview but without nodes  -->
<template lang="html">
  <div id="treeview">
    <div class="search-stuff">Search Stuff</div>
    <div class="container">
      <!-- Where child nodes are injected -->
      <tree-node></tree-node>
    </div>
  </div>
</template>

<script>
import TreeNode from '@/components/TreeNode'
export default {
  name: 'Treeview',
  components: {TreeNode},
  props: ['treeview']
}
</script>

<style lang="css">
</style>
