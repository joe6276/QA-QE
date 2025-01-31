const fs = require('fs');

const data = {
  users: [
    {
      id: 1,
      password: 'John1234',
      email: 'john@example.com'
    }
  ],

  posts: [
    {
      id: 1,
      title: 'Post 1',
      description: 'Dummy Description'
    }
  ]
};


  fs.writeFileSync('test.json', JSON.stringify(data, null, 2));



console.log('Database seeded successfully!');
