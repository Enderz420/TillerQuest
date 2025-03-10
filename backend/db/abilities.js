// duration is an integer: x * 10 minutes

const health = [
  {
    name: "Vigor",
    category: "Health",
    type: "Health",
    target: -1,
    description: "Every time you are healed, you gain 1 extra health.",
    duration: null,
    icon: "Vigor.png",
    gemstoneCost: 1,
    manaCost: null,
    healthCost: null,
    xpGiven: null,
    value: 1,
    parentAbility: null,
  },
  {
    name: "Bandage",
    category: "Heal",
    type: "Heal",
    target: 1,
    description: "Restores 2 health to a target.",
    duration: null,
    icon: "Heal.png",
    gemstoneCost: 1,
    manaCost: 2,
    healthCost: null,
    xpGiven: 50,
    value: 2,
    parentAbility: "Vigor",
  },
  {
    name: "Enhanced-Vigor",
    category: "Health",
    type: "Health",
    target: -1,
    description: "Every time you are healed, you gain another 1 extra health.",
    duration: null,
    icon: "Enhanced-Vigor.png",
    gemstoneCost: 1,
    manaCost: null,
    healthCost: null,
    xpGiven: null,
    value: 1,
    parentAbility: "Vigor",
  },
  {
    name: "Superior-Vigor",
    category: "Health",
    type: "Health",
    target: -1,
    description: "Every time you are healed, you gain another 2 extra health.",
    duration: null,
    icon: "Superior-Vigor.png",
    gemstoneCost: 1,
    manaCost: null,
    healthCost: null,
    xpGiven: null,
    value: 2,
    parentAbility: "Enhanced-Vigor",
  },
];

const mana = [
  {
    name: "Arcane-Focus",
    category: "Mana",
    type: "ManaPassive",
    target: -1,
    description: "Every time you gain mana, you gain 2 extra mana.",
    duration: null,
    icon: "Arcane-Focus.png",
    gemstoneCost: 1,
    manaCost: null,
    healthCost: null,
    xpGiven: null,
    value: 2,
    parentAbility: null,
  },
  {
    name: "Arcane-Recovery",
    category: "Mana",
    type: "ManaPassive",
    target: -1,
    description: "Every time you gain mana, you gain another 2 extra mana.",
    duration: null,
    icon: "Arcane-Recovery.png",
    gemstoneCost: 1,
    manaCost: null,
    healthCost: null,
    xpGiven: null,
    value: 2,
    parentAbility: "Arcane-Focus",
  },
];

const trickery = [
  {
    name: "Evade",
    category: "Trickery",
    type: "Trickery",
    target: -1,
    description:
      "You may evade the effects of today's cosmic event, exchange for mana.",
    duration: 480, // 8 hours
    icon: "Evade.png",
    gemstoneCost: 1,
    manaCost: 10,
    healthCost: null,
    xpGiven: 50,
    value: null,
    parentAbility: null,
  },
  {
    name: "Devilish-Deal",
    category: "Trickery",
    type: "Trickery",
    target: -1,
    description:
      "You may evade the effects of today's cosmic event, in exchange for health.",
    duration: 480, // 8 hours
    icon: "Devilish-Deal.png",
    gemstoneCost: 1,
    manaCost: 0,
    healthCost: 15,
    xpGiven: 50,
    value: null,
    parentAbility: "Evade",
  },
  {
    name: "Twist-of-Fate",
    category: "Trickery",
    type: "Trickery",
    target: -1,
    description:
      "Roll a d6. On a 6, today's event is rerolled. You may only use this ability once per day.",
    duration: 1440, // 24 hours
    icon: "Twist-of-Fate.png",
    gemstoneCost: 1,
    manaCost: 8,
    healthCost: null,
    xpGiven: 100,
    value: null,
    parentAbility: "Devilish-Deal",
  },
  {
    name: "Postpone",
    category: "Trickery",
    type: "Postpone",
    target: -1,
    description:
      "You appeal to the game master, and plead for 8 hours extended time on a task. (You must contact a game master and get extended time confirmation in Teams to use this ability.) Postpone abilities do not stack.",
    duration: 480, // 8 hours
    icon: "Postpone.png",
    gemstoneCost: 1,
    manaCost: 10,
    healthCost: null,
    xpGiven: 0,
    value: null,
    parentAbility: "Evade",
  },
  {
    name: "Greater-Postpone",
    category: "Trickery",
    type: "Postpone",
    target: -1,
    description:
      "You appeal to the game master, and plead for 24 hours extended time on a task. (You must contact a game master and get extended time confirmation in Teams to use this ability.) Postpone abilities do not stack.",
    duration: 1440, // 24 hours
    icon: "Greater-Postpone.png",
    gemstoneCost: 1,
    manaCost: 15,
    healthCost: null,
    xpGiven: 0,
    value: null,
    parentAbility: "Postpone",
  },
  {
    name: "Superior-Postpone",
    category: "Trickery",
    type: "Postpone",
    target: -1,
    description:
      "You appeal to the game master, and plead for 48 hours extended time on a task. (You must contact a game master and get extended time confirmation in Teams to use this ability.) Postpone abilities do not stack.",
    duration: 2880, // 48 hours
    icon: "Superior-Postpone.png",
    gemstoneCost: 1,
    manaCost: 20,
    healthCost: null,
    xpGiven: 0,
    value: null,
    parentAbility: "Greater-Postpone",
  },
];

