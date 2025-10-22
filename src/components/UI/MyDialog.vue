<template>
  <div v-if="show === true" class="dialog" @click="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-dialog",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideDialog() {
      this.$emit('update:show', false);
    }
  }
}
</script>

<style scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  animation: fadeIn 0.2s ease;
}

.dialog__content {
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  padding: 20px;
  overflow-y: auto;
  position: relative;
  animation: slideUp 0.3s ease;
}

/* Анимации */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Адаптивность */
@media (max-width: 768px) {
  .dialog {
    padding: 16px;
  }

  .dialog__content {
    border-radius: 12px;
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .dialog {
    padding: 12px;
  }

  .dialog__content {
    border-radius: 10px;
    max-height: 95vh;
  }
}

/* Для очень маленьких экранов */
@media (max-width: 360px) {
  .dialog {
    padding: 8px;
  }
}
</style>