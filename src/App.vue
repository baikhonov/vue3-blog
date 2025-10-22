<template>
  <div class="app">
    <header class="app-header">
      <h1 class="app-title">Страница с постами</h1>
      <my-button @click="showDialog">
        Создать пост
      </my-button>
    </header>

    <my-dialog v-model:show="dialogVisible">
      <post-form
          @create="createPost"
      />
    </my-dialog>

    <main class="app-main">
      <post-list
          :posts="mockPosts"
          @remove="removePost"
      />
    </main>
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
      dialogVisible: false
    }
  },
  methods: {
    createPost(post) {
      this.mockPosts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.mockPosts = this.mockPosts.filter(p => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
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


.app-header {
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  padding: 0 20px;
}

.app-title {
  font-size: 32px;
  font-weight: 700;
  color: #1a1a1a;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Мобильная адаптивность */
@media (max-width: 768px) {
  .app {
    padding: 16px;
  }

  .app-header {
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;
    text-align: center;
  }

  .app-title {
    font-size: 28px;
  }
}

@media (max-width: 480px) {
  .app {
    padding: 12px;
  }

  .app-header {
    margin-bottom: 20px;
    padding: 0 12px;
  }

  .app-title {
    font-size: 24px;
  }
}
</style>