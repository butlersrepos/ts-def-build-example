/**
 * @param {string} name - The name of this Brassman
 * @param {number} power - The strength of this Brassman
 * @param {number} toughness - The durability of this Brassman
 * @param {string[]} types - The creature types of this Brassman
 * @param {boolean} [isAlreadyDead] - Optionally create an already dead Brassman
 */
export default function brass(name, power, toughness, types, isAlreadyDead) {
  return {
    getPowerToughness() {
      return `${power}/${toughness}`;
    },
    combinedPowerToughness() {
      return power + toughness;
    },
    isDead() {
      return isAlreadyDead || toughness <= 0;
    },
    isOrnithopter() {
      return power === 0 && toughness == 2;
    },
  };
}
