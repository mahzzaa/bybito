<script>
	export let tableData;
</script>

<!-- Responsive Container (recommended) -->
<div class="table-container">
	<!-- Native Table Element -->
	<table class="table table-hover">
		<thead>
			<tr>
				<th>symbol</th>
				<th>lastPrice</th>
				<th> volume24h</th>
			</tr>
		</thead>
		<tbody>
			{#each tableData as row, i}
				<tr>
					<td>{row.symbol}</td>
					<td>{row.lastPrice}</td>
					<td>{row.volume24h}</td>
				</tr>
			{/each}
		</tbody>
		<tfoot>
			<tr>
				<th colspan="3">Calculated Total </th>
			</tr>
			<tr>
				<td>
					{tableData.length}
				</td>
			</tr>
		</tfoot>
	</table>
</div>
