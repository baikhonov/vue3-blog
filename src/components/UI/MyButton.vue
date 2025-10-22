<template>
  <button class="btn" :class="{ 'btn-full': fullWidth }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    fullWidth: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1;
  white-space: nowrap;
}

.btn-full {
  width: 100%;
}

.btn:hover {
  background: #2563eb;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

.btn:active {
  transform: translateY(0);
}

/* Адаптивность */
@media (max-width: 768px) {
  .btn {
    padding: 10px 16px;
    font-size: 15px;
  }
}

@media (max-width: 480px) {
  .btn {
    padding: 8px 14px;
    font-size: 14px;
  }
}
</style>