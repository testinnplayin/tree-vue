<!-- What will be the recursively-created nodes of tree  -->
<template lang="html">
  <div class="node" @dragenter.stop="onDragEnter" @dragstart.stop="handleDragStart" @dragleave.stop="onDragLeave" @dragend.stop @dragover.prevent @drop.stop="onDrop" :node-id="node.id" :rid="node.rid">
    <ul class="tree-node">
      <!-- if triangle is clicked on and node is collapsed  -->
      <li v-if="!node.expanded" :li-node-id="node.id" :li-rid="node.rid">
        <button v-if="node.children.length > 0" @click="clickOnExpand" class="list-btn"><icon name="caret-right"></icon></button>
        <a v-if="node.icon" @click.stop="clickOnLink" @dblclick.prevent.stop="dbClickOnLink" href="#">{{node.label}}</a>
        <label v-else>{{node.label}}</label>
        <button v-if="node.icon" class="list-btn"><icon :name="node.icon"></icon></button>
      </li>
      <!-- if triangle is clicked on and node is expanded  -->
      <li v-else :li-node-id="node.id" :li-rid="node.rid">
        <!-- show caret button if node has children  -->
        <button v-if="node.children.length > 0" @click="clickOnExpand" class="list-btn"><icon name="caret-down"></icon></button>
        <!-- show link instead of plain text if node has an icon (i.e. is an instance) this might be removed in case conflicts with double click  -->
        <a v-if="node.icon" @click.stop="clickOnLink" @dblclick.stop="dbClickOnLink" href="#">{{node.label}}</a>
        <label v-else>{{node.label}}</label>
        <!-- if there is an icon associated with node, then show icon  -->
        <button v-if="node.icon" class="list-btn"><icon :name="node.icon"></icon></button>
        <!-- where new children are rendered if there are any children, note that nind is node index  -->
        <tree-node v-if="node.children.length > 0" v-for="(childNode, index) of node.children" :key="index" :nind="index" :node="childNode" draggable></tree-node>
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
    },
    handleDragStart: function (e) {
      // console.log('drag start')
      // event's current target is always the div called node hence why it should be chosen for passing data
      // console.log(e.target, e.currentTarget)
      const rid = e.currentTarget.getAttribute('rid')
      const nodeId = e.currentTarget.getAttribute('node-id')
      // console.log('rid ', rid, 'id ', nodeId)
      e.dataTransfer.setData('dropped-id', nodeId)
      e.dataTransfer.setData('instance-id', rid)
      // console.log(e)
    },
    onDragEnter: function (e) {
      // event's current target is always the div called node
      if (!this.node.expanded) this.node.expanded = !this.node.expanded
      e.currentTarget.classList.add('highlighted')
    },
    onDragLeave: function (e) {
      // console.log('drag leave')
      e.currentTarget.classList.remove('highlighted')
    },
    onDrop: function (e) {
      console.log('dropped')
      console.log(e)
      // event's current target is always the div called node
      console.log(e.target, e.currentTarget)
      const droppedId = e.dataTransfer.getData('dropped-id')
      console.log('droppedId ', droppedId)
    }
  },
  props: ['node', 'nind', 'treeview']
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

  .highlighted {
    background-color: #eee;
  }
</style>
