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
    diceNotation: null,
    value: 1,
    parentAbility: null,
  },
  {
    name: "Bandage",
    category: "Heal",
    type: "Heal",
    target: 1,
    description: "Restores 1 health to a target.",
    duration: null,
    icon: "Heal.png",
    gemstoneCost: 2,
    manaCost: 6,
    healthCost: null,
    xpGiven: 50,
    diceNotation: null,
    value: 1,
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
    gemstoneCost: 2,
    manaCost: null,
    healthCost: null,
    xpGiven: null,
    diceNotation: null,
    value: 1,
    parentAbility: "Vigor",
  },
  {
    name: "Superior-Vigor",
    category: "Health",
    type: "Health",
    target: -1,
    description: "Every time you are healed, you gain another 1 extra health.",
    duration: null,
    icon: "Superior-Vigor.png",
    gemstoneCost: 4,
    manaCost: null,
    healthCost: null,
    xpGiven: null,
    diceNotation: null,
    value: 1,
    parentAbility: "Enhanced-Vigor",
  },
];

const mana = [
  {
    name: "Arcane-Focus",
    category: "Mana",
    type: "ManaPassive",
    target: -1,
    description: "Every time you gain mana, you gain 1 extra mana.",
    duration: null,
    icon: "Arcane-Focus.png",
    gemstoneCost: 1,
    manaCost: null,
    healthCost: null,
    xpGiven: null,
    diceNotation: null,
    value: 1,
    parentAbility: null,
  },
  {
    name: "Arcane-Recovery",
    category: "Mana",
    type: "ManaPassive",
    target: -1,
    description: "Every time you gain mana, you gain another 1 extra mana.",
    duration: null,
    icon: "Arcane-Recovery.png",
    gemstoneCost: 2,
    manaCost: null,
    healthCost: null,
    xpGiven: null,
    diceNotation: null,
    value: 1,
    parentAbility: "Arcane-Focus",
  },
  {
    name: "Arcane-Connection",
    category: "Mana",
    type: "ManaPassive",
    target: -1,
    description: "Every time you gain mana, you gain another 1 extra mana.",
    duration: null,
    icon: "Test.jpg",
    gemstoneCost: 4,
    manaCost: null,
    healthCost: null,
    xpGiven: null,
    diceNotation: null,
    value: 1,
    parentAbility: "Arcane-Recovery",
  },
];

