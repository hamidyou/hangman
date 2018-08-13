const words = ["lounge", "orchestra", "stroll", "timetable", "cultural", "annual", "bubble", "scrap", "horn", "mystery", "enhance", "productive", "inspire", "apple", "allocation", "relative", "seize", "satisfied", "flock", "view", "even", "store", "enemy", "key", "solid", "bike", "past", "thirsty", "reluctance", "gas", "critic", "peak", "basin", "guest", "guard", "price", "recover", "smash", "archive", "beat", "soar", "plan", "frighten", "banquet", "young", "swallow", "horror", "coal", "chart", "underline", "vegetable", "produce", "string", "relationship", "tribute", "desert", "bake", "twilight", "piece", "size", "researcher", "disappointment", "friendly", "rebellion", "die", "horseshoe", "sea", "sailor", "half", "jacket", "hold", "battlefield", "button", "proud", "school", "mainstream", "seed", "prescription", "ticket", "wrong", "cage", "retain", "Bible", "observation", "justice", "achieve", "period", "requirement", "imposter", "correction", "fix", "steak", "flexible", "transport", "dilemma", "permanent", "edge", "strong", "fork", "feature", "mountain", "invisible", "collapse", "dull", "assault", "hilarious", "duck", "departure", "pull", "traffic", "deviation", "frown", "hesitate", "course", "loss", "curve", "statement", "stab", "realism", "paralyzed", "donor", "healthy", "plain", "homosexual", "quit", "riot", "elapse", "hand", "certain", "migration", "epicalyx", "highlight", "biscuit", "sweater", "plug", "turn", "marriage", "love", "feed", "organisation", "publication", "listen", "please", "daughter", "pardon", "frozen", "survival", "satellite", "chorus", "bill", "tell", "begin", "excavation", "foundation", "thrust", "favorable", "convert", "teenager", "adventure", "ground", "reference", "single", "betray", "family", "slave", "liberty", "west", "bulb", "literature", "freedom", "stadium", "likely", "need", "cool", "climate", "liability", "elbow", "decay", "threshold", "brick", "jockey", "preference", "fax", "entertainment", "technique", "egg", "prejudice", "jury", "neck", "ideal", "holiday", "spoil", "radiation", "sickness", "variety", "national", "blast", "state", "amputate", "noise", "site", "name", "thaw", "marathon", "column", "magnetic", "tendency", "tough", "hobby", "stun", "piano", "low", "feather", "parade", "occasion", "well", "context", "dynamic", "customer", "cord", "cute", "yearn", "break", "in", "building", "research", "sustain", "convince", "reform", "sign", "disaster", "boot", "genuine", "rape", "excess", "temperature", "murder", "discreet", "delivery", "bait", "circulation", "countryside", "imagine", "welfare", "halt", "wander", "outlet", "machinery", "retailer", "bracket", "financial", "injection", "stitch", "vague", "unlawful", "seal", "aluminium", "obscure", "rabbit", "experiment", "kick", "cupboard", "spine", "gift", "charter", "offender", "reputation", "relaxation", "position", "bolt", "clique", "effective", "lay", "computing", "recommendation", "intermediate", "dorm", "cake", "overview", "prevent", "fraud", "fortune", "depart", "herb", "resort", "singer", "conductor", "mirror", "bear", "pepper", "elaborate", "aid", "appreciate", "engine", "jungle", "long", "nest", "captivate", "old", "aware", "fear", "harsh", "latest", "giant", "glass", "consumer", "advocate", "voice", "eaux", "dairy", "progress", "superior", "ghost", "exile", "infection", "table", "system", "bag", "simplicity", "leave", "describe", "marble", "lip", "democratic", "hate", "bedroom", "deter", "earthquake", "difference", "care", "breast", "firefighter", "socialist", "hypnothize", "pair", "pride", "spite", "elite", "trend", "provision", "encourage", "surface", "influence", "tribe", "week", "nut", "stain", "margin", "lighter", "address", "material", "wrestle", "critical", "explode", "goal", "broccoli", "terms", "bullet", "shrink", "budget", "admiration", "direction", "seem", "stall", "broken", "lack", "owe", "notebook", "project", "fantasy", "diet", "supplementary", "tile", "nail", "gregarious", "money", "toll", "tear", "door", "eliminate", "district", "strain", "peace", "discrimination", "friend", "minimize", "house", "commission", "damage", "incredible", "shake", "crystal", "cable", "promotion", "corruption", "snack", "extension", "moon", "fragrant", "hit", "disappoint", "swell", "miner", "environmental", "linen", "protest", "wrap", "mechanical", "scrape", "late", "oven", "ordinary", "outside", "provincial", "item", "safety", "novel", "right", "wing", "sin", "drive", "unique", "assertive", "contrary", "applied", "loose", "bowel", "inquiry", "secular", "prosper", "exploit", "stop", "worm", "Mars", "reception", "adoption", "advertise", "crime", "cottage", "judgment", "far", "adopt", "glide", "promote", "regard", "profit", "burst", "mood", "dip", "air", "layout", "jam", "border", "cattle", "speed", "article", "garbage", "climb", "Venus", "houseplant", "glare", "sentence", "sensation", "bean", "accessible", "potential", "excavate", "news", "producer", "anniversary", "stimulation", "open", "twist", "forward", "kidney", "cabin", "nerve", "sunshine", "groan", "invite", "equal", "tight", "mixture", "gain", "thin", "preparation", "index", "finger", "equinox", "feast", "environment", "buttocks", "recognize", "denial", "routine", "curl", "fair", "misplace", "computer", "rumor", "shorts", "ring", "recording", "finger", "distort", "cheque", "salvation", "age", "party", "pop", "level", "quarrel", "feedback", "matter", "cart", "cucumber", "crisis", "gallon", "anxiety", "hay", "mosaic", "unit", "east", "beard", "grounds", "electron", "ban", "trial", "chord", "kettle", "happen", "colleague", "ball", "automatic", "monk", "remedy", "claim", "accurate", "projection", "distinct", "occupy", "radical", "limit", "elect", "volcano", "slippery", "judicial", "dollar", "gene", "marketing", "hemisphere", "drum", "enter", "application", "rank", "spontaneous", "bloody", "qualify", "fat", "nuclear", "cast", "reconcile", "connection", "banner", "background", "fashion", "wheat", "cell", "phone", "destruction", "map", "experienced", "trolley", "baby", "base", "negligence", "city", "withdraw", "photocopy", "verdict", "uniform", "suspicion", "philosophy", "cell", "suppress", "create", "tune", "truck", "skilled", "coerce", "honor", "assessment", "illness", "delay", "range", "warning", "sheet", "doctor", "north", "highway", "tradition", "crouch", "orange", "grand", "volunteer", "fuss", "discount", "scandal", "gas", "pedal", "try", "variant", "chalk", "approval", "belly", "stage", "cooperation", "plagiarize", "press", "embrace", "opinion", "economy", "attract", "horoscope", "tissue", "loot", "sanctuary", "rebel", "trip", "volume", "bland", "stress", "wine", "cotton", "hospitality", "shock", "AIDS", "premature", "replacement", "arena", "element", "miracle", "regulation", "rise", "elephant", "feminine", "rush", "hut", "meat", "acquisition", "rotten", "incentive", "carry", "unfair", "mark", "beer", "tactic", "estimate", "member", "mud", "staff", "junior", "part", "god", "disposition", "impact", "seminar", "fine", "professional", "chin", "record", "pass", "econobox", "agreement", "prince", "solve", "cow", "top", "dragon", "proper", "hide", "concentration", "bulletin", "dream", "fiction", "useful", "possible", "option", "revolution", "master", "sulphur", "emphasis", "costume", "disturbance", "penny", "X-ray", "short", "define", "career", "tick", "moment", "death", "suburb", "sandwich", "coup", "pastel", "clinic", "auditor", "referral", "coincidence", "theorist", "original", "run", "genetic", "ballet", "refer", "teacher", "hostile", "asylum", "tail", "citizen", "aisle", "linear", "horizon", "dive", "protect", "knowledge", "sport", "repetition", "nonsense", "fly", "figure", "ride", "cheap", "transparent", "monstrous", "clean", "telephone", "modernize", "victory", "bed", "import", "dilute", "majority", "warm", "wedding", "hostility", "exception", "exclusive", "nun", "foreigner", "predator", "hospital", "present", "adviser", "fist", "mist", "preoccupation", "wind", "entertain", "consultation", "reason", "rubbish", "demonstrate", "straight", "clerk", "end", "waste", "drug", "clarify", "carriage", "introduction", "rear", "monopoly", "goat", "brother", "farewell", "slogan", "agenda", "integration", "privacy", "architecture", "selection", "approach", "strategic", "mind", "pipe", "conservative", "inhibition", "war", "central", "lily", "football", "diamond", "move", "mosque", "desire", "deport", "fire", "joke", "portrait", "formula", "rough", "debate", "performance", "wing", "intensify", "authorise", "block", "scenario", "witness", "insure", "warn", "consensus", "graphic", "lake", "flavor", "church", "raise", "breathe", "conspiracy", "role", "conflict", "value", "degree", "rob", "objective", "expectation", "quiet", "flood", "lane", "colon", "have", "constitution", "custody", "feeling", "proposal", "zone", "print", "thick", "auction", "tape", "resign", "catalogue", "narrow", "isolation", "accept", "common", "decide", "Europe", "tip", "monster", "sale", "negotiation", "studio", "width", "cancel", "plaster", "private", "blank", "combination", "watch", "soak", "wording", "housing", "review", "alive", "bronze", "bridge", "pioneer", "endorse", "concert", "sun", "fight", "ministry", "miss", "evolution", "thread", "loop", "take", "eternal", "landowner", "affinity", "cabinet", "condition", "bind", "proclaim", "dressing", "appointment", "heat", "museum", "mature", "directory", "spirit", "achievement", "cluster", "cunning", "moral", "obstacle", "egg", "white", "tooth", "whip", "resource", "explosion", "legend", "eavesdrop", "water", "dictate", "bell", "band", "pace", "carve", "snub", "benefit", "eject", "executive", "proof", "photography", "pan", "share", "case", "infrastructure", "scheme", "dose", "enlarge", "laborer", "muggy", "earwax", "vigorous", "aquarium", "folk", "music", "senior", "policy", "inspector", "right", "hierarchy", "manager", "squeeze", "unity", "behave", "moving", "presidency", "snake", "bread", "remark", "character", "trunk", "real", "fox", "predict", "swing", "television", "lemon", "polish", "convulsion", "heel", "old", "age", "clock", "start", "reasonable", "speaker", "fibre", "extreme", "concept", "owl", "royalty", "sacrifice", "queue", "month", "live", "recycle", "funeral", "examination", "deprive", "major", "wait", "decoration", "guess", "lazy", "sickness", "roar", "chimney", "sweet", "cruel", "general", "omission", "similar", "positive", "parallel", "penetrate", "disability", "appendix", "formal", "cream", "output", "dentist", "stool", "courtesy", "deal", "belong", "redundancy", "mouse", "censorship", "offensive", "session", "principle", "modest", "tidy", "reinforce", "suspect", "stretch", "wilderness", "recruit", "refund", "wave", "gaffe", "strap", "fool", "around", "aviation", "evoke", "play", "excuse", "contraction", "evening", "idea", "funny", "current", "flawed", "classify", "humor", "opposite", "cemetery", "prey", "injury", "plaintiff", "federation", "ally", "empire", "jump", "self", "reflection", "commerce", "lose", "wage", "perfume", "preach", "shame", "publisher", "look", "power", "memorial", "check", "publicity", "commemorate", "still", "cherry", "finish", "assembly", "skip", "chain", "echo", "immune", "medicine", "aunt", "craftsman", "history", "maximum", "forge", "vertical", "leftovers", "twin", "asset", "outline", "ceiling", "unfortunate", "energy", "copyright", "steam", "grind", "beginning", "unlike", "inspiration", "sugar", "passion", "brake", "legislature", "peasant", "cancer", "council", "conventional", "chance", "use", "minimum", "mine", "surgeon", "perceive", "mechanism", "make", "sip", "sacred", "captain", "veil", "palm", "legislation", "bite", "restless", "rest", "switch", "row", "shout", "ignorant", "familiar", "brink", "galaxy", "adjust", "mourning", "hell", "definite", "treasurer", "umbrella", "appear", "lie", "competence", "factory", "exclude", "drift", "heir", "effort", "sympathetic", "inhabitant", "roof", "metal", "pole", "diagram", "morale", "style", "looting", "relinquish", "dark", "colony", "secretion", "means", "discuss", "rotation", "insistence", "contemporary", "demonstration", "navy", "eyebrow", "brag", "approve", "guerrilla", "build", "torch", "grandmother", "matrix", "needle", "exercise", "initiative", "pension", "deer", "tiptoe", "sink", "reject", "particular", "minority", "middle", "information", "growth", "realize", "couple", "beach", "pray", "inject", "mile", "solution", "divorce", "request", "ferry", "pure", "fairy", "step", "think", "patient", "insight", "bathroom", "slam", "merchant", "plead", "corn", "access", "sweep", "expect", "bottom", "work", "oak", "voter", "entitlement", "talented", "bee", "dough", "arrow", "precedent", "will", "give", "ward", "combine", "intervention", "foot", "chocolate", "bishop", "warrant", "post", "irony", "passive", "extinct", "premium", "revenge", "ice", "cream", "rally", "birthday", "hiccup", "favor", "systematic", "polite", "pity", "hot", "arm", "just", "sunrise", "decrease", "outlook", "physics", "banana", "institution", "dirty", "quote", "opera", "harbor", "grass", "firm", "tumble", "comfort", "exaggerate", "vehicle", "undermine", "percent", "authority", "vacuum", "draw", "breakfast", "circumstance", "agency", "aloof", "meet", "active", "raw", "governor", "banish", "hurl", "trace", "jet", "patch", "mass", "forecast", "correspond", "market", "red", "descent", "goalkeeper", "angel", "slide", "opposition", "innocent", "confession", "feminist", "acceptance", "extend", "skate", "scramble", "cylinder", "incapable", "repeat", "gold", "first-hand", "break", "down", "onion", "widen", "attraction", "glacier", "large", "stubborn", "chest", "dimension", "white", "violation", "innovation", "hero", "viable", "result", "payment", "faint", "answer", "wagon", "spray", "easy", "celebration", "king", "depressed", "activity", "poetry", "understand", "desk", "multiply", "slant", "tank", "declaration", "lump", "recession", "chicken", "appeal", "deteriorate", "embark", "meadow", "crew", "related", "blow", "cellar", "blonde", "humanity", "pony", "audience", "complication", "basis", "composer", "increase", "retire", "rule", "presence", "possibility", "resident", "finance", "tasty", "obligation", "frank", "green", "rung", "contradiction", "symptom", "keep", "crutch", "art", "swear", "passage", "champagne", "list", "topple", "reproduce", "remember", "credibility", "reign", "suffering", "compliance", "side", "human", "body", "lawyer", "tournament", "voyage", "sheep", "jail", "impulse", "menu", "dry", "include", "cathedral", "cigarette", "inflate", "yard", "temptation", "argument", "risk", "venture", "baseball", "fun", "headquarters", "development", "control", "coat", "default", "content", "shaft", "pilot", "thumb", "loan", "reaction", "girlfriend", "minute", "confront", "apathy", "match", "suntan", "trance", "serious", "overlook", "export", "oral", "biography", "officer", "census", "hard", "absent", "appoint", "waiter", "shower", "sniff", "chapter", "amuse", "learn", "plant", "efflux", "rock", "cash", "disagree", "different", "borrow", "boy", "camp", "packet", "barrier", "trouble", "attack", "landscape", "pen", "wife", "ostracize", "dismiss", "helicopter", "sound", "raid", "bleed", "siege", "TRUE", "domination", "medieval", "breeze", "representative", "grip", "brush", "exact", "wall", "coin", "praise", "weak", "mill", "crash", "free", "attachment", "black", "castle", "nightmare", "athlete", "second", "space", "designer", "defendant", "ton", "leak", "delete", "haunt", "professor", "host", "graze", "drawing", "mild", "supply", "nervous", "cassette", "global", "finished", "sequence", "credit", "twitch", "scale", "jealous", "exceed", "seat", "expression", "colorful", "incident", "workshop", "affect", "double", "display", "crowd", "sit", "conference", "detective", "investment", "obese", "ice", "vat", "rage", "crevice", "prison", "dawn", "teach", "insert", "haircut", "split", "fan", "pattern", "liver", "dictionary", "traction", "progressive", "tempt", "dismissal", "video", "chew", "microphone", "notice", "density", "manner", "class", "decade", "hypothesis", "fame", "neighbour", "wheel", "stay", "wisecrack", "danger", "reporter", "cater", "reservoir", "story", "theme", "vegetation", "serve", "printer", "monkey", "urine", "pit", "ant", "multimedia", "substitute", "frame", "clear", "club", "era", "intention", "install", "touch", "core", "formation", "parking", "spokesperson", "absence", "bond", "put", "rate", "stick", "fast", "architect", "accompany", "engagement", "symbol", "overwhelm", "evaluate", "fail", "falsify", "stomach", "splurge", "communist", "drain", "speculate", "kitchen", "quarter", "stir", "joint", "employee", "spot", "leaflet", "impress", "bundle", "distortion", "waterfall", "blackmail", "cultivate", "nationalist", "freeze", "writer", "random", "belief", "drown", "buffet", "coffee", "beam", "peanut", "loud", "kill", "limited", "agree", "room", "reduction", "mask", "difficult", "opposed", "cutting", "hunter", "headline", "division", "country", "rich", "brain", "say", "shop", "generation", "insurance", "battery", "steep", "distribute", "form", "afford", "restrict", "mushroom", "superintendent", "file", "strip", "poison", "language", "wake", "window", "inn", "prize", "infinite", "father", "want", "bucket", "primary", "execute", "quotation", "solo", "direct", "casualty", "sense", "absorb", "fisherman", "reactor", "manufacturer", "dine", "personality", "provide", "pitch", "throat", "criminal", "patrol", "restoration", "respectable", "invasion", "mention", "avant-garde", "canvas", "enthusiasm", "compound", "tender", "reckless", "plane", "fade", "retiree", "convention", "pedestrian", "gradual", "loyalty", "wreck", "analyst", "planet", "lease", "chair", "vote", "compartment", "break", "tap", "dog", "brave", "guilt", "hair", "regret", "jelly", "problem", "charismatic", "arrogant", "crackpot", "labour", "dependence", "guideline", "paragraph", "absorption", "provoke", "sector", "rub", "nominate", "survivor", "fountain", "agile", "awful", "subway", "complete", "reward", "advantage", "lid", "sticky", "brown", "posture", "reveal", "ready", "dangerous", "employ", "rational", "silence", "sculpture", "turkey", "compose", "shortage", "appearance", "shark", "bang", "lick", "coalition", "tract", "lover", "pick", "choice", "job", "bring", "applaud", "robot", "weight", "explicit", "stake", "expand", "handicap", "soup", "temple", "detector", "sweat", "cross", "horse", "full", "hardware", "ask", "sand", "total", "child", "bathtub", "worth", "magazine", "slice", "release", "performer", "hope", "grimace", "reserve", "revolutionary", "mouth", "page", "arrange", "railcar", "ego", "trivial", "congress", "jest", "left", "ruin", "pleasure", "bury", "remain", "flower", "embryo", "throw", "marsh", "conservation", "bother", "deficit", "flatware", "ash", "get", "shell", "exposure", "first", "offset", "link", "future", "panel", "sex", "winter", "snail", "admire", "compact", "persist", "hip", "debut", "aspect", "instinct", "software", "prayer", "exhibition", "discipline", "lamp", "kneel", "arrangement", "negative", "owner", "pyramid", "emergency", "wealth", "radiation", "receipt", "cafe", "habit", "feel", "corner", "meal", "shed", "pat", "weakness", "cooperate", "person", "linger", "hover", "cousin", "knee", "design", "shoulder", "train", "wardrobe", "film", "nose", "paint", "social", "dead", "despise", "food", "bird", "announcement", "occupation", "pile", "save", "health", "creed", "demand", "flour", "mail", "carrier", "distant", "exploration", "pest", "virtue", "chop", "calculation", "complex", "knife", "ivory", "acceptable", "folk", "indoor", "mix", "apparatus", "pool", "frog", "version", "fossil", "assumption", "tumour", "truth", "agriculture", "basketball", "mutter", "helpless", "way", "chief", "communication", "overall", "recommend", "unrest", "ear", "word", "training", "impound", "glue", "clay", "compromise", "nursery", "pause", "demonstrator", "satisfaction", "doll", "factor", "notion", "makeup", "screw", "stream", "resolution", "cover", "gem", "talk", "wriggle", "responsibility", "committee", "capital", "zero", "motorist", "counter", "slap", "virus", "presidential", "residence", "assume", "report", "book", "culture", "calorie", "important", "quest", "jaw", "facade", "cup", "thought", "uncertainty", "administration", "lion", "cheek", "interactive", "debt", "courtship", "pneumonia", "chauvinist", "belt", "relevance", "fascinate", "question", "hole", "glow", "origin", "pierce", "transition", "difficulty", "copy", "slow", "board", "equation", "discovery", "tablet", "creation", "temporary", "module", "reduce", "tiger", "axis", "bark", "standard", "terrace", "offspring", "sister", "tolerate", "calf", "consumption", "concern", "facility", "calendar", "exit", "iron", "veteran", "confine", "decisive", "angle", "blame", "stroke", "confuse", "flight", "push", "observer", "sum", "edition", "youth", "slump", "deserve", "effect", "guitar", "night", "march", "blind", "possession", "launch", "express", "note", "ballot", "cause", "fence", "season", "treatment", "false", "lace", "shelf", "swop", "ridge", "intelligence", "threat", "tension", "creep", "complain", "soul", "diplomat", "camera", "service", "pier", "document", "defeat", "attractive", "ambition", "cheat", "lung", "syndrome", "fish", "refrigerator", "golf", "inappropriate", "beg", "struggle", "program", "safari", "product", "fever", "fault", "mail", "drama", "fog", "measure"];

