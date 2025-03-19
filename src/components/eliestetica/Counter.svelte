<script lang="ts">
  type Props = {
    color: "pink" | "green";
  };

  const { color }: Props = $props();
  let count = $state(1);

  const removeOne = () => (count = Math.max(0, count - 1));
  const addOne = () => (count = Math.min(10, count + 1));
</script>

<div class="Container">
  <button aria-label="menos um" class="Button {color}" onclick={removeOne}>
    <svg
      width="21"
      height="5"
      viewBox="0 0 21 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.8141 0.881987C19.6307 0.982701 20.2259 1.68129 20.2259 2.50412C20.2259 3.32696 19.6307 4.02555 18.8141 4.12626C17.1027 4.33731 13.9793 4.64301 10.2444 4.64301C6.50959 4.64301 3.38614 4.33731 1.67482 4.12626C0.858164 4.02555 0.262955 3.32696 0.262955 2.50412C0.262955 1.68128 0.858166 0.9827 1.67482 0.881986C3.38615 0.670936 6.50959 0.365234 10.2444 0.365234C13.9793 0.365234 17.1027 0.670937 18.8141 0.881987Z"
        fill="currentColor" />
    </svg>
  </button>
  <span class="Count">
    {count}
  </span>
  <button aria-label="mais um" class="Button {color}" onclick={addOne}>
    <svg
      width="24"
      height="23"
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.7555 0.0976562C10.8373 0.0976562 10.0752 0.807263 10.0098 1.72314L9.5143 8.66008C9.49121 8.98347 9.23395 9.24073 8.91055 9.26383L1.97362 9.75933C1.05774 9.82475 0.348129 10.5868 0.348129 11.5051C0.348129 12.4233 1.05774 13.1854 1.97362 13.2508L8.91055 13.7463C9.23394 13.7694 9.4912 14.0267 9.5143 14.35L10.0098 21.287C10.0752 22.2029 10.8373 22.9125 11.7555 22.9125C12.6737 22.9125 13.4359 22.2029 13.5013 21.287L13.9968 14.35C14.0199 14.0267 14.2771 13.7694 14.6005 13.7463L21.5375 13.2508C22.4533 13.1854 23.1629 12.4233 23.1629 11.5051C23.1629 10.5868 22.4533 9.82475 21.5375 9.75933L14.6005 9.26383C14.2771 9.24073 14.0199 8.98347 13.9968 8.66008L13.5013 1.72314C13.4359 0.807264 12.6737 0.0976562 11.7555 0.0976562Z"
        fill="currentColor" />
    </svg>
  </button>
</div>

<style lang="scss">
  @use "../../styles/eliestetica/colors.scss";

  .Container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
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
      width: 0.75rem;
      height: 0.75rem;
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
