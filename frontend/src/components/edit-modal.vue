<template>
  <div class="modal-backdrop" @click="close">
    <div
      class="modal"
      role="dialog"
      v-on:click.stop
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <header
        class="modal-header"
        id="modalTitle"
      >
        <span class="title">{{ title }}</span>
        <button
          type="button"
          class="btn-close"
          @click="close"
          aria-label="Close modal"
        >
          x
        </button>
      </header>

      <section
        class="modal-body"
        id="modalDescription"
      >
        <slot/>
      </section>

      <footer class="modal-footer">
        <button
          type="button"
          class="btn-cancel"
          @click="close"
          aria-label="Cancel"
        >
          Cancel
        </button>
        <div class="btn-group">
          <button
              v-if="edit"
              type="button"
              class="btn-delete"
              @click="deleteAsst"
              aria-label="Delete assignment"
          >
            Delete
          </button>
          <button
              type="button"
              class="btn-save"
              @click="save"
              aria-label="Save assignment"
          >
            Save
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'edit-modal',
  props: ["title", "edit"],
  methods: {
    save() {
      this.$emit('save');
    },
    deleteAsst() {
      this.$emit('delete');
    },
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(128, 128, 128, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  height: fit-content;
  width: fit-content;
  margin: auto;
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 0.7rem;
}

.modal-header,
.modal-body,
.modal-footer {
  padding: 1rem;
}

.modal-header {
  position: relative;
  color: white;
  background-color: var(--dark-blue);
  display: flex;
  justify-content: space-between;
}

.modal-header .title {
  color: white;
  font-size: 1.2rem;
}

.modal-body {
  position: relative;
}

.modal-footer {
  background-color: var(--dark-blue);
  display: flex;
  justify-content: space-between;
}

.btn-close {
  border: none;
  padding: 0;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  color: white;
  background: transparent;
}

.btn-cancel {
  color: white;
  background-color: darkgray;
}

.btn-delete {
  color: white;
  background: red;
  margin-right: 1rem;
}

.btn-save {
  color: white;
  background: var(--royal-blue);
}

</style>