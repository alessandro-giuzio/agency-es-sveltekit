<script>
	import '../app.css';
	import { onMount } from 'svelte'
    import { themeChange } from 'theme-change'
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Logo from '$lib/components/logo.svelte';
	import Hero from '$lib/components/hero.svelte';
    import Main from '$lib/components/main.svelte';
	import Grow from '$lib/components/grow.svelte';
	import Trabajos from '$lib/components/trabajos.svelte';
	import Form from '$lib/components/form.svelte';

	onMount(async () => {
    themeChange(false)
  })


</script>
<body class="font-inconsolata  lg:h-screen ">

<Navbar />
<Hero />
<Main />
<Grow />
<Trabajos />
<Form />
<Footer />

	<slot />
</body>

