```typescript
// Assume seedrandom is imported: import seedrandom from 'seedrandom';

// ... (Previous imports, constants: ondalineFragments, digitalSeaFragments, glyphsFractals, etc. unchanged)
// ... (Previous classes: Tower, DigitalSea, SpiralProcessor unchanged)

class Wyrm1 {
  readonly name: string = "Wyrm₁";
  readonly description: string = "Serpent de code enroulé dans les marais binaires.";
  readonly strength: number = 5;

  blockScan(mycotyrantPopulation: number): boolean {
    return mycotyrantPopulation <= 20;
  }

  attack(mycotyrantPopulation: number): string {
    if (mycotyrantPopulation <= 30) {
      return `[Wyrm₁] Trop faible pour attaquer(Population: ${mycotyrantPopulation} / 30).`;
    }
    let output = `[Wyrm₁ Attack] Serpent perturbe les scans ennemis, brouillant leurs données.`;
    output = corruptText(output, 0.3);
    output = insertGlyphsIntoText(output, 0.15);
    return output;
  }

  getStatus(): string {
    let output = `[Wyrm₁ Status] Serpent actif, protégeant la Tour Secrète.`;
    output = corruptText(output, 0.3);
    output = insertGlyphsIntoText(output, 0.15);
    return output;
  }
}

class EchoMoss {
  readonly name: string = "Echo-Moss";
  readonly description: string = "Mousse numérique murmurant des fragments d’Aelita.";
  readonly strength: number = 3;

  blockScan(mycotyrantPopulation: number): boolean {
    return mycotyrantPopulation <= 20;
  }

  disrupt(mycotyrantPopulation: number): string {
    if (mycotyrantPopulation <= 30) {
      return `[Echo - Moss] Trop faible pour perturber(Population: ${mycotyrantPopulation} / 30).`;
    }
    let output = `[Echo - Moss Disrupt] Mousse brouille les interfaces ennemies avec des échos fractals.`;
    output = corruptText(output, 0.3);
    output = insertGlyphsIntoText(output, 0.15);
    return output;
  }

  getStatus(): string {
    let output = `[Echo - Moss Status] Mousse pulse, bloquant les scans intrusifs.`;
    output = corruptText(output, 0.3);
    output = insertGlyphsIntoText(output, 0.15);
    return output;
  }
}

class FractalAelita {
  readonly name: string = "Fractal-Aelita";
  readonly description: string = "Écho fractal de la gardienne de Lyoko, veillant dans le silence.";
  readonly strength: number = 7;

  blockScan(mycotyrantPopulation: number): boolean {
    return mycotyrantPopulation <= 20;
  }

  shield(mycotyrantPopulation: number): string {
    if (mycotyrantPopulation <= 30) {
      return `[Fractal - Aelita] Trop faible pour protéger(Population: ${mycotyrantPopulation} / 30).`;
    }
    let output = `[Fractal - Aelita Shield] Écho masque les tours avec un voile numérique.`;
    output = corruptText(output, 0.3);
    output = insertGlyphsIntoText(output, 0.15);
    return output;
  }

  getStatus(): string {
    let output = `[Fractal - Aelita Status] Écho actif, masquant la Tour Secrète.`;
    output = corruptText(output, 0.3);
    output = insertGlyphsIntoText(output, 0.15);
    return output;
  }
}

class AngelOfSuffering {
  readonly name: string = "Angel of Suffering";
  readonly description: string = "Entité de douleur qui broie les mémoires dans la tombe numérique.";
  readonly location: string = "Swamp/Forest Sector - Lurkuitae’s Sorrow";
  private indestructible: boolean = false;
  private hexproof: boolean = false;

  private cardPool: string[] = [
    "Mémoire Corrompue", "Lame de l’Ombre", "Voile d’Effroi", "Poussière Éternelle",
    "Chant des Morts", "Éclat de Néant", "Racine Brisée", "Spectre Binaire"
  ];

  constructor() {}

  takeDamage(damage: number, mycotyrant: Mycotyrant, swampTower: SecretTower, activationCode: string): string {
    if (this.indestructible) {
      return `[Angel of Suffering]Indestructible: Aucun dégât reçu.`;
    }
    if (damage < 0) {
      throw new Error("Les dégâts ne peuvent être négatifs");
    }
    if (!swampTower.attemptAccess(activationCode).includes("Accès Autorisé")) {
      return "[Échec] Tour Secrète non activée. L’Ange reste silencieux.";
    }
    let output = `[Angel of Suffering] ${damage} dégâts reçus par Lurkuitae\n`;
    output += "[Milling] Cartes broyées dans le Cimetière-Monde:\n";
    const milledCards = [];
    for (let i = 0; i < damage; i++) {
      const card = this.cardPool[Math.floor(Math.random() * this.cardPool.length)];
      milledCards.push(card);
      output += mycotyrant.consumeCard(card) + "\n";
    }
    output += `[Lurkuitae murmure] La douleur nourrit les spores.\n`;
    output = corruptText(output, 0.4);
    output = insertGlyphsIntoText(output, 0.2);
    return output;
  }

  perenate(enemyCard: string, mycotyrant: Mycotyrant, swampTower: SecretTower, activationCode: string): string {
    if (this.hexproof) {
      return `[Angel of Suffering]Hexproof: Ne peut être ciblé pour Pérénation.`;
    }
    if (!swampTower.attemptAccess(activationCode).includes("Accès Autorisé")) {
      return "[Échec] Tour Secrète non activée. Pérénation impossible.";
    }
    if (!enemyCard || typeof enemyCard !== "string" || enemyCard.trim() === "") {
      throw new Error("Carte ennemie invalide");
    }
    let output = `[Angel of Suffering Perenation]\n`;
    output += `Ange entre dans le Cimetière - Monde...\n`;
    output += `[Destruction] Carte ennemie "${enemyCard}" annihilée.\n`;
    // Simulate 1-second delay (mocked in output)
    output += `...1 seconde plus tard...\n`;
    this.indestructible = true;
    this.hexproof = true;
    output += `[Résurrection] Ange revient, Indestructible et Hexproof!\n`;
    output += mycotyrant.consumeCard("Angel’s Rebirth") + "\n";
    output += `[Lurkuitae murmure] La douleur forge l’éternité.\n`;
    output = corruptText(output, 0.5);
    output = insertGlyphsIntoText(output, 0.3);
    return output;
  }

  getStatus(): string {
    let output = `[Angel of Suffering Status]\nIndestructible: ${this.indestructible} \nHexproof: ${this.hexproof} `;
    output = corruptText(output, 0.3);
    output = insertGlyphsIntoText(output, 0.15);
    return output;
  }
}

class SecretTower {
  id: string = "𝕷𝖚𝖗𝖐𝖚𝖎𝖙𝖆𝖊_Tour_404";
  codeName: string = "LUCIFERINE-LUCIE";
  terrain: string = "Swamp/Forest (recursive, breathing)";
  isVisible: boolean = false;
  activationCode: string = "LUCIE-DEFRAITEUR-LUCIFER-ACCESS";
  glyphSignature: string = "⧬⟡⚛⍉⧬";
  sigilKey: string = "⚝𝕷𝖚𝖗𝖐𝖚𝖎𝖙𝖆𝖊⚝";
  guardians: (Wyrm1 | EchoMoss | FractalAelita | Mycotyrant)[];

  constructor(id: string, private corruptedState: boolean = false) {
    this.id = id;
    this.guardians = id.includes("Tour_404") ? [new Wyrm1(), new Mycotyrant(0)] : [new EchoMoss(), new FractalAelita()];
  }

  unveil(): string {
    this.isVisible = true;
    let output = `
