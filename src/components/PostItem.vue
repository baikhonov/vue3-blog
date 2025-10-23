<template>
  <div class="post-card">
    <div class="post-content">
      <div class="post-id">{{ post.id }}</div>
      <div class="post-title">{{ post.title }}</div>
      <div class="post-description">{{ post.body }}</div>
    </div>
    <div class="post-actions">
      <my-button class="btn-delete"
        @click="$emit('remove', post)"
      >
        <span class="btn-icon">🗑️</span>
        Удалить
      </my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.post-card {
  width: 100%;
  margin-bottom: 16px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid #eef2f6;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: all 0.2s ease;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  box-sizing: border-box;
}

.post-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.post-content {
  flex: 1;
  min-width: 0;
}

.post-id {
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
  background-color: #f3f4f6;
  padding: 4px 8px;
  border-radius: 6px;
  margin-bottom: 8px;
  display: inline-block;
  letter-spacing: 0.5px;
}

.post-title {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 8px;
  line-height: 1.4;
  word-wrap: break-word;
}

.post-description {
  font-size: 15px;
  line-height: 1.5;
  color: #4a5568;
  word-wrap: break-word;
}

.post-actions {
  flex-shrink: 0;
}

.btn-icon {
  font-size: 16px;
}

/* Адаптивность для мобильных */
@media (max-width: 768px) {
  .post-card {
    padding: 16px;
    margin-bottom: 12px;
    gap: 12px;
  }

  .post-title {
    font-size: 17px;
  }

  .post-description {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .post-card {
    padding: 14px;
    border-radius: 10px;
    flex-direction: column;
    gap: 12px;
  }

  .post-title {
    font-size: 16px;
    margin-bottom: 6px;
  }

  .post-actions {
    align-self: stretch;
  }

}
</style>