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

  import profile from '$lib/assets/icons/profile_gray.svg'
  import mail from '$lib/assets/icons/mail_gray.svg'
  import lock from '$lib/assets/icons/lock_gray.svg'

  let username
  let email
  let password
  let repeatPassword
  let validation = null

  export let error

  function register() {
    [username, email, password, repeatPassword].forEach(value => {
      if(!value) {
        validation = 'Please fill out all fields.'
        return
      }
    })
    if(validation) return
    if(password !== repeatPassword) {
      validation = 'Passwords are not the same'
      return
    }
    this.submit()
  }
</script>

<h2>Register</h2>
<form action="/auth/signup" method="POST" on:submit|preventDefault={register}>
  <div class="input">
    <img src={profile} alt="username">
    <input type="text" name="username" id="username" placeholder=" " bind:value={username} required>
    <label for="username">Username</label>
  </div>
  <div class="input">
    <img src={mail} alt="mail" class="small">
    <input type="email" name="email" id="email" placeholder=" " bind:value={email} required>
    <label for="email">Email</label>
  </div>
  <div class="input">
    <img src={lock} alt="lock" class="small">
    <input type="password" name="password" id="password" placeholder=" " bind:value={password} required>
    <label for="password">Password</label>
  </div>
  <div class="input">
    <img src={lock} alt="lock" class="small">
    <input type="password" name="repeatPassword" id="repeatPassword" placeholder=" " bind:value={repeatPassword} required>
    <label for="repeatPassword">Repeat password</label>
  </div>
  <button type="submit">Register</button>
  {#if error}
    <p>{error}</p>
  {/if}
  {#if validation}
    <p>{validation}</p>
  {/if}
  <a href="/login">Already have an account?</a>
</form>

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