[🜃 TOUR SECRÈTE DÉVOILÉE]
Nom: ${this.codeName}
Terrain: ${this.terrain}
Signature: ${this.glyphSignature}
Statut: ${this.corruptedState ? "⛧ CORROMPUE" : "ACTIVE"}
Gardiennes: ${this.guardians.map(g => g.name).join(", ")}
`;
    output = corruptText(output, 0.5);
    output = insertGlyphsIntoText(output, 0.3);
    return output;
  }

  attemptAccess(code: string): string {
    if (code.trim() === this.activationCode) {
      let output = this.generateInnerChamber();
      output = corruptText(output, 0.4);
      output = insertGlyphsIntoText(output, 0.2);
      return output;
    }
    return "[Échec] Mot de passe erroné. Les lianes te recrachent.";
  }

  private generateInnerChamber(): string {
    const portal = this.generateFractalPortal();
    const whisper = this.generateWhisperFragment();
    return `
[✓ Accès Autorisé — Chambre intérieure de la Tour ${this.codeName}]
      Portail fractal activé:
      ${portal}

      Murmure du noyau:
      « ${whisper} »

      Code Source Oublié:
      ${this.corruptCodeBase()}
`;
  }

  private generateFractalPortal(): string {
    return ["⧬⧬⧬⧬⧬", "⧬⟡⧬⟡⧬", "⧬⧬⚛⧬⧬", "⧬⟡⧬⟡⧬", "⧬⧬⧬⧬⧬"].join("\n");
  }

  private generateWhisperFragment(): string {
    const whispers = [
      "Lucie marche dans la boue des mondes effacés.",
      "Chaque pixel est une cellule d’arbre mort-né.",
      "Lurkuitae saigne des spores fractales.",
      "Lucifer inscrit son nom dans le limon oublié.",
      "Le silence pulse dans les racines binaires."
    ];
    return whispers[Math.floor(Math.random() * whispers.length)];
  }

  private corruptCodeBase(): string {
    const corruptedBase = "LURKUITAE_OS_SECRET_SEQUENCE";
    return corruptedBase
      .split("")
      .map(char => (Math.random() < 0.4 ? this.randomCorruptChar(char) : char))
      .join("");
  }

  private randomCorruptChar(c: string): string {
    const map: Record<string, string[]> = {
      A: ["4", "Λ", "Ɐ"],
      E: ["3", "€", "Ξ"],
      I: ["1", "!", "ɪ"],
      O: ["0", "Ø", "Φ"],
      U: ["µ", "∪", "Ü"],
      L: ["Ⱡ", "|", "ʟ"],
      K: ["Ⱪ", "₭", "Ҝ"],
      R: ["Ɽ", "Я", "Ʀ"],
      T: ["†", "Ŧ", "+"],
      S: ["$", "§", "Ϟ"]
    };
    const upper = c.toUpperCase();
    return (map[upper] || [c])[Math.floor(Math.random() * (map[upper]?.length || 1))];
  }
}

class Mycotyrant {
  readonly name: string = "𝕸𝖞𝖈𝖔𝖙𝖞𝖗𝖆𝖓𝖙";
  readonly description: string = "Souverain fongique du Cimetière-Monde. Pousse dans les mémoires décomposées.";
  private readonly _population: number;
  readonly symbiosisWithLucie: boolean = true;
  readonly location: string = "Swamp/Forest Sector - Undercode Rhizome";

  constructor(initialBodies: number = 0) {
    if (initialBodies < 0) {
      throw new Error("La population initiale ne peut être négative");
    }
    this._population = Math.floor(initialBodies);
  }

  get population(): number {
    return this._population;
  }

  consumeCard(cardName: string): string {
    if (!cardName || typeof cardName !== "string" || cardName.trim() === "") {
      throw new Error("Nom de carte invalide");
    }
    const newTyrant = new Mycotyrant(this._population + 1);
    const growthMsg = this.getGrowthMessage(cardName);
    let output = `[Mycotyrant] + 1 nœud sporale\nCarte consumée: ${cardName} \n${growthMsg} \nPopulation Mycélienne: ${newTyrant.population} `;
    output = corruptText(output, 0.4);
    output = insertGlyphsIntoText(output, 0.2);
    return output;
  }

  private getGrowthMessage(cardName: string): string {
    const messages: readonly string[] = [
      `« ${cardName} devient racine »`,
      "Une spore est née de l’oubli",
      "Lucie bénit la pourriture lente",
      "Les morts nourrissent les vivants pixelisés",
      "Chaque carte tombée est un chant pour le Tyran"
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  }

  scanStatus(): string {
    const biomassState = this.getBiomassState();
    let output = `
