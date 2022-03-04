<script>
import Logo from "./logo.svelte";
import Github from "./github.svelte";
import Twitter from "./twitter.svelte";
import Linkedin from "./linkedin.svelte";

</script>
<footer class="py-16">
    <div
      class="flex flex-col lg:flex-row items-center justify-between mx-auto max-w-screen-xl"
    >
      <div class="flex items-center">
        <!-- Logo SVG-->
        <Logo />
      </div>
      <ul
        class="flex flex-col lg:flex-row items-center text-lg font-extrabold text-black py-12 lg:py-0"
      >
        <li class="mx-7 hover:text-gray-700 mb-2 lg:mb-0 uppercase">
          <a href="/">Empieza Aqui</a>
        </li>
        <li class="mx-7 hover:text-gray-700 mb-2 lg:mb-0 uppercase">
          <a href="/contacto">CONTACTO</a>
        </li>
        <li class="mx-7 hover:text-gray-700 mb-2 lg:mb-0 uppercase">
          <a href="/blog">CONSEJOS DE CRECIMIENTO</a>
        </li>
        <li class="mx-7 hover:text-gray-700 mb-2 lg:mb-0 uppercase">
          <a href="/sobre-mi">Sobre mi</a>
        </li>
      </ul>
      <div class="flex text-gray-500">
        <!-- Twitter Logo -->
       <Twitter />
        <!-- Github Logo -->
        <Github />
        <!-- Linkedin Logo -->
        <Linkedin />
      </div>
    </div>

    <!-- Fine Print-->
    <div
      class="flex flex-col items-center mt-24 text-sm text-black font-bold uppercase"
    >
      <span>&copy; Alessandro Giuzio 2022</span>
    </div>
    <div
      class="flex flex-col items-center mt-8 text-xs text-black font-bold uppercase"
    >
      <span
        ><a href="/politica-de-privacidad"
          >Politica de Privacidad</a
        ></span
      >
    </div>
  </footer>


