<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Logo from '$lib/components/logo.svelte';


</script>
<body class="font-inconsolata bg-baseColor lg:h-screen ">

<Navbar />
<Footer />

	<slot />
</body>

