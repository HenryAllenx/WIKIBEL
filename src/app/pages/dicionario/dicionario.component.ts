import { Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from '@angular/common';


@Component({
  selector: 'app-dicionario',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgForOf
  ],
  templateUrl: './dicionario.component.html',
  styleUrl: './dicionario.component.scss',

})
export class DicionarioComponent {
  searchTerm: string = '';

  dicionario = [
    {
      letra: 'A',
      palavras: [
        { titulo: 'Abicorar', definicao: 'Ficar por perto, só “manjando”...' },
        { titulo: 'Acesa', definicao: 'Assanhada, fogosa' },
        { titulo: 'Acesume', definicao: 'Assanhamento, fogo' },
        { titulo: 'Acocar-se', definicao: 'Abaixar-se' },
        { titulo: 'Agasalhar', definicao: 'Guardar, proteger.' },
        { titulo: 'Alembrar', definicao: 'Lembrar.' },
        { titulo: 'Antão', definicao: 'Então.' },
        { titulo: 'Apresentado', definicao: 'Atrevido, enxerido.' },
        { titulo: 'Arapuca', definicao: 'Armadilha para pegar passarinho...' },
        { titulo: 'Areia Gulosa', definicao: 'Areia Movediça.' },
        { titulo: 'Arisco', definicao: 'Danado, ágil, ligeiro, esquivo.' },
        { titulo: 'Arredar', definicao: 'Afastar.' },
        { titulo: 'Arreparar', definicao: 'Reparar, observar...' },
        { titulo: 'Arremdar', definicao: 'Imitar.' },
        { titulo: 'Assanhado', definicao: 'Bagunçado, mal arrumado.' },
        { titulo: 'Avacalhado', definicao: 'Desajeitado, bagunçado.' },
        { titulo: 'Avoado', definicao: 'Distraído, cabeça no ar.' },
        { titulo: 'Axí', definicao: 'Interjeição depreciativa.' },
        { titulo: 'Azucrinar', definicao: 'Exasperar, irritar, aborrecer.' }
      ]
    },
    {
      letra: 'B',
      palavras: [
        { titulo: 'Bafo', definicao: 'Mau hálito.' },
        { titulo: 'Baladeira', definicao: 'Atiradeira, objeto feito com uma forquilha de madeira com uma borracha que serve para atirar pedras.' },
        { titulo: 'Baldear', definicao: 'Vomitar.' },
        { titulo: 'Baque', definicao: 'Pancada, machucado.' },
        { titulo: 'Barranco', definicao: 'Ribanceira.' },
        { titulo: 'Beiju', definicao: 'Bolo feito de massa de mandioca ou de tapioca.' },
        { titulo: 'Beirada', definicao: 'Cercania, arredores, nome genérico dado às margens dos igarapés, dos rios, dos lagos, das calçadas.' },
        { titulo: 'Belegueta', definicao: 'Moça sem graça, que não chama atenção, mas que acha que tá com tudo.' },
        { titulo: 'Bença', definicao: 'Benção.' },
        { titulo: 'Benjamin', definicao: 'Adaptador de tomadas.' },
        { titulo: 'Benzimento', definicao: 'Ato de benzer.' },
        { titulo: 'Bichinho', definicao: 'Forma de tratamento que traduz afeto e carinho.' },
        { titulo: 'Bilha', definicao: 'Pequena moringa de barro com gargalo estreito destinada a guardar água a ser consumida.' },
        { titulo: 'Bocada', definicao: 'Mordida.' },
        { titulo: 'Boiúna', definicao: 'Cobra-grande, sucuri.' },
        { titulo: 'Bolo Podre', definicao: 'Bolo feito com farinha de tapioca.' },
        { titulo: 'Boró', definicao: 'Dinheiro Trocado.' },
        { titulo: 'Bombom', definicao: 'Balinha.' },
        { titulo: 'Breguesso', definicao: 'Coisa sem maior valor.' },
        { titulo: 'Breúme ou Breu', definicao: 'Escuro, negro.' },
        { titulo: 'Bubuiar ou de bubuia', definicao: 'Flutuar na superfície d\'água.' },
        { titulo: 'Buiado', definicao: 'Endinheirado.' },
        { titulo: 'Burridade', definicao: 'Burrice.' },
        { titulo: 'Bustela', definicao: 'Meleca.' }
      ]
    },
    {
      letra: "C",
      palavras: [
        { titulo: "Caboclo ou Caboco", definicao: "Mistura de branco com índio, interiorano, analfabeto, semi-analfabeto ou nativo do interior do Estado do Pará. Em tom de ofensa soa como 'cafona', 'brega', pessoa que tem hábitos ou se parece com gente do povo/periferia." },
        { titulo: "Cabaço", definicao: "Pessoa virgem, que nunca teve relações sexuais." },
        { titulo: "Caboquice", definicao: "Adjetivo que diminui algo/fato; palhaçada." },
        { titulo: "Cacuri ou Curral ou Caiçara", definicao: "Armadilha para pegar peixes." },
        { titulo: "Cagoeta", definicao: "Fofoqueiro, aquele que não sabe guardar segredo, dedo-duro." },
        { titulo: "Calango", definicao: "Lagarto verde." },
        { titulo: "Calombo", definicao: "Inchaço, tumefação, elevação na pele." },
        { titulo: "Camapu", definicao: "Fruto comestível de pouco valor, de formato arredondado, de cor verde ou amarelo, envolvido em capa protetora. Physalis angulata L. da família das Solonáceas." },
        { titulo: "Candinha", definicao: "Faladora, fofoqueira." },
        { titulo: "Candiru", definicao: "Peixe miúdo muito conhecido, e até mesmo temido, por penetrar em qualquer orifício do corpo humano, quando imerso em água. Vandellia cirrhosa." },
        { titulo: "Cangote ou Cogote", definicao: "Pescoço." },
        { titulo: "Caninga", definicao: "Má sorte, azar." },
        { titulo: "Carambela", definicao: "Cambalhota." },
        { titulo: "Carapanã", definicao: "Pernilongo, mosquito." },
        { titulo: "Caribé", definicao: "Mingau feito com farinha d’água bem fininha. Diz a crença ser alimento forte, que levanta as forças, quando tomado, em especial, em jejum." },
        { titulo: "Casco", definicao: "Canoa pequena, feita de uma só peça de tronco cavado, sendo que o tripulante ou canoeiro senta na popa." },
        { titulo: "Catiroba", definicao: "Menina fácil, que 'fica' com qualquer um." },
        { titulo: "Catinga ou Inhaca", definicao: "Fedor, mau-cheiro, odor forte e desagradável, normalmente proveniente das axilas de quem não toma banho." },
        { titulo: "Causo", definicao: "Caso, fato, anedota." },
        { titulo: "Cemitério", definicao: "Ou jogo de cemitério: queimada." },
        { titulo: "Cerol", definicao: "Mistura de vidro moído com cola de sapateiro, cuja finalidade é encerar linha de papagaio." },
        { titulo: "Charque", definicao: "Carne seca, jabá." },
        { titulo: "Chibé", definicao: "Alimentação que consiste na mistura de água e farinha d’água. Constitui um tipo de alimentação no meio da gente pobre. Aquele que se alimenta desta mistura é Papa-Chibé. Também este é o apelido dado aos naturais do Pará e do Amazonas." },
        { titulo: "Chope", definicao: "Suco de frutas congelado que vem dentro de um saco plástico." },
        { titulo: "Cisma", definicao: "Desconfiança, inquietação, preocupação." },
        { titulo: "Cocorote ou coque", definicao: "Um leve soco com a falange dos dedos na cabeça; o mesmo que cascudo." },
        { titulo: "Cocotinha ou cocota", definicao: "Diz-se daquela menina bem arrumada, delicada, bonitinha ou garota de vida fácil, meretriz." },
        { titulo: "Coivara", definicao: "Amontoado de paus velhos, de galhos e de folhas secas; restos de queimadas, sujeitos a uma nova queimada, servindo posteriormente, para adubar o terreno em que se cultiva a lavoura." },
        { titulo: "Consumição", definicao: "Lida, inquietação, preocupação." },
        { titulo: "Cuí", definicao: "Farinha fina, peneirada; resto de alguma coisa em forma de pequenos grãos; pouco." },
        { titulo: "Cuia", definicao: "Casca do fruto da cuieira. Quando seca e sem miolo é usada como utensílio doméstico, servindo de farinheira, de tigela para mingau; vasilhame para tomar tacacá." },
        { titulo: "Cuíra", definicao: "Inquieto, traquino, curiosidade, desejo, inquietação, gastura, impaciência." },
        { titulo: "Cumbuca", definicao: "Vaso feito de cabaça na parte superior da qual se fez uma abertura circular. É destinado a conter água e outros líquidos." },
        { titulo: "Cunhã", definicao: "Moça, mulher jovem." },
        { titulo: "Curica", definicao: "Papagaio pequeno feito de papel, e, raramente, com pequenas talas de miriti; geralmente feito com folhas de jornal ou revista." },
        { titulo: "Curupira", definicao: "Ente fantástico que habita as matas, cuja característica é ter os calcanhares para frente e os dedos voltados para trás. É o protetor das matas." },
        { titulo: "Cuscuz", definicao: "Iguaria que se faz com farinha de milho e é cozida à vapor. Por cima salpica-se coco ralado e ainda derrama-se algumas colheradas do leite do coco." },
        { titulo: "Cusparada", definicao: "Cuspir repetidamente." }
      ]
    },
    {
      letra: "D",
      palavras: [
        { titulo: "Danação", definicao: "Diabrura, travessura de criança." },
        { titulo: "Disque", definicao: "O mesmo que 'diz que' ou 'dizem que'." },
        { titulo: "Diacho", definicao: "Expressão de desapontamento, raiva." },
        { titulo: "Derrubar", definicao: "Cagoetar, entregar, dedurar." },
        { titulo: "Despombalecido", definicao: "Estado de moleza e cansaço, fraqueza, enfermidade." },
        { titulo: "Disconforme", definicao: "Muito, bastante, exageradamente." }
      ]
    },
    {
      letra: "E",
      palavras: [
        { titulo: "Égua", definicao: "É usado em 99% das frases ditas pelo paraense, seja de admiração, insatisfação, raiva, espanto, na alegria e na tristeza." },
        { titulo: "Embrabecer", definicao: "Enfurecer-se, ficar brabo, aborrecido." },
        { titulo: "Empiriquitada", definicao: "Faceira, moça bem arrumada." },
        { titulo: "Encafifar", definicao: "Encabular-se, envergonhar-se, intrigar-se." },
        { titulo: "Encarnar", definicao: "Zoar ou tirar sarro com outra pessoa." },
        { titulo: "Esbandalhar ou escangalhar", definicao: "Quebrar, destruir." },
        { titulo: "Esmigalhar", definicao: "Amassar, desmanchar, dividir em vário pedaços pequenos." },
        { titulo: "Espeta-caju", definicao: "Cabelo liso e pontiagudo que nem o pente abaixa." },
        { titulo: "Espiar", definicao: "Olhar, ver." },
        { titulo: "Espinha", definicao: "Coluna vertebral." },
        { titulo: "Estirão", definicao: "Caminhada longa; longo trecho de riacho, sem curvas." },
        { titulo: "Estiva", definicao: "Ponte feita de um só pau, sobre forquilhas em terrenos alagadiços ou pantanosos." },
        { titulo: "Estripulia", definicao: "Travessura, traquinice." }
      ]
    },
    {
      letra: "F",
      palavras: [
        { titulo: "Facada", definicao: "Algo muito caro." },
        { titulo: "Farinhar", definicao: "Fazer ou vender farinha." },
        { titulo: "Feridento", definicao: "Cheio de feridas." },
        { titulo: "Forquilha", definicao: "Vara aforquilhada para impulsionar a canoa." },
        { titulo: "Frito", definicao: "Estar em dificuldade, ferrado, com problemas." },
        { titulo: "Furdunço", definicao: "Festança popular; muita gente reunida; bagunça." }
      ]
    },
    {
      letra: "G",
      palavras: [
        { titulo: "Gambiarra", definicao: "Coisa mal feita, improvisada." },
        { titulo: "Gastura", definicao: "Mal-estar, inquietação, angústia." },
        { titulo: "Gazeteiro", definicao: "Aquele que falta às aulas." },
        { titulo: "Gito ou Gitito", definicao: "Pequeno, miúdo." },
        { titulo: "Gororoba", definicao: "Comida mal feita ou de má qualidade." },
        { titulo: "Guariba", definicao: "Tosse forte e violenta, às vezes sufocante." }
      ]
    },
    {
      letra: "I",
      palavras: [
        { titulo: "Igaçaba", definicao: "Pote de barro, de boca larga, servindo para depósito de água e de farinha." },
        { titulo: "Igapó ou Gapó", definicao: "Alagado; área que fica alagada por um determinado período do ano." },
        { titulo: "Igarapé", definicao: "Canal, córrego ou estreito natural situado entre duas ilhas, ou ainda, entre ilha e terra firme." },
        { titulo: "Igarité", definicao: "Embarcação grande, de madeira, impulsionada a remo ou motor." },
        { titulo: "Ilharga", definicao: "Ao lado, próximo." },
        { titulo: "Inhambu ou Nambu", definicao: "Designação comum às aves tinamiformes da família dos Tinamídeos, parecem com galinhas." }
      ]
    },
    {
      letra: "J",
      palavras: [
        {titulo: "Jamaxi", definicao: "Grande paneiro, tecido de cipó, formando malhas fechado ou aberto. É apoiado na testa e serve para carregar alimentos ou crianças."},
        {titulo: "Jararaca", definicao: "Cobra venenosa, porém mansa; pessoa de gênio forte."},
        {titulo: "Jerimum ou Jurumum", definicao: "Abóbora; fruto da aboboreira."},
        {titulo: "Jia", definicao: "Tipo de anfíbio pequeno e de pele fria."},
        {titulo: "Jirau", definicao: "Estrado de madeira, preso ao chão, cuja finalidade é para lavar ou guardar utensílios domésticos, principalmente panelas e pratos. É comum nos interiores."},
        {titulo: "Joça", definicao: "Porcaria; coisa sem valor; interjeição exclamativa de aborrecimento."},
        {titulo: "Jururu", definicao: "Triste, melancólico, quieto, adoentado, abatido."},
        {titulo: "Juta-irica ou jutaicica", definicao: "Árvore de grande porte, resinosa. Quando o seu tronco é ferido, escorre um óleo, adicionado a uma solução, serve para preparar vernizes. Muito usado para envernizar o interior de panelas de barro."}
      ]
    },
    {
      letra: "L",
      palavras: [
        {titulo: "Leso", definicao: "Idiota, maluco, doido."},
        {titulo: "Lerdeza", definicao: "Patetice, lentidão, malemolência."},
        {titulo: "Lombriguento", definicao: "Cheio de lombrigas."},
        {titulo: "Lorota", definicao: "Mentira, conversa fiada."}
      ]
    },
    {
      letra: "M",
      palavras: [
        {titulo: "Macaxeira", definicao: "O mesmo que aipim. Não é venenosa como a mandioca."},
        {titulo: "Macaca", definicao: "Mesmo que brincadeira de amarelinha."},
        {titulo: "Maciota", definicao: "Sem esforço, na tranquilidade."},
        {titulo: "Maldar", definicao: "Fazer mal juízo, pensar mal de alguém."},
        {titulo: "Malinar", definicao: "Irritar, fazer travessuras, judiar, fazer maldade com alguém."},
        {titulo: "Mandioca", definicao: "Planta leitosa, com tubérculos em amido. Algumas espécies são venenosas e servem para fazer farinha de mesa."},
        {titulo: "Manemolência", definicao: "Moleza, indisposição, fraqueza."},
        {titulo: "Mangal", definicao: "Terreno cheio de mangues."},
        {titulo: "Manicuera", definicao: "Bebida doce feita a partir da fermentação da mandioca."},
        {titulo: "Maninhu ou Maninho", definicao: "Colega, amigo, companheiro."},
        {titulo: "Maniva", definicao: "Planta da família euforbiáceas que depois de moída, serve para fazer a maniçoba, que é um prato típico da região."},
        {titulo: "Mapinguari", definicao: "Gigante lendário semelhante ao homem, coberto de pêlos, com um olho na testa e uma boca na barriga."},
        {titulo: "Maracá", definicao: "Chocalho artesanal feito de cuia, sementes e madeira."},
        {titulo: "Marajoara", definicao: "Aquele que é natural da ilha do Marajó; Sociedade ceramista que habitou a ilha do Marajó no passado."},
        {titulo: "Marimbondo", definicao: "Inseto dotado de ferrão da espécie menóptero. É um tipo de caba, vespa."},
        {titulo: "Maromba", definicao: "Jirau onde se põe o gado por ocasião das cheias. Brincadeira de criança onde se usa uma bola para acertar em outra pessoa."},
        {titulo: "Maruim", definicao: "Inseto de picada dolorosa."},
        {titulo: "Matapi", definicao: "Armadilha artesanal feita de talas de palmeira, utilizada para a pesca do camarão de água doce."},
        {titulo: "Matuto", definicao: "Desconfiado, acaboclado, acanhado, tímido; aquele que vive no mato."},
        {titulo: "Mucuim ou Micuim", definicao: "Inseto cuja picada provoca forte coceira."},
        {titulo: "Miriti", definicao: "Palmeira muito alta própria de lugares alagados. Suas folhas servem para construção de telhados."},
        {titulo: "Mofino ou Mufino", definicao: "Adoentado, enfraquecido, mole, abatido, cansado, sem ânimo, triste."},
        {titulo: "Molongó", definicao: "Adoentado, fraco, abatido."},
        {titulo: "Montaria", definicao: "Canoa pequena feita de toco escavado e ateado fogo."},
        {titulo: "Moquear", definicao: "Secar a carne ou peixe ao moquém para serem conservados."},
        {titulo: "Moquém", definicao: "Grelha de vara para assar e secar o peixe ou a carne."},
        {titulo: "Mocegar ou amorcegar", definicao: "Subir ou descer de um transporte terrestre em movimento."},
        {titulo: "Mordido", definicao: "Estressado, puto, com raiva."},
        {titulo: "Moroçoca ou Muriçoca", definicao: "Mosquito de picada dolorida."},
        {titulo: "Morrinha ou Murrinha", definicao: "Quebreira, preguiça, tédio, indisposição, moleza."},
        {titulo: "Muiraquitã", definicao: "Amuleto indígena, símbolo de sorte e fertilidade. Normalmente têm a forma zoomórfica de uma rã e são feitos de jadeíte. Segundo à lenda, eram feitos pelas guerreiras Amazonas."},
        {titulo: "Mundiar", definicao: "Encantar, atrair, seduzir."},
        {titulo: "Mutá", definicao: "Espécie de escada tosca usada pelos seringueiros para subir nas árvores."},
        {titulo: "Mutuca", definicao: "Nome dado a um inseto de picada forte, da família Tabanídeos."}
      ]
    },
    {
      letra: "O",
      palavras: [
        {titulo: "Ovada", definicao: "Mulher grávida, estado de gestação."},
        {titulo: "Ouriçada", definicao: "Diz-se da menina assanhada ou fogosa, que está no auge da puberdade."}
      ]
    },
    {
      letra: "P",
      palavras: [
        {titulo: "Pai-d'égua", definicao: "Algo excelente, ótimo, muito bom."},
        {titulo: "Pau d'água", definicao: "Muita água, chuva torrencial, tempestade."},
        {titulo: "Pajureba", definicao: "Diz-se quando uma situação ou algo é muito bom, legal, interessante, que chama atenção."},
        {titulo: "Panela", definicao: "Dente acariado, estragado."},
        {titulo: "Panema", definicao: "Infeliz, azarado, sem sorte na caça, na pesca e na vida."},
        {titulo: "Papa-chibé", definicao: "Paraense autêntico; aquele que se alimenta de chibé (água e farinha)."},
        {titulo: "Papeira", definicao: "O mesmo que caxumba ou parotidite. Doença causada pela inflamação das glândulas parótidas."},
        {titulo: "Pareceiro", definicao: "Parceiro; qualquer um."},
        {titulo: "Paresque", definicao: "Parece que."},
        {titulo: "Parideira", definicao: "Mulher que tem muitos filhos."},
        {titulo: "Parol", definicao: "Diz-se do cacho de açaí quando ainda não está totalmente maduro, parte está preta e outra verde."},
        {titulo: "Passamento", definicao: "Mal estar ou tontura que pode levar a pessoa ao desmaio."},
        {titulo: "Pão careca", definicao: "Nome dado ao pão francês de massa grossa."},
        {titulo: "Paúra", definicao: "Gastura, aflição, irritação."},
        {titulo: "Pavulage", definicao: "Faceirice, convencimento, metidez, frescura, pedante, pretensioso."},
        {titulo: "Pávulo", definicao: "Vaidoso, gabola, convencido, metido."},
        {titulo: "Peconha", definicao: "Laço de corda ou de cipó que se prende aos pés das pessoas para auxiliar a subida em árvores sem ramo, em especial, palmeiras de açaí."},
        {titulo: "Penico", definicao: "Urinol, bacio, mijador."},
        {titulo: "Pequena", definicao: "Menina, moça, namorada, mulher. Termo muito usado na cidade de Cametá."},
        {titulo: "Pereba", definicao: "Ferida; lesão na pele."},
        {titulo: "Peteca", definicao: "O mesmo que bolinha de gude."},
        {titulo: "Pipira", definicao: "Mulher que dá em cima do homem alheio."},
        {titulo: "Piquixito", definicao: "Pequeno, pequenino."},
        {titulo: "Pira", definicao: "Sarna, ferida. Brincadeira de criança, tipo pira-alta, pira esconde...; o mesmo que pic."},
        {titulo: "Piracema", definicao: "Época em que os grandes cardumes de peixes vão para as nascentes dos rios para desovar."},
        {titulo: "Piracuí", definicao: "Farinha feita a partir de restos de peixe."},
        {titulo: "Pirão", definicao: "Papa grossa de farinha de mandioca escaldada. Qualquer mistura de caldo de carne, galinha ou peixe com farinha."},
        {titulo: "Pirento", definicao: "Aquele que possui muitas feridas."},
        {titulo: "Pissica", definicao: "Má sorte; desejar o azar do outro; torcer contra."},
        {titulo: "Pitiú", definicao: "Cheiro característico de peixe; cheiro de maré, de maresia."},
        {titulo: "Pitó", definicao: "Arranjo feito com os cabelos, puxados para trás em forma de círculo, com abertura no centro, preso por pente-travessa; o mesmo que coque."},
        {titulo: "Ploc", definicao: "Garota de programa; prostituta; meretriz."},
        {titulo: "Pô-Pô-Pô", definicao: "Embarcação típica ribeirinha, composta por uma canoa coberta, movida a motor de 2 tempos. Possui esse nome devido ao barulho produzido pelo motor quando está navegando pelo rio."},
        {titulo: "Poronga", definicao: "Lamparina usada por ocasião da pesca do camarão; refletor. Espécie de lanterna artesanal usada para iluminação."},
        {titulo: "Pororoca", definicao: "Encontro das águas do rio com as águas do mar, formando grandes ondas nos rios, causando turbulência e forte estrondo."},
        {titulo: "Potoca", definicao: "Mentira, conversa fiada, papo furado."},
        {titulo: "Prenha", definicao: "Grávida, buchuda."},
        {titulo: "Priprioca", definicao: "Planta herbácea cujas raízes têm forma de botão e o caroço tem aroma especial; muito usada para fazer perfumes."},
        {titulo: "Puçá", definicao: "Pequena rede para pescar camarão."},
        {titulo: "Puxada", definicao: "Construção que prolonga o corpo central da casa."}
      ]
    },
    {
      letra: "Q",
      palavras: [
        {titulo: "Quebranto", definicao: "Mal-olhado."},
        {titulo: "Quem-te-dera", definicao: "Ser lendário que costuma encantar homens e usá-los como montaria a noite inteira."}
      ]
    },
    {
      letra: "R",
      palavras: [
        {titulo: "Rabiola", definicao: "Um tipo de pipa feita com papel de seda e talas de miriti."},
        {titulo: "Ralhar", definicao: "Chamar atenção, brigar ou chamar para conversar."},
        {titulo: "Ranzinza", definicao: "Birrento, teimoso, rabugento."},
        {titulo: "Rasga-mortalha", definicao: "Espécie de coruja (suindara) que vive nas cidades e, segundo a crença popular, é agourenta."},
        {titulo: "Refastelar", definicao: "Descansar, distrair-se."},
        {titulo: "Reinar", definicao: "Malinar, irritar, provocar."},
        {titulo: "Remanso", definicao: "Correnteza na margem oposta à do canal do rio, formando um verdadeiro funil. É também chamado de redemoinho."},
        {titulo: "Remendo", definicao: "Conserto ou costura de uma roupa."},
        {titulo: "Restinga", definicao: "Faixa de mato às margens do rio, que surge por ocasião das grandes marés ou cheias de inverno, aflora enquanto o terreno aparece submerso."},
        {titulo: "Riba", definicao: "Acima de, em cima de."}
      ]
    },
    {
      letra: "S",
      palavras: [
        {titulo: "Sabrecar ou Saprecar", definicao: "Chamuscar, queimar superficialmente."},
        {titulo: "Saído", definicao: "Esperto, saliente, enxerido, intrometido."},
        {titulo: "Sairé", definicao: "Dança e canto dos tapuios. Manifestação popular que ocorre na cidade de Santarém."},
        {titulo: "Sagica", definicao: "Rijo, duro."},
        {titulo: "Sapecar", definicao: "Jogar fora, atirar para longe."},
        {titulo: "Sapopema", definicao: "Raiz que cerca a base do tronco de muitas árvores, como a Samaumeira. Índios usavam sua raiz como abrigo."},
        {titulo: "Sassariqueira", definicao: "Assanhada, alegre."},
        {titulo: "Sereno", definicao: "Brisa fria após a chuva."},
        {titulo: "Seboso", definicao: "Sujo, porcalhão, sem higiene."},
        {titulo: "Selado", definicao: "Certo, confirmado, sacramentado."}
      ]
    },
    {
      letra: "T",
      palavras: [
        {titulo: "Tabatinga", definicao: "Argila sedimentar mole e untosa."},
        {titulo: "Tabefe", definicao: "Tapa estalado; bofete."},
        {titulo: "Tacacá", definicao: "Bebida de herança indígena servida em cuia, feita de goma de mandioca fervida, tucupi, camarão seco e jambu. Faz parte da culinária típica do Pará."},
        {titulo: "Tapagem", definicao: "Barragem de terra para represar rios e igarapés."},
        {titulo: "Tapioca", definicao: "Farinha em grãos maiores e bem alva que se extrai da mandioca; espécie de beiju seco consumido com manteiga ou coco."},
        {titulo: "Tapuru", definicao: "Bicho de fruta; qualquer larva branca venenosa ou não."},
        {titulo: "Taquari", definicao: "Cachimbo feito de bambu."},
        {titulo: "Tarubá", definicao: "Bebida fermentada feita da massa de mandioca."},
        {titulo: "Teba", definicao: "Grande, forte, avantajado."},
        {titulo: "Teso", definicao: "Parte elevada de um terreno alagado; duro."},
        {titulo: "Tijuco", definicao: "Pântano, atoleiro, lama preta."},
        {titulo: "Tipiti", definicao: "Instrumento de palha usado para separar a massa de mandioca do tucupi."},
        {titulo: "Tipinga", definicao: "Água esbranquiçada, barrenta."},
        {titulo: "Tiquira", definicao: "Aguardente de mandioca."},
        {titulo: "Topada", definicao: "Tropeço, pancada no pé."},
        {titulo: "Toró", definicao: "Chuva muito forte."},
        {titulo: "Trapiche", definicao: "Construção, na maioria das vezes, de madeira que adentra os limites do rio ou do mar, utilizada para embarque e desembarque de passageiros ou mercadorias, bem como o pescado. Conhecida popularmente em outros estados como: Porto; dique; ponte."},
        {titulo: "Travessa", definicao: "Tiara; arco usado para enfeitar os cabelos."},
        {titulo: "Tucandeira", definicao: "Tipo de formiga cuja ferrada é muito dolorida; sinônimo de calça pescador."},
        {titulo: "Tucupi", definicao: "Líquido amarelo extraído da mandioca, depois de ralada e espremida. Muito usado em pratos da culinária paraense. Se não for fervido, torna-se venenoso."},
        {titulo: "Tuíra", definicao: "Sujo, ressequido (pelo sol e pela lama)."},
        {titulo: "Turú", definicao: "Molusco que se alimenta de troncos submersos, cavando buracos e causando prejuízos em embarcações. O Turu é um alimento muito consumido em comunidades pesqueiras."}
      ]
    },
    {
      letra: "U",
      palavras: [
        {titulo: "Ubá", definicao: "Embarcação indígena sem quilha e sem banco, construída de um só lenho, escavado a fogo ou de uma casca inteiriça de árvore cujas extremidades são amarradas com cipó."},
        {titulo: "Urupema", definicao: "Espécie de peneira de fibra vegetal usada na culinária."}
      ]
    },
    {
      letra: "V",
      palavras: [
        {titulo: "Visagem", definicao: "Espírito, alma penada, assombração."},
        {titulo: "Visgo", definicao: "Rastro."},
        {titulo: "Varejeira", definicao: "Mulher safada, que namora com vários homens."},
        {titulo: "Voadeira", definicao: "Lancha, embarcação aquática veloz movida a motor."}
      ]
    },
    {
      letra: "X",
      palavras: [
        {titulo: "Xarão", definicao: "Tabuleiro de alumínio; fôrma de alumínio retangular."},
        {titulo: "Xirí", definicao: "Vagina, órgão genital feminino."}
      ]
    },
    {
      letra: "Z",
      palavras: [
        {titulo: "Zinho", definicao: "Pequeno, inferior."}
      ]
    }



  ];

  get letrasFiltradas() {
    const termo = this.searchTerm.toLowerCase().trim();

    // Se nada foi digitado, retorna todo o dicionário
    if (!termo) {
      return this.dicionario;
    }

    // Se algo foi digitado, filtra os grupos de palavras
    return this.dicionario
      .map(letra => ({
        letra: letra.letra,
        palavras: letra.palavras.filter(p =>
          p.titulo.toLowerCase().includes(termo) ||
          p.definicao.toLowerCase().includes(termo)
        )
      }))
      .filter(grupo => grupo.palavras.length > 0); // Remove letras sem palavras encontradas
  }
}
