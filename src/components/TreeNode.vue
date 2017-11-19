<!-- What will be the recursively-created node of tree  -->
<template lang="html">
  <div>
    <ul class="tree-node">
      <li v-if="!node.expanded">
        <button @click="clickOnExpand" class="list-btn"><icon name="caret-right"></icon></button>
        <a v-if="node.icon" href="#">{{node.label}}</a>
        <label v-else>{{node.label}}</label>
        <button v-if="node.icon" class="list-btn"><icon :name="node.icon"></icon></button>
      </li>
      <li v-else>
        <button @click="clickOnExpand" class="list-btn"><icon name="caret-down"></icon></button>
        <a v-if="node.icon" href="#">{{node.label}}</a>
        <label v-else>{{node.label}}</label>
        <button v-if="node.icon" class="list-btn"><icon :name="node.icon"></icon></button>
        <tree-node v-if="node.children.length > 0" v-for="(childNode, index) of node.children" :key="index" :node="childNode"></tree-node>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TreeNode',
  methods: {
    clickOnExpand: function () {
      console.log('expand click triggered')
      let expanded = this.node.expanded
      this.node.expanded = !this.node.expanded
    }
  },
  props: ['node']
}
</script>

<style lang="css">
  .tree-node {
    list-style: none;
  }

  .tree-node li a {
    text-decoration: none;
  }

  .list-btn {
    background-color: #fff;
    border: none;
  }
</style>
