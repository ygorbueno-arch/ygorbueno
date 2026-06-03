// ==================== DADOS DOS JOGADORES ====================
const NOMES_JOGADORES = {
    goleiros: ["Alisson", "Ederson", "Courtois", "Neuer", "Oblak", "Maignan", "Donnarumma", "Ter Stegen", "Szczesny", "Lloris"],
    laterais: ["Cafu", "Marcelo", "Roberto Carlos", "Dani Alves", "Felipe Luis", "Alexander-Arnold", "Robertson", "Cancelo", "Hakimi", "Theo Hernandez"],
    zagueiros: ["Thiago Silva", "Marquinhos", "Van Dijk", "Ramos", "Pique", "Chiellini", "Bonucci", "Ruben Dias", "Stones", "Alaba"],
    volantes: ["Casemiro", "Fabinho", "Busquets", "Kimmich", "Rodri", "Partey", "Jorginho", "Brozovic", "Rice", "Fernandinho"],
    meias: ["Modric", "Kroos", "De Bruyne", "Bernardo Silva", "Bruno Fernandes", "Pedri", "Gavi", "Bellingham", "Musiala", "Odegaard"],
    atacantes: ["Cristiano Ronaldo", "Messi", "Neymar", "Mbappé", "Haaland", "Lewandowski", "Kane", "Vinicius Jr", "Rodrygo", "Richarlison"]
};

// ==================== LIGAS E TIMES ====================
const LIGAS = {
    premier: { nome: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League", icone: "🦁", times: [
        { nome: "Manchester City", forca: 94, estadio: "Etihad", tecnico: "Guardiola" },
        { nome: "Liverpool", forca: 93, estadio: "Anfield", tecnico: "Klopp" },
        { nome: "Arsenal", forca: 91, estadio: "Emirates", tecnico: "Arteta" },
        { nome: "Chelsea", forca: 90, estadio: "Stamford Bridge", tecnico: "Pochettino" },
        { nome: "Manchester United", forca: 89, estadio: "Old Trafford", tecnico: "Ten Hag" }
    ]},
    laliga: { nome: "🇪🇸 La Liga", icone: "👑", times: [
        { nome: "Real Madrid", forca: 95, estadio: "Bernabéu", tecnico: "Ancelotti" },
        { nome: "Barcelona", forca: 94, estadio: "Camp Nou", tecnico: "Xavi" },
        { nome: "Atlético Madrid", forca: 90, estadio: "Metropolitano", tecnico: "Simeone" },
        { nome: "Real Sociedad", forca: 86, estadio: "Anoeta", tecnico: "Alguacil" },
        { nome: "Sevilla", forca: 85, estadio: "Pizjuán", tecnico: "Mendilibar" }
    ]},
    brasileirao: { nome: "🇧🇷 Brasileirão", icone: "⭐", times: [
        { nome: "Flamengo", forca: 92, estadio: "Maracanã", tecnico: "Tite" },
        { nome: "Palmeiras", forca: 91, estadio: "Allianz", tecnico: "Abel" },
        { nome: "São Paulo", forca: 88, estadio: "Morumbi", tecnico: "Dorival" },
        { nome: "Corinthians", forca: 87, estadio: "Neo Química", tecnico: "Mano" },
        { nome: "Internacional", forca: 86, estadio: "Beira-Rio", tecnico: "Coudet" }
    ]},
    bundesliga: { nome: "🇩🇪 Bundesliga", icone: "🦅", times: [
        { nome: "Bayern Munich", forca: 94, estadio: "Allianz", tecnico: "Tuchel" },
        { nome: "Borussia Dortmund", forca: 90, estadio: "Signal Iduna", tecnico: "Terzić" },
        { nome: "RB Leipzig", forca: 88, estadio: "Red Bull", tecnico: "Rose" },
        { nome: "Bayer Leverkusen", forca: 87, estadio: "BayArena", tecnico: "Alonso" },
        { nome: "Union Berlin", forca: 85, estadio: "Alte Försterei", tecnico: "Fischer" }
    ]},
    seriea: { nome: "🇮🇹 Serie A", icone: "⚫", times: [
        { nome: "Inter Milan", forca: 92, estadio: "San Siro", tecnico: "Inzaghi" },
        { nome: "AC Milan", forca: 91, estadio: "San Siro", tecnico: "Pioli" },
        { nome: "Juventus", forca: 90, estadio: "Allianz", tecnico: "Allegri" },
        { nome: "Napoli", forca: 89, estadio: "Maradona", tecnico: "Garcia" },
        { nome: "Lazio", forca: 87, estadio: "Olimpico", tecnico: "Sarri" }
    ]},
    ligue1: { nome: "🇫🇷 Ligue 1", icone: "🐓", times: [
        { nome: "PSG", forca: 93, estadio: "Parc des Princes", tecnico: "Enrique" },
        { nome: "Marseille", forca: 87, estadio: "Vélodrome", tecnico: "Marcelino" },
        { nome: "Monaco", forca: 86, estadio: "Louis II", tecnico: "Hütter" },
        { nome: "Lyon", forca: 85, estadio: "Groupama", tecnico: "Blanc" },
        { nome: "Lille", forca: 84, estadio: "Pierre-Mauroy", tecnico: "Fonseca" }
    ]}
};