const adventurer = [
  // {
  //   name: "Adventurer",
  //   category: "Adventurer",
  //   type: "Adventurer",
  //   target: -1,
  //   description: "Allows participation in the arena's games.",
  //   duration: null,
  //   icon: "Adventurer.png",
  //   gemstoneCost: 1,
  //   manaCost: 0,
  //   healthCost: null,
  //   xpGiven: 50,
  //   value: null,
  //   parentAbility: null,
  // },
  // {
  //   name: "Economist",
  //   category: "Adventurer",
  //   type: "Adventurer",
  //   target: -1,
  //   description:
  //     "Every time you gain xp, you gain the same amount of gold. Gold can be spent in the shop.",
  //   duration: null,
  //   icon: "Economist.png",
  //   gemstoneCost: 1,
  //   manaCost: 0,
  //   healthCost: null,
  //   xpGiven: 50,
  //   value: null,
  //   parentAbility: "Adventurer",
  // },
];

const wizard = [
  {
    name: "Arcane-Gift",
    category: "Wizard",
    type: "ManaPassive",
    target: -1,
    description: "Every time you gain mana, you gain 2 extra mana.",
    duration: null,
    icon: "Arcane-Gift.png",
    gemstoneCost: 1,
    manaCost: null,
    healthCost: null,
    xpGiven: null,
    value: 2,
    parentAbility: null,
  },
  {
    name: "Essence-Transfer",
    category: "Wizard",
    type: "Transfer",
    target: 1,
    description: "You may give 2 of your mana to another player.",
    duration: null,
    icon: "Essence-Transfer.png",
    gemstoneCost: 1,
    manaCost: 2,
    healthCost: null,
    xpGiven: 50,
    value: 2,
    parentAbility: "Arcane-Gift",
  },
  {
    name: "Greater-Essence-Transfer",
    category: "Wizard",
    type: "Transfer",
    target: 1,
    description: "You may give 4 of your mana to another player.",
    duration: null,
    icon: "Greater-Essence-Transfer.png",
    gemstoneCost: 1,
    manaCost: 4,
    healthCost: null,
    xpGiven: 100,
    value: 4,
    parentAbility: "Essence-Transfer",
  },
  {
    name: "Arcane-Guidance",
    category: "Wizard",
    type: "ManaPassive",
    target: 0,
    description:
      "You show your guildmates the secrets of the arcane. All guildmembers gain an addition 2 mana every time they gain mana.",
    duration: null,
    icon: "Arcane-Guidance.png",
    gemstoneCost: 1,
    manaCost: null,
    healthCost: null,
    xpGiven: null,
    value: 2,
    parentAbility: "Essence-Transfer",
  },
];

const druid = [
  {
    name: "Heal",
    category: "Druid",
    type: "Heal",
    target: 1,
    description: "Restores 4 health to a target.",
    duration: null,
    icon: "Heal.png",
    gemstoneCost: 1,
    manaCost: 2,
    healthCost: null,
    xpGiven: 25,
    value: 4,
    parentAbility: null,
  },
  {
    name: "Greater-Heal",
    category: "Druid",
    type: "Heal",
    target: 1,
    description: "Restores 6 health to a target.",
    duration: null,
    icon: "Greater-Heal.png",
    gemstoneCost: 1,
    manaCost: 3,
    healthCost: null,
    xpGiven: 50,
    value: 6,
    parentAbility: "Heal",
  },
  {
    name: "Superior-Heal",
    category: "Druid",
    type: "Heal",
    target: 1,
    description: "Restores 8 health to a target.",
    duration: null,
    icon: "Superior-Heal.png",
    gemstoneCost: 1,
    manaCost: 4,
    healthCost: null,
    xpGiven: 100,
    value: 8,
    parentAbility: "Greater-Heal",
  },
  {
    name: "Healing-Aura",
    category: "Druid",
    type: "Heal",
    target: 0,
    description: "Restores 3 health to all guildmembers.",
    duration: null,
    icon: "Healing-Aura.png",
    gemstoneCost: 1,
    manaCost: 3,
    healthCost: null,
    xpGiven: 100,
    value: 3,
    parentAbility: "Greater-Heal",
  },
  {
    name: "Revive",
    category: "Druid",
    type: "Revive",
    target: 1,
    description:
      "Revives a target from death without side-effects. Must be done before a game master revives the target.",
    duration: null,
    icon: "Revive.png",
    gemstoneCost: 1,
    manaCost: 6,
    healthCost: null,
    xpGiven: 500,
    value: null,
    parentAbility: "Superior-Heal",
  },
];

