const fs = require("fs");
const putanjaPodataka = "../oglasi.json";

exports.listaOglasa = procitajPodatkeIzFajla();

let procitajPodatkeIzFajla = () => {
  return JSON.parse(
    fs
      .readFileSync(putanjaPodataka, (err, data) => {
        if (err) throw err;
        return data;
      })
      .toString()
  );
};

let sacuvajOglasUDatoteku = (podaci) => {
  fs.writeFileSync(putanjaPodataka, JSON.stringify(podaci));
};

exports.VratiGolasZaId = (id) => {
  return this.listaOglasa.find((o) => o.id == id);
};

exports.izbrisiOglas = (id) => {
  this.izbrisiOglas = this.listaOglasa.filter((o) => o.id != id);
  sacuvajOglasUDatoteku(this.listaOglasa);
};
exports.dodajOglas = (oglas) => {
  let id =
    this.listaOglasa.length > 0
      ? this.listaOglasa[this.listaOglasa.length - 1].id + 1
      : 0;
  oglas.id = id;
  this.listaOglasa.push(oglas);
  sacuvajOglaseUDatoteku(this.listaOglasa);
};

exports.promeniOglas = (oglas) => {
  this.listaOglasa[this.listaOglasa.findIndex((o) => o.id == oglas.id)] = oglas;
  sacuvajOglaseUDatoteku(this.listaOglasa);
};
exports.filtriraniOglasi = (kategorija) => {
    return this.listaOglasa.filter(o => o.kategorija.toLowerCase().includes(kategorija.toLowerCase()))
}
