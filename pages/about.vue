<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga harum
      repellat, eaque laboriosam quas tempore dignissimos consectetur modi
      veritatis delectus excepturi earum a consequatur corrupti in! Laboriosam
      eaque quia quis!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga harum
      repellat, eaque laboriosam quas tempore dignissimos consectetur modi
      veritatis delectus excepturi earum a consequatur corrupti in! Laboriosam
      eaque quia quis!
    </p>
    <div>{{ data.message }}</div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/ninja?name=Fani", {
  method: "post",
  body: { age: 30 },
});
console.log(data.value);
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
