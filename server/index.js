const {
    client,
    createTables,
    createUser,
    createProduct,
    createFavorite,
    fetchUsers,
    fetchProducts, 
    fetchFavorites
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
    //console.log(harry.id);
    console.log(await fetchUsers());
    console.log(await fetchProducts());

    const favorites = await Promise.all([
      createFavorite(harry.id, wand.id),
      createFavorite(harry.id, broom.id),
      createFavorite(harry.id, uniform.id),
      createFavorite(hermoine.id, books.id),
      createFavorite(hermoine.id, uniform.id),
      createFavorite(ron.id, wand.id)
    ]);
     console.log(await fetchFavorites(harry.id));
  };
  init();