<script>

import ThemeSelect from "./theme-select.svelte";

</script>

<header class=" justify-between pb-2  w-full z-40">

  <nav
  class="lg:max-w-screen-xl my-4  ml-auto mr-auto mb-8"
>


  <ul class="flex flex-row flex-wrap justify-evenly uppercase text-xl">

    <li class="themeS"><ThemeSelect /></li>
    <li>
      <a
        class="text-xl text-candyAppleRed font-bold border-current border-b-4 hover:border-none"
        href="/"
        >Inicio</a
      >
    </li>
    <li>
      <a
        class="text-xl text-primary font-bold border-current border-b-4 hover:border-none"
        href="/contacto"
        >Contacto</a
      >
    </li>
    <li>
      <a
        class="text-xl text-brightPink font-bold border-current border-b-4 hover:border-none"
        href="/blog"
        >Blog</a
      >
    </li>
    <li>
      <a
        class="text-xl text-sapphire font-bold border-current border-b-4 hover:border-none"
        href="/sobre-mi"
        >Sobre Mi</a
      >
    </li>
  </ul>

</nav>
</header>


<style>
  @media only screen and (max-width: 640px){
 .themeS{
   display: none;
  }
}
</style>