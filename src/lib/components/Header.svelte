<script>
  import { session } from "$app/stores"
</script>

<header>
  <nav>
    <ul>
      <li><a href="/"><h1>Catstagram</h1></a></li>
      {#if !$session.loggedIn}
        <li><a href="/signup" class="signup">Signup</a></li>
      {:else}
        <li><a href="/auth/logout">Logout</a></li>
      {/if}
    </ul>
  </nav>
</header>


<style>
  header {
    background-color: var(--background);
    padding: 1em;
    border-bottom: 1px solid var(--light-gray);
    margin-bottom: .5em;
    position: fixed;
    width: 100%;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: var(--text);
  }

  .signup {
    background: var(--accent);
    padding: .3em 1em;
    border-radius: var(--radius);
    color: #fff;
    }
</style>