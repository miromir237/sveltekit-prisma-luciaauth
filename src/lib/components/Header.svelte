<script lang="ts">
	import { siteTitle } from '$lib/config'

  /*
	const focusMain = () => {
		const main = document.querySelector('main');
		main.focus();
	}
  */
  export let user: string;
  if (user===undefined) {
    user = "42";
  }

</script>

<header>

  <div class="relative flex items-center justify-between pb-4">
    <a href="/" aria-label="Company" title="{siteTitle}" class="inline-flex items-center">
      <svg class="w-8 text-deep-purple-accent-400" viewBox="0 0 24 24" stroke-linejoin="round" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" stroke="currentColor" fill="none">
        <rect x="3" y="1" width="7" height="12"></rect>
        <rect x="3" y="17" width="7" height="6"></rect>
        <rect x="14" y="1" width="7" height="6"></rect>
        <rect x="14" y="11" width="7" height="12"></rect>
      </svg>
      <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 dark:text-gray-300 uppercase">{siteTitle}</span>
    </a>
    <div class="flex items-end justify-end">
      {#if user!=="42"}
        <a href="/profile" class="text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline">{user}</a>
        <a href="/logout" class="ml-4 text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline">Sign out</a>
      {:else}
        <a href="/login" class="text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline">Sign in</a>
        <a href="/signup" class="ml-4 text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline">Sign up</a>
      {/if}
      
  </div>
  
</header>