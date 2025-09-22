/* data.js — Contenus pour L’Héritage des Avatars
   - window.INTRO : texte d’intro (si tu as un écran d’intro)
   - window.DILEMMAS : 5 dilemmes, compatibles avec ton UI (title, subtitle, A, B)
     + champs optionnels: aDesc, bDesc, aSubtle, bSubtle (si tu veux les afficher)
   - window.ENDINGS : fins rédigées pour les séquences fournies (AAAAA, AAAAB, …)
   - window.getEnding(seq) : fallback si une séquence n’est pas encore dans ENDINGS
*/

// ===== INTRO  =====
window.INTRO = {
  title: "Introduction",
  paragraphs: [
    "<strong>Année 2047.</strong> Le monde est à la fois hyperconnecté et fragmenté. Dans ce tumulte naît <em>Horizon</em>, un métavers appelé à devenir un miroir programmable de l’humanité. Reste une question immense : <em>à quoi ressemblerons-nous ?</em>",
    "Âge, handicap, morphologie, cicatrices… Seront-ils effacés pour créer un idéal commun, ou préservés pour refléter la diversité humaine avec ses tensions ? Vous êtes le <strong>Comité des Pionniers</strong>. Vos votes architectureront ce monde. Aucun futur n’est parfait, aucun n’est totalement mauvais."
  ],
  cta: "Commencer les votes",
  skip: "Passer"
};

// ===== DILEMMES =====
// NB : Ton script lit déjà d.title, d.subtitle, d.A, d.B pour l’UI.
//     Je t’ajoute aDesc/bDesc et aSubtle/bSubtle si tu veux enrichir l’affichage.
window.DILEMMAS = [
  {
    id: "apparences",
    title: "D1 — Apparences : Masquer ou refléter les différences ?",
    subtitle:
      "Dans la première salle, des centaines d’avatars flottent : certains lisses et parfaits, d’autres fidèles aux corps réels (rides, cicatrices, handicaps).",
    A: "Masquer les différences",
    B: "Refléter les différences",
    aDesc:
      "Uniformisation : plus de stigmates visibles ni de corps jugés. L’égalité semble renforcée, au prix d’une homogénéité déroutante.",
    bDesc:
      "Authenticité : la diversité est visible et assumée, mais les réflexes de jugement peuvent ressurgir.",
    aSubtle:
      "Ceux qui souhaitent montrer leur différence deviennent suspects ; la singularité glisse dans l’invisible.",
    bSubtle:
      "Pari sur la maturité collective : tolérance et tensions coexistent."
  },
  {
    id: "culture",
    title: "D2 — Culture : Respect culturel ou liberté d’expression ?",
    subtitle:
      "Hologrammes de traditions, symboles et costumes : hommage libre ou cadre d’authenticité imposé ?",
    A: "Adoption libre",
    B: "Respect culturel obligatoire",
    aDesc:
      "Expression illimitée : chacun peut porter les éléments d’autres cultures. Interactions riches… mais frontières floutées.",
    bDesc:
      "Préservation et validation communautaire : moins de stéréotypes, créativité plus encadrée.",
    aSubtle:
      "La ligne entre hommage et appropriation devient floue et peut blesser.",
    bSubtle:
      "Le cadre protège mais rigidifie : on expérimente moins."
  },
  {
    id: "identite",
    title: "D3 — Identité : Un avatar ou plusieurs ?",
    subtitle:
      "Miroirs infinis, mille versions de soi : continuité rassurante ou multiplicité libératrice ?",
    A: "Un seul avatar",
    B: "Plusieurs avatars",
    aDesc:
      "Confiance et lisibilité : on sait à qui l’on parle. Risque d’étouffer l’évolution personnelle.",
    bDesc:
      "Liberté de rôles et de contextes : créativité élevée, confiance plus fragile.",
    aSubtle:
      "On peut se sentir piégé dans une image passée.",
    bSubtle:
      "La personne se confond parfois avec la performance."
  },
  {
    id: "economie",
    title: "D4 — Économie : Propriété ou avatars améliorés ?",
    subtitle:
      "Grande place marchande : avatar inviolable vs modules d’amélioration (gestuelle, éclat, posture…).",
    A: "Avatars comme biens personnels",
    B: "Avatars améliorés",
    aDesc:
      "Égalité stricte : pas de marché du corps, personnalisation limitée.",
    bDesc:
      "Marché vibrant et possibilités accrues : hiérarchies subtiles par le pouvoir d’achat.",
    aSubtle:
      "Moins d’inégalités… mais moins d’innovation.",
    bSubtle:
      "Plus d’excellence… mais aussi de comparaisons et de classements."
  },
  {
    id: "memoire",
    title: "D5 — Mémoire : Vérité ou réécriture ?",
    subtitle:
      "Salle des souvenirs : vérités intactes ou passé adouci ?",
    A: "Mémoire intégrale",
    B: "Mémoire réécrite",
    aDesc:
      "Les histoires restent telles quelles : profondeur et vulnérabilité.",
    bDesc:
      "Traumas effacés, héritages embellis : harmonie apparente, vérité commune fragilisée.",
    aSubtle:
      "Porter ses cicatrices peut être lourd… et précieux.",
    bSubtle:
      "Si tout se réécrit, que devient le sens partagé ?"
  }
];

