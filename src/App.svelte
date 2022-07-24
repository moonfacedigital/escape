<script>
  import { onMount } from 'svelte'
  import { clickOutside } from './clickOutside.js'
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
  function handleClick() {
    toggleCurtain()
    window.location.replace('https://google.com')
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
  function mouseLeave() {
    document.title = 'Google'
    setFavicons('./favicon.ico')
  }
  let ogTitle = document.title
  let favScript = document.querySelector("link[rel*='icon']")
  let ogFavicon = favScript.getAttribute('href')
  function mouseEnter() {
    document.title = ogTitle
    setFavicons(ogFavicon)
  }
  function hideNoti() {
    noti = !noti
    sessionStorage.setItem('esc_noti', 'hidden')
  }
  let more = false
  function learnMore() {
    more = !more
  }
</script>

<svelte:body
  on:keydown={onKeyDown}
  on:mouseleave={mouseLeave}
  on:mouseenter={mouseEnter} />

<div class="escape_app">
  {#if curtain}
    <div
      id="esc_curtain"
      on:click={() => window.location.replace('https://google.com')}
      class="bg-white dark:bg-[#202124] w-full h-full z-[999] relative"
    >
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
  {#if more}
    <div class="more_info__cont h-full w-full inset-0">
      <div class="absolute w-full h-full flex items-center justify-center">
        <div
          use:clickOutside
          on:click_outside={learnMore}
          class="relative py-4 px-1 w-[30em] overflow-hidden m-4 max-w-full bg-white h-4/5 z-10"
        >
          <button
            class="absolute top-0 right-0 bg-mf-slate-200 p-2 rounded-b-sm mr-8 cursor-pointer font-bold w-10 h-10 hover:bg-[#d1d5db] ease-in duration-75"
            on:click={learnMore}>╳</button
          >
          <a
            href="https://github.com/moonfacedigital/escape"
            target="_blank"
            class="absolute bottom-0 right-0 inline-block bg-mf-slate-200 py-2 mb-8 shadow-sm mr-8 px-2 rounded-sm cursor-pointer hover:bg-[#d1d5db] ease-in duration-75"
          >
            Add to your site
          </a>
          <div class="h-full pt-8 pb-12 px-8 overflow-y-auto leading-normal">
            <h1>Discreetly exiting this website</h1>
            <p>
              This site uses <a
                class="inline"
                target="_blank"
                href="https://github.com/moonfacedigital/escape">escape</a
              > to provide a "quick exit" for visitors who want to hide sensitive
              information from others.
            </p>
            <h2>What happens when you click "leave site"</h2>
            <h3>
              Escape is engineered to hide sensitive content in the fastest
              possible way.
            </h3>
            <ol class="list-decimal my-4" style="margin-inline-start: 2.25rem;">
              <li>
                Masking
                <h3>
                  Escape displays a Google look-alike as it readies for
                  redirection.
                </h3>
                <img
                  class="border-2 mt-2 mb-4 border-black/20"
                  src="https://user-images.githubusercontent.com/45979758/180649239-30cbf28f-e9bd-472e-8f50-fc9b4dc22a13.gif"
                  alt="google look-alike display"
                />
                <h3>
                  Both the icon and Title in the toolbar also change to
                  represent Google
                </h3>
                <img
                  class="w-[20ch] border-2 mt-2 mb-4 border-black/20"
                  src="https://user-images.githubusercontent.com/45979758/180649353-aaba46f9-a2db-4f4c-983c-decc3e552439.png"
                  alt="google look-alike tab"
                />
              </li>
              <li>
                Erasure
                <h3>The previous site it erased from the browsers history.</h3>
                <h3>Pressing the back button will not take you back</h3>
              </li>
              <li>
                Redirection
                <h3>The browser is securely redirected to Google.com</h3>
                <h3>
                  Thanks to the Google look-alike, this process is
                  unrecognisable.
                </h3>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div
        class="absolute w-full h-full bg-black/40 pointer-events-none z-[-1]"
      />
    </div>
  {/if}
  {#if noti}
    <div class="escape_info">
      Press [Esc] or click the red button at any time to discreetly leave this
      website.
      <div class="escape_info__btn_group">
        <button on:click={learnMore} class="minor_btn">Learn more</button>
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
