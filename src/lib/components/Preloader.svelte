<script>
  import cat from '$lib/assets/icons/cat.svg'
</script>

<div>
  <img src={cat} alt="cat">
  <p>Loading</p>
</div>

<style>
  div {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--background);
  }

  img {
    width: 60%;
    animation: blink 1s ease-in-out infinite alternate;
  }

  p::after {
    content: '';
    animation: dots 2s ease-in-out infinite alternate;
  }

  @keyframes blink {
    from {
      opacity: 1;
    }

    to {
      opacity: .5;
    }
  }

  @keyframes dots {
    25% {
      content: '';
    }

    50% {
      content: '.';
    }

    75% {
      content: '..';
    }

    100% {
      content: '...';
    }
  }
</style>