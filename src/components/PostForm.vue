<template>
  <form class="post-form" @submit.prevent>
    <h2 class="form-title">Создание поста</h2>
    <div class="form-group">
      <input
          v-model="post.title"
          class="form-input"
          placeholder="Название"
          type="text"
      >
    </div>
    <div class="form-group">
      <input
          v-model="post.body"
          class="form-input"
          placeholder="Описание"
          type="text"
      >
    </div>
    <my-button type="submit" @click="createPost" fullWidth>Создать</my-button>
  </form>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
export default {
  components: {MyButton},
  data() {
    return {
      post: {
        title: '',
        body: '',
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: '',
      }
    }
  }
}
</script>

<style scoped>
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

/* Убрал дублирующиеся стили кнопки */

@media (max-width: 768px) {
  .post-form {
    padding: 16px;
    margin-bottom: 12px;
  }

  .form-input {
    padding: 10px 12px;
  }
}

@media (max-width: 480px) {
  .post-form {
    padding: 14px;
    border-radius: 10px;
  }

  .form-title {
    font-size: 17px;
    margin-bottom: 14px;
  }
}
</style>