class B extends ISO {
  static tamanhoMax = 0;
  
  constructor() {
    super();
    // Mesmos atributos de A vem aqui
    this.tipos = ["B0", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10"];

    if (this.constructor === B) {
      throw new Error("Por favor, não tente instanciar a classe abstrata B.");
    }
  }
}
