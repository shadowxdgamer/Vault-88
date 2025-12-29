/**
 * Hint text variations for different hint types
 */
const HINT_TEXTS = {
  'correct-position': [
    'One digit is correct and well placed.',
    'Exactly one digit is in the correct position.',
    'One digit locked in the right spot.',
    'You\'ve placed one digit correctly.',
    'Single digit: right number, right place.'
  ],
  'correct-wrong-position': [
    'One digit is correct but wrongly placed.',
    'One correct digit, wrong spot.',
    'Single digit needs repositioning.',
    'You have one digit - move it.',
    'One match in incorrect position.'
  ],
  'two-wrong-positions': [
    'Two digits are correct but wrongly placed.',
    'Two digits are present but misplaced.',
    'Two correct numbers, wrong positions.',
    'You have two digits - rearrange them.',
    'Two matches, both in wrong spots.'
  ],
  'all-wrong': [
    'Nothing is correct.',
    'All digits are incorrect.',
    'None of these digits appear in the code.',
    'Complete miss - try different numbers.',
    'Zero matches detected.'
  ]
};

/**
 * Get a random hint text for a given hint type
 * @param {string} type - Hint type
 * @returns {string} Random hint text
 */
function getRandomHintText(type) {
  const texts = HINT_TEXTS[type];
  return texts[Math.floor(Math.random() * texts.length)];
}

/**
 * Generate a secret code with unique digits
 * @param {number} length - Number of digits in the code
 * @returns {number[]} Array of unique digits
 */
export function generateSecretCode(length = 3) {
  const availableDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const code = [];
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableDigits.length);
    code.push(availableDigits[randomIndex]);
    availableDigits.splice(randomIndex, 1);
  }
  
  return code;
}

/**
 * Get a random digit that's not in the secret code
 * @param {number[]} secretCode - The secret code array
 * @returns {number} A digit not in the code
 */
export function getNonSecretDigit(secretCode) {
  let digit;
  do {
    digit = Math.floor(Math.random() * 10);
  } while (secretCode.includes(digit));
  return digit;
}

/**
 * Generate a hint array with one correct digit at specified position
 * @param {number[]} secretCode - The secret code
 * @param {number} correctIndex - Index where correct digit should be
 * @param {number} correctDigit - The correct digit
 * @returns {number[]} Hint array
 */
export function generateHintWithCorrectDigit(secretCode, correctIndex, correctDigit) {
  const hint = Array(secretCode.length).fill(null);
  hint[correctIndex] = correctDigit;
  
  for (let i = 0; i < hint.length; i++) {
    if (hint[i] === null) {
      let digit;
      do {
        digit = Math.floor(Math.random() * 10);
      } while (secretCode.includes(digit) || hint.includes(digit));
      hint[i] = digit;
    }
  }
  
  return hint;
}

/**
 * Generate all hints for the puzzle
 * @param {number[]} secretCode - The secret code
 * @returns {Array} Array of hint objects
 */
export function generateHints(secretCode) {
  const hints = [];
  const codeLength = secretCode.length;
  
  // Hint 1: One digit correct and well placed
  const h1_idx = Math.floor(Math.random() * codeLength);
  const h1_val = secretCode[h1_idx];
  const h1_set = generateHintWithCorrectDigit(secretCode, h1_idx, h1_val);
  hints.push({
    digits: h1_set,
    text: getRandomHintText('correct-position'),
    type: 'correct-position'
  });
  
  // Hint 2: One digit correct but wrongly placed
  const h2_idx_secret = (h1_idx + 1) % codeLength;
  const h2_val = secretCode[h2_idx_secret];
  const h2_idx_hint = (h2_idx_secret + 1) % codeLength;
  const h2_set = generateHintWithCorrectDigit(secretCode, h2_idx_hint, h2_val);
  hints.push({
    digits: h2_set,
    text: getRandomHintText('correct-wrong-position'),
    type: 'correct-wrong-position'
  });
  
  // Hint 3: Two digits correct but wrongly placed
  const indices = Array.from({ length: codeLength }, (_, i) => i);
  const shuffledIndices = indices.sort(() => Math.random() - 0.5);
  const h3_s1 = shuffledIndices[0];
  const h3_s2 = shuffledIndices[1];
  
  const h3_v1 = secretCode[h3_s1];
  const h3_v2 = secretCode[h3_s2];
  
  const h3_set = Array(codeLength).fill(null);
  
  // Place the two correct digits in wrong positions
  let wrongPos1, wrongPos2;
  do {
    wrongPos1 = Math.floor(Math.random() * codeLength);
  } while (wrongPos1 === h3_s1);
  
  do {
    wrongPos2 = Math.floor(Math.random() * codeLength);
  } while (wrongPos2 === h3_s2 || wrongPos2 === wrongPos1);
  
  h3_set[wrongPos1] = h3_v1;
  h3_set[wrongPos2] = h3_v2;
  
  // Fill remaining position with non-secret digit
  for (let i = 0; i < h3_set.length; i++) {
    if (h3_set[i] === null) {
      h3_set[i] = getNonSecretDigit(secretCode);
    }
  }
  
  hints.push({
    digits: h3_set,
    text: getRandomHintText('two-wrong-positions'),
    type: 'two-wrong-positions'
  });
  
  // Hint 4: Nothing is correct
  const h4_set = [];
  while (h4_set.length < codeLength) {
    const digit = Math.floor(Math.random() * 10);
    if (!secretCode.includes(digit) && !h4_set.includes(digit)) {
      h4_set.push(digit);
    }
  }
  hints.push({
    digits: h4_set,
    text: getRandomHintText('all-wrong'),
    type: 'all-wrong'
  });
  
  // Shuffle hints
  return hints.sort(() => Math.random() - 0.5);
}