// ===== FINS =====
// Clé = séquence de 5 lettres (D1..D5). Tu peux en ajouter à volonté.
window.ENDINGS = {
  "AAAAA": {
    title:
      "Masquer les différences / Liberté culturelle / Un avatar unique / Propriété personnelle / Mémoire intégrale",
    body:
        "Dans ce monde, les avatars sont uniformisés. Aucune cicatrice, aucune différence physique visible : tout le monde a un corps lisse et semblable. Pourtant, la liberté culturelle est totale : les utilisateurs empruntent costumes, coiffures ou symboles de toutes les cultures, les mélangeant parfois sans retenue.\n" +
        "\n" +
        "Comme chaque avatar est unique et ne peut être remplacé, l’identité est stable et la confiance forte. Personne ne peut se cacher derrière plusieurs visages. L’absence de marché des améliorations renforce une égalité économique stricte : chacun possède son avatar comme un bien inviolable.\n" +
        "\n" +
        "La mémoire intégrale conserve l’histoire réelle des utilisateurs. Cela donne de la profondeur aux interactions : derrière les costumes ou les emprunts culturels, il existe une trace de vérité. Le métavers devient un espace visuellement homogène mais culturellement foisonnant, riche en expériences, mais parfois traversé par des débats houleux sur la frontière entre hommage et appropriation.\n"
  },
  "AAAAB": {
    title:
      "Masquer / Liberté culturelle / Un avatar unique / Propriété personnelle / Mémoire réécrite",
    body:
        "Tous les avatars ont un corps uniforme, sans stigmates ni différences. La liberté culturelle est totale, permettant aux utilisateurs de se vêtir de n’importe quel habit, d’adopter n’importe quel symbole ou style. Le monde est esthétiquement riche, mais l’identité se fige autour d’un seul avatar.\n" +
        "\n" +
        "La mémoire réécrite fragilise cependant les fondations sociales. Chacun choisit les souvenirs qu’il veut montrer ou invente une histoire embellie. Les récits deviennent des fictions, détachées de l’expérience réelle. Les interactions sont fluides, mais la confiance se fait plus superficielle.\n" +
        "\n" +
        "Le métavers devient un espace séduisant mais artificiel : stable dans ses formes, coloré par la liberté culturelle, mais miné par une incertitude sur l’authenticité des histoires personnelles."
  },
  "AAABA": {
    title:
      "Masquer / Liberté culturelle / Un avatar unique / Améliorés / Mémoire intégrale",
    body:
        "L’uniformité physique gomme toute différence, mais chacun peut librement s’approprier des symboles culturels. Un marché des améliorations s’impose : gestes fluides, expressions plus riches, avatars optimisés. Ceux qui investissent dans ces perfectionnements gagnent prestige et visibilité.\n" +
        "\n" +
        "La mémoire intégrale permet pourtant de voir les vérités derrière les améliorations et les choix culturels. Les récits personnels équilibrent la hiérarchie économique, rappelant que l’authenticité ne peut être totalement effacée.\n" +
        "\n" +
        "Ce monde est un mélange complexe de prestige marchand et d’histoires vraies. L’égalité visuelle de départ masque des hiérarchies subtiles. Le métavers devient une société compétitive mais aussi enrichissante, où la créativité culturelle est libre et parfois polémique."
  },
  "AAABB": {
    title:
      "Masquer / Liberté culturelle / Un avatar unique / Améliorés / Mémoire réécrite",
    body:
        "Les avatars uniformisés effacent les différences physiques, mais la liberté culturelle rend l’espace éclatant. Chacun peut emprunter ou réinventer des identités culturelles. Les améliorations, achetées ou acquises, créent une hiérarchie nette : certains avatars brillent littéralement par leur fluidité et leur perfection.\n" +
        "\n" +
        "La mémoire réécrite ajoute une couche d’artificialité : les histoires personnelles sont embellies, parfois inventées. L’authenticité s’efface au profit du prestige visuel et narratif.\n" +
        "\n" +
        "Le métavers devient une scène grandiose mais instable, où tout est performance : identité, culture, souvenirs. Une société fascinante, mais où la vérité disparaît sous la surface des images et récits idéalisés."
  },
  "ABAAA": {
    title:
      "Masquer / Respect culturel / Un avatar unique / Propriété / Mémoire intégrale",
    body:
        "Les avatars sont uniformes, aucune différence visible. Les éléments culturels sont strictement encadrés : seuls les membres légitimes ou autorisés peuvent porter des symboles traditionnels. L’avatar unique renforce la stabilité et la confiance.\n" +
        "\n" +
        "Comme les avatars ne sont pas améliorables, l’économie est égalitaire. La mémoire intégrale conserve toutes les histoires personnelles, donnant une profondeur sincère aux échanges.\n" +
        "\n" +
        "Le métavers apparaît comme un monde discipliné et ordonné, où respect et vérité priment. Mais certains ressentent ce cadre comme étouffant : la créativité est bridée, et la diversité culturelle paraît réduite à une mosaïque figée."
  },
  "ABAAB": {
    title:
      "Masquer / Respect culturel / Un avatar unique / Propriété / Mémoire réécrite",
    body:
        "Les corps sont uniformisés et les règles culturelles strictes. L’avatar unique rend l’identité stable, mais la mémoire réécrite permet de remodeler le passé.\n" +
        "\n" +
        "Les interactions sociales semblent harmonieuses et respectueuses, mais la vérité historique est brouillée. La cohésion repose sur des récits fabriqués. Le monde est stable, mais une tension invisible existe : tout est encadré, mais peu est entièrement vrai."
  },
  "ABABA": {
    title:
      "Masquer / Respect culturel / Un avatar unique / Améliorés / Mémoire intégrale",
    body:
        "Les avatars uniformisés peuvent être perfectionnés par des améliorations payantes : posture élégante, expressions précises, gestes fluides. Le respect culturel encadre strictement les représentations.\n" +
        "\n" +
        "La mémoire intégrale renforce la sincérité des échanges. Le métavers devient un espace hiérarchisé mais authentique, où excellence esthétique et respect culturel coexistent. Pourtant, la créativité libre semble confinée dans des marges étroites, étouffée par la discipline sociale."
  },
  "ABABB": {
    title:
      "Masquer / Respect culturel / Un avatar unique / Améliorés / Mémoire réécrite",
    body:
        "Uniformité des corps, respect culturel strict, marché des améliorations, mémoire réécrite : ce métavers devient un palais d’ordre et de prestige. Les utilisateurs les plus investis dominent socialement. Les récits sont embellis, gommant blessures et failles.\n" +
        "\n" +
        "Le résultat est une société harmonieuse en surface, mais artificielle en profondeur, où authenticité et spontanéité sont sacrifiées au profit de la performance et de la conformité."
  },
  "BAAAA": {
    // (espace volontairement toléré ; getEnding() .replace(/\s/g,'') gère ces cas)
    title:
      "Refléter / Liberté culturelle / Un avatar unique / Propriété personnelle / Mémoire intégrale",
    body:
        "Les avatars reflètent fidèlement les différences physiques réelles : cicatrices, handicaps, rides. La liberté culturelle est totale, permettant à chacun d’explorer identités et symboles venus d’ailleurs.\n" +
        "\n" +
        "Comme les avatars sont uniques et non modifiables, l’identité est stable. L’absence de marché d’amélioration maintient une égalité économique. La mémoire intégrale conserve toutes les histoires, donnant une profondeur riche aux échanges.\n" +
        "\n" +
        "Le métavers devient un miroir de la complexité humaine, authentique, foisonnant, parfois conflictuel, mais profondément vivant."
  },
  "BAAAB": {
    title:
      "Refléter / Liberté culturelle / Un avatar unique / Propriété personnelle / Mémoire réécrite",
    body:
        "Les avatars reflètent la diversité réelle, mais la mémoire est réécrite. Les récits personnels deviennent des fictions. L’identité reste stable grâce à l’avatar unique, mais la liberté culturelle amplifie la créativité, parfois au prix du respect.\n" +
        "\n" +
        "Le monde est visuellement riche et humain, mais l’histoire collective devient floue. Le métavers oscille entre authenticité physique et fiction narrative, séduisant mais instable."
  },
  "BAABA": {
    title:
      "Refléter / Liberté culturelle / Un avatar unique / Améliorés / Mémoire intégrale",
    body:
        "Les avatars reflètent les différences réelles, et chacun peut explorer librement des traits culturels. Mais les améliorations payantes introduisent une hiérarchie sociale.\n" +
        "\n" +
        "La mémoire intégrale conserve les vérités, permettant de voir les parcours derrière chaque perfection. Le métavers devient un marché de prestige et de diversité, où authenticité et inégalités coexistent."
  },
  "BAABB": {
    title:
      "Refléter / Liberté culturelle / Un avatar unique / Améliorés / Mémoire réécrite",
    body:
        "La diversité physique et culturelle s’affiche librement, mais chacun peut améliorer son avatar et réécrire son passé.\n" +
        "\n" +
        "Le métavers devient une scène spectaculaire et instable, où prestige et fiction dominent. Les vérités s’effacent, et les hiérarchies se renforcent. Une société fascinante, mais fragile."
  },
  "BABAA": {
    title:
      "Refléter / Respect culturel / Un avatar unique / Propriété personnelle / Mémoire intégrale",
    body:
      "Les avatars reflètent la diversité réelle, mais les symboles culturels sont strictement encadrés. L’identité est stable grâce à l’avatar unique.\n" +
        "\n" +
        "La mémoire intégrale donne de la profondeur aux interactions. Le métavers devient un monde authentique et respectueux, où les différences sont visibles mais protégées contre l’appropriation."
  },
  "BABAB": {
    title:
        "Refléter / Respect culturel / Un avatar unique / Propriété personnelle / Mémoire réécrite",
    body:
      "La diversité physique est visible, le respect culturel est obligatoire, mais la mémoire peut être réécrite.\n" +
        "\n" +
        "Le métavers devient une société stable mais étrange, où les apparences sont vraies, mais les histoires sont fictionnelles. Authenticité et illusion se mélangent subtilement."
  },
  "BABBA": {
    title:
      "Refléter / Respect culturel / Un avatar unique / Améliorés / Mémoire intégrale",
    body:
      "Les avatars reflètent les différences réelles et sont améliorables. Le respect culturel est strict, et la mémoire intégrale préserve la vérité.\n" +
      "\n" +
      "Le métavers devient un mélange de prestige et d’authenticité encadrée, où l’excellence esthétique et la sincérité cohabitent, mais dans un cadre rigide."
  },
    "BABBB": {
      title:
        "Refléter / Respect culturel / Un avatar unique / Améliorés / Mémoire réécrite",
      body:
        "Diversité visible, respect culturel strict, avatars améliorables et mémoire réécrite.\n" +
        "\n" +
        "Le métavers devient un palais d’images idéalisées, où authenticité visuelle existe, mais les récits sont embellis. Une société respectueuse mais artificielle."
  },
  "BBAAA": {
    title:
      "Refléter / Respect culturel / Un avatar unique / Propriété / Mémoire intégrale",
    body:
        "Chaque utilisateur peut créer plusieurs avatars, reflétant ses différences réelles. Les choix culturels sont encadrés.\n" +
        "\n" +
        "La mémoire intégrale relie les expériences à travers les avatars. Le métavers devient un laboratoire d’expérimentation identitaire encadrée, riche et complexe."
  },
  "BBAAB": {
    title:
      "Refléter / Respect culturel / Un avatar unique / Propriété / Mémoire réécrite",
    body:
        "Plusieurs avatars reflètent la diversité réelle, mais la mémoire peut être réécrite.\n" +
        "\n" +
        "Le métavers devient un théâtre de multiplicité et de récits modulés, fascinant, mais où la vérité s’efface."
  },
  "BBABA": {
    title:
      "Refléter / Respect culturel / Un avatar unique / Améliorés / Mémoire intégrale",
    body:
        "Les avatars sont divers, améliorables et encadrés culturellement. La mémoire intégrale garde la profondeur.\n" +
        "\n" +
        "Le métavers devient un mélange de respect, prestige et vérité, hiérarchisé mais riche."
  },
  "BBABB": {
    title:
      "Refléter / Respect culturel / Un avatar unique / Améliorés / Mémoire réécrite",
    body:
        "Les avatars multiples sont divers et améliorés, mais la mémoire est réécrite.\n" +
        "\n" +
        "Le métavers devient un marché d’identités multiples et embellies, respectueux culturellement mais artificiel dans ses récits."
  },
  "BBBBA": {
    title:
      "Refléter / Respect culturel / Multiples / Propriété / Mémoire intégrale",
    body:
        "Chaque utilisateur possède plusieurs avatars authentiques, respectant les cadres culturels, et la mémoire intégrale relie tout.\n" +
        "\n" +
        "Le métavers devient une mosaïque d’identités vraies et disciplinées, riche mais ordonnée."
  },
  "BBBBB": {
    title:
      "Refléter / Respect culturel / Multiples / Améliorés / Mémoire réécrite",
    body:
        "Un monde d’avatars multiples, divers, améliorés et culturellement encadrés. La mémoire réécrite fluidifie les récits.\n" +
        "\n" +
        "Le métavers devient un univers de perfection modulable, respectueux mais artificiel, où vérité et fiction s’entrelacent sans cesse."
  }
};

