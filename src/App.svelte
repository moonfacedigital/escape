<script>
  import { onMount } from 'svelte'
  function setFavicons(favImg) {
    let headTitle = document.querySelector('head')
    let setFavicon = document.createElement('link')
    setFavicon.setAttribute('rel', 'shortcut icon')
    setFavicon.setAttribute('href', favImg)
    headTitle.appendChild(setFavicon)
  }
  let curtain = false
  function toggleCurtain() {
    curtain = !curtain
  }
  async function handleClick() {
    toggleCurtain()
    window.replace('https://google.com')
    document.title = 'Google'
    setFavicons('./favicon.ico')
  }
  function onKeyDown(e) {
    var key = e.key || e.keyCode
    if (key == 'Escape') {
      handleClick()
    }
  }
  let noti = true
  onMount(() => {
    let status = sessionStorage.getItem('esc_noti')
    if (status) {
      noti = false
    }
  })
  function hideNoti() {
    noti = !noti
    sessionStorage.setItem('esc_noti', 'hidden')
  }
</script>

<svelte:body on:keydown={onKeyDown} />

<div class="escape_app">
  {#if curtain}
    <div class="bg-white dark:bg-[#202124] w-full h-full z-[999] relative">
      <div
        class="absolute w-full text-sm bottom-0 bg-[#f2f2f2] dark:bg-[#171717] font-[arial, sans-serif]"
      >
        <div
          class="py-[15px] px-[30px] border-b-[1px] dark:border-[#3c4043] text-[15px] text-[#9aa0a6]"
        >
          Loading country
        </div>
        <div
          class="flex google-lg:justify-evenly flex-wrap justify-between px-[20px]"
        >
          <div
            class="justify-start min-w-[30%] order-1 google-lg:justify-evenly flex flex-wrap"
          >
            <div class="text-[#999da2] block p-[15px] whitespace-nowrap">
              Advertising
            </div>
            <div class="text-[#999da2] block p-[15px] whitespace-nowrap">
              Business
            </div>
            <div class="text-[#999da2] block p-[15px] whitespace-nowrap">
              How Search works
            </div>
          </div>
          <div
            class="google-lg:order-none google-lg:w-full google-lg:justify-center order-2 flex flex-wrap justify-between"
          >
            <div class="block p-[15px] whitespace-nowrap">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAMAAAAiV0Z6AAAAPFBMVEVLoEN0wU6CzFKCzFKCzFKCzFKCzFJSo0MSczNDmkCCzFJPoUMTczNdr0gmgziCzFITczMTczMTczMTczPh00jOAAAAFHRSTlPF/+bIsms8Ad///hX+//5/tXw7aMEAx10AAACaSURBVHgBbc4HDoRQCATQ33tbvf9dF9QxaCT9UQaltLHOh/golXKhMs5Xqa0xU1lyoa2fXFyQOsDG38qsLy4TaV+sFislovyhPzLJJrBu6eQOtpW0LjbJkzTuTDLRVNKa3uxJI+VdiRqXSeu6GW+Qxi29eLIi8H7EsYrT42BD+mQtNO5JMjRuC4lSY8V4hsLX0egGijvUSEP9AbylEsOkeCgWAAAAAElFTkSuQmCC"
                alt="leaf"
                class="h-[14px] inline-block mr-[6px]"
              />
              <span class="align-top	whitespace-nowrap	text-[#999da2]"
                >Carbon neutral since 2007</span
              >
            </div>
          </div>
          <div class="justify-end min-w-[30vw] order-3 flex flex-wrap">
            <div class="text-[#999da2] block p-[15px] whitespace-nowrap">
              Privacy
            </div>
            <div class="text-[#999da2] block p-[15px] whitespace-nowrap">
              Terms
            </div>
            <div class="text-[#999da2] block p-[15px] whitespace-nowrap">
              Settings
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
  {#if noti}
    <div class="escape_info">
      Press [Esc] or click the red button at any time to discreetly leave this
      website.
      <div class="escape_info__btn_group">
        <button class="minor_btn">Learn more</button>
        <button on:click={hideNoti} class="cta_btn">Okay</button>
      </div>
    </div>
    <div class="escape_anim__cont">
      <div class="escape_anim" />
    </div>
  {/if}
  <button class="escape_btn" on:click={handleClick}>
    <div class="escape_btn__cont">LEAVE SITE</div></button
  >
</div>

<style lang="postcss">
  @import '../src/styles/components.css';

  @import '../src/styles/utils.css';

  @import '../src/styles/_shame.css';

  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
