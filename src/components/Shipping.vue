<template>
  <div class="shipping">
    <form action="#">
      <label class="shipping_adress shipping_text">
        Shipping Adress
      </label>
      <input
        class="shipping_text"
        id="country"
        list="countries"
        name="myCountry"
        placeholder="Bangladesh">
      <datalist id="countries">
        <option label="Russian Federation" value="russia"></option>
        <option label="United States of America" value="usa"></option>
        <option label="Bangladesh" value="bangladesh"></option>
      </datalist>
      <input
        class="shipping_text"
        type="text"
        id="state"
        name="state"
        placeholder="State"
        pattern="^([A-Za-z0-9\.-]+)$">
      <input
        class="shipping_text"
        type="text" id="postcode"
        name="postcode"
        placeholder="Postcode/Zip"
        pattern="^([0-9\.-]+)$">
      <button class="shipping_button">get a quote</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Shipping',
};
</script>

<style scoped>
.shipping {
  min-height: 285px;
}
.shipping_adress {
  color: #222222;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
}
.shipping input {
  display: block;
  width: 340px;
  height: 45px;
  border: 1px solid #eaeaea;
  background-color: #ffffff;
  padding: 0 15px;
}
@media (max-width: 400px) {
  .shipping input {
    width: auto;
  }
}
input.shipping_text::placeholder {
  color: #b1b1b1;
  font-size: 13px;
  font-weight: 300;
}
.shipping form {
  display: flex;
  flex-direction: column;
}
.shipping_text {
  margin-bottom: 20px;
}
.shipping_button {
  margin-top: 3px;
  width: 100px;
  height: 35px;
  border: 1px solid #eaeaea;
  background-color: #ffffff;
  color: #4a4a4a;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  outline: none;
}
.shipping_button:hover {
  cursor: pointer;
  background-color: #f16d7f;
}
@media (max-width: 1170px) {
  .shipping_button {
    margin: 0 auto;
  }
}

</style>
