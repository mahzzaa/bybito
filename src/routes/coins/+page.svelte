<script lang="ts">
	import { onMount } from 'svelte';
	export let data;

	// Assume `data.limitedSpotTickers` is your list of tickers
	let loadedTickers = [];
	let isLoading = true;

	onMount(() => {
		// Preload images and filter tickers based on image load success
		const imagePreloadPromises = data.limitedSpotTickers.map(
			(ticker) =>
				new Promise((resolve) => {
					const img = new Image();
					img.onload = () => resolve({ ticker, exists: true });
					img.onerror = () => resolve({ ticker, exists: false });
					img.src = `/tokens/${ticker.symbol.replace(/USDT$/, '').toLocaleLowerCase()}.svg`;
				})
		);

		Promise.all(imagePreloadPromises).then((results) => {
			loadedTickers = results.filter((result) => result.exists).map((result) => result.ticker);
			isLoading = false;
		});
	});
</script>

<div class="flex flex-col justify-center items-center w-full text-center space-x-4">
	<div class="w-full py-10">
		<input
			class="rounded-full text-black px-5 focus:outline-none"
			type="text"
			placeholder="Search your coin..."
			name=""
			id=""
		/>
		<button class=" bg-sky-800 px-3 py-2 rounded-full">Search</button>
	</div>
	{#if isLoading}
		<p>Loading...</p>
	{:else}
		<div class="flex flex-wrap justify-center items-center">
			{#each loadedTickers as ticker}
				<div
					class="flex flex-col justify-center items-center border w-32 m-5 p-5 rounded-md space-y-3
          hover:bg-slate-200 hover:text-black hover:scale-110 hover:cursor-pointer"
				>
					<img
						class="w-10 h-10 rounded-full"
						src={`/tokens/${ticker.symbol.replace(/USDT$/, '').toLocaleLowerCase()}.svg`}
						alt={ticker.symbol.replace(/USDT$/, '').toLocaleLowerCase()}
					/>
					<p>{ticker.symbol}</p>
				</div>
			{/each}
		</div>
	{/if}
</div>
