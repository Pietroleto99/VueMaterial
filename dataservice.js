export default {
  _persons: [],
  getPersons() {
    return this._persons;
  },
  getPerson(id) {
    return this.getPersons().filter(p => p.id === id)[0];
  },
  addPerson(name, description, image) {
    const id = new Date().getTime().toString();
    const person = {
      id: id,
      name: name,
      description: description,
      image: image
    };
    this._persons.push(person);
  },
  deletePerson(id) {
    for (let i = 0; i < this._persons.length; i++) {
      if (this._persons[i].id === id) {
        this._persons.splice(i, 1);
        break;
      }
    }
  }
};

// return [
//   {
//     id: "1",
//     name: "Giuseppe Verdi",
//     description: "Compositore",
//     image:
//       "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE4MDAzNDEwNzEzNDEzMTM0/giuseppe-verdi-9517249-1-402.jpg"
//   },
//   {
//     id: "2",
//     name: "Freddie Mercury",
//     description: "Cantante",
//     image:
//       "https://cdn.images.express.co.uk/img/dynamic/36/590x/Bohemian-Rhapsody-Freddie-Mercury-interview-1091534.jpg?r=1551011899564"
//   },
//   {
//     id: "3",
//     name: "Abraham Lincoln",
//     description: "Presidente",
//     image:
//       "https://psmag.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_600/MTI3NTgxNjM1NzcxMTU2NDkw/lincoln-portrait.webp"
//   }
// ];
