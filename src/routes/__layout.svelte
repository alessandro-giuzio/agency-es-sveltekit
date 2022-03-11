<script>
	  import '../app.css';
	  /* import { onMount } from 'svelte' */
    /* import { themeChange } from 'theme-change' */
    import Nav from '$lib/components/nav.svelte';
    import Footers from '$lib/components/footers.svelte';









/* 	onMount(async () => {
    themeChange(false)
  }) */




</script>
<body class="bg-baseColor font-inconsolata w-screen">
<slot />


<Nav />



<Footers />

</body>