const wArrLen = words.length;

let usedWords = [];
let selectedWord = "";
let sWlen = 0;
let guessed = [];
let wordBlank = [];
let currIndices = [];
let guesses = 9;
let correct = 0;
let wins = 0;
let losses = 0;

let lettersGuessed = document.getElementById('lettersGuessed');
let selWord = document.getElementById('selWord');
let guessesRemaining = document.getElementById('guessesRemaining');
let alertMessage = document.getElementById('alertMessage');
let playBtn = document.getElementById('playBtn');
let winsDisplay = document.getElementById('wins');
let lossDisplay = document.getElementById('losses');
let percent = document.getElementById('percentage');
let resetBtn = document.getElementById('reset');

let writeToDom = function (a, b, c) {
  lettersGuessed.textContent = a.join(", ");
  guessesRemaining.textContent = c;
  selWord.textContent = b.join(" ");
  record();
}

let includes = function (a, b) {
  return a.includes(b);
}

let wordSelect = function () {
  let random = Math.floor(Math.random() * wArrLen);
  selectedWord = words[random];
  sWlen = selectedWord.length;
  return selectedWord;
}

let checkDuplicate = function (str) {
  if (includes(usedWords, str)) {
    wordSelect();
  } else {
    usedWords.push(str);
    return str;
  }
}

