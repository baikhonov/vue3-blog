<template>
  <div class="posts-list">
    <h3 class="posts-title">Список постов</h3>
    <post-item
        v-for="post in posts"
        :post="post"
    >
    </post-item>
  </div>

</template>

<script>
import PostItem from "@/components/PostItem";

export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.posts-list {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.posts-title {
  font-size: 28px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 24px;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  position: relative;
}

.posts-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background: #3b82f6;
  margin: 8px auto 0;
  border-radius: 2px;
}

/* Адаптивность для мобильных */
@media (max-width: 768px) {
  .posts-list {
    padding: 16px;
  }

  .posts-title {
    font-size: 24px;
    margin-bottom: 20px;
  }
}

@media (max-width: 480px) {
  .posts-list {
    padding: 12px;
  }

  .posts-title {
    font-size: 22px;
    margin-bottom: 16px;
  }

  .posts-title::after {
    width: 40px;
    margin-top: 6px;
  }
}

</style>