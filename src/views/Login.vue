<template>
  <section class="center">
    <form class="box" @submit.prevent>
      <b-field label="Email">
        <b-input type="email" name="email" />
      </b-field>
      <b-field label="Password">
        <b-input type="password" name="password" password-reveal />
      </b-field>
    </form>
  </section>
</template>
