<template>
  <div id="app" style="margin-left: 1em; margin-right: 1em">
    <b-button icon-left="mdiAccount">Hello</b-button>
    <b-icon icon="mdiAccount" size="is-large"></b-icon>
    <app-icon icon="account" size="42"/>
    <span class="icon">
      <svg viewBox="0 0 24 24">
        <path :d="$icons.mdiAccount"></path>
      </svg>
    </span>
  </div>
</template>
