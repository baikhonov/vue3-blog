<template>
  <div class="rating-widget">
    <div class="button-group">
      <button @click="addLike" class="btn btn-like">Like</button>
      <button @click="addDislike" class="btn btn-dislike">Dislike</button>
    </div>
    <div class="stats">
      <div class="stat-item">
        <span class="label">Кол-во лайков:</span>
        <strong class="value value-like">{{ likes }}</strong>
      </div>
      <div class="stat-item">
        <span class="label">Кол-во дизлайков:</span>
        <strong class="value value-dislike">{{ dislikes }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      likes: 0,
      dislikes: 0,
    }
  },
  methods: {
    addLike() {
      this.likes++;
    },
    addDislike() {
      this.dislikes++;
    }
  }
}
</script>

<style>
.rating-widget {
  max-width: 300px;
  margin: 20px;
  padding: 24px;
  border: 1px solid #e1e5e9;
  border-radius: 12px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.button-group {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
}

.btn {
  flex: 1;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn:active {
  transform: translateY(0);
}

.btn-like {
  background: #4CAF50;
  color: white;
}

.btn-like:hover {
  background: #45a049;
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
}

.btn-dislike {
  background: #f44336;
  color: white;
}

.btn-dislike:hover {
  background: #da190b;
  box-shadow: 0 4px 12px rgba(244, 67, 54, 0.3);
}

.stats {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.stat-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
}

.label {
  color: #666;
  font-size: 14px;
}

.value {
  font-size: 18px;
  padding: 4px 12px;
  border-radius: 20px;
}

.value-like {
  color: #4CAF50;
  background: #f1f8e9;
}

.value-dislike {
  color: #f44336;
  background: #ffebee;
}
</style>