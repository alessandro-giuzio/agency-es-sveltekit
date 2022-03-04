 <!-- Contact Info + Form Container -->
 <section class="flex flex-col">

    <!-- Contact Form -->
    <div
      class="flex-grow justify-center bg-gray-50 px-8 lg:px-20 py-20 lg:py-48"
    >

      <div class="lg:flex justify-evenly sm:flex-col">
        <div>
          <h2 class="highlight mb-5 text-3xl font-bold text-black">
            ESTA INDUSTRIA SE MUEVE RAPIDO,

            <span
              class="font-handwriting text-3xl lg:text-4xl font-medium mb-1 text-black"
              >PERO </span
            >TU PUEDES ESTAR AL DIA:
          </h2>
          <span class="mb-5 text-2xl font-bold text-brightPink"
            >TODO EMPIEZA CON UN HOLA</span
          >
        </div>
        <div>
          <!-- Form -->
          <form
            name="homepage"
            data-netlify="true"
            autocomplete="off"
            netlify-honeypot="bot-field"
          >
            <p class="hidden">
              <label
                >Don’t fill this out if you’re human: <input name="bot-field"
              /></label>
            </p>
            <div class="input-animated">
              <label htmlfor="name" class="w-full label-name"
                ><span class="content-name w-full"
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
                ><span class="content-name w-full"
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
                ><span class="content-name w-full"
                  >Website (Optional)</span
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
                ><span class="content-email">Email</span></label
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
              class="text-dark w-full uppercase hover:text-white border border-yellow-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2"
            >
              Enviar
            </button>
            <span
              id="success"
              class="hidden absolute mt-2 px-4 py-2 font-medium border rounded-sm border-green-500 bg-green-100 text-green-600"
              >Thanks! We'll be in touch soon.</span
            >
            <span
              id="error"
              class="hidden absolute mt-2 px-4 py-2 font-medium border rounded-sm border-red-500 bg-red-100 text-red-600"
              >Whoops... Something went wrong.</span
            >
          </form>
        </div>
      </div>
    </div>
  </section>