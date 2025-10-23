<template>
  <div class="navbar">
    <div class="navbar__title" @click="$router.push('/')">Vue 3</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Посты</my-button>
      <my-button @click="$router.push('/about')">О сайте</my-button>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 30px;
  margin-bottom: 30px;
  background: #ffffff;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid #f0f0f0;
  font-family: 'Segoe UI', system-ui, sans-serif;
}

.navbar__title {
  font-size: 26px;
  font-weight: 800;
  color: #42b883;
  letter-spacing: -0.5px;
  cursor: pointer;
}

.navbar__btns {
  display: flex;
  gap: 15px;
}
</style>