// ===== Fallback (si une séquence n’est pas dans ENDINGS) =====
window.getEnding = function getEnding(seqRaw) {
  const seq = String(seqRaw || "").replace(/\s/g, "").toUpperCase();
  if (window.ENDINGS[seq]) return window.ENDINGS[seq];

  // Petit générateur d’ambiance selon les lettres
  const map = {
    D1: { A: "uniformité", B: "diversité visible" },
    D2: { A: "liberté culturelle", B: "respect culturel strict" },
    D3: { A: "identité continue", B: "identités multiples" },
    D4: { A: "propriété personnelle", B: "améliorations marchandes" },
    D5: { A: "mémoire intégrale", B: "mémoire réécrite" }
  };
  const letters = seq.split("");
  const motifs = [
    map.D1[letters[0]] || "",
    map.D2[letters[1]] || "",
    map.D3[letters[2]] || "",
    map.D4[letters[3]] || "",
    map.D5[letters[4]] || ""
  ].filter(Boolean);

  return {
    title: `Fin synthétique — ${seq}`,
    body:
      `Un monde tissé de ${motifs.join(", ")}. Les places d’Horizon oscillent entre éthique, marché et responsabilité. ` +
      `Les échanges sont riches et ambivalents ; la cohérence dépend des usages.`
  };
};
