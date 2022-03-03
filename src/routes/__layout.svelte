<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Logo from '$lib/components/logo.svelte';
	import Hero from '$lib/components/hero.svelte';
    import Cards from '$lib/components/cards.svelte';
	import Grow from '$lib/components/grow.svelte';
	import Trabajos from '$lib/components/trabajos.svelte';


</script>
<body class="font-inconsolata bg-baseColor lg:h-screen ">

<Navbar />
<Hero />
<Cards />
<Grow />
<Trabajos />
<Footer />

	<slot />
</body>

