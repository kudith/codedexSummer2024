import React from 'react';

const BoardGameCarousel = () => {
  // Dummy data for board games (replace with actual data)
  const boardGames = [
    {
      id: 1,
      name: 'Settlers of Catan',
      description: 'A strategy board game where players collect resources and build settlements.',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 2,
      name: 'Ticket to Ride',
      description: 'A cross-country train adventure game where players collect train cards to claim railway routes.',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 3,
      name: 'Codenames',
      description: 'A social word game where players give each other one-word clues to guess the words on the board.',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 4,
      name: 'Pandemic',
      description: 'A cooperative board game where players work as a team to fight outbreaks of diseases.',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 5,
      name: 'Azul',
      description: 'A tile-placement game where players compete to create the most aesthetically pleasing patterns.',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 6,
      name: 'Carcassonne',
      description: 'A tile-placement game where players draw and place tiles to build medieval landscapes.',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 7,
      name: 'Scrabble',
      description: 'A word game where players score points by forming words with letter tiles on a board.',
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  return (
    <div className="mx-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold align-center text-eggshell">Check out our board games!</h2>
        <div className="flex space-x-2">
          <button className="bg-gray-200 px-3 py-1 rounded-md text-sm text-gray-800 hover:bg-gray-300 focus:outline-none">Previous</button>
          <button className="bg-gray-200 px-3 py-1 rounded-md text-sm text-gray-800 hover:bg-gray-300 focus:outline-none">Next</button>
        </div>
      </div>

      <div className="overflow-auto whitespace-nowrap">
        {boardGames.map((game) => (
          <div key={game.id} className="inline-block mx-8 bg-eggshell rounded-lg shadow-lg flex-row">
            <div className="flex flex-row span p-5 md:flex-column">
              <img src={game.image} alt={game.name} className="w-72 h-72 m-3 float rounded-md" />
              <div className="p-4">
                <h3 className="text-3xl font-inknut font-bold text-dark-brown">{game.name}</h3>
                <p className="text-sm text-gray-600">{game.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardGameCarousel;
