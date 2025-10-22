<template>
  <div class="app">
    <post-form
        @create="createPost"
    />
    <post-list
        :posts="mockPosts"
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
        {
          id: 3,
          title: "Пост о веб-разработке",
          body: "Современная веб-разработка включает в себя множество технологий и подходов"
        },
        {
          id: 4,
          title: "Пост о React",
          body: "React - библиотека для создания интерактивных пользовательских интерфейсов"
        }
      ],
    }
  },
  methods: {
    createPost(post) {
      this.mockPosts.push(post);
    },
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