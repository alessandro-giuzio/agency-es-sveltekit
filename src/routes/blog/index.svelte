





<!-- Start of Blog -->
<main class="pt-4 mt-12 px-4  flex flex-col shadow-inner">

<!--   <h1>GraphCMS starter blog</h1>
<ul>
  {#each posts as post}
  <li>
    <a href="/blog/{post.slug}">{post.title}</a>
  </li>
  {/each}
</ul> -->
    <section class="pb-40 lg:pt-40 lg:pb-60 flex justify-center">
      <ul
        class="mx-8 w-full md:mx-auto md:w-11/12 lg:mx-auto lg:w-2/3 xl:w-1/2"
      >
        <!-- 1St Blog Post -->
        <a
          class="inline-block rounded-md transition-all duration-300 shadow-sm hover:shadow-lg transform hover:scale-105 p-4 lg:p-8 mb-16 md:mb-12 border bg-white border-gray-200"
          href="/como-combatir-el-sindrome-del-impostor"
        >
          <div class="flex flex-col-reverse md:grid md:grid-cols-5">
            <div class="flex min-h-0 flex-col col-start-1 col-end-3 md:mr-6">
              <div class="mt-2 md:mt-0">
                <span class="uppercase font-semibold text-gray-700 text-xs"
                  >Productividad</span
                ><span class="text-gray-400 mx-2 font-medium text-sm"
                  >19 Enero 2022</span
                >
              </div>

              <div>
                <h2 class="text-3xl font-bold my-2 highlight uppercase">
                  Cómo combatir el síndrome de los impostores.
                </h2>
              </div>
              <time datetime="19 Juanary 2022"></time>
              <p class="text-base mb-6 flex-grow text-black">
                Al crecer, nos enseñan que el trabajo duro equivale al éxito o
                al menos nos pone en el camino hacia el éxito. Lo que debería
                tener sentido, ¿verdad?
              </p>
            </div>
            <div
              class="rounded-md overflow-hidden h-48 lg:h-full lg:min-h-0 lg:col-start-3 lg:col-end-6"
            >
              <img
                class="w-full object-cover object-bottom"
                src="./images/blog/imposter.webp"
                alt="una persona cayendo por un agujero en un cono de luz blanca."
              />
            </div>
          </div>
        </a>
        <div class="md:flex">
          <!-- 2nd Blog Post-->
          <div class="flex flex-col md:w-1/2 md:mr-4 md:mb-0">
            <a
              href="./blog/crea-tu-pagina-web"
              class="inline-block rounded-md transition-all duration-300 shadow-sm hover:shadow-lg transform hover:scale-105 p-4 mb-16 md:mb-12 border border-gray-200 bg-white"
            >
              <div class="rounded-md overflow-hidden h-48 lg:h-72">
                <img
                  class="h-full w-full object-cover rounded-md"
                  src="./static/images/blog/websitebuilder.webp"
                  alt="unas manos dibujando sobre papel."
                />
              </div>
              <div class="flex flex-col">
                <div class="mt-2">
                  <span class="uppercase font-semibold text-gray-700 text-xs"
                    >SEO</span
                  ><span class="text-gray-400 mx-2 font-medium text-sm"
                    >03 Enero 2022</span
                  >
                </div>
                <h2 class="text-2xl font-bold my-2 highlight">
                  NO SOLO CONSTRUIMOS SITIOS WEB
                </h2>
                <time datetime="03 Jan 2022"></time>
                <p class="text-base mb-6 flex-grow text-black">
                  Conectar con sus clientes en línea es una de las mejores
                  maneras no solo de estar presente en su mente, sino también
                  de realizar transacciones comerciales. Una presencia en
                  línea eficaz puede ayudarlo a crecer, y desarrollarla puede
                  ser una empresa rentable por sí misma.
                </p>
              </div>
            </a>
          </div>

          <!-- 3rd Blog Post-->
          <div class="flex flex-col md:w-1/2 md:ml-4">
            <a
              href="/crezca-su-negocio"
              class="inline-block rounded-md transition-all duration-300 shadow-sm hover:shadow-lg transform hover:scale-105 p-4 mb-16 md:mb-12 border border-gray-200 bg-white"
            >
              <div class="rounded-md overflow-hidden h-48 lg:h-72">
                <img
                  class="h-full w-full object-cover rounded-md"
                  src="grow-your-shop.c0027f2c.webp"
                  alt="una planta cresciendo en una bombilla."
                />
              </div>
              <div class="flex flex-col">
                <div class="mt-2">
                  <span class="uppercase font-semibold text-gray-700 text-xs"
                    >Productividad</span
                  ><span class="text-gray-400 mx-2 font-medium text-sm"
                    >20 Dic 2021</span
                  >
                </div>
                <h2 class="text-2xl font-bold my-2 highlight">
                  HAGA QUE SU NEGOCIO CREZCA
                </h2>
                <time datetime="20 Dec 2021"></time>
                <p class="text-base mb-6 flex-grow text-black">
                  La actual era de la conexión digital requiere algo más que
                  un buen servicio para vender: también hay que
                  comercializarlo. Independientemente del tipo de negocio que
                  dirija, una sólida presencia en línea puede aumentar el
                  conocimiento de su marca, hacer crecer su audiencia, atraer
                  a los clientes y ayudarle a aumentar las ventas.
                </p>
              </div>
            </a>
          </div>
        </div>
      </ul>
      <hr
        class="my-20 bg-horizontalPluses bg-no-repeat h-4 bg-center max-w-6xl border-none"
      />
    </section>
    <!-- Previuos Articles Section  -->
    <!-- <section class="overflow-hidden text-gray-800">
      <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
        <h2 class="text-2xl font-bold my-2 highlight">Previuos Articles</h2>
        <div class="flex flex-wrap -m-1 md:-m-2">
          <div class="flex flex-wrap w-1/3 border border-gray-200 bg-white">
            <div class="w-full p-1 md:p-2">
              <img
                alt="lightbulb with inside dirt and a small plant"
                class="block object-cover object-center w-full h-full rounded-md"
                src="./images/blog/grow-your-shop.webp"
              />
            </div>
            <div class="mt-2 md:mt-0">
              <span class="uppercase font-semibold text-gray-700 text-xs"
                >SEO Marketing</span
              ><span class="text-gray-400 mx-2 font-medium text-sm"
                >20 Dec 2021</span
              >
            </div>

            <h3 class="highlight">Grow your shop</h3>

            <p>
              Today’s era of digital connection requires more than just
              providing a good service to sell - you have to market it, too.
            </p>
            <button
              type="button"
              class="text-footer2 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
            >
              Read Article
            </button>
          </div>

        </div>
      </div>
    </section> -->
    <section class="cta w-full lg:w-1/2 lg:mx-auto">
      <h2 class="text-xl lg:text-2xl mt-12 mb-4 text-black font-semibold">
        Hoy en día, trabajo con ciertas empresas selectas que buscan impulsar
        su presencia en la red para llegar a lo más alto y nunca bajar de la
        cima. ¿Usted también busca lo mismo?
        <a class="font-bold" href="/contacto"
          ><h2 class="highlight text-4xl hover:opacity-75">
            ¡Póngase en contacto conmigo!
          </h2></a
        >
      </h2>
    </section>
  </main>