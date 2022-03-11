<!-- Start of 'Contact' Landing -->
<section class="pt-16">
    <!-- Contact Info + Form Container -->
    <div class="w-full lg:flex ">
      <div
        class="relative flex-grow justify-center px-8 lg:px-20 flex items-center py-20 lg:py-48 rounded-r-full overflow-hidden"
      >
        <div
          class="absolute top-0 right-0 bottom-0 left-0 "
        ></div>
        <!-- Contact Info -->
        <div class="z-10">
          <h2
            class="text-2xl mb-5 text-black font-inconsolata uppercase font-bold"
          >
            Contacto
          </h2>

          <div>
            <div class="flex items-center mb-10">
              <div class="p-2 rounded-full mr-6 ">
                <img-100
                  src="images/svg/accept-call.svg"
                  width="30"
                  height="30"
                  viewbox="0 0 30 30"
                  alt="telephone icon"
                />
              </div>
              <div>
                <span class="block text-xl font-medium text-black"
                  >Tel.</span
                >
                <span class="block font-medium text-xl text-black"
                  ><a href="tel:+34678518892">(+34) 678 518 892</a></span
                >
              </div>
            </div>
          </div>
          <div class="flex items-center mb-10">
            <div class="p-2 rounded-full mr-6 ">
              <img
                src="images/svg/email-received.svg"
                height="30"
                width="30"
                alt="email icon"
                viewbox="0 0 30 30"
              />
            </div>
            <div>
              <span class="block  font-medium text-black text-xl"
                >Email Address</span
              >
              <span class="block font-medium text-black text-xl"
                ><a href="mailto:info@agencyga.com">
                  info@agencyga.com</a
                ></span
              >
            </div>
          </div>
          <div class="flex items-center mb-10">
            <div class="p-2 rounded-full  mr-6">
              <img
                src="images/svg/google-map.svg"
                width="30"
                height="30"
                alt="google maps pin point"
              />
            </div>
            <div>
              <span class="block  font-medium text-black text-xl"
                >Oficina
              </span>
              <span class="block font-medium text-black text-xl"
                >Avenida Zarautz, 20018 San Sebastian</span
              >
            </div>
          </div>
        </div>
      </div>
      <!-- Contact Form -->
      <div
        class="flex-grow justify-center  px-8 lg:px-20 py-20 lg:py-48"
      >
        <div class="flex justify-center">
          <div>
            <h2 class="text-4xl mb-5 text-black font-handwriting">
              Deja una nota
            </h2>
            <span class=" text-3xl font-bold text-brightPink mb-5"
              >TODO EMPIEZA CON UN HOLA</span
            >
            <!-- Form -->
            <form
              name="contacto"
              data-netlify="true"
              autocomplete="off"
              netlify-honeypot="bot-field"
            >
              <p class="hidden">
                <label
                  >No llenes esto si eres humano: <input name="bot-field"
                /></label>
              </p>
              <div class="input-animated">
                <label htmlfor="name" class="w-full label-name"
                  ><span class="content-name w-full text-l"
                    >Nombre e Apellidos</span
                  ></label
                >
                <input
                  type="text"
                  id="name"
                  name="name"
                  required=""
                  pattern="\S+.*"
                  placeholder=""
                  class="w-full border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus-ring-1"
                />
              </div>

              <div class="input-animated">
                <label htmlfor="company" class="w-full label-name"
                  ><span class="content-name w-full text-l"
                    >Nombre Empresa</span
                  ></label
                >
                <input
                  type="text"
                  id="company"
                  name="company"
                  pattern="\S+.*"
                  placeholder=""
                  class="w-full border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus-ring-1"
                />
              </div>

              <div class="input-animated">
                <label htmlfor="website" class="w-full label-name"
                  ><span class="content-name w-full text-l"
                    >Website (Opcional)</span
                  ></label
                >
                <input
                  type="text"
                  id="website"
                  name="website"
                  pattern="\S+.*"
                  placeholder=""
                  class="w-full border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus-ring-1"
                />
              </div>

              <div class="input-animated">
                <label htmlfor="email" class="label-email"
                  ><span class="content-email text-l ">Email</span></label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  required=""
                  placeholder=""
                  class="w-full border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus-ring-1"
                />
              </div>

              <div class="mt-2 w-full">
                <textarea
                  name="question"
                  placeholder="Mensaje"
                  id="question"
                  cols="35"
                  rows="6"
                  minlength="10"
                  maxlength="100"
                  required=""
                  class="border-gray-300 w-full"
                ></textarea>
              </div>
              <button
                type="submit"
                id="submit-button"
                class="text-dark w-full uppercase hover:text-white border border-yellow-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
              >
                Enviar
              </button>
              <span
                id="success"
                class="hidden absolute mt-2 px-4 py-2 font-medium border rounded-sm border-green-500 bg-green-100 text-green-600"
                >¡Gracias! Nos pondremos en contacto pronto.</span
              >
              <span
                id="error"
                class="hidden absolute mt-2 px-4 py-2 font-medium border rounded-sm border-red-500 bg-red-100 text-red-600"
                >Whoops... Algo salió mal.</span
              >
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>