/* Fluid per-topic layouts, stage 6 practical Java (10 topics). */
export const LAYOUTS_E = {
'exceptions': { heroTitle: 'Exceptions: Fire Alarms', heroDesc: 'Try the risk, catch the species, finally cleans. Never nap through alarms.', tip: 'Specific species first. Empty catch = arson.',
 steps: [
  { nav: 'Wedding bouncers', h2: 'Try, catch by species, clean', sub: 'throw shouts; throws warns.', blocks: [
   { t: 'analogy', emoji: '🚨', html: '<strong>Wedding bouncers.</strong> TRY hosts; CATCH ushers each crasher-species out; FINALLY cleans no matter what. Empty catch = nap through the fire.' },
   { t: 'codelab', fromLesson: true, about: '"18" sails through; "abc" diverts to plan B; finally always speaks.', slots: [ { title: 'parse "18"', value: 'Age 18', note: 'Success path' }, { title: 'parse "abc"', value: 'Plan B', note: 'Catch path' }, { title: 'finally', value: 'Always runs', note: 'Cleanup', good: true } ], note: 'Recover with plan B, or propagate honestly. Swallow never.' } ] },
  { nav: 'Net order', h2: 'General catch first?', sub: 'One order compiles.', blocks: [
   { t: 'mistake', qname: 'ex', q: 'catch (Exception e) BEFORE catch (IOException e)…', options: [ { v: 'a', html: 'Compile error — specific nets unreachable.' }, { v: 'b', html: 'Fine and best practice.' }, { v: 'c', html: 'Runs twice as fast.' } ], good: 'a', okText: 'Specific species first, general safety-net last.', noText: 'Which net should a specific fish meet FIRST?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Alarms and cleanups.', blocks: [
   { t: 'quiz', celTitle: 'Firefighter unlocked!', celText: 'Try risk, catch species, finally always.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'try', label: 'risky part' }, { code: 'catch (X e)', label: 'species plan' }, { code: 'finally', label: 'always' }, { code: 'throw/throws', label: 'shout/warn' } ], next: 'Next: the five usual suspects.' } ] } ] },
'common-exceptions': { heroTitle: 'Five Usual Suspects', heroDesc: 'Memorize the faces, guard at the door, write messages for 2 a.m.', tip: 'Validate at the door. Fail fast, fail loud.',
 steps: [
  { nav: 'Photo wall', h2: 'Ghost, seat, ticket…', sub: 'Null, index, format, mismatch, file.', blocks: [
   { t: 'analogy', emoji: '📸', html: '<strong>Bouncer’s photo wall.</strong> NullPointer (ghost), IndexOutOfBounds (wrong seat), NumberFormat (forged ticket), InputMismatch (wrong currency), FileNotFound (wrong hall). Check IDs AT THE DOOR.' },
   { t: 'codelab', fromLesson: true, about: 'Two detonations converted to two sentences.', slots: [ { title: 'null name', value: 'Using Guest', note: 'Fallback' }, { title: 'seat 5?', value: 'No seat 5', note: 'Guarded', good: true } ], note: 'BUGS get fixed (null where impossible). EVENTS get handled (users lose files).' } ] },
  { nav: 'Message ER', h2: '"Error!!" helps whom?', sub: 'Rule + value + place.', blocks: [
   { t: 'mistake', qname: 'ce', q: 'Best failure message for age = −5?', options: [ { v: 'a', html: '"Age must be 0-150, got -5."' }, { v: 'b', html: '"Error!!"' }, { v: 'c', html: 'No message — crash raw.' } ], good: 'a', okText: 'Rule + evidence = actionable at 2 a.m.', noText: 'Which message tells you WHAT to fix?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Faces, guards, messages.', blocks: [
   { t: 'quiz', celTitle: 'Bouncer 2 unlocked!', celText: 'Five faces; door guards; loud messages.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: '!= null', label: 'ghost guard' }, { code: '0<=i<len', label: 'seat guard' }, { code: 'hasNextInt', label: 'token guard' } ], next: 'Next: collections.' } ] } ] },
'collections': { heroTitle: 'List, Set, Map', heroDesc: 'Queue, guest-list, coat check. Three promises, zero confusion.', tip: 'Program to interfaces: List left, ArrayList right.',
 steps: [
  { nav: 'Party tools', h2: 'Queue, list, tickets', sub: 'Same names, three answers.', blocks: [
   { t: 'analogy', emoji: '🎉', html: '<strong>Party tools.</strong> List = photo queue (order + dupes). Set = VIP list (unique). Map = coat tickets (key finds coat). Tiny fixed data? Humble array still wins.' },
   { t: 'codelab', fromLesson: true, about: 'Ada, Bob, Ada through three tools.', slots: [ { title: 'List size', value: '3', note: 'Dupes kept' }, { title: 'Set size', value: '2', note: 'Unique' }, { title: 'Map Ada', value: '18', note: 'By ticket', good: true } ], note: 'Keys unique; values repeat. Hash order is NOT a promise!' } ] },
  { nav: 'Pick the tool', h2: 'Three jobs, three tools', sub: 'Voters, ranks, lookups.', blocks: [
   { t: 'matcher', title: 'Staff the party', desc: 'Unique voters? Leaderboard? Phone lookup?', values: [ { v: 'a', label: 'Unique voters' }, { v: 'b', label: 'Ranked leaderboard' }, { v: 'c', label: 'Phone → name' } ], types: ['Set', 'List', 'Map'], map: { a: 'Set', b: 'List', c: 'Map' } } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Promises and orders.', blocks: [
   { t: 'quiz', celTitle: 'Host unlocked!', celText: 'List order, Set unique, Map keyed.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'List', label: 'order+dupes' }, { code: 'Set', label: 'unique' }, { code: 'Map', label: 'key→value' } ], next: 'Next: ArrayList & HashMap.' } ] } ] },
'arraylist-hashmap': { heroTitle: 'ArrayList & HashMap', heroDesc: 'Growable queue + ticket shelf. Six methods each runs the world.', tip: 'Missing key → null. Armor: getOrDefault.',
 steps: [
  { nav: 'Line + lockers', h2: 'Trays shift, lockers don’t', sub: 'Different physics, different costs.', blocks: [
   { t: 'analogy', emoji: '🍱', html: '<strong>Canteen + lockers.</strong> Pull the FIRST tray → everyone shuffles (linear cost!). Lockers need GOOD tickets: mutating a key’s hash loses the coat forever.' },
   { t: 'code', label: 'Daily drivers', fromLesson: true, gloss: '<strong>Lists:</strong> brackets are illegal — <code>get(0)</code>! <strong>Maps:</strong> absent keys give <code>null</code> — unbox blindly, detonate.' } ] },
  { nav: 'Mid-loop edit?', h2: 'remove inside for-each…', sub: 'Famous detonation inside.', blocks: [
   { t: 'mistake', qname: 'ah', q: 'map.remove(k) inside for-each over the map…', options: [ { v: 'a', html: 'ConcurrentModificationException.' }, { v: 'b', html: 'Works perfectly.' }, { v: 'c', html: 'Skips silently.' } ], good: 'a', okText: 'Structural edits need removeIf or Iterator.', noText: 'Can you rebuild the shelf WHILE touring it?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Methods and armor.', blocks: [
   { t: 'quiz', celTitle: 'Clerk unlocked!', celText: 'add/get/size; put/getOrDefault; never edit mid-tour.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'get(i)', label: 'not [i]!' }, { code: 'getOrDefault', label: 'null armor' }, { code: 'entrySet', label: 'loop both' } ], next: 'Next: generics.' } ] } ] },
'generics': { heroTitle: 'Generics: Luggage Tags', heroDesc: 'List of String refuses socks at PACKING. Tags wash off at runtime.', tip: 'Tag every collection. Raw = legacy risk.',
 steps: [
  { nav: 'Labeled bins', h2: 'Beep at drop-off', sub: 'Not discovery at unpacking.', blocks: [
   { t: 'analogy', emoji: '🧳', html: '<strong>Labeled bins.</strong> String-bin beeps at socks DURING packing (compile error). Raw bin swallows all — ClassCastException at unpacking, far from the crime. Tags wash off after (erasure); primitives can’t ride (no List of int).' },
   { t: 'code', label: 'Tagged bin', fromLesson: true, gloss: '<strong>Diamond <></strong> copies the tag right. <code>get()</code> needs NO cast — the tag proves content.' } ] },
  { nav: 'Packing vs airport', h2: 'When is add(5) caught?', sub: 'List of String vs raw List.', blocks: [
   { t: 'mistake', qname: 'gen', q: 'names.add(5) into List of String fails…', options: [ { v: 'a', html: 'At COMPILE time — best kind.' }, { v: 'b', html: 'At runtime, far away.' }, { v: 'c', html: 'Never — 5 fits.' } ], good: 'a', okText: 'Packing check beats airport discovery, every time.', noText: 'Who checks the tag — compiler or JVM?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Tags, diamonds, wrappers.', blocks: [
   { t: 'quiz', celTitle: 'Tagger unlocked!', celText: 'Compile-time safety; <> infers; wrappers ride.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'List<String>', label: 'tagged' }, { code: '<>', label: 'diamond' }, { code: 'Integer', label: 'not int' } ], next: 'Next: enums.' } ] } ] },
'enums': { heroTitle: 'Enums: Fixed Menus', heroDesc: 'MON–SUN, SMALL–LARGE. Typos become compile errors.', tip: 'Persist names, never ordinals.',
 steps: [
  { nav: 'Signal lights', h2: 'Only 3 exist', sub: 'PURPLE rejected at compile.', blocks: [
   { t: 'analogy', emoji: '🚦', html: '<strong>Signal lights.</strong> RED/YELLOW/GREEN exist; PURPLE can’t be invented at runtime. Switch exhausts all three — compiler CHECKS you. Daily specials (open-ended)? Strings, not enums.' },
   { t: 'codelab', fromLesson: true, about: 'MEDIUM matches; ordinal counts from zero.', slots: [ { title: 'match', value: '500ml', note: 'Exact' }, { title: 'ordinal', value: '1', note: 'Zero-based', good: true } ], note: '== is CORRECT here (singletons!). valueOf parses — CASE-EXACT.' } ] },
  { nav: 'Persist what?', h2: 'ordinal vs name', sub: 'Reorder-proof storage.', blocks: [
   { t: 'mistake', qname: 'en', q: 'Saving enums to a file: store…', options: [ { v: 'a', html: 'Names — reorders stay safe.' }, { v: 'b', html: 'Ordinals — stable forever.' }, { v: 'c', html: 'Memory addresses.' } ], good: 'a', okText: 'Inserting a value shifts every ordinal after it. Names survive.', noText: 'What happens to positions when the menu grows?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Menus and matches.', blocks: [
   { t: 'quiz', celTitle: 'Maître d’ unlocked!', celText: 'Fixed sets; == safe; names persist.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'enum', label: 'fixed menu' }, { code: '==', label: 'safe here' }, { code: 'name()', label: 'persist this' } ], next: 'Next: files.' } ] } ] },
'files': { heroTitle: 'Files That Remember', heroDesc: 'NIO one-liners, auto-closing registers, kindness for missing files.', tip: 'Relative paths travel. Absolute die.',
 steps: [
  { nav: 'Library desk', h2: 'Register, read, auto-return', sub: 'Never walk off holding it.', blocks: [
   { t: 'analogy', emoji: '📖', html: '<strong>Library desk.</strong> Open the register (Path), write/read lines, AUTO-RETURN via try-with-resources — even mid-fire. Missing file? Weather, not bug: defaults + message.' },
   { t: 'code', label: 'Round trip', fromLesson: true, gloss: '<strong>writeString</strong> creates + truncates + closes solo. Relative <code>hi.txt</code> resolves at the RUN folder — print user.dir when lost.' } ] },
  { nav: 'Absent file?', h2: 'NoSuchFile = ?', sub: 'Crash or weather?', blocks: [
   { t: 'mistake', qname: 'file', q: 'Config file missing at startup. Move?', options: [ { v: 'a', html: 'Catch, start with defaults, tell user.' }, { v: 'b', html: 'Crash with stack trace.' }, { v: 'c', html: 'Create 10 empty files.' } ], good: 'a', okText: 'Absence is weather. Defaults + message = grace.', noText: 'Whose fault is a missing user file?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'NIO and grace.', blocks: [
   { t: 'quiz', celTitle: 'Archivist unlocked!', celText: 'NIO one-liners; auto-close; grace for absence.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'writeString', label: 'one-line save' }, { code: 'readString', label: 'one-line load' }, { code: 'try (..)', label: 'auto-close' } ], next: 'Next: unit tests.' } ] } ] },
'unit-testing': { heroTitle: 'Unit Tests: Taste Spoons', heroDesc: 'Robots check known answers. Green = safe to refactor.', tip: 'Expected FIRST, actual second. Edges included.',
 steps: [
  { nav: 'Taste spoon', h2: 'add(2,3) MUST taste 5', sub: '@Test writes the spoon.', blocks: [
   { t: 'analogy', emoji: '🥄', html: '<strong>Taste spoon.</strong> @Test + assertEquals(expected, actual) sips. Red spoon → fix the RECIPE, never blame the spoon (editing tests to match bugs = shooting the messenger).' },
   { t: 'code', label: 'Recipe + spoons', fromLesson: true, gloss: '<strong>Edges, not just sunshine:</strong> 0, negatives, empties. Bugs breed at boundaries; middles behave.' } ] },
  { nav: 'Red means…?', h2: 'Test fails. Move?', sub: 'Recipe or spoon?', blocks: [
   { t: 'mistake', qname: 'ut', q: 'assertEquals(5, add(2,3)) goes RED. Fix?', options: [ { v: 'a', html: 'The add() recipe code.' }, { v: 'b', html: 'The test — expect 4 now.' }, { v: 'c', html: 'Delete the test.' } ], good: 'a', okText: 'Spoons report; recipes obey. Green tests prove CHECKED cases, not bug-freedom.', noText: 'Who is on trial — the dish or the spoon?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Spoons and sentences.', blocks: [
   { t: 'quiz', celTitle: 'Taster unlocked!', celText: 'Known answers; expected-first; edges; recipe obeys.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: '@Test', label: 'spoon' }, { code: 'expected, actual', label: 'order!' }, { code: '0, neg, empty', label: 'edges' } ], next: 'Next: Maven shelves.' } ] } ] },
'maven-structure': { heroTitle: 'Maven: Standard Store', heroDesc: 'Shelves, shopping list, fetched ingredients. mvn test tastes all.', tip: 'Commit the pom. Guard the list.',
 steps: [
  { nav: 'Store map', h2: 'Milk always same aisle', sub: 'Any clerk finds it day one.', blocks: [
   { t: 'analogy', emoji: '🏪', html: '<strong>Standard store.</strong> src/main/java (fresh food), src/test/java (spoons mirror), pom.xml (shopping list). <code>mvn test</code> = taste EVERYTHING.' },
   { t: 'code', label: 'pom.xml essentials', fromLesson: true, gloss: '<strong>test scope</strong> = spoons never ship in jars. Pin release 17 for identical builds.' } ] },
  { nav: 'Jar by email?', h2: 'JUnit arrives how?', sub: 'Declare vs hand-carry.', blocks: [
   { t: 'mistake', qname: 'mvn', q: 'Teammate emails junit.jar. Verdict?', options: [ { v: 'a', html: 'Chaos — declare it in pom instead.' }, { v: 'b', html: 'Best practice.' }, { v: 'c', html: 'Faster builds.' } ], good: 'a', okText: 'Declared deps fetch identically everywhere. Emailed jars rot.', noText: 'Who versions an emailed jar?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Shelves and lists.', blocks: [
   { t: 'quiz', celTitle: 'Manager unlocked!', celText: 'Standard shelves; pom fetches; 17 pinned.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'src/main/java', label: 'product' }, { code: 'src/test/java', label: 'spoons' }, { code: 'pom.xml', label: 'the list' } ], next: 'Next: conventions.' } ] } ] },
'conventions': { heroTitle: 'Conventions: Kind Code', heroDesc: 'Names teach, format guides, tests prove. Read 10× more than you write.', tip: 'Leave every file cleaner than found.',
 steps: [
  { nav: 'Road signs', h2: 'Streets, cities, highways', sub: 'Shared shapes worldwide.', blocks: [
   { t: 'analogy', emoji: '🛣️', html: '<strong>Road rules.</strong> camelCase streets (userAge), PascalCase cities (TaskManager), UPPER highways (MAX_SIZE). Formatters = self-driving painters: run on save, never debate spaces.' },
   { t: 'code', label: 'Murky vs kind', fromLesson: true, gloss: '<strong>Booleans ASK:</strong> isEmpty, canBorrow. 80-line method? Split to print/save/email. Corpses? Git remembers — delete.' } ] },
  { nav: 'Name it', h2: 'boolean f = file exists?', sub: 'One rename, ten readers helped.', blocks: [
   { t: 'matcher', title: 'Fix the names', desc: 'Match murky to kind.', values: [ { v: 'a', label: 'int d (days till trip)' }, { v: 'b', label: 'boolean f (file exists?)' }, { v: 'c', label: 'class cm (cart manager)' } ], types: ['daysUntilTrip', 'fileExists', 'CartManager'], map: { a: 'daysUntilTrip', b: 'fileExists', c: 'CartManager' } } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Cases and corpses.', blocks: [
   { t: 'quiz', celTitle: 'Citizen unlocked!', celText: 'Cases per kind; small methods; delete dead code.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'camelCase', label: 'vars/methods' }, { code: 'PascalCase', label: 'classes' }, { code: 'isX/canY', label: 'booleans ask' } ], next: 'Projects: build real apps!' } ] } ] }
};
