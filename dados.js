// ============================================================
// DADOS DO CLIENTE — é só isso que muda em cada venda.
// Edite os valores abaixo, troque as fotos na pasta /imagens
// e a música em /musica. Não precisa tocar em mais nada.
// ============================================================

const DADOS = {
  // ---- Capa / abertura ----
  capaTitulo: "Para Brenda",
  capaDica: "toque para entrar",

  // ---- Hero (primeira página) ----
  heroEyebrow: "Com todo o meu amor, para você",
  heroTitulo: "Te amo", // a última palavra do título fica destacada em rosa
  heroSubtitulo: "Cada momento ao seu lado vale a pena",
  heroTexto:
    "Criei esse site porque palavra falada some, mensagem de texto some, mas isso aqui vai ficar. Quero que sempre que você abrir, sinta o quanto eu penso em você, o quanto eu me lembro de nois, e o quanto eu tenho sorte de ter você do meu lado.",

  // ---- Bilhetes (recados curtos, tipo post-it) ----
  // cor: "algodao" (rosa), "manteiga" (amarelo) ou "menta" (verde)
  bilhetes: [
    {
      texto:
        "Você me faz querer ser a melhor versão de mim mesmo todos os dias. Só de pensar em você, meu dia já melhora.",
      rabisco: "todo dia",
      cor: "algodao",
      tilt: -4,
    },
    {
      texto:
        "Eu não preciso de muito — só de você por perto, de um sorriso seu, e tá bom demais.",
      rabisco: "de verdade",
      cor: "menta",
      tilt: 3,
    },
    {
      texto:
        "Lembro de nois e fico com aquele sorriso bobo que eu nem consigo esconder. Você faz isso comigo.",
      rabisco: "para sempre",
      cor: "manteiga",
      tilt: -2,
    },
    {
      texto:
        "Obrigado por existir do jeito que você é. Não muda nada, tá? Tô apaixonado exatamente por isso.",
      rabisco: "do jeitinho",
      cor: "algodao",
      tilt: 4,
    },
  ],

  // ---- Mural de fotos ----
  // tamanho: "normal", "grande" (2x2), "larga" (2x1, use só para foto na horizontal)
  // ou "alta" (1x2, use só para foto na vertical)
  // Todas as fotos são verticais (retrato), então use "normal", "alta" ou "grande"
  fotos: [
    { arquivo: "f1.jpeg", legenda: "A gente junto ❤️", tamanho: "grande" },
    {
      arquivo: "f2.jpeg",
      legenda: "Momentos assim não têm preço",
      tamanho: "normal",
    },
    {
      arquivo: "f3.jpeg",
      legenda: "Você ilumina qualquer lugar",
      tamanho: "alta",
    },
    {
      arquivo: "f4.jpeg",
      legenda: "Sorriso que me conquista",
      tamanho: "normal",
    },
    { arquivo: "f5.jpeg", legenda: "Do nosso jeito", tamanho: "normal" },
    { arquivo: "f6.jpeg", legenda: "Lembrando de nois", tamanho: "alta" },
    { arquivo: "f7.jpeg", legenda: "Felicidade tem rosto", tamanho: "normal" },
    { arquivo: "f8.jpeg", legenda: "Sempre Juntos", tamanho: "grande" },
    { arquivo: "f9.jpeg", legenda: "Olha o sorriso", tamanho: "normal" },
    { arquivo: "f10.jpeg", legenda: "Pra guardar pra sempre", tamanho: "alta" },
    { arquivo: "f11.jpeg", legenda: "Você é demais", tamanho: "normal" },
    { arquivo: "f12.jpeg", legenda: "Juntinhos", tamanho: "normal" },
  ],

  // ---- Varal de motivos ----
  motivos: [
    {
      titulo: "Seu sorriso",
      texto:
        "Tem dias que tá difícil, aí você sorri e parece que tudo se resolve. Não sei como você faz isso.",
    },
    {
      titulo: "Do jeito que você cuida",
      texto:
        "Você não precisa dizer nada — você demonstra. No olhar, no gesto, no cuidado que você tem. Isso me derrete.",
    },
    {
      titulo: "Sua companhia",
      texto:
        "Não importa o que a gente tá fazendo — pode ser saindo, pode ser em casa parado — do seu lado é sempre bom.",
    },
    {
      titulo: "Sua força",
      texto:
        "Você é mais forte do que pensa. Eu vejo isso em você e me inspiro todo dia.",
    },
    {
      titulo: "Como você me faz sentir",
      texto:
        "Com você eu me sinto em paz. É uma sensação estranha de boa — tipo, eu não preciso ser mais ninguém.",
    },
    {
      titulo: "Seu jeito único",
      texto:
        "Não tem ninguém igual a você. E eu não trocaria esse jeito por nada.",
    },
    {
      titulo: "A nossa história",
      texto:
        "Cada memória que a gente foi construindo junto virou um tesouro pra mim. Quero fazer muito mais.",
    },
    {
      titulo: "Você",
      texto:
        "Simples assim. Não tem como explicar tudo que você significa — mas esse site é uma tentativa.",
    },
  ],

  // ---- Raspadinhas (a surpresa final) ----
  surpresas: [
    "Você é a minha música favorita 🎵",
    "Eu me lembro de nois toda hora ❤️",
    "Seu sorriso é meu lugar favorito",
    "Sorte a minha, te encontrar",
    "Você merece tudo de bom",
    "Amo você do jeito que você é 🩷",
  ],

  // ---- Música de fundo ----
  // Coloque o arquivo .mp3 em /musica e escreva o nome aqui. Deixe "" para não ter música.
  musica: "LEMBREI DE NOIS - João Gomes, Fabinho Testado e MC Tuto.mp3",
};
