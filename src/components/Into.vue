<template>
  <div class="into flex section container">
    <div class="text">
      <div class="tit">
        {{ get_into.name }}
        <span>{{ get_into.sec_mane }}</span>
      </div>
      <p>{{ get_into.introduce }}</p>
    </div>
    <div class="pic">
      <img src="../assets/images/me.png" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Into',
  computed: {
    get_into () {
      return this.$store.state.into
    }
  }
}
</script>

<style lang="scss">
@import '../scss/common';

.into {
  align-items: center;
  width: 70%;
  margin: 40px auto;
  .tit {
    padding-bottom: 12px;
    margin-bottom: 8px;
    border-bottom: 1px solid;
    font-size: 2.4rem;
    font-weight: 700;
    span {
      color: #ccc;
    }
  }
  .text {
    width: 64%;
  }
  .pic {
    width: 36%;
    padding-left: 36px;
    padding-right: 4px;
    img {
      width: 100%;
      border: 6px solid #fff;
      border-radius: 50%;
      box-shadow: 0 0 14px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
