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
      "Masquer / Liberté culturelle / Unique / Propriété / Mémoire intégrale",
    body:
      "Votre avatar est lissé et uniformisé, tandis que les codes culturels se mélangent librement. L’uniformité des corps contraste avec la bigarrure des styles. La mémoire intégrale rattache chaque choix à une histoire réelle : la liberté s’accompagne d’une responsabilité visible. Les échanges foisonnent, mais la frontière entre respect et appropriation reste sensible."
  },
  "AAAAB": {
    title:
      "Masquer / Liberté culturelle / Unique / Propriété / Mémoire réécrite",
    body:
      "Uniformité des corps, liberté des signes culturels, récits polis par la mémoire. Les biographies s’alignent en histoires propres. Le monde est éclatant et fluide, mais la profondeur historique s’efface : beauté et fragilité d’une harmonie de façade."
  },
  "AAABA": {
    title:
      "Masquer / Liberté culturelle / Unique / Améliorés / Mémoire intégrale",
    body:
      "Uniforme en surface, perfection discrète achetée : gestes élégants, regards précis. La créativité culturelle attire l’œil et classe les foules. La mémoire vraie sauve la singularité derrière la vitrine et transforme les tensions en occasions d’apprentissage."
  },
  "AAABB": {
    title:
      "Masquer / Liberté culturelle / Unique / Améliorés / Mémoire réécrite",
    body:
      "Marché du prestige et liberté culturelle créent un éclat permanent. Les récits réécrits lissent les aspérités. Horizon brille, mais une dissonance affleure : quand l’histoire devient décor, que vaut la reconnaissance ?"
  },
  "ABAAA": {
    title:
      "Masquer / Respect culturel / Unique / Propriété / Mémoire intégrale",
    body:
      "Uniformité corporelle et conformité culturelle : paysage protégé, écoles sereines, places ordonnées. La mémoire intégrale restaure la profondeur des parcours, au prix d’une esthétique parfois monotone."
  },
  "ABAAB": {
    title:
      "Masquer / Respect culturel / Unique / Propriété / Mémoire réécrite",
    body:
      "Cadre culturel strict et avatars lissés ; les souvenirs se polissent. Tout semble stable et sûr. Sous la surface, la vérité s’atténue : une société efficace, un peu artificielle."
  },
  "ABABA": {
    title:
      "Masquer / Respect culturel / Unique / Améliorés / Mémoire intégrale",
    body:
      "Excellence technique et conformité culturelle cohabitent. Les hiérarchies naissent dans le détail des améliorations. La mémoire vraie rend les interactions nuancées et responsables."
  },
  "ABABB": {
    title:
      "Masquer / Respect culturel / Unique / Améliorés / Mémoire réécrite",
    body:
      "Prestige esthétique sous contrôle culturel ; harmonie fluide. Les souvenirs édités aplanissent les conflits. Équilibre utile mais friable : l’apparence l’emporte parfois sur l’ancrage."
  },
  "BAAA A": {
    // (espace volontairement toléré ; getEnding() .replace(/\s/g,'') gère ces cas)
    title:
      "Refléter / Liberté culturelle / Unique / Propriété / Mémoire intégrale",
    body:
      "L’avatar reflète vos différences visibles. La liberté culturelle permet d’explorer des identités multiples. La mémoire intégrale donne du contexte : les échanges deviennent profonds, parfois heurtés, mais fertiles."
  },
  "BAAB": {
    title:
      "Refléter / Liberté culturelle / Unique / Propriété / Mémoire réécrite",
    body:
      "Diversité physique authentique, liberté culturelle et récits adoucis : l’harmonie semble naturelle. Mais la profondeur historique se perd par endroits, donnant aux interactions une fluidité un peu fragile."
  },
  "BABA": {
    title:
      "Refléter / Liberté culturelle / Unique / Améliorés / Mémoire intégrale",
    body:
      "Apparences vraies et améliorations subtiles : certaines présences captent l’attention. La mémoire intégrale rappelle les chemins réels, invitant à une responsabilité collective."
  },
  "BABB": {
    title:
      "Refléter / Liberté culturelle / Unique / Améliorés / Mémoire réécrite",
    body:
      "Prestige esthétique et liberté culturelle, portés par des souvenirs remodelés. Les scènes sont splendides, les liens parfois décalés par rapport au vécu : élégance et vertige."
  },
  "BBAAA": {
    title:
      "Refléter / Respect culturel / Unique / Propriété / Mémoire intégrale",
    body:
      "Diversité réelle encadrée : validation communautaire et avatars non marchands. Les histoires intactes soutiennent un respect exigeant ; cadre protecteur pour les uns, contrainte pour d’autres."
  },
  "BBAAB": {
    title:
      "Refléter / Respect culturel / Unique / Propriété / Mémoire réécrite",
    body:
      "Sécurité culturelle et récits adoucis : interactions stables, mais la profondeur vécue s’amenuise. L’authenticité se heurte parfois à la convenance."
  },
  "BBABA": {
    title:
      "Refléter / Respect culturel / Unique / Améliorés / Mémoire intégrale",
    body:
      "Améliorations fines et validation culturelle stricte : excellence et prudence marchent ensemble. La mémoire vraie replace les choix dans leur histoire, ce qui densifie les échanges."
  },
  "BBABB": {
    title:
      "Refléter / Respect culturel / Unique / Améliorés / Mémoire réécrite",
    body:
      "Efficacité esthétique et sécurité culturelle. Les souvenirs remodelés soutiennent l’harmonie, mais atténuent l’épaisseur des liens historiques : équilibre stable, profondeur fluctuante."
  },
  "BBBBA": {
    title:
      "Refléter / Respect culturel / Multiples / Propriété / Mémoire intégrale",
    body:
      "Multiplicité identitaire encadrée : plusieurs avatars fidèles à soi, reliés par une mémoire commune. Liberté d’exploration, respect des communautés, interactions complexes et nuancées."
  },
  "BBBBB": {
    title:
      "Refléter / Respect culturel / Multiples / Améliorés / Mémoire réécrite",
    body:
      "Créativité encadrée et avatars multiples optimisés ; la mémoire modulable adoucit les aspérités. Monde vibrant et harmonieux, parfois superficiel : la profondeur culturelle se dilue par instants."
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
