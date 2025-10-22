<template>
  <div class="app">
    <post-form
        @create="createPost"
    />
    <post-list
        :posts="mockPosts"
        @remove="removePost"
    />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
export default {
  components: {
    PostList, PostForm
  },
  data() {
    return {
      mockPosts: [
        {id: 1, title: "Пост о JavaScript", body: "JavaScript один из самых популярных языков программирования"},
        {
          id: 2,
          title: "Пост о Vue.js",
          body: "Vue - прогрессивный фреймворк для создания пользовательских интерфейсов"
        },
      ],
    }
  },
  methods: {
    createPost(post) {
      this.mockPosts.push(post);
    },
    removePost(post) {
      this.mockPosts = this.mockPosts.filter(p => p.id !== post.id);
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 16px;
  background: #f8fafc;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}



/* Мобильная адаптивность */
@media (max-width: 768px) {
  .app {
    padding: 12px;
  }
}

@media (max-width: 480px) {
  .app {
    padding: 8px;
  }
}
</style>