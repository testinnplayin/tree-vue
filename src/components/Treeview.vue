<!-- My equivalent of Treeview but without nodes  -->
<template lang="html">
  <div id="treeview">
    <div class="search-stuff">Search Stuff</div>
    <div class="container">
      <!-- Where child nodes are injected -->
      <tree-node v-for="(node, index) of treeview" :key="index" :node="node"></tree-node>
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
  .search-stuff {
    border-bottom: 1px solid #000;
  }
</style>
