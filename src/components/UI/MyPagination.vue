<template>
  <div class="page__wrapper" v-if="totalPages > 1">
    <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        :class="{
              'active': activePage === pageNumber
            }"
        class="page"
        @click="changePage(pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-pagination',
  props: {
    totalPages: {
      type: Number
    },
    activePage: {
      type: Number
    }
  },
  methods: {
    changePage(pageNumber) {
      this.$emit('changePage', pageNumber)
    }
  }
}
</script>

<style scoped>
.page__wrapper {
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px 0;
}

.page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  padding: 0 12px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  background-color: white;
  color: #4a5568;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  user-select: none;
}

.page:hover {
  border-color: #cbd5e0;
  background-color: #f7fafc;
  transform: translateY(-1px);
}

.page.active {
  border-color: #4299e1;
  background-color: #4299e1;
  color: white;
}

.page.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.page.disabled:hover {
  border-color: #e2e8f0;
  background-color: white;
  transform: none;
}

@media (max-width: 768px) {
  .page__wrapper {
    gap: 6px;
    padding: 16px 0;
  }

  .page {
    min-width: 36px;
    height: 36px;
    padding: 0 10px;
    font-size: 13px;
  }
}
</style>