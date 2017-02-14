interface Impressao {
    imprimir(arquivo: string, quantidadePaginas: number): void;
    
    formatar(arquivo: string): void;

    listarConteudo(): string;
}