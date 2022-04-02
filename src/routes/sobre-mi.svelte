<script>
import Html from "$lib/herramientas/html.svelte";
import Css3 from "$lib/herramientas/css3.svelte";
import Bootstrap from "$lib/herramientas/bootstrap.svelte";
import Tailwind from "$lib/herramientas/tailwind.svelte";
import Js from "$lib/herramientas/js.svelte";
import Git from "$lib/herramientas/git.svelte";
import Npm from "$lib/herramientas/npm.svelte";
import Figma from "$lib/herramientas/figma.svelte";


</script>

<main class="pt-4 pb-4 lg:pt-4 lg:pb-6 flex flex-col shadow-inner bg-baseColor">
    <article class="w-full lg:w-1/2 lg:mx-auto mt-24 ">
      <h1
        class="text-5xl sm:text-7xl text-center font-bold text-candyAppleRed mb-4"
      >
        SOBRE MÍ
      </h1>
      <div class="avatar">
        <div class="w-64 mask mask-squircle">
          <img src="images/profile/profile.webp" alt="foto de Alessandro sonriente">
        </div>
      </div>
      <p class="mb-4 text-2xl text-black">
        Hola, soy Alessandro. Estudié Economía y Marketing en Italia, y
        entonces ya hacía páginas web con
        <span class="highlight">"Frontpage"</span>. Fue una época fantástica;
        solo lo hacía por diversión, pero los resultados eran muy buenos para
        aquella época.
      </p>

      <p class="mb-4 text-2xl text-black">
        Después de pasar unos años en el Reino Unido y convertirme en <a class="links" href="https://www.coffeesoul.com" target="_blank">
          tostador
          de café profesional
        </a>, me mudé a España y trabajé durante casi 12 años
        en una empresa inmobiliaria. Me ocupaba del marketing y del contenido
        de las redes sociales, hasta que ocurrió la pandemia.
      </p>

      <p class="mb-4 text-2xl text-black">
        Reorienté mi carrera y empecé a trabajar como desarrollador web y
        especialista en marketing autónomo, impulsando mis habilidades y
        tomándome mi tiempo para aprender las últimas herramientas del
        mercado. Cada día aprendo algo nuevo, lo cual me ayuda a potenciar mis
        habilidades y estar preparado para nuevos proyectos.
      </p>
      <h2 class="highlight text-2xl lg:text-2xl mt-12 mb-4 text-gray-800 font-semibold">Mis herramientas de trabajo</h2>
      <ul class="flex justify-between gap-2 mb-2">


        <li><Html/></li>
        <li><Css3/></li>
        <li><Js/></li>
        <li><Bootstrap/></li>
        <li><Tailwind/></li>
        <li><Git/></li>
        <li><Npm/></li>
        <li><Figma/></li>


      </ul>


    </article>

  </main>

  <!-- Start of CTA section -->
  <section class="py-24 shadow-inner">
    <div class="text-center">
      <a href="/contacto">
        <button
          type="button"
          class="text-black uppercase hover:text-white border border-yellow-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
        >
          ¡Ponte en Contacto Ahora!
        </button>
      </a>
    </div>
  </section>
