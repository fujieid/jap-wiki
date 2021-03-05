<template>
  <a :href="link" :title="title" :target="blank ? '_blank' : ''" class="ref-link"> {{ title }}</a>
</template>

<script>
export default {
  name: 'ref-link',
  props: {
    link: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    blank: {
      type: Boolean,
      default: false
    },
  }
};
</script>

<style>
.ref-link {
  padding: 1rem 1.5rem;
  margin: 1.5rem 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: block;
  background: white;
}
</style>
