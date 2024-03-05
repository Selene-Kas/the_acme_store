const {
    client,
    createTables,
    createUser,
    createProduct,
    fetchUsers,
    fetchProducts
  } = require('./db');
  
  const init = async() => {
    await client.connect();
    console.log('connected to databse');
    await createTables();
    console.log('tables created');
  
    const [harry, hermoine, ron, wand, books, uniform, broom] = await Promise.all([
      createUser('harry', 'hogwarts1'),
      createUser('hermoine', 'hogwarts2'),
      createUser('ron', 'hogwarts3'),
      createProduct('wand'),
      createProduct('books'),
      createProduct('uniform'),
      createProduct('broom')
    ]);
    console.log(harry.id);
    console.log(await fetchUsers());
    console.log(await fetchProducts());
  };
  init();