let createBlank = function (str) {
  for (let letter of str) {
    wordBlank.push('-');
  }
  return wordBlank;
}

let updateBlank = function (arr, g) {
  for (let i = 0; i < arr.length; i++) {
    wordBlank[arr[i]] = g;
    correct++;
    currIndices = [];
  }
}

let findIndices = function (char) {
  for (let i = 0; i < sWlen; i++) {
    if (char === selectedWord[i]) {
      currIndices.push(i);
    }
  }
  return currIndices;
}

let checkWord = function (num) {
  if (num === sWlen) {
    alertMessage.textContent = "Congratulations!  You win!".toUpperCase() + "\n" + "Click 'Play Again' for your next word.";
    wins++;
    record();
    nextGame();
  }
}

let checkGuesses = function (num, char) {
  if (num === 0) {
    alertMessage.textContent = "Sorry...you lost! The word was " + selectedWord.toUpperCase() + ". Better luck next time.";
    selWord.textContent = selectedWord;
    losses++;
    record();
    nextGame();
  } else {
    alertMessage.textContent = "Sorry, the letter '" + char + "' is not the word. \nYou have " + num + " more guesses. \nChoose wisely!";
  }
}

let checkLetter = function (char) {
  if (includes(guessed, char)) {
    alertMessage.textContent = "'" + char + "' has already been guessed. Please select another letter."
  } else {
    if (includes(selectedWord, char)) {
      findIndices(char);
      updateBlank(currIndices, char);
      alertMessage.textContent = 'CORRECT!'
      checkWord(correct);
    } else {
      guesses--;
      checkGuesses(guesses, char);
    }
    guessed.push(char);
  }
}

