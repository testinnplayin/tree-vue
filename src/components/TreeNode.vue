<!-- What will be the recursively-created nodes of tree  -->
<template lang="html">
  <div>
    <ul class="tree-node">
      <!-- if triangle is clicked on and node is collapsed  -->
      <li v-if="!node.expanded">
        <button v-if="node.children.length > 0" @click="clickOnExpand" class="list-btn"><icon name="caret-right"></icon></button>
        <a v-if="node.icon" @click.stop="clickOnLink" @dblclick.prevent.stop="dbClickOnLink" href="#">{{node.label}}</a>
        <label v-else>{{node.label}}</label>
        <button v-if="node.icon" class="list-btn"><icon :name="node.icon"></icon></button>
      </li>
      <!-- if triangle is clicked on and node is expanded  -->
      <li v-else>
        <!-- show caret button if node has children  -->
        <button v-if="node.children.length > 0" @click="clickOnExpand" class="list-btn"><icon name="caret-down"></icon></button>
        <!-- show link instead of plain text if node has an icon (i.e. is an instance) this might be removed in case conflicts with double click  -->
        <a v-if="node.icon" @click.stop="clickOnLink" @dblclick.stop="dbClickOnLink" href="#">{{node.label}}</a>
        <label v-else>{{node.label}}</label>
        <!-- if there is an icon associated with node, then show icon  -->
        <button v-if="node.icon" class="list-btn"><icon :name="node.icon"></icon></button>
        <!-- where new children are rendered if there are any children, note that nind is node index  -->
        <tree-node v-if="node.children.length > 0" v-for="(childNode, index) of node.children" :key="index" :nind="index" :node="childNode"></tree-node>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TreeNode',
  methods: {
    clickOnExpand: function () {
      let expanded = this.node.expanded
      this.node.expanded = !this.node.expanded
    },
    clickOnLink: function () {
      console.log('link click triggered')
    },
    dbClickOnLink: function () {
      console.log('double click triggered')
    }
  },
  props: ['node', 'nind']
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
