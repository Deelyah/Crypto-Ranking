<template>
  <div>
    <button class="wallet rounded-full px-4 py-1">
      <slot></slot>
    </button>
  </div>
</template>

<style scoped>
.wallet {
    color: white;
    font-family: lato;
    background-color: #18c683;
    box-shadow: 0 5px 8px -3px rgba(0, 0, 0, 0.6);
  }

  .wallet:hover {
    transition: transform 0.2s ease 0s;;
  }
</style>