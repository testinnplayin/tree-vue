<!-- My equivalent of Treeview but without nodes  -->
<template lang="html">
  <div id="treeview">
    <div class="search-stuff">Search Stuff</div>
    <div class="container">
      <!-- Where child nodes are injected -->
      <tree-node v-for="(node, index) of treeview" :key="index" :nind="index" :node="node" :treeview="treeview"></tree-node>
    </div>
  </div>
</template>

<script>
import TreeNode from '@/components/TreeNode'
export default {
  name: 'Treeview',
  components: {TreeNode},
  props: ['treeview'],
  watch: {
  }
}
</script>

<style lang="css">
  .search-stuff {
    border-bottom: 1px solid #000;
  }
  .container {
    text-align: left;
  }
</style>
