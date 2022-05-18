<script>
  import cat from '$lib/assets/cat02.jpg'
  import profile from '$lib/assets/cat04.jpg'
  import heart from '$lib/assets/icons/heart.svg'
</script>

<section>
  <div class="user">
    <img src={profile} alt="">
    <div>
      <h2>Daan</h2>
      <p>June 3rd</p>
    </div>
  </div>
  <img src={cat} alt="cat">
  <div class="meta">
    <img src={heart} alt="Heart">
    <p>69 Likes</p>
  </div>
</section>

<style>

section {
  margin-bottom: 1.5em;
}

.user {
  display: flex;
  font-size: .8rem;
  align-items: center;
  padding: .5em 0;
  gap: .5em
}

.user img {
  width: 3em;
  height: 3em;
  border-radius: 50%;
  border: 2px solid var(--accent);
}

.user h2,
.user p {
  font-size: .8rem;
}

.user p {
  color: var(--text-light);
}

section > img {
  width: 100%;
  height: 30vh;
  object-fit: cover;
  border-radius: var(--radius);
}

.meta {
  display: flex;
  align-items: center;
  gap: .5em;
}

.meta img {
  width: 1.5em;
  height: 1.5em;
}
</style>