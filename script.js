let perguntas = [
  {
    titulo: 'Que cidade serve de cenário para o seriado?',
    alternativas: ['a) Los Angeles', 'b) Orlando', 'c) Las Vegas', 'd) Miami'],
    correta: 3
   },

  {
    titulo: 'Qual regra abaixo NÃO se aplica ao código ensinado por Harry?',

    alternativas: [
      'a) Ao responder um exame psicológico, sempre responda o contrário do que você sente.',
      'b) Você pode matar inocentes, desde que não façam parte do seu círculo social.',
      'c) Não tenha pressa.',
      'd) Finja sentimentos para se enquadrar na sociedade.'],
    correta: 1
   },

 {
  titulo: 'Qual o nome verdadeiro do irmão biológico de Dexter?',
  alternativas: ['a) Brian Moser', 'b) Rudy Cooper', 'c) Bryce Truck', 'd) Joseph Driscoll'],
  correta: 0
 },

 {
  titulo: 'Na segunda temporada, Dexter trai Rita com outra mulher. Qual o seu nome?',
  alternativas: ['a) Nina', 'b) Maria', 'c) Louis', 'd) Lila'],
  correta: 3
 },

 {
  titulo: 'Quem foi o assassino de Frank Lundy?',
  alternativas: ['a) Christine Hill', 'b) Bay Harpor Butcher', 'c) Trinity', 'd) Lila Tournay'],
  correta: 3
 },
 

 {
  titulo: 'Onde os avós de Astor e Cody moram?',
  alternativas: ['a) Nova York', 'b)  Orlando', 'c) São Francisco', 'd) Miami'],
  correta: 1
 },

 {
  titulo: 'Qual a profissão que Arthur Mitchell usava como disfarce para esconder seu lado sombrio?',
  alternativas: ['a) Médico', 'b)  Jornalista', 'c) Professor', 'd) Carpinteiro'],
  correta: 2
 },

 {
  titulo: 'Qual a relação da mãe biológica de Dexter com Harry Morgan?',
  alternativas: ['a) Parceiros na Polícia', 'b) Informante e amante', 'c) Amigos da academia de polícia', 'd) Vizinhos'],
  correta: 1
 },

 {
  titulo: 'Quem foi o policial que descobriu o lado sombrio de Dexter e acabou morto por isso?',
  alternativas: ['a) Miguel Prado', 'b) Frank Lundy', 'c) Joseph Quinn', 'd) James Doakes'],
  correta: 3
 },

 {
  titulo: 'Como se chama o barco de Dexter?',
  alternativas: ['a) Slice of Life', 'b) Piece Of Life', 'c) Slice of Piece', 'd) Rita, my life'],
  correta: 0
 },

 {
  titulo: 'Que amigo Dexter convida para ser padrinho de seu casamento com Rita?',
  alternativas: ['a) Angel Batista', 'b) Vince Masuka', 'c) Miguel Prado', 'd) Joseph Quinn'],
  correta: 2
 },


 {
  titulo: 'Que nome Dexter usou para se aproximar de Arthur Mitchell sem ser identificado?',
  alternativas: ['a) Chris Butter', 'b) Carl Richardson', 'c) Kyle Butler', 'd) Mike Mora'],
  correta: 2
 },


 {
  titulo: 'Qual o sabor preferido da pastilha do Ice Truck Killer?',
  alternativas: ['a) Lima', 'b) Morango', 'c) Framboesa', 'd) Menta'],
  correta: 3
 },

 




]

let app = {
    start: function(){
      this.Atualpos = 0
      this.Totalpontos = 0

      let alts = document.querySelectorAll('.alternativa')
      alts.forEach((element, index)=>{
        element.addEventListener('click', ()=> {
          this.checaResposta(index);
        })
      })
      this.resultado()
      app.mostraquestao(perguntas[this.Atualpos])
  },

    mostraquestao: function(q){
      this.qatual = q;
      //mostrando o título
      let titleDiv = document.getElementById('titulo')
      titleDiv.textContent = q.titulo;


      //mostrando as alternativas
      let alts = document.querySelectorAll('.alternativa')
      alts.forEach(function(element, index){
        element.textContent = q.alternativas[index]
    
      })
  },

  Proximaperg: function(){
    this.Atualpos++;
    if(this.Atualpos == perguntas.length){
      this.Atualpos = 0;
    }
  },

    checaResposta: function(user){
      if(this.qatual.correta == user){
        console.log('Correta!')
        this.Totalpontos++
      }
      else{
        console.log('errada!')
      }

      this.resultado()
      this.Proximaperg()
      this.mostraquestao(perguntas[this.Atualpos])
    },

    //atualizaPontos: function(){
     // let scoreDiv = document.getElementById('pontos');
     // scoreDiv.textContent = ` ${this.Totalpontos}`
    //},

    resultado: function(){
    let res = document.querySelector('button')
    res.addEventListener('click', () =>{
      res.textContent = `Seu resultado é ${this.Totalpontos}`
    })
    },

    rescorreta: function(correto){
    let resCorreta = document.getElementById('rescorreta')
    resCorreta = ''
    //formatar como a mensagem será exibida
    
    }

    
}

app.start();