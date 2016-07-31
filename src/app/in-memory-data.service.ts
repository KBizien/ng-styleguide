export class InMemoryDataService {
  createDb() {
    let rankings = [
      {id: 0, name: 'Gov', picture: "https://robohash.org/gov",
        members : [
          {
            id: 0,
            name : "Gov",
            points : 8,
          },
          {
            id: 1,
            name : "Bibiche",
            points : 2,
          },
          {
            id: 2,
            name : "Pottier",
            points : 2,
          },
          {
            id: 3,
            name : "Franky",
            points : 12,
          },
        ]
      },
      {id: 1, name: 'Godwin', picture: "https://robohash.org/godwin"},
      {id: 2, name: 'Bombasto', picture: "https://robohash.org/bombasto"},
      {id: 3, name: 'Celeritas', picture: "https://robohash.org/celeritas"},
      {id: 4, name: 'Magneta', picture: "https://robohash.org/magneta"},
      {id: 5, name: 'RubberMan', picture: "https://robohash.org/rubberman"},
      {id: 6, name: 'Dynama', picture: "https://robohash.org/dynama"},
      {id: 7, name: 'Dr IQ', picture: "https://robohash.org/driq"},
      {id: 8, name: 'Magma', picture: "https://robohash.org/magma"},
      {id: 9, name: 'Tornado', picture: "https://robohash.org/tornado"}
    ];
    return {rankings};
  }
}