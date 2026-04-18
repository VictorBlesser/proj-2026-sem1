class C extends ISO {
  static tamanhoMax = 0;
  
  constructor() {
    super();
    // Mesmos atributos de A vem aqui
    this.tipos = ["C0", "C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10"];
    
    if (this.constructor === C) {
      throw new Error("Por favor, não tente instanciar a classe abstrata C.");
    }
  }
}
