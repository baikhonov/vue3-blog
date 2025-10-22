<template>
  <div class="post-card">
    <div class="post-content">
      <div class="post-title">{{ post.title }}</div>
      <div class="post-description">{{ post.body }}</div>
    </div>
    <div class="post-actions">
      <my-button class="btn-delete">
        <span class="btn-icon">🗑️</span>
        Удалить
      </my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
export default {
  components: { MyButton },
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
  max-width: 500px;
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
}

.post-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.post-content {
  flex: 1;
  min-width: 0;
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

.btn-delete {
  background: #dc2626;
}

.btn-delete:hover {
  background: #b91c1c;
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
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