// ==================== POSIÇÕES NO CAMPO ====================
const POSICOES_CAMPO = {
    "4-4-2": {
        "GOL": [{ top: "85%", left: "50%" }],
        "LAT": [{ top: "70%", left: "20%" }, { top: "70%", left: "80%" }],
        "ZAG": [{ top: "75%", left: "35%" }, { top: "75%", left: "65%" }],
        "VOL": [{ top: "60%", left: "50%" }],
        "MEI": [{ top: "40%", left: "25%" }, { top: "40%", left: "50%" }, { top: "40%", left: "75%" }],
        "ATA": [{ top: "15%", left: "35%" }, { top: "15%", left: "65%" }]
    },
    "4-3-3": {
        "GOL": [{ top: "85%", left: "50%" }],
        "LAT": [{ top: "70%", left: "20%" }, { top: "70%", left: "80%" }],
        "ZAG": [{ top: "75%", left: "35%" }, { top: "75%", left: "65%" }],
        "MEI": [{ top: "50%", left: "25%" }, { top: "50%", left: "50%" }, { top: "50%", left: "75%" }],
        "ATA": [{ top: "15%", left: "25%" }, { top: "10%", left: "50%" }, { top: "15%", left: "75%" }]
    },
    "3-5-2": {
        "GOL": [{ top: "85%", left: "50%" }],
        "ZAG": [{ top: "75%", left: "25%" }, { top: "75%", left: "50%" }, { top: "75%", left: "75%" }],
        "VOL": [{ top: "60%", left: "25%" }, { top: "60%", left: "75%" }],
        "MEI": [{ top: "40%", left: "25%" }, { top: "40%", left: "45%" }, { top: "40%", left: "65%" }, { top: "40%", left: "85%" }],
        "ATA": [{ top: "15%", left: "35%" }, { top: "15%", left: "65%" }]
    },
    "5-4-1": {
        "GOL": [{ top: "85%", left: "50%" }],
        "LAT": [{ top: "70%", left: "15%" }, { top: "70%", left: "85%" }],
        "ZAG": [{ top: "75%", left: "30%" }, { top: "75%", left: "50%" }, { top: "75%", left: "70%" }],
        "MEI": [{ top: "45%", left: "25%" }, { top: "45%", left: "50%" }, { top: "45%", left: "75%" }],
        "ATA": [{ top: "15%", left: "50%" }]
    },
    "4-2-3-1": {
        "GOL": [{ top: "85%", left: "50%" }],
        "LAT": [{ top: "70%", left: "20%" }, { top: "70%", left: "80%" }],
        "ZAG": [{ top: "75%", left: "35%" }, { top: "75%", left: "65%" }],
        "VOL": [{ top: "60%", left: "35%" }, { top: "60%", left: "65%" }],
        "MEI": [{ top: "40%", left: "30%" }, { top: "35%", left: "50%" }, { top: "40%", left: "70%" }],
        "ATA": [{ top: "15%", left: "50%" }]
    }
};

// Função para gerar elenco único por time
function gerarElencoUnico(timeNome, forcaTime) {
    const jogadores = [];
    const posicoesMap = [
        { pos: "GOL", qtd: 3, nomes: NOMES_JOGADORES.goleiros },
        { pos: "LAT", qtd: 4, nomes: NOMES_JOGADORES.laterais },
        { pos: "ZAG", qtd: 4, nomes: NOMES_JOGADORES.zagueiros },
        { pos: "VOL", qtd: 3, nomes: NOMES_JOGADORES.volantes },
        { pos: "MEI", qtd: 5, nomes: NOMES_JOGADORES.meias },
        { pos: "ATA", qtd: 4, nomes: NOMES_JOGADORES.atacantes }
    ];
    
    let id = 1;
    for (const posConfig of posicoesMap) {
        for (let i = 0; i < posConfig.qtd; i++) {
            const nomeBase = posConfig.nomes[(id + timeNome.length) % posConfig.nomes.length];
            const nomeUnico = `${nomeBase} ${timeNome.substring(0, 3)}${id}`;
            const variacao = Math.floor(Math.random() * 15) - 7;
            let overall = Math.min(99, Math.max(60, forcaTime + variacao));
            
            jogadores.push({
                id: id,
                nome: nomeUnico,
                posicao: posConfig.pos,
                overall: overall,
                numero: id
            });
            id++;
        }
    }
    return jogadores.sort((a,b) => b.overall - a.overall);
}