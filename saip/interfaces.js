class iPapel {
  constructor(largura, comprimento, cor, gramatura) {
    if (this.constructor === iPapel) {
      throw new Error("Tentativa de instanciar interface iPapel.");
    }
    
    this.largura = largura;
    this.comprimento = comprimento;
    this.cor = cor;
    this.gramatura = gramatura;
  }

  mostrarPropriedades() {
    throw new Error("O método 1 deve ser implementado em uma classe.");
  }

  mostrarTamanhoFolha() {
    throw new Error("O método 2 deve ser implementado em uma classe.");
  }
}

class ISO extends iPapel {
  constructor(tamanhoMax) {
    super();
    
    if (this.constructor === ISO) {
      throw new Error("... ISO.");
    }
  }
}

class ANSI extends iPapel {
  constructor(tamanhoMax) {
    super();
    
    if (this.constructor === ANSI) {
      throw new Error("... ANSI.");
    }
  }
}
