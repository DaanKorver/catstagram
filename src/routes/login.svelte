<script context="module">

  export async function load({url}) {
    const error = url.searchParams.get('error')
    return {
      props: {
        error
      }
    }
  }

</script>
<script>
  import mail from '$lib/assets/icons/mail_gray.svg'
  import lock from '$lib/assets/icons/lock_gray.svg'

  let email
  let password

  export let error
</script>

<h2>Login</h2>
<form action="/auth/login" method="POST">
  <div class="input">
    <img src={mail} alt="mail" class="small">
    <input type="email" name="email" id="email" placeholder=" " bind:value={email} required>
    <label for="email">Email</label>
  </div>
  <div class="input">
    <img src={lock} alt="lock" class="small">
    <input type="password" name="password" id="password" placeholder=" " bind:value={password} required>
    <label for="username">Repeat password</label>
  </div>
  <button type="submit">Login</button>
</form>
{#if error}
<p>{error}</p>
{/if}
<a href="/signup">Don't have an account?</a>

<style>
  h2 {
    margin-bottom: .5em;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: .8em;
  }

  button {
    border: none;
    padding: 1em;
    background: var(--accent);
    border-radius: var(--radius);
    color: #fff;
    font-size: 1rem;
  }
</style>