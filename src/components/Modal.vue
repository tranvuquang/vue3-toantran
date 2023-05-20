<script>
export default {
  name: "Modal",
  props: {
    title: {
      type: String,
      required: true,
      default: "Title",
    },
    content: {
      type: String,
      default: "",
    },
    theme: {
      type: String,
      default: "contact",
      validator(val) {
        return ["contact", "example"].includes(val);
      },
    },
  },
  methods: {
    onCloseModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<template>
  <div class="modal" tabindex="-1" style="display: block">
    <div class="modal-dialog">
      <div class="modal-content" :class="{ 'bg-purple': theme === 'contact' }">
        <div class="modal-header">
          <h5 class="modal-title">{{ title }}</h5>
          <slot name="header"></slot>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>{{ content }}</p>
          <slot />
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="onCloseModal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
