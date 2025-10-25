<template>
  <div>
    <header class="app-header">
      <my-input
          v-focus
          :model-value="searchQuery"
          placeholder="Поиск"
          @update:model-value="setSearchQuery"
      ></my-input>
      <div class="app-header-btns">
        <my-button @click="showDialog">
          Создать пост
        </my-button>
        <my-select
            v-model="selectedSort"
            :model-value="selectedSort"
            :options="sortOptions"
            @update:model-value="setSelectedSort"
        ></my-select>
      </div>
    </header>

    <my-dialog v-model:show="dialogVisible">
      <post-form
          @create="createPost"
      />
    </my-dialog>

    <main class="app-main">
      <post-list
          v-if="!isPostsLoading"
          :posts="sortedAndSearchedPosts"
          @remove="removePost"
      />
      <div v-else class="loader-container">
        <div class="loader"></div>
        <p class="loader-text">Загружаем посты...</p>
      </div>
      <div
          v-if="page < totalPages && !isPostsLoading"
          v-intersection="loadMorePosts"
          class="observer"
      ></div>
    </main>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import axios from 'axios';
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  components: {
    PostList, PostForm
  },
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort',
    }),
    ...mapActions({
      fetchPosts: 'post/fetchPosts',
      loadMorePosts: 'post/loadMorePosts',
    }),
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
  },
  mounted() {
    this.fetchPosts();
  },
  watch: {},
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostsLoading: state => state.post.isPostsLoading,
      selectedSort: state => state.post.selectedSort,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      sortOptions: state => state.post.sortOptions
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts',
    })
  }
}
</script>

<style>


.app-header {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 800px;
  margin-bottom: 32px;
  padding: 0 20px;
}

.app-title {
  font-size: 32px;
  font-weight: 700;
  color: #1a1a1a;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.app-header-btns {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}

.app-main {
  max-width: 800px;
  padding: 0 20px;
}

.loader-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  max-width: 800px;
  margin: 0 auto;
}

.loader {
  width: 48px;
  height: 48px;
  border: 4px solid transparent;
  border-top: 4px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 16px;
}

.loader-text {
  font-size: 18px;
  color: #64748b;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 500;
  margin: 0;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  .app-header {
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;
    text-align: center;
  }

  .loader-container {
    padding: 40px 16px;
  }

  .loader {
    width: 40px;
    height: 40px;
  }

  .loader-text {
    font-size: 16px;
  }

}

@media (max-width: 480px) {
  .app-header {
    margin-bottom: 20px;
    padding: 0 12px;
  }

  .app-main {
    padding: 0 12px;
  }

  .loader-container {
    padding: 30px 12px;
  }

  .loader {
    width: 36px;
    height: 36px;
    border-width: 3px;
  }

  .loader-text {
    font-size: 15px;
  }
}

.observer {
  height: 10px;
}
</style>