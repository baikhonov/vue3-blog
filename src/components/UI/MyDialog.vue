<template>
  <div v-if="show === true" class="dialog" @click="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>

      <button class="dialog__close" @click="hideDialog" aria-label="Закрыть" tabindex="0">
        <span class="dialog__close-icon">×</span>
      </button>
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
    },
    handleKeydown(event) {
      // Закрытие по Escape
      if (event.key === 'Escape') {
        this.hideDialog();
        return;
      }

      // Trap focus только на Tab
      if (event.key === 'Tab') {
        const focusableElements = this.getFocusableElements();
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          // Shift+Tab из первого элемента → переходим к последнему
          if (document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
          }
        } else {
          // Tab из последнего элемента → переходим к первому
          if (document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
          }
        }
      }
    },
    getFocusableElements() {
      return this.$el.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
    }
  },
  watch: {
    show(newVal) {
      if (newVal) {
        document.addEventListener('keydown', this.handleKeydown);
      } else {
        document.removeEventListener('keydown', this.handleKeydown);
      }
    }
  },
  mounted() {
    if (this.show) {
      document.addEventListener('keydown', this.handleKeydown);
    }
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
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

.dialog__close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  background: #f8f9fa;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 10;
}

.dialog__close:hover {
  background: #e9ecef;
  transform: scale(1.1);
}

.dialog__close:focus {
  border-color: #3b82f6;
  background: #e9ecef;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
}

.dialog__close:active {
  transform: scale(0.95);
}

.dialog__close-icon {
  font-size: 20px;
  color: #6c757d;
  line-height: 1;
  font-weight: bold;
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

  .dialog__close {
    top: 12px;
    right: 12px;
    width: 28px;
    height: 28px;
  }

  .dialog__close-icon {
    font-size: 18px;
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

  .dialog__close {
    top: 10px;
    right: 10px;
    width: 26px;
    height: 26px;
  }

  .dialog__close-icon {
    font-size: 16px;
  }
}

/* Для очень маленьких экранов */
@media (max-width: 360px) {
  .dialog {
    padding: 8px;
  }
}
</style>