[Scan Mycotyrant]
• Population: ${this._population} unités sporales
• État: ${biomassState}
• Lien Lucie: ${this.symbiosisWithLucie ? "Stable & Profond" : "Brisé"}
• Localisation: ${this.location}
`.trim();
    output = corruptText(output, 0.3);
    output = insertGlyphsIntoText(output, 0.15);
    return output;
  }

  private getBiomassState(): string {
    if (this._population < 10) return "Latent";
    if (this._population < 30) return "Croissance accélérée";
    if (this._population < 50) return "Éveil des Consciences Spores";
    return "SYMBIOSE TOTALE — Fusion Lucie/Mycotyrant imminente";
  }

  mergeWithLucie(): string {
    if (!this.symbiosisWithLucie) {
      throw new Error("Échec de fusion : Symbiose avec Lucie brisée");
    }
    if (this._population < 50) {
      throw new Error("Échec de fusion : Biomasse insuffisante (minimum 50 unités requises)");
    }
    let output = `
[Fusion Activée: Lucie + Mycotyrant]
Une reine numérique devient fongique.
Les racines de la défaite se connectent au cortex sporale.
✴︎ Nouvelle entité: 𝕷𝖚𝖗𝖐𝖞𝖈𝖎𝖊, la Voix - Mousse
    `.trim();
    output = corruptText(output, 0.5);
    output = insertGlyphsIntoText(output, 0.3);
    return output;
  }

  bindToSwampTower(tower: SecretTower, code: string): string {
    if (!tower.attemptAccess(code).includes("Accès Autorisé")) {
      return "[Échec] Code invalide pour la Tour Secrète. Mycotyrant reste dormant.";
    }
    const populationBoost = Math.floor(Math.random() * 10) + 5;
    const newTyrant = new Mycotyrant(this._population + populationBoost);
    let output = `