const barbarian = [
  {
    name: "Toughness",
    category: "Barbarian",
    type: "IncreaseHealth",
    target: -1,
    description: "You gain 5 extra health.",
    duration: null,
    icon: "Toughness.png",
    gemstoneCost: 1,
    manaCost: null,
    healthCost: null,
    xpGiven: null,
    value: 5,
    parentAbility: null,
  },
  {
    name: "Shield",
    category: "Barbarian",
    type: "Protection",
    target: -1,
    description: "You block 2 damage from all attacks for 1 hour.",
    duration: 60,
    icon: "Shield.png",
    gemstoneCost: 1,
    manaCost: 2,
    healthCost: null,
    xpGiven: 50,
    value: 2,
    parentAbility: "Toughness",
  },
  {
    name: "Battle-Ready",
    category: "Barbarian",
    type: "Arena",
    target: 0,
    description:
      "You long for the thrill of battle, bringing your guildmates with you for another round in the arena.",
    duration: null,
    icon: "Battle-Ready.png",
    gemstoneCost: 1,
    manaCost: null,
    healthCost: 5,
    xpGiven: 50,
    value: 1,
    parentAbility: "Toughness",
  },
  {
    name: "Protector-of-the-Weak",
    category: "Barbarian",
    type: "Protection",
    target: 1,
    description:
      "You shield a guildmember from 3 damage for the next 10 minutes.",
    duration: 10,
    icon: "Protector-of-the-Weak.png",
    gemstoneCost: 1,
    manaCost: null,
    healthCost: 3,
    xpGiven: 100,
    value: 3,
    parentAbility: "Shield",
  },
  {
    name: "Enhanced-Toughness",
    category: "Barbarian",
    type: "IncreaseHealth",
    target: -1,
    description: "You gain another 5 extra health.",
    duration: null,
    icon: "Enhanced-Toughness.png",
    gemstoneCost: 1,
    manaCost: null,
    healthCost: null,
    xpGiven: null,
    value: 5,
    parentAbility: "Toughness",
  },
  {
    name: "Superior-Toughness",
    category: "Barbarian",
    type: "IncreaseHealth",
    target: -1,
    description: "You gain another 5 extra health.",
    duration: null,
    icon: "Superior-Toughness.png",
    gemstoneCost: 1,
    manaCost: null,
    healthCost: null,
    xpGiven: null,
    value: 5,
    parentAbility: "Enhanced-Toughness",
  },
];

const bloodMage = [
  {
    name: "Secrets-of-the-Crimson",
    category: "BloodMage",
    type: "Health",
    target: -1,
    description: "Every time you are healed, you gain 1 extra health.",
    duration: null,
    icon: "Secrets-of-the-Crimson.png",
    gemstoneCost: 1,
    manaCost: null,
    healthCost: null,
    xpGiven: null,
    value: 1,
    parentAbility: null,
  },
  {
    name: "Blood-Bond",
    category: "BloodMage",
    type: "Transfer",
    target: 1,
    description: "You may give 5 of your hp to another player.",
    duration: null,
    icon: "Blood-Bond.png",
    gemstoneCost: 1,
    manaCost: 0,
    healthCost: 5,
    xpGiven: 50,
    value: 5,
    parentAbility: "Secrets-of-the-Crimson",
  },
  {
    name: "Bloodgift",
    category: "BloodMage",
    type: "Trade",
    target: -1,
    description: "You may trade 5 health to recieve 2 mana.",
    duration: null,
    icon: "Bloodgift.png",
    gemstoneCost: 1,
    manaCost: null,
    healthCost: 5,
    xpGiven: 50,
    value: 2,
    parentAbility: "Secrets-of-the-Crimson",
  },
  {
    name: "Crimson-Shift",
    category: "BloodMage",
    type: "Swap",
    target: 1,
    description:
      "You may swap health with a guildmember. You must have more health than the guildmember. The health of either cannot exceed their max health.",
    duration: null,
    icon: "Crimson-Shift.png",
    gemstoneCost: 1,
    manaCost: 4,
    healthCost: null,
    xpGiven: 100,
    value: null,
    parentAbility: "Blood-Bond",
  },
  {
    name: "Gift-of-Life",
    category: "BloodMage",
    type: "Trade",
    target: -1,
    description: "You may trade 10 health to recieve 5 mana.",
    duration: null,
    icon: "Gift-of-Life.png",
    gemstoneCost: 1,
    manaCost: 0,
    healthCost: 10,
    xpGiven: 100,
    value: 5,
    parentAbility: "Bloodgift",
  },
];

