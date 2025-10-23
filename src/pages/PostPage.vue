<template>
  <div>
    <header class="app-header">
      <my-input
          v-model="searchQuery"
          placeholder="Поиск"
      ></my-input>
      <div class="app-header-btns">
        <my-button @click="showDialog">
          Создать пост
        </my-button>
        <my-select
            v-model="selectedSort"
            :options="sortOptions"
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
      <div ref="observer" class="observer"></div>
      <!--      <my-navigation-->
      <!--        :totalPages="this.totalPages"-->
      <!--        :activePage="this.page"-->
      <!--        @changePage="changeCurrentPage"-->
      <!--      ></my-navigation>-->
    </main>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import axios from 'axios';

export default {
  components: {
    PostList, PostForm
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'},
      ]
    }
  },
  methods: {
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
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit,
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.posts = response.data;
      } catch (e) {
        alert(`Ошибка ${e}`);
      } finally {
        this.isPostsLoading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit,
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.posts = [...this.posts, ...response.data];
      } catch (e) {
        alert(`Ошибка ${e}`);
      }
    },
    // changeCurrentPage(pageNumber) {
    //   this.page = pageNumber;
    // }
  },
  mounted() {
    this.fetchPosts();
    const options = {
      rootMargin: "0px",
      scrollMargin: "0px",
      threshold: 1.0,
    };

    const callback = (entries, observer) => {
      if (entries[0].isIntersecting && this.page < this.totalPages) {
        this.loadMorePosts();
      }
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },
  watch: {
    // page() {
    //   this.fetchPosts();
    // }
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return (post1[this.selectedSort] ?? '').localeCompare(post2[this.selectedSort] ?? '');
      })
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
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

  .app-title {
    font-size: 28px;
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

  .app-title {
    font-size: 24px;
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
//width: 100%;
//height: 30px;
//background: green;
}
</style>