const trickery = [
  {
    name: "Evade",
    category: "Trickery",
    type: "Trickery",
    target: -1,
    description:
      "You may evade the effects of today's cosmic event, in exchange for mana.",
    duration: 960, // 16 hours
    icon: "Evade.png",
    gemstoneCost: 1,
    manaCost: 10,
    healthCost: null,
    xpGiven: 100,
    diceNotation: null,
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
    duration: 960, // 16 hours
    icon: "Devilish-Deal.png",
    gemstoneCost: 2,
    manaCost: 0,
    healthCost: 15,
    xpGiven: 100,
    diceNotation: null,
    value: null,
    parentAbility: "Evade",
  },
  {
    name: "Twist-of-Fate",
    category: "Trickery",
    type: "Trickery",
    target: -1,
    description:
      "Roll a d20. On a natural 20, today's event is rerolled. You may only use this ability once per day.",
    duration: 960, // 16 hours
    icon: "Twist-of-Fate.png",
    gemstoneCost: 2,
    manaCost: 10,
    healthCost: null,
    xpGiven: 150,
    diceNotation: "1d20",
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
    gemstoneCost: 2,
    manaCost: 15,
    healthCost: null,
    xpGiven: 0,
    diceNotation: null,
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
    gemstoneCost: 4,
    manaCost: 20,
    healthCost: null,
    xpGiven: 0,
    diceNotation: null,
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
    gemstoneCost: 4,
    manaCost: 20,
    healthCost: null,
    xpGiven: 0,
    diceNotation: null,
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
  // diceNotation: null,
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
  // diceNotation: null,
  //   value: null,
  //   parentAbility: "Adventurer",
  // },
];

const wizard = [
  {
    name: "Essence-Transfer",
    category: "Wizard",
    type: "Mana",
    target: 1,
    description: "You channel your powers, giving a guildmember 1d6 mana.",
    duration: null,
    icon: "Essence-Transfer.png",
    gemstoneCost: 1,
    manaCost: 3,
    healthCost: null,
    xpGiven: 50,
    diceNotation: "1d6",
    value: null,
    parentAbility: null,
  },
  {
    name: "Arcane-Gift",
    category: "Wizard",
    type: "ManaPassive",
    target: -1,
    description: "Every time you gain mana, you gain 1 extra mana.",
    duration: null,
    icon: "Arcane-Gift.png",
    gemstoneCost: 2,
    manaCost: null,
    healthCost: null,
    xpGiven: null,
    diceNotation: null,
    value: 1,
    parentAbility: "Essence-Transfer",
  },
  {
    name: "Inner-Power",
    category: "Wizard",
    type: "ManaPassive",
    target: -1,
    description: "Every time you gain mana, you gain 1 extra mana.",
    duration: null,
    icon: "Test.jpg",
    gemstoneCost: 4,
    manaCost: null,
    healthCost: null,
    xpGiven: null,
    diceNotation: null,
    value: 1,
    parentAbility: "Arcane-Gift",
  },
  {
    name: "Channeling",
    category: "Wizard",
    type: "ManaPassive",
    target: -1,
    description: "Every time you gain mana, you gain 2 extra mana.",
    duration: null,
    icon: "Test.jpg",
    gemstoneCost: 4,
    manaCost: null,
    healthCost: null,
    xpGiven: null,
    diceNotation: null,
    value: 2,
    parentAbility: "Inner-Power",
  },
  {
    name: "Greater-Essence-Transfer",
    category: "Wizard",
    type: "Mana",
    target: 1,
    description: "You channel your powers, giving a guildmember 1d10 mana.",
    duration: null,
    icon: "Greater-Essence-Transfer.png",
    gemstoneCost: 2,
    manaCost: 4,
    healthCost: null,
    xpGiven: 100,
    diceNotation: "1d10",
    value: 0,
    parentAbility: "Essence-Transfer",
  },
  {
    name: "Cosmic-Gift",
    category: "Wizard",
    type: "Mana",
    target: 1,
    description: "You channel your powers, giving a guildmember 2d6 mana.",
    duration: null,
    icon: "Test.jpg",
    gemstoneCost: 4,
    manaCost: 6,
    healthCost: null,
    xpGiven: 200,
    diceNotation: "2d6",
    value: null,
    parentAbility: "Greater-Essence-Transfer",
  },
  {
    name: "Arcane-Guidance",
    category: "Wizard",
    type: "ManaPassive",
    target: 0,
    description:
      "You show your guildmates the secrets of the arcane. All members of the guild gain an addition 2 mana every time they gain mana.",
    duration: null,
    icon: "Arcane-Guidance.png",
    gemstoneCost: 4,
    manaCost: null,
    healthCost: null,
    xpGiven: null,
    diceNotation: null,
    value: 2,
    parentAbility: "Essence-Transfer",
  },
  {
    name: "Essence-Offering",
    category: "Wizard",
    type: "Transfer",
    target: 0,
    description: "You may give 5 of your mana to another player.",
    duration: null,
    icon: "Test.jpg",
    gemstoneCost: 4,
    manaCost: 5,
    healthCost: null,
    xpGiven: 100,
    diceNotation: null,
    value: 5,
    parentAbility: "Essence-Transfer",
  },
];

const druid = [
  {
    name: "Heal",
    category: "Druid",
    type: "Heal",
    target: 1,
    description: "Restores 1d4 health to a target.",
    duration: null,
    icon: "Heal.png",
    gemstoneCost: 1,
    manaCost: 2,
    healthCost: null,
    xpGiven: 25,
    diceNotation: "1d4",
    value: null,
    parentAbility: null,
  },
  {
    name: "Greater-Heal",
    category: "Druid",
    type: "Heal",
    target: 1,
    description: "Restores 1d6 health to a target.",
    duration: null,
    icon: "Greater-Heal.png",
    gemstoneCost: 2,
    manaCost: 4,
    healthCost: null,
    xpGiven: 50,
    diceNotation: "1d6",
    value: null,
    parentAbility: "Heal",
  },
  {
    name: "Superior-Heal",
    category: "Druid",
    type: "Heal",
    target: 1,
    description: "Restores 2d6 health to a target.",
    duration: null,
    icon: "Superior-Heal.png",
    gemstoneCost: 4,
    manaCost: 6,
    healthCost: null,
    xpGiven: 100,
    diceNotation: "2d6",
    value: null,
    parentAbility: "Greater-Heal",
  },
  {
    name: "Healing-Aura",
    category: "Druid",
    type: "Heal",
    target: 0,
    description: "Restores 1d6 health to all guildmembers.",
    duration: null,
    icon: "Healing-Aura.png",
    gemstoneCost: 4,
    manaCost: 6,
    healthCost: null,
    xpGiven: 100,
    diceNotation: "1d6",
    value: null,
    parentAbility: "Greater-Heal",
  },
  {
    name: "Healing-Grace",
    category: "Druid",
    type: "Heal",
    target: 0,
    description: "Restores 2d6 health to all guildmembers.",
    duration: null,
    icon: "Test.jpg",
    gemstoneCost: 4,
    manaCost: 10,
    healthCost: null,
    xpGiven: 200,
    diceNotation: "2d6",
    value: null,
    parentAbility: "Healing-Aura",
  },
  // {
  //   name: "Rejuvinate",
  //   category: "Druid",
  //   type: "Heal",
  //   target: 1,
  //   description: "Restores 15hp to a guildmember.",
  //   duration: null,
  //   // icon: "Rejuvinate.png",
  //   gemstoneCost: 6,
  //   manaCost: 12,
  //   healthCost: null,
  //   xpGiven: 250,
  //   value: 100,
  //   parentAbility: "Superior-Heal",
  // },
  {
    name: "Revive",
    category: "Druid",
    type: "Revive",
    target: 1,
    description:
      "Revives a target from death without side-effects. Must be done before a game master revives the target.",
    duration: null,
    icon: "Revive.png",
    gemstoneCost: 4,
    manaCost: 15,
    healthCost: null,
    xpGiven: 500,
    diceNotation: null,
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
    diceNotation: null,
    value: 5,
    parentAbility: null,
  },
  {
    name: "Shield",
    category: "Barbarian",
    type: "Protection",
    target: -1,
    description:
      "You shield yourself 1d4 damage from the next attack for 4 hours.",
    duration: 240, // 4 hours
    icon: "Shield.png",
    gemstoneCost: 2,
    manaCost: 2,
    healthCost: null,
    xpGiven: 50,
    diceNotation: "1d4",
    value: null,
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
    gemstoneCost: 2,
    manaCost: null,
    healthCost: 10,
    xpGiven: 50,
    diceNotation: null,
    value: 1,
    parentAbility: "Toughness",
  },
  {
    name: "Protector-of-the-Weak",
    category: "Barbarian",
    type: "Protection",
    target: 1,
    description:
      "You shield the next attack on a guildmember from 1d6 damage for the next 4 hours.",
    duration: 240, // 4 hours
    icon: "Protector-of-the-Weak.png",
    gemstoneCost: 4,
    manaCost: 6,
    healthCost: null,
    xpGiven: 100,
    diceNotation: "1d6",
    value: null,
    parentAbility: "Shield",
  },
  {
    name: "Get-Behind-Me",
    category: "Barbarian",
    type: "Protection",
    target: 1,
    description:
      "You shield the next attack on a guildmember from 2d6 damage for the next 8 hours.",
    duration: 480, // 8 hours
    icon: "Test.jpg",
    gemstoneCost: 4,
    manaCost: null,
    healthCost: 3,
    xpGiven: 100,
    diceNotation: "2d6",
    value: null,
    parentAbility: "Protector-of-the-Weak",
  },
  {
    name: "Protector-of-the-People",
    category: "Barbarian",
    type: "Protection",
    target: 0,
    description:
      "You shield your guildmembers from 1d6 damage for the next 4 hours.",
    duration: 240, // 4 hours
    icon: "Test.jpg",
    gemstoneCost: 4,
    manaCost: 8,
    healthCost: null,
    xpGiven: 200,
    diceNotation: "1d6",
    value: null,
    parentAbility: "Protector-of-the-Weak",
  },
  {
    name: "Enhanced-Toughness",
    category: "Barbarian",
    type: "IncreaseHealth",
    target: -1,
    description: "You gain another 5 extra health.",
    duration: null,
    icon: "Enhanced-Toughness.png",
    gemstoneCost: 2,
    manaCost: null,
    healthCost: null,
    xpGiven: null,
    diceNotation: null,
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
    gemstoneCost: 4,
    manaCost: null,
    healthCost: null,
    xpGiven: null,
    diceNotation: null,
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
    diceNotation: null,
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
    gemstoneCost: 2,
    manaCost: null,
    healthCost: 5,
    xpGiven: 50,
    diceNotation: null,
    value: 5,
    parentAbility: "Secrets-of-the-Crimson",
  },
  {
    name: "Bloodgift",
    category: "BloodMage",
    type: "DecreaseHealth",
    target: 1,
    description:
      "Lose 5 of your maximum health to grant 2 mana to a guild member. This ability can only be used once per day.",
    duration: 960, // 16 hours
    icon: "Bloodgift.png",
    gemstoneCost: 2,
    manaCost: null,
    healthCost: 5,
    xpGiven: 50,
    diceNotation: null,
    value: 2,
    parentAbility: "Secrets-of-the-Crimson",
  },
  {
    name: "Crimson-Shift",
    category: "BloodMage",
    type: "Swap",
    target: 1,
    description:
      "You may swap health with a guildmember. You must have more health than the guildmember. The health of either cannot exceed their max health. This ability can only be used once per day.",
    duration: 480, // 8 hours
    icon: "Crimson-Shift.png",
    gemstoneCost: 4,
    manaCost: 4,
    healthCost: null,
    xpGiven: 100,
    diceNotation: null,
    value: null,
    parentAbility: "Blood-Bond",
  },
  {
    name: "Gift-of-Life",
    category: "BloodMage",
    type: "DecreaseHealth",
    target: 1,
    description:
      "Lose 10 of your maximum health to grant 5 mana to a guild member. This ability can only be used once per day.",
    duration: 960, // 16 hours
    icon: "Gift-of-Life.png",
    gemstoneCost: 4,
    manaCost: null,
    healthCost: 10,
    xpGiven: 100,
    diceNotation: null,
    value: 5,
    parentAbility: "Bloodgift",
  },
  {
    name: "Blood-Money",
    category: "BloodMage",
    type: "GoldPassive",
    target: -1,
    description:
      "You curse the gold earned from the arena, increasing it by 1d10 % for 1 day.",
    duration: 960, // 16 hours
    icon: "Test.jpg",
    gemstoneCost: 2,
    manaCost: 4,
    healthCost: 0,
    xpGiven: 0,
    diceNotation: "1d10",
    value: null,
    parentAbility: "Secrets-of-the-Crimson",
  },
  {
    name: "Cursed-Gold",
    category: "BloodMage",
    type: "GoldPassive",
    target: -1,
    description:
      "You curse the gold earned from the arena for all guild members, increasing it by 5d10 % for 1 day.",
    duration: 960, // 16 hours
    icon: "Test.jpg",
    gemstoneCost: 4,
    manaCost: 6,
    healthCost: 0,
    xpGiven: 0,
    diceNotation: "5d10",
    value: null,
    parentAbility: "Blood-Money",
  },
];

const bard = [
  {
    name: "Performance",
    category: "Bard",
    type: "Experience",
    target: 0,
    description:
      "You perform a song, temporarily increasing the experience gain for all guildmembers by 1d10 % for 1 hour.",
    duration: 60, // 1 hour
    icon: "Performance.png",
    gemstoneCost: 1,
    manaCost: 2,
    healthCost: null,
    xpGiven: 25,
    diceNotation: "1d10",
    value: null,
    parentAbility: null,
  },
  {
    name: "Streets-of-Gold",
    category: "Bard",
    type: "Gold",
    target: -1,
    description:
      "You display your many talents to the crowd, gaining 10d10 gold for yourself.",
    duration: null,
    icon: "Test.jpg",
    gemstoneCost: 2,
    manaCost: 3,
    healthCost: null,
    xpGiven: 50,
    diceNotation: "10d10",
    value: null,
    parentAbility: "Performance",
  },
  {
    name: "Inspiration",
    category: "Bard",
    type: "IncreaseMana",
    target: 0,
    description:
      "You inspire your guildmembers with words of wisdom, giving the entire guild 5 extra max mana for 5 days.",
    duration: 7200, // 5 days
    icon: "Inspire.png",
    gemstoneCost: 2,
    manaCost: 4,
    healthCost: null,
    xpGiven: 300,
    diceNotation: null,
    value: 5,
    parentAbility: "Performance",
  },
  {
    name: "Greater-Inspiration",
    category: "Bard",
    type: "IncreaseMana",
    target: 0,
    description:
      "You inspire your guildmembers with great philosophy, giving the entire guild 5 extra max mana for 5 days.",
    duration: 7200, // 5 days
    icon: "Test.jpg",
    gemstoneCost: 4,
    manaCost: 4,
    healthCost: null,
    xpGiven: 300,
    diceNotation: null,
    value: 5,
    parentAbility: "Inspiration",
  },
  {
    name: "Feast-of-Heroes",
    category: "Bard",
    type: "IncreaseHealth",
    target: 0,
    description:
      "You bring forth a great feast, including magnificent food and drink - temporarily increasing the max health of all guildmembers by 5 for 2 days.",
    duration: 2880, // 2 days
    icon: "Feast-of-Heroes.png",
    gemstoneCost: 2,
    manaCost: 4,
    healthCost: null,
    xpGiven: 200,
    diceNotation: null,
    value: 5,
    parentAbility: "Performance",
  },
  {
    name: "Heartfelt-Performance",
    category: "Bard",
    type: "Experience",
    target: 0,
    description:
      "You and your guildmembers perform a heartfelt song, increasing experience gained for all guildmembers for the day by 2d10 %.",
    duration: 960, // 16 hours
    icon: "Heartfelt-Performance.png",
    gemstoneCost: 2,
    manaCost: 4,
    healthCost: null,
    xpGiven: 100,
    diceNotation: "2d10",
    value: null,
    parentAbility: "Performance",
  },
  {
    name: "Tavern-Dance",
    category: "Bard",
    type: "Experience",
    target: 0,
    description:
      "You and your guildmembers perform an incredible dance, increasing experience gained for all guildmembers for the day by 5d10 %.",
    duration: 960, // 16 hours
    icon: "Test.jpg",
    gemstoneCost: 4,
    manaCost: 10,
    healthCost: null,
    xpGiven: 200,
    diceNotation: "5d10",
    value: null,
    parentAbility: "Heartfelt-Performance",
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
    diceNotation: null,
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
      "A storm is crashing down upon us. All take 5 damage. No healing may occur today. The storm is said to hit at 11:20.",
    duration: null,
    icon: "Cosmic.png",
    gemstoneCost: 0,
    manaCost: null,
    healthCost: null,
    xpGiven: null,
    diceNotation: null,
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
    diceNotation: null,
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
    diceNotation: null,
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
    diceNotation: null,
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
