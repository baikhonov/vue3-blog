<template>
  <div class="app">
    <form class="post-form" @submit.prevent>
      <h2 class="form-title">Создание поста</h2>
      <div class="form-group">
        <input
            v-bind:value="title"
            @input="title = $event.target.value"
            class="form-input"
            type="text"
            placeholder="Название"
        >
      </div>
      <div class="form-group">
        <input
            v-bind:value="body"
            @input="body = $event.target.value"
            class="form-input"
            type="text"
            placeholder="Описание"
        >
      </div>
      <button class="form-button" type="submit" @click="createPost">Создать</button>
    </form>
    <div v-for="post in posts" class="post-card">
      <div class="post-title">{{ post.title }}</div>
      <div class="post-description">{{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
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
      title: '',
      body: '',
    }
  },
  methods: {
    createPost(event) {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      }
      this.posts.push(newPost);
      this.title = '';
      this.body = '';
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

.post-form {
  width: 100%;
  max-width: 500px;
  margin-bottom: 24px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid #eef2f6;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.form-title {
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  text-align: center;
}

.form-group {
  margin-bottom: 12px;
}

.form-input {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 16px;
  font-family: inherit;
  transition: all 0.2s ease;
}

.form-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-input::placeholder {
  color: #9ca3af;
}

.form-button {
  width: 100%;
  padding: 12px 16px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.form-button:hover {
  background: #2563eb;
  transform: translateY(-1px);
}

.form-button:active {
  transform: translateY(0);
}

/* Мобильная адаптивность */
@media (max-width: 768px) {
  .app {
    padding: 12px;
  }

  .post-card,
  .post-form {
    padding: 16px;
    margin-bottom: 12px;
  }

  .post-title {
    font-size: 17px;
  }

  .post-description {
    font-size: 14px;
  }

  .form-input {
    padding: 10px 12px;
    font-size: 16px; /* Важно для iOS чтобы не зумился */
  }

  .form-button {
    padding: 10px 14px;
  }
}

@media (max-width: 480px) {
  .app {
    padding: 8px;
  }

  .post-card,
  .post-form {
    padding: 14px;
    border-radius: 10px;
  }

  .post-title {
    font-size: 16px;
    margin-bottom: 6px;
  }

  .form-title {
    font-size: 17px;
    margin-bottom: 14px;
  }
}
</style>