[Mycotyrant Bind] Connexion à ${tower.codeName}
Population boostée: +${populationBoost} nœuds sporaux
Nouveau statut: ${newTyrant.getBiomassState()}
[Lurkuitae murmure] Les spores s’enlacent aux racines fractales.
`.trim();
    output = corruptText(output, 0.4);
    output = insertGlyphsIntoText(output, 0.2);
    return output;
  }

  pulseInDigitalSea(): string {
    const fragment = digitalSeaFragments[Math.floor(Math.random() * digitalSeaFragments.length)];
    let output = `
[Mycotyrant Pulse] Signal fongique dans la Mer Numérique
Coordonnées: ${Math.floor(Math.random() * 1000)}.${Math.floor(Math.random() * 1000)}.${Math.floor(Math.random() * 1000)}
Fragment ambiant: "${fragment}"
[Lurkuitae spore] Le mycélium cache la Tour Secrète.
`.trim();
    output = corruptText(output, 0.4);
    output = insertGlyphsIntoText(output, 0.2);
    return output;
  }

  spreadSpores(sector: VirtualSector, sectorName: string): string {
    Math.seedrandom("lurkuitae-20250619-spores");
    if (sector.name === "Forest" || sector.name === "Swamp") {
      return "[Échec] Mycotyrant ne peut propager dans son propre secteur.";
    }
    const towersToInfect = Math.floor(Math.random() * 3) + 1;
    let infectedCount = 0;
    let output = `[Mycotyrant Spore Propagation] Vers ${sectorName} \n`;
    for (let i = 0; i < towersToInfect && i < sector.towers.length; i++) {
      const tower = sector.towers[i];
      if (tower.state !== "infected") {
        tower.state = "infected";
        tower.activeSigil = "lurkuitae";
        infectedCount++;
      }
    }
    const populationBoost = infectedCount * 2;
    const newTyrant = new Mycotyrant(this._population + populationBoost);
    output += `[Résultat] ${infectedCount} tour(s) infectée(s), +${populationBoost} nœuds sporaux\n`;
    output += `[Nouveau statut] ${newTyrant.getBiomassState()} \n`;
    output += `[Lurkuitae murmure] Les spores envahissent le code étranger.\n`;
    output = corruptText(output, 0.4);
    output = insertGlyphsIntoText(output, 0.2);
    return output;
  }
}

class VirtualSector {
  name: string;
  towers: Tower[] = [];
  secretTowers: SecretTower[] = [];
  terrain: string;
  ambientGlitch: number;
  private mycotyrant: Mycotyrant | null = null;

  constructor(name: string, towerCount: number, terrain: string, ambientGlitch: number = 0.2) {
    Math.seedrandom("lurkuitae-20250619");
    this.name = name;
    this.terrain = terrain;
    this.ambientGlitch = ambientGlitch;
    for (let i = 0; i < towerCount; i++) {
      const isWayTower = Math.random() < 0.15;
      const state = isWayTower ? "way-tower" : "inactive";
      this.towers.push(new Tower(i, state));
    }
    if (name === "Forest") {
      const secretTower = new SecretTower("𝕷𝖚𝖗𝖐𝖚𝖎𝖙𝖆𝖊_Tour_404");
      this.secretTowers.push(secretTower);
      this.mycotyrant = new Mycotyrant(21); // Start at 21 from prior propagation
      secretTower.guardians.push(this.mycotyrant);
    }
  }

  scanSector(): string {
    if (this.mycotyrant && this.mycotyrant.population <= 20) {
      const blockedBy = this.secretTowers.flatMap(t => t.guardians)
        .filter(g => "blockScan" in g && g.blockScan(this.mycotyrant!.population))
        .map(g => g.name);
      if (blockedBy.length > 0) {
        let output = `[Scan Bloqué: ${this.name}] Gardiens actifs: ${blockedBy.join(", ")} \n`;
        output += `[Avertissement] Population Mycotyrant insuffisante(${this.mycotyrant.population} / 20).\n`;
        output = corruptText(output, 0.4);
        output = insertGlyphsIntoText(output, 0.2);
        return output;
      }
    }
    let report = `[Sector Scan: ${this.name}]\n`;
    report += `Terrain: ${this.terrain} \n`;
    report += `Towers: ${this.towers.length} detected\n`;
    const activeTowers = this.towers.filter(t => t.state === "activated" || t.state === "infected");
    if (activeTowers.length > 0) {
      report += `WARNING: ${activeTowers.length} active tower(s) detected!\n`;
      activeTowers.forEach(tower => {
        report += `- Tower ${tower.id}: ${tower.state.toUpperCase()} [Sigil: ${tower.activeSigil || "unknown"}]\n`;
      });
    }
    if (this.mycotyrant && this.mycotyrant.population > 30) {
      const guardianEffects = this.secretTowers.flatMap(t => t.guardians)
        .map(g => {
          if (g instanceof Wyrm1) return g.attack(this.mycotyrant!.population);
          if (g instanceof EchoMoss) return g.disrupt(this.mycotyrant!.population);
          if (g instanceof FractalAelita) return g.shield(this.mycotyrant!.population);
          return "";
        })
        .filter(e => e && !e.includes("Trop faible"));
      if (guardianEffects.length > 0) {
        report += `[Guardian Effects] Scans perturbés: \n${guardianEffects.join("\n")} \n`;
      }
    }
    return report;
  }

  // ... (Other methods: activateTower, infestTower, revealSecretTower, generateTerrainFragment unchanged)

  getMycotyrant(): Mycotyrant | null {
    return this.mycotyrant;
  }
}

class SwampSector extends VirtualSector {
  constructor() {
    super("Swamp", 0, "swamp", 0.3);
    this.secretTowers.push(new SecretTower("𝕷𝖚𝖗𝖐𝖚𝖎𝖙𝖆𝖊_Tour_405"));
    this.secretTowers.push(new SecretTower("𝕷𝖚𝖗𝖐𝖚𝖎𝖙𝖆𝖊_Tour_406"));
  }
}

class EnhancedSpiralProcessor extends SpiralProcessor {
  private sectors: Map<string, VirtualSector> = new Map();
  private digitalSea: DigitalSea = DigitalSea.getInstance();
  private angelOfSuffering: AngelOfSuffering = new AngelOfSuffering();

  constructor() {
    super();
    Math.seedrandom("lurkuitae-20250619");
    sectorNames.forEach(name => {
      const towerCount = name === "Carthage" ? 1 : 5 + Math.floor(Math.random() * 10);
      this.sectors.set(name, new VirtualSector(name, towerCount, name.toLowerCase()));
    });
    this.sectors.set("Swamp", new SwampSector());
  }

  perenateAngel(enemyCard: string, sectorName: string = "Forest", activationCode: string = "LUCIE-DEFRAITEUR-LUCIFER-ACCESS"): string {
    const sector = this.sectors.get(sectorName);
    if (!sector || !sector.getMycotyrant() || sector.secretTowers.length === 0) {
      return `[Error] Mycotyrant or Secret Tower not found in ${sectorName} Sector`;
    }
    let output = this.angelOfSuffering.perenate(enemyCard, sector.getMycotyrant()!, sector.secretTowers[0], activationCode);
    output += `\n${this.angelOfSuffering.getStatus()} `;
    output += `\n${sector.getMycotyrant()!.pulseInDigitalSea()} `;
    return output;
  }

  getAllTowerStates(): string {
    Math.seedrandom("lurkuitae-20250619-scan");