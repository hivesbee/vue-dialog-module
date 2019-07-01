<template>
  <div class="wrapper">
    <div class="dialog">
      <header>ダイアログ</header>
      <hr>
      <div class="content">
        コンテンツコンテンツ<br>
        コンテンツコンテンツ<br>
        コンテンツコンテンツ<br>
        コンテンツコンテンツ<br>
      </div>
      <hr>
      <div class="action">
        <button type="button" @click="close()">閉じる</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      close() {
        this.$emit('close')
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .dialog {
    background-color: #fafafa;
  }

  hr {
    margin: auto 8px;
    border: none;
    border-top: solid 1px #e0e0e0;
  }

  header {
    padding: 24px 32px 8px;
  }

  .content {
    padding: 24px 32px 8px;
    background-color: transparent;
  }

  .action {
    padding: 8px 32px 8px;
  }
</style>
