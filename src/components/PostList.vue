<template>
  <div v-for="post in posts" class="post-card">
    <div class="post-title">{{ post.title }}</div>
    <div class="post-description">{{ post.body }}</div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true
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
}

.post-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  transform: translateY(-1px);
}

.post-title {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 8px;
  line-height: 1.4;
}

.post-description {
  font-size: 15px;
  line-height: 1.5;
  color: #4a5568;
}

@media (max-width: 768px) {
  .post-card {
    padding: 16px;
    margin-bottom: 12px;
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
  }

  .post-title {
    font-size: 16px;
    margin-bottom: 6px;
  }
}
</style>