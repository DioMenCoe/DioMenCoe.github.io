let perguntas = [
    {
        titulo: 'Aonde a gente se viu pela primeira vez',
        alternativas: ['Na escola', 'Na praça', 'No cursinho', 'Na balada'],
        correta: 2
    },
    
    {
        titulo: 'Qual o nome dos meus pais?',
        alternativas: ['Ioni e Reginaldo', 'Ivoni e Reinaldo', 'Simone e Wellington', 'Ioni e Edinaldo'],
        correta: 0
    },
    
    {
        titulo: 'Como minha irmã chama?',
        alternativas: ['Luma', 'Brenda', 'Brenna', 'Ioni'],
        correta: 1
    },

{
    titulo: 'Quantos animais de estimação eu tenho?',
    alternativas: ['5', '3', '2', '6'],
    correta: 2
},

{
    titulo: 'O que eu nao bebo?',
    alternativas: ['Vodka', 'Suco kappo', 'Catuaba', 'Cerveja'],
   correta: 3
},

{
   titulo: 'Qual faculdade eu faço? ',
   alternativas: ['Programaçao', 'Arquitetura', 'Engenharia', 'Medicina'],
   correta: 1
},

{
    titulo: 'Para onde nos fomos no primeiro encontro',
    alternativas: ['Praça da bicota', 'Cinema', 'Shopping', 'Supermecado'],
   correta: 2
},

{
    titulo: 'O que já tirei do meu corpo?',
    alternativas: ['Siso', 'Apêndice', 'Amígdalas', 'Pênis'],
    correta: 1
},

{
    titulo: 'Qual a minha habilidade especial ?',
    alternativas: ['Flexibilidade', 'Memoria boa', 'Super Decidido', 'Mexer o Olho'],
    correta: 3
},

{
    titulo: 'Pronta para a pergunta mais importante?!',
    alternativas: ['Sim', 'Não', 'Talvez', '-'],
    correta: 0
},


]

let app = {
    start: function(){
        this.Atualpos = 0;
        this.Totalpontos = 0;
        this.Erros = 0;

        let alts = document.querySelectorAll('.alternativa');
        alts.forEach((element, index)=>{
            element.addEventListener('click', ()=>{
                this.checaResposta(index);
            })
        })
        this.atualizaPontos();
        app.mostraquestao(perguntas[this.Atualpos]);
    },

    mostraquestao: function(q){
        this.qatual = q;
        //mostrando titulo
        let titleDiv = document.getElementById('titulo');
        titleDiv.textContent = q.titulo;
        //mostrando alternativas
        let alts = document.querySelectorAll('.alternativa');
        alts.forEach(function(element, index){
            element.textContent = q.alternativas[index];
        })
    },

    checaResposta: function(user){
        if(this.qatual.correta == user){
            console.log("Correto");
            this.Totalpontos++;
        }else{
            console.log("Errado");
            this.Erros++;
        }
        this.atualizaPontos();
        this.Proximaperg();
        this.mostraquestao(perguntas[this.Atualpos]);
    },

    Proximaperg: function(){
        this.Atualpos++;
        if(this.Atualpos == perguntas.length){
            if(this.Totalpontos == 10){
                location.href = "/duwdwm/duwdwm.html";
            }else{
                alert(`Tente novamente! Você errou um total de: ${this.Erros}`);
                location.href = "/quizz/quizz.html";
            }
        }
    },

    atualizaPontos: function(){
        let scoreDiv = document.getElementById('pontos');
        if(this.Totalpontos >= 10)
        scoreDiv.textContent = `Sua pontuação é: ${this.Totalpontos}`;
    }

}
app.start();