export class InMemoryDataService {
  createDb() {
    let rankings = [
      {id: "1", name: 'Gov', picture: "https://robohash.org/gov"},
      {id: "2", name: 'Godwin', picture: "https://robohash.org/godwin"},
      {id: "3", name: 'Bombasto', picture: "https://robohash.org/bombasto"},
      {id: "4", name: 'Celeritas', picture: "https://robohash.org/celeritas"},
      {id: "5", name: 'Magneta', picture: "https://robohash.org/magneta"},
      {id: "6", name: 'RubberMan', picture: "https://robohash.org/rubberman"},
      {id: "7", name: 'Dynama', picture: "https://robohash.org/dynama"},
      {id: "8", name: 'Dr IQ', picture: "https://robohash.org/driq"},
      {id: "9", name: 'Magma', picture: "https://robohash.org/magma"},
      {id: "10", name: 'Tornado', picture: "https://robohash.org/tornado"}
    ];
    return {rankings};
  }
}