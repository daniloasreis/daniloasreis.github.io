<script lang="ts">
  type Props = {
    color: "pink" | "green";
  };

  const { color }: Props = $props();
</script>

<div class="Container">
  <button aria-label="anterior" class="Button {color}" onclick={() => {}}>
    <svg
      width="21"
      height="43"
      viewBox="0 0 21 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.5 34.7763L15.6712 36.6348L2.25575 23.0023C1.93288 22.6692 1.75232 22.2236 1.75232 21.7598C1.75232 21.2959 1.93288 20.8503 2.25575 20.5173L15.6712 6.88477L17.5 8.74502L4.6935 21.7598L17.5 34.7763Z"
        fill="black" />
    </svg>
  </button>
  <button aria-label="proximo" class="Button {color}" onclick={() => {}}>
    <svg
      width="22"
      height="44"
      viewBox="0 0 22 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.61745 9.00214L5.41858 7.11685L19.0338 20.5499C19.3615 20.8781 19.5487 21.321 19.5555 21.7848C19.5624 22.2486 19.3884 22.6969 19.0705 23.0346L5.85761 36.8636L4.00161 35.0306L16.6146 21.8282L3.61745 9.00214Z"
        fill="black" />
    </svg>
  </button>
</div>

<style lang="scss">
  @use "../../styles/eliestetica/colors.scss";

  .Container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .Count {
    width: 2ch;
    font-variant: numeric;
    text-align: center;
  }
  .Button {
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    height: 2.5rem;
    width: 2.5rem;
    :global(svg) {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  .Button.green {
    background-color: colors.$green-medium;
    &:active {
      background-color: colors.$green-dark;
      color: colors.$green-light;
    }
  }
  .Button.pink {
    background-color: colors.$pink-medium;
    &:active {
      background-color: colors.$pink-dark;
      color: colors.$pink-light;
    }
  }
</style>
