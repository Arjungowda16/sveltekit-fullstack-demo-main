// import{Root} from '$lib/root.js'
// import{DefaultProvider, sha256, bsv, toByteString} from 'scrypt-ts'
// import{NeucronSigner} from 'neucron-signer'

// const provider = new DefaultProvider({ networks: bsv.Networks.mainnet})
// const signer = new NeucronSigner(provider)
// let instance;
    
// await signer.login('sales@timechainlabs.io', 'string')
// await Root.loadArtifact()

   
// /** @type {import('./$types').Actions} */
// export const actions = {
	
//     // update: async ({ request }) => {
//     //   const data = await request.formData();
//     //   const db = createPool({ connectionString: POSTGRES_URL })
//     //   const client = await db.connect();
  
//     //   const email = data.get('email');
//       // 	const name = data.get('name');
  
//     //   const updateUser = await client.sql`
//     //   UPDATE names
//     //   SET email = ${email}, name = ${name}
//     //   WHERE     ;`
      
//       // 	return { success: true };
//       // },
  
//     deploy: async ({ request }) => {
//       const data = await request.formData();

//       const square = BigInt(data.get('square'))
//       const instance = new Root(square)
//       await instance.connect(signer)
  
//       const deployTx = await instance.deploy(data.get('amount'))
//       console.log(
//           'smart lock deployed : https://whatsonchain.com/tx' + deployTx.id
//       )
  

//       return { success: true, tx: deployTx.id };
// 	},
//     unlock: async ({ request }) => {
//       const data = await request.formData();


//     const root = data.get('root')
//     // await new Promise((f) => setTimeout(f, 5000))
//     const { tx: callTx } = await instance.metods.unlock(root)
//     console.log(
//           'contract unlocked successfully : https://whatsonchain.com/tx' + callTx.id
//     )
//     return { success: true, tx: calltx.id };
// }
// };