let record = function () {
  winsDisplay.textContent = wins.toString();
  lossDisplay.textContent = losses.toString();
  if (wins + losses == 0 || wins == 0) {
    percent.textContent = Number(0).toLocaleString('en-US', { style: 'percent' });
  } else {
    percent.textContent = (wins / (wins + losses)).toLocaleString('en-US', { style: 'percent' })
  }
}

let runGame = function () {
  wordSelect();
  checkDuplicate(selectedWord);
  createBlank(selectedWord);
  writeToDom([], wordBlank, guesses);
  alertMessage.textContent = "";
  console.log('game is running');
}

document.onkeyup = function (event) {
  if (selectedWord === "") {
    selWord.textContent = "Click 'PLAY' to begin."
    return false;
  } else if (guesses == 0) {
    selWord.textContent = "Click 'PLAY' to get another word";
    return false;
  }
  let regEx = /[a-zA-Z]/
  let key = event.key;
  if (!regEx.test(key)) {
    alertMessage.textContent = "That isn't even a letter...minus 2 guesses."
    guesses -= 2;
  } else {
    checkLetter(key);
  }
  writeToDom(guessed, wordBlank, guesses);
}

let nextGame = function () {
  playBtn.textContent = "PLAY AGAIN";
  playBtn.setAttribute('onclick', 'playAgain()');
}

let playAgain = function () {
  selectedWord = "";
  sWlen = 0;
  guessed = [];
  wordBlank = [];
  currIndices = [];
  guesses = 9;
  correct = 0;
  runGame();
}

let reset = function () {
  wins = 0;
  losses = 0;
  playAgain();
}









