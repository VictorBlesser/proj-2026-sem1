class iFactory {
  criarPapel(tipo) {
    let primeiraLetra = tipo.charAt(0);
    
    if (primeiraLetra == 'A') {
      if (tipo.includes("ANSI")) {
        switch(tipo.slice(-1)) {
          case 'A':
            return new ANSI_A();
          case 'B':
            return new ANSI_B();
          case 'C':
            return new ANSI_C();
          case 'D':
            return new ANSI_D();
          case 'E':
            return new ANSI_E();
          default:
            throw new Error("iFactory: O tipo passado está inválido.");
        }
      }
      else {
        switch(tipo) {
          case 'A0':
            return new A0();
          case 'A1':
            return new A1();
          case 'A2':
            return new A2();
          case 'A3':
            return new A3();
          case 'A4':
            return new A4();
          case 'A5':
            return new A5();
          case 'A6':
            return new A6();
          case 'A7':
            return new A7();
          case 'A8':
            return new A8();
          case 'A9':
            return new A9();
          case 'A10':
            return new A10();
            
          default:
            throw new Error("iFactory: O tipo passado está inválido e se parece com A.");
        }
      }
    }
    else if (primeiraLetra == 'B') {
      switch (tipo) {
        case 'B0':
          return new B0();

        // ...
        
        default:
          throw new Error("iFactory: O tipo passado está inválido e se parece com B.");
      }
    }
    else if (primeiraLetra == 'C') {
      switch (tipo) {
        case 'C0':
          return new C0();

        // ...
        
        default:
          throw new Error("iFactory: O tipo passado está inválido e se parece com C.");
      }
    }
    else {
      throw new Error("iFactory: Tipo inválido, não é por aqui que se instanceia um tipo customizado, se estiver tentando fazer isso.");
    }
  }
}
