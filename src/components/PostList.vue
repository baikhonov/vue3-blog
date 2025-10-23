<template>
  <div v-if="posts.length > 0" class="posts-list">
    <h3 class="posts-title">Список постов</h3>
    <div class="posts-container">
      <transition-group name="post-list">
        <post-item
            v-for="post in posts"
            :key="post.id"
            :post="post"
            @remove="$emit('remove', post)"
        >
        </post-item>
      </transition-group>
    </div>

  </div>
  <div v-else class="no-posts">
    <h2 class="no-posts-title">Постов нет</h2>
    <p class="no-posts-description">Создайте первый пост, чтобы он появился здесь</p>
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
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.posts-container {
  display: flex;
  flex-direction: column;
  align-items: stretch; /* Важно! Растягивает детей по ширине */
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

.no-posts {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
}

.no-posts-title {
  font-size: 32px;
  font-weight: 700;
  color: #6b7280;
  margin-bottom: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.no-posts-description {
  font-size: 18px;
  color: #9ca3af;
  line-height: 1.5;
  margin: 0;
}

.post-list-move,
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* Адаптивность для мобильных */
@media (max-width: 768px) {
  .posts-title {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .no-posts {
    padding: 40px 16px;
  }

  .no-posts-title {
    font-size: 28px;
  }

  .no-posts-description {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .posts-title {
    font-size: 22px;
    margin-bottom: 16px;
  }

  .posts-title::after {
    width: 40px;
    margin-top: 6px;
  }

  .no-posts {
    padding: 30px 12px;
  }

  .no-posts-title {
    font-size: 24px;
    margin-bottom: 12px;
  }

  .no-posts-description {
    font-size: 15px;
  }
}

</style>