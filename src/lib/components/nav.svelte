<script>

  import Headroom from "svelte-headroom";





    </script>
<Headroom offset={50}>
    <header  class=" pb-2">

      <nav
      class="h-12 lg:max-w-screen-xl  mt-4  ml-auto mr-auto mb-8 "
    >


      <ul class="flex flex-row flex-wrap justify-evenly uppercase text-xl">


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
    </Headroom>


