<script lang="ts">
  import "../app.css";
  
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte'

  import { siteTitle } from '$lib/config'
  
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<svelte:head>
<title>{siteTitle}</title>
</svelte:head>

<!-- Let's enclose this on one div-->
<div class="container mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl px-4 py-5 md:px-8 lg:px-24">
  {#if !data.user}
    <Header />
  {:else}
    <Header user={data.user.username}/>
  {/if}
   
  <main id="main" class="justify-center flex flex-auto">
  <slot />
  </main>
   
  <Footer />
</div>