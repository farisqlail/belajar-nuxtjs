<template>
  <div>
    <!-- <nav class="navbar navbar-expand-lg bg-white">
      <div class="container-fluid">
        <nuxt-link class="navbar-brand" to="/">Gocement</nuxt-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <nuxt-link class="nav-link active" aria-current="page" to="/"
                >Home</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/blogs">Blog</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/user/2">User</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav> -->
    <nav class="navbar navbar-expand-lg p-3 bg-white">
      <div class="container">
        <nuxt-link class="navbar-brand" to="/">GoCement</nuxt-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <nuxt-link class="nav-link active" aria-current="page" to="/">Home</nuxt-link>
            <nuxt-link class="nav-link" to="/blogs">Blog</nuxt-link>
            <a class="nav-link" href="#">Pricing</a>
            <a class="nav-link disabled">Disabled</a>
          </div>
        </div>
        <div class="d-flex">
          <nuxt-link class="login text-dark mt-2 ml-3 me-2" to="/login">Login</nuxt-link>
          <button class="btn btn-primary">Free Trial</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
  .login {
    text-decoration: none;
  }
</style>