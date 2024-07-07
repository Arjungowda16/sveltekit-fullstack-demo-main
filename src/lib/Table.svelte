<script>
    export let names
</script>

<div
	class="mt-10 pt-10 w-full max-w-xxl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
>
	<div class="flex items-center justify-between mb-4">
		<div class="space-y-1">
			<h2 class="text-xl font-semibold">List of Users</h2>
			<p class="text-sm text-gray-500">
				Fetched {names.length} users
			</p>
		</div>
	</div>
	<div class="divide-y divide-gray-900/5">
		{#each names as user (user.id)}
			<div class="flex items-center justify-between py-3">
				<div class="flex items-center space-x-4">
					<div class="flex">
						<p class="font-medium pt-1 leading-none">{user.name}</p>
						<p class="font-medium pl-5 text-gray-500 pt-0">{user.email}</p>                        
					</div>
				</div>
                <form method="POST" action="/profiles?/delete">
                <input type="hidden" name="id" id="id" value={user.id}>
                <button type="submit">
                    <img class="w-4 float-right" src="./trash-can.svg" alt="delete"/>
                </button>
                </form>
				<form method="POST" action="/profiles?/update" class="flex items-center space-x-4">
					<input type="hidden" name="id" id="id" value={user.id}>
					<input type="text" name="name" id="name" value={user.name} class="px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"> 
					<input type="email" name="email" id="email" value={user.email} class="px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
					<button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Update</button>
				</form>
			</div>
		{/each}
	</div>
</div>