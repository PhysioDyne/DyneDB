const fs = require("fs");
class CRUD {
  constructor(url) {
    this.fileData = JSON.parse(fs.readFileSync(url));
  }
  findAll() {
    return this.fileData;
  }
  find(param) {
    return this.fileData.find((params) => param == Object.values(params)[0]);
  }
  create(param) {
    var obj = JSON.parse(JSON.stringify(param));
    this.fileData.push(obj);
    console.log(obj);
    fs.writeFileSync(
      "./Model/database.json",
      JSON.stringify(this.fileData, null, 2)
    );
  }
  delete(param) {
    const result = this.fileData.filter(
      (params) => param != Object.values(params)[0]
    );
    fs.writeFileSync("./Model/database.json", JSON.stringify(result, null, 2));
  }

  update(param) {
    const result = this.fileData.filter(
      (params) => param != Object.values(params)[0]
    );
    result.push(param);
    fs.writeFileSync("./Model/database.json", JSON.stringify(result, null, 2));
  }
}
module.exports = CRUD;
