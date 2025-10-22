<template>
  <form class="post-form" @submit.prevent>
    <h2 class="form-title">Создание поста</h2>
    <div class="form-group">
      <my-input
          v-model="post.title"
          placeholder="Название"
      ></my-input>
    </div>
    <div class="form-group">
      <my-input
          v-model="post.body"
          placeholder="Описание"
      ></my-input>
    </div>
    <my-button type="submit" @click="createPost" fullWidth>Создать</my-button>
  </form>
</template>

<script>
export default {
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
  max-width: 800px;
  background: white;
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


/* Убрал дублирующиеся стили кнопки */

@media (max-width: 768px) {
  .post-form {
    padding: 16px;
    margin-bottom: 12px;
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