const bard = [
  {
    name: "Inspire",
    category: "Bard",
    type: "IncreaseMana",
    target: 0,
    description:
      "You inspire your guildmembers, giving the entire guild 5 extra max mana for 7 days.",
    duration: 10080,
    icon: "Inspire.png",
    gemstoneCost: 1,
    manaCost: 1,
    healthCost: null,
    xpGiven: 200,
    value: 5,
    parentAbility: null,
  },
  {
    name: "Performance",
    category: "Bard",
    type: "Experience",
    target: 0,
    description:
      "You perform a song, temporarily increasing the experience gain for all guildmembers by 10% for 15 minutes.",
    duration: 15, // 15 minutes
    icon: "Performance.png",
    gemstoneCost: 1,
    manaCost: 2,
    healthCost: null,
    xpGiven: 50,
    value: 10,
    parentAbility: "Inspire",
  },
  {
    name: "Feast-of-Heroes",
    category: "Bard",
    type: "IncreaseHealth",
    target: 0,
    description:
      "You conjure a feast, temporarily increasing the max health of all guildmembers by 5 for 2 days.",
    duration: 480, // 8 hours
    icon: "Feast-of-Heroes.png",
    gemstoneCost: 1,
    manaCost: 2,
    healthCost: null,
    xpGiven: 100,
    value: 5,
    parentAbility: "Performance",
  },
  {
    name: "Heartfelt-Performance",
    category: "Bard",
    type: "Experience",
    target: 0,
    description:
      "You perform a heartfelt song, increasing experience gained for all guildmembers for the day by 25%. This ability stacks.",
    duration: 2880, // 48 hours
    icon: "Heartfelt-Performance.png",
    gemstoneCost: 1,
    manaCost: 3,
    healthCost: null,
    xpGiven: 100,
    value: 25,
    parentAbility: "Performance",
  },
];

const cosmic = [
  {
    name: "Poor-Harvest",
    category: "Cosmic",
    type: "XP",
    target: 0,
    description: "Everyone gains 1 XP. Activates at 11:20.",
    duration: null,
    icon: "Cosmic.png",
    gemstoneCost: 0,
    manaCost: null,
    healthCost: null,
    xpGiven: null,
    value: 1,
    purchaseable: false,
    cosmicEvent: ["Poor-Harvest"],
    parentAbility: null,
  },
  {
    name: "Troubled-Waters",
    category: "Cosmic",
    type: "Damage",
    target: 0,
    description:
      "A storm is crashing down upon us. All take 5 damage. No healing may occur today. Damage is dealt at 11:20.",
    duration: null,
    icon: "Cosmic.png",
    gemstoneCost: 0,
    manaCost: null,
    healthCost: null,
    xpGiven: null,
    value: 5,
    purchaseable: false,
    cosmicEvent: ["Poor-Harvest"],
    parentAbility: null,
  },
  {
    name: "Sacrificial-Lamb",
    category: "Cosmic",
    type: "XP",
    target: -1,
    description:
      "You may sacrifice HP for XP today. For every 5 HP you sacrifice you gain 100 XP.",
    duration: null,
    icon: "Cosmic.png",
    gemstoneCost: 0,
    manaCost: null,
    healthCost: 5,
    xpGiven: 100,
    value: null,
    purchaseable: false,
    cosmicEvent: ["Sacrificial-Lamb"],
    parentAbility: null,
  },
  {
    name: "Tiredness",
    category: "Cosmic",
    type: "Mana",
    target: -1,
    description: "Everyone loses 10 mana. Activates at 11:20.",
    duration: null,
    icon: "Cosmic.png",
    gemstoneCost: 0,
    manaCost: null,
    healthCost: null,
    xpGiven: null,
    value: -10, // negative value
    purchaseable: false,
    cosmicEvent: ["Tiredness"],
    parentAbility: null,
  },
  {
    name: "Good-vibes",
    category: "Cosmic",
    type: "XP",
    target: 0,
    description: "Everyone gains 100 XP. Activates at 11:20.",
    duration: null,
    icon: "Cosmic.png",
    gemstoneCost: 0,
    manaCost: null,
    healthCost: null,
    xpGiven: null,
    value: 100,
    purchaseable: false,
    cosmicEvent: ["Good-vibes"],
    parentAbility: null,
  },
];

const abilities = [
  ...health,
  ...mana,
  ...trickery,
  ...adventurer,
  ...wizard,
  ...druid,
  ...barbarian,
  ...bloodMage,
  ...bard,
  ...cosmic,
];
export default abilities;
