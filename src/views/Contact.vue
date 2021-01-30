<template>
  <!-- Section -->
  <section>
    <header>
      <h2>Contact</h2>
    </header>
    <div class="content">
      <form>
        <div class="fields">
          <div class="field half">
            <input type="text" name="name" id="name" placeholder="Name" />
          </div>
          <div class="field half">
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div class="field">
            <textarea name="message" id="message" placeholder="Message" rows="7"></textarea>
          </div>
        </div>
        <input type="submit" value="Send Message" class="button primary" />
      </form>
    </div>
    <footer>
      <ul class="items">
        <ul>
          <h6>Email</h6>
          <p>nattawut.eleven@gmail.com</p>
        </ul>
        <ul>
          <h6>Phone</h6>
          <p>+6697-116-6798</p>
        </ul>
        <ul>
          <h6>Address</h6>
          <p>
            365/916 Soi 47, Phutthabucha Road,
            <br />Bang Mod, Thung Khru, Bangkok 10140
          </p>
        </ul>
      </ul>
      <h4>Elsewhere</h4>
      <ul class="icons">
        <li>
          <a href="https://www.facebook.com/KenzChiro">
            <v-icon>fab fa-facebook</v-icon>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/nk_nattawut/">
            <v-icon>fab fa-instagram</v-icon>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/nk-nattawut/">
            <v-icon>fab fa-linkedin</v-icon>
          </a>
        </li>
        <li>
          <a href="https://github.com/kenzchiro">
            <v-icon>fab fa-github</v-icon>
          </a>
        </li>
      </ul>
    </footer>
  </section>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style scoped>
ul.icons li {
  display: inline-block;
  cursor: default;
  list-style: none;
  width: 2rem;
  height: 2rem;
  text-align: center;
  align-content: center;
  border-radius: 100%;
  vertical-align: middle;
}
ul.icons li:hover {
  background-color: rgba(144, 144, 144, 0.1);
  color: #ff9a9a;
}
p {
  margin-bottom: 2em;
  color: darkslategrey;
}
a {
  color: darkslategrey;
}
h3 {
  margin-bottom: 0.1em;
}
.spacing {
  padding: 1rem;
}
.wrapper > section:last-of-type > header:before {
  height: 100%;
}

.wrapper > section:last-of-type > header:after {
  background: #43d9b8;
  border-radius: 0.5rem;
  bottom: -1.5rem;
  content: "";
  display: block;
  height: 0.5rem;
  position: absolute;
  width: 0.5rem;
  z-index: 1;
}

@media screen and (max-width: 1152px) {
  .wrapper > section:last-of-type > header:after {
    display: none;
  }
}
h4,
h5,
h6 {
  color: #001a33;
  margin-top: 0;
  margin-bottom: 5px;
  letter-spacing: 1px;
  text-transform: none;
  font-size: 90%;
}
</style>