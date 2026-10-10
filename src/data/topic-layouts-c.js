/* Fluid per-topic layouts, stage 5 OOP (14 topics). */
export const LAYOUTS_C = {
'classes-objects': { heroTitle: 'Classes & Objects', heroDesc: 'Blueprints vs houses. Same plan, independent states.', tip: 'Data lives in OBJECTS. The class only describes.',
 steps: [
  { nav: 'Colony blueprint', h2: 'One plan, many homes', sub: 'Shared design, private mess.', blocks: [
   { t: 'analogy', emoji: '🏘️', html: '<strong>Housing colony.</strong> Blueprint Book defines title, borrow(). Your copy: borrowed. Mine: free. Same DESIGN, different STATE.' },
   { t: 'codelab', fromLesson: true, about: 'Two houses built; one flag flipped.', slots: [ { title: 'b1', value: 'Dune ✓out', note: 'Borrowed' }, { title: 'b2', value: 'Solaris free', note: 'Untouched', good: true } ], note: 'Flipping b1 cannot reach b2. Independence IS the point.' } ] },
  { nav: 'Build or crash?', h2: 'Book b; b.borrow();', sub: 'Slip with no house.', blocks: [
   { t: 'mistake', qname: 'co', q: 'Book b; b.borrow(); — result?', options: [ { v: 'a', html: 'NullPointer — no house built.' }, { v: 'b', html: 'Works, borrows fine.' }, { v: 'c', html: 'Builds automatically.' } ], good: 'a', okText: 'Declare ≠ build. new Book() first, then touch.', noText: 'Does declaring a slip also build the house?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Plans, houses, dots.', blocks: [
   { t: 'quiz', celTitle: 'Architect unlocked!', celText: 'Class = plan; object = instance; new builds.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'class', label: 'blueprint' }, { code: 'new', label: 'builds' }, { code: '.', label: 'uses' } ], next: 'Next: fields & methods.' } ] } ] },
'fields-methods': { heroTitle: 'Fields & Methods', heroDesc: 'Fields remember; methods do. Queries read, commands change.', tip: 'Verbs for methods, nouns for fields.',
 steps: [
  { nav: 'Library card', h2: 'Memory plus actions', sub: 'The card remembers so you don’t.', blocks: [
   { t: 'analogy', emoji: '💳', html: '<strong>Library card.</strong> Fields: name, books held (memory). Methods: borrow(), returnBook() (actions updating memory CORRECTLY).' },
   { t: 'code', label: 'Book sketch', fromLesson: true, gloss: '<strong>Query</strong> isAvailable reads; <strong>commands</strong> borrow/returnBook write. Dot always names the actor.' } ] },
  { nav: 'Query or command?', h2: 'Sort four members', sub: 'Reads vs changes.', blocks: [
   { t: 'matcher', title: 'Label the jobs', desc: 'getTitle, setPages, isAvailable, borrow.', values: [ { v: 'a', label: 'getTitle / isAvailable' }, { v: 'b', label: 'setPages / borrow' } ], types: ['Query (reads)', 'Command (changes)'], map: { a: 'Query (reads)', b: 'Command (changes)' } } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Memory, actions, names.', blocks: [
   { t: 'quiz', celTitle: 'Keeper unlocked!', celText: 'Fields per object; methods verb-named, single-job.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'field', label: 'remembers' }, { code: 'method()', label: 'does' }, { code: 'query?', label: 'reads' } ], next: 'Next: constructors.' } ] } ] },
'constructors': { heroTitle: 'Constructors: Birth Rituals', heroDesc: 'Name + starting values in ONE call. No half-built objects.', tip: 'Any constructor evicts the free default.',
 steps: [
  { nav: 'Certificate office', h2: 'Valid at birth', sub: 'Stamp title once, valid forever after.', blocks: [
   { t: 'analogy', emoji: '🍼', html: '<strong>Birth certificates.</strong> Hand name + data ONCE → valid citizen. new Book("Dune") stamps at birth. Later edits go through methods, not rebirth.' },
   { t: 'code', label: 'Three births', fromLesson: true, gloss: '<strong>No return type</strong> — not even void. Overloads by arguments; <code>this(...)</code> chains first line.' } ] },
  { nav: 'Spot the fake', h2: 'void Book(...)???', sub: 'Constructor or method?', blocks: [
   { t: 'mistake', qname: 'ctor', q: 'void Book(String t) { ... } is…', options: [ { v: 'a', html: 'A METHOD named Book — not a constructor!' }, { v: 'b', html: 'A perfect constructor.' }, { v: 'c', html: 'A compile error always.' } ], good: 'a', okText: 'The missing return type IS the marker. void ruins it.', noText: 'What is the ONE visual marker of constructors?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Names, overloads, eviction.', blocks: [
   { t: 'quiz', celTitle: 'Midwife unlocked!', celText: 'Class name, no return, overloads, this() chains.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'Book(t)', label: 'birth' }, { code: 'no return', label: 'marker' }, { code: 'this(...)', label: 'chain first' } ], next: 'Next: the this keyword.' } ] } ] },
'this-keyword': { heroTitle: 'this: “This Object Here”', heroDesc: 'Untangles shadowed names; phones sibling constructors.', tip: 'Surgical this, not decorative.',
 steps: [
  { nav: 'The “I” tag', h2: 'Which title?!', sub: 'Field vs parameter crowd.', blocks: [
   { t: 'analogy', emoji: '🪪', html: '<strong>“I” name tag.</strong> Two titles in scope? <code>this.title</code> = MY field. <code>this(...)</code> phones my sibling constructor. No object (static)? No “I” — compile error.' },
   { t: 'code', label: 'Shadow, fixed', fromLesson: true, gloss: '<strong>title = title</strong> self-assigns the parameter (field stays null!). <code>this.title = title</code> routes to the field.' } ] },
  { nav: 'Silent killer', h2: 'Compiles, wrong forever', sub: 'The shadow trap has no warning.', blocks: [
   { t: 'mistake', qname: 'this', q: 'Book(String title){ title = title; } leaves the field…', options: [ { v: 'a', html: 'null — parameter self-assigned.' }, { v: 'b', html: 'Correctly set.' }, { v: 'c', html: 'Deleted.' } ], good: 'a', okText: 'Silent classic. this.title = title, always when shadowed.', noText: 'Which “title” does a bare name mean?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Fields, siblings, statics.', blocks: [
   { t: 'quiz', celTitle: 'Self-aware unlocked!', celText: 'this = this object; chains lead; statics lack it.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'this.x', label: 'my field' }, { code: 'this(...)', label: 'sibling first' }, { code: 'no static this', label: 'nobody home' } ], next: 'Next: encapsulation.' } ] } ] },
'encapsulation': { heroTitle: 'Encapsulation: Vault + ATM', heroDesc: 'Private fields, validating methods. One guard protects all callers.', tip: 'Validate once, inside, loudly.',
 steps: [
  { nav: 'Medicine bottle', h2: 'Locked cap, measured spoon', sub: 'Rules live in ONE place.', blocks: [
   { t: 'analogy', emoji: '💊', html: '<strong>Child-proof bottle.</strong> Locked cap (private) + measured spoon (public method). Handfuls impossible; safe doses easy. Clumsy spoons make users pry — design lovingly.' },
   { t: 'codelab', fromLesson: true, about: 'One doorway, guarded. −5 detonates, 200 stores.', slots: [ { title: 'setPages(−5)', value: 'REJECTED', note: 'Loud error' }, { title: 'setPages(200)', value: 'Stored', note: 'Valid' }, { title: 'getPages()', value: '200', note: 'Reported', good: true } ], note: 'Read-only = getter with NO setter. Never leak live mutable lists!' } ] },
  { nav: 'Leak drill', h2: 'getList() returns live list…', sub: 'Vault door left open?', blocks: [
   { t: 'mistake', qname: 'enc', q: 'Getter hands out the LIVE private list. Consequence?', options: [ { v: 'a', html: 'Callers mutate your privates — theater.' }, { v: 'b', html: 'Nothing — getters are safe.' }, { v: 'c', html: 'Faster code.' } ], good: 'a', okText: 'Return copies or unmodifiable views. Vault means vault.', noText: 'What can a caller do with a live list reference?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Vaults, spoons, leaks.', blocks: [
   { t: 'quiz', celTitle: 'Guard unlocked!', celText: 'Hide fields; validate inside; never leak guts.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'private', label: 'vault' }, { code: 'get/set', label: 'spoons' }, { code: 'validate!', label: 'in setter' } ], next: 'Next: access levels.' } ] } ] },
'access-mods': { heroTitle: 'Access Modifiers', heroDesc: 'Bedroom, kitchen, heirloom, gate. Start locked; open deliberately.', tip: 'Most restrictive that works. Public is forever.',
 steps: [
  { nav: 'House floor plan', h2: 'Who enters which room?', sub: 'Me < neighbors < family < world.', blocks: [
   { t: 'analogy', emoji: '🏡', html: '<strong>The house.</strong> Bedroom private (you), kitchen package (flatmates), heirloom protected (kids + flatmates), gate public (world). Locks express INTENT — not NSA security (reflection pries).' },
   { t: 'facts', title: 'The spectrum', rows: [ ['<b>private</b>', 'This class only — start here'], ['<b>package</b>', 'Neighbors; tests use this'], ['<b>protected</b>', 'Package + subclasses'], ['<b>public</b>', 'Everyone — a PROMISE'] ] } ] },
  { nav: 'Rank it', h2: 'Strict → loose', sub: 'Order the four levels.', blocks: [
   { t: 'matcher', title: 'Order the spectrum', desc: 'Strictest to loosest.', values: [ { v: 'a', label: 'This class only' }, { v: 'b', label: 'Package neighbors' }, { v: 'c', label: 'Package + kids' }, { v: 'd', label: 'Everyone' } ], types: ['private', 'package', 'protected', 'public'], map: { a: 'private', b: 'package', c: 'protected', d: 'public' } } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Levels and promises.', blocks: [
   { t: 'quiz', celTitle: 'Bouncer unlocked!', celText: 'Lock first; public promises break callers if cut.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'private', label: 'me' }, { code: '(default)', label: 'neighbors' }, { code: 'protected', label: '+ kids' }, { code: 'public', label: 'promise' } ], next: 'Next: static members.' } ] } ] },
'static-members': { heroTitle: 'static: The Shared Park', heroDesc: 'One copy for the whole class. No object needed — but no this either.', tip: 'Read statics via ClassName. Never via objects.',
 steps: [
  { nav: 'Park vs gardens', h2: 'Shared sign, private plots', sub: 'Litter in the park bothers all.', blocks: [
   { t: 'analogy', emoji: '🌳', html: '<strong>Colony park vs gardens.</strong> totalBooks: ONE shared sign. title: per-house garden. Anyone strolls into the park (no object!) but sees no private gardens (no this). Shared mutable = shared RISK.' },
   { t: 'codelab', fromLesson: true, about: 'Two births, one sign ticked twice.', slots: [ { title: 'new A', value: 'total = 1', note: 'Tick' }, { title: 'new B', value: 'total = 2', note: 'Tick again', good: true } ], note: 'Constants + pure helpers: ideal. Mutable shared: gloves on.' } ] },
  { nav: 'Whose total?', h2: 'Book.total vs b.total', sub: 'One lies about ownership.', blocks: [
   { t: 'mistake', qname: 'st', q: 'Reading a static through an OBJECT (b.total)…', options: [ { v: 'a', html: 'Compiles but lies — use Book.total.' }, { v: 'b', html: 'Best practice.' }, { v: 'c', html: 'Crashes always.' } ], good: 'a', okText: 'Ownership printed honestly: class name, always.', noText: 'Who OWNS total — the house or the blueprint?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Sharing rules.', blocks: [
   { t: 'quiz', celTitle: 'Park-keeper unlocked!', celText: 'One copy via ClassName; no this in static-land.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'static', label: 'one copy' }, { code: 'ClassName.x', label: 'honest read' }, { code: 'no this', label: 'no object' } ], next: 'Next: inheritance.' } ] } ] },
'inheritance': { heroTitle: 'Inheritance: Hand-Me-Downs', heroDesc: 'Children reuse parents. Say “X is a Y” aloud — or compose.', tip: 'super(...) first line. Parents build first.',
 steps: [
  { nav: 'Family wardrobe', h2: 'Jackets + extras', sub: 'One donor only (no diamonds).', blocks: [
   { t: 'analogy', emoji: '🧥', html: '<strong>Family wardrobe.</strong> Parent owns name, walk(). Student extends Person: inherits all, adds grade. Java allows ONE class donor — interfaces give many later.' },
   { t: 'code', label: 'Student sketch', fromLesson: true, gloss: '<strong>super(n)</strong> builds the parent slice FIRST. Children add, never remove. “Book is a Library”? Fails → compose!' } ] },
  { nav: 'Is-a drill', h2: 'Say it aloud', sub: 'Pass → extends. Fail → field.', blocks: [
   { t: 'matcher', title: 'Kind or holder?', desc: 'Apply the aloud test.', values: [ { v: 'a', label: 'Student / Person' }, { v: 'b', label: 'Book / Library' }, { v: 'c', label: 'Car / Engine' } ], types: ['Inherit (is-a)', 'Compose (has-a)'], map: { a: 'Inherit (is-a)', b: 'Compose (has-a)', c: 'Compose (has-a)' } } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Reuse rules.', blocks: [
   { t: 'quiz', celTitle: 'Heir unlocked!', celText: 'extends reuses; super builds first; single parent.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'extends', label: 'reuses' }, { code: 'super(...)', label: 'parent first' }, { code: 'is-a?', label: 'aloud test' } ], next: 'Next: overriding.' } ] } ] },
'overriding': { heroTitle: 'Overriding: Tailored Jackets', heroDesc: 'Same signature, new behavior. @Override proves intent.', tip: '@Override EVERY override. No exceptions.',
 steps: [
  { nav: 'Tailor shop', h2: 'Same jacket, new cut', sub: 'Measurements must match exactly.', blocks: [
   { t: 'analogy', emoji: '✂️', html: '<strong>Tailor shop.</strong> Parent speak() says “…”. Dog re-cuts it to “Woof!”. @Override tag = “deliberate”. Different inputs? That’s OVERLOADING — a different shop (compile-time choice).' },
   { t: 'code', label: 'Dog sketch', fromLesson: true, gloss: '<strong>Object decides at runtime:</strong> Animal a = new Dog(); a.speak() barks. Dynamic dispatch powers polymorphism.' } ] },
  { nav: 'Overload or override?', h2: 'speak() vs speak(String)', sub: 'Inputs differ → ?', blocks: [
   { t: 'mistake', qname: 'ovr', q: 'Child speak(String s) vs parent speak() — relationship?', options: [ { v: 'a', html: 'OVERLOAD — new method, parent still runs.' }, { v: 'b', html: 'OVERRIDE — replaces parent.' }, { v: 'c', html: 'Unrelated coincidence.' } ], good: 'a', okText: 'Different inputs = overload. Overrides need identical signatures.', noText: 'Do the measurements (inputs) match?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Signatures and tags.', blocks: [
   { t: 'quiz', celTitle: 'Tailor unlocked!', celText: 'Same shape new body; tag always; object wins.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: '@Override', label: 'intent tag' }, { code: 'same sig', label: 'true override' }, { code: 'object wins', label: 'at runtime' } ], next: 'Next: polymorphism.' } ] } ] },
'polymorphism': { heroTitle: 'Polymorphism: One Remote', heroDesc: 'Single Animal remote, endless cartridges. Loops never rewrite.', tip: 'Reference gates the call; object picks the method.',
 steps: [
  { nav: 'Universal remote', h2: 'Same button, many voices', sub: 'Cartridges multiply; remote never changes.', blocks: [
   { t: 'analogy', emoji: '🎮', html: '<strong>Universal remote.</strong> speak() fits the Animal socket. Dog cartridge → Woof. Cat → Meow. Parrot joins later — loop UNCHANGED. But only SHARED buttons exist: fetch() isn’t on it!' },
   { t: 'codelab', fromLesson: true, about: 'One array, one loop, two voices — plus future-proofing.', slots: [ { title: 'a = Dog', value: 'Woof!', note: 'Object decides' }, { title: 'a = Cat', value: 'Meow!', note: 'Same call' }, { title: '+ Parrot?', value: 'No loop edit', note: 'Plug-in!', good: true } ], note: 'Compiler checks the REFERENCE; runtime picks the OBJECT. Two phases!' } ] },
  { nav: 'Who decides?', h2: 'Reference or object?', sub: 'The eternal mix-up, settled.', blocks: [
   { t: 'mistake', qname: 'poly', q: 'Animal a = new Dog(); a.speak(); — who decides?', options: [ { v: 'a', html: 'The OBJECT (Dog) at runtime.' }, { v: 'b', html: 'The REFERENCE (Animal).' }, { v: 'c', html: 'The compiler, randomly.' } ], good: 'a', okText: 'Object outranks reference. Reference only gatekeeps compilation.', noText: 'Compile-time vs runtime: which phase picks the BODY?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Remotes and cartridges.', blocks: [
   { t: 'quiz', celTitle: 'Conductor unlocked!', celText: 'One type many behaviors; extend without editing.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'Animal a=new Dog()', label: 'general ref' }, { code: 'override', label: 'required' }, { code: 'shared buttons', label: 'only' } ], next: 'Next: abstract classes.' } ] } ] },
'abstract-classes': { heroTitle: 'Abstract Classes', heroDesc: 'Half-drawn blueprints. Concrete rooms ready; blanks enforced.', tip: 'Unpaid debt passes down — child stays abstract.',
 steps: [
  { nav: 'Cake-mix box', h2: 'Bake ready, flavor blank', sub: 'Never serve dry mix.', blocks: [
   { t: 'analogy', emoji: '🍰', html: '<strong>Cake mix.</strong> bake() fully instructed (concrete); flavor() blank (abstract). Can’t serve mix — bake Vanilla child first. new Cake()? BANNED, forever.' },
   { t: 'code', label: 'Cake sketch', fromLesson: true, gloss: '<strong>Children pay ALL debts</strong> or stay abstract. Abstracts may still hold state, constructors, concrete code — a family WITH furniture.' } ] },
  { nav: 'Debt check', h2: 'Child skips flavor()…', sub: 'What is the child now?', blocks: [
   { t: 'mistake', qname: 'abs', q: 'Vanilla skips flavor(). Status?', options: [ { v: 'a', html: 'Abstract too — equally un-newable.' }, { v: 'b', html: 'Concrete and fine.' }, { v: 'c', html: 'Deletes Cake.' } ], good: 'a', okText: 'Unpaid blanks inherit. Implement all, or declare abstract deliberately.', noText: 'Where did the blank GO?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Blanks and debts.', blocks: [
   { t: 'quiz', celTitle: 'Baker unlocked!', celText: 'Half blueprint; never new; debts enforced.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'abstract', label: 'half-built' }, { code: 'no new', label: 'ever' }, { code: 'state+ctor', label: 'allowed' } ], next: 'Next: interfaces.' } ] } ] },
'interfaces': { heroTitle: 'Interfaces: Pure Promises', heroDesc: '“Can do X”, zero how. One device, MANY sockets.', tip: 'Capabilities → interfaces. Reuse → abstract.',
 steps: [
  { nav: 'Wall sockets', h2: 'Fixed shape, any wiring', sub: 'Drone + phone share Capturable.', blocks: [
   { t: 'analogy', emoji: '🔌', html: '<strong>Wall sockets.</strong> Shape fixed (method names); wiring differs per device. One class signs MANY sockets; many classes share ONE — polymorphism across UNRELATED families, zero blood shared.' },
   { t: 'code', label: 'Speaker promise', fromLesson: true, gloss: '<strong>All methods, or abstract.</strong> Implementations MUST be public. new Speaker()? A promise is not a thing!' } ] },
  { nav: 'Socket count', h2: 'How many per class?', sub: 'The core advantage, tested.', blocks: [
   { t: 'mistake', qname: 'iface', q: 'class D implements A, B — legal? Smart?', options: [ { v: 'a', html: 'Legal AND the point — two capabilities.' }, { v: 'b', html: 'Illegal — one max.' }, { v: 'c', html: 'Legal but useless.' } ], good: 'a', okText: 'Many sockets per device. extends-one-implements-many ends all debate.', noText: 'What problem do interfaces SOLVE vs extends?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Promises and sockets.', blocks: [
   { t: 'quiz', celTitle: 'Electrician unlocked!', celText: 'Can-do contracts; many each way; public always.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'interface', label: 'promise' }, { code: 'implements A,B', label: 'many' }, { code: 'public', label: 'always' } ], next: 'Next: composition.' } ] } ] },
'composition': { heroTitle: 'Composition: Lego, Not Glue', heroDesc: 'HAS-a beats IS-a for reuse. Snap parts; delegate inward.', tip: 'Run the “X is a Y” test every time.',
 steps: [
  { nav: 'Lego castle', h2: 'Snap, don’t glue', sub: 'Swap the gate, keep the castle.', blocks: [
   { t: 'analogy', emoji: '🧱', html: '<strong>Lego castle.</strong> Walls, gate, tower SNAPPED — each replaceable. Inheritance GLUES: one crack spreads. But true kinds (Student IS Person) still inherit — the TEST decides, not fashion.' },
   { t: 'code', label: 'Car sketch', fromLesson: true, gloss: '<strong>Field + delegate:</strong> Car OWNS Engine; start() forwards one line. Swap engines freely; Car’s face never changes.' } ] },
  { nav: 'Kind or holder?', h2: 'Three pairs, two tools', sub: 'Aloud test, applied thrice.', blocks: [
   { t: 'matcher', title: 'Inherit or compose?', desc: 'Say “X is a Y” aloud for each.', values: [ { v: 'a', label: 'Student / Person' }, { v: 'b', label: 'Library / Book' }, { v: 'c', label: 'Car / Engine' } ], types: ['Inherit (is-a)', 'Compose (has-a)'], map: { a: 'Inherit (is-a)', b: 'Compose (has-a)', c: 'Compose (has-a)' } } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Assembly rules.', blocks: [
   { t: 'quiz', celTitle: 'Builder unlocked!', celText: 'Has-a = field + delegate; test decides.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'has-a', label: 'field' }, { code: 'delegate', label: 'forward' }, { code: 'is-a?', label: 'aloud test' } ], next: 'Next: packages.' } ] } ] },
'packages': { heroTitle: 'Packages: Warehouse Aisles', heroDesc: 'Labeled shelves, borrowed tools, zero name wars.', tip: 'Dots become folders. Stars stay shallow.',
 steps: [
  { nav: 'Store aisles', h2: 'Carts here, payments there', sub: 'Full addresses end Apple wars.', blocks: [
   { t: 'analogy', emoji: '🏪', html: '<strong>Supermarket aisles.</strong> com.shop.cart vs com.shop.pay. Two “Apples” (fruit vs tech)? Full aisle addresses disambiguate. Folders MUST mirror dots — or nothing resolves.' },
   { t: 'code', label: 'Cart shelf', fromLesson: true, gloss: '<strong>package</strong> DECLARES; <strong>import</strong> BORROWS. java.lang (String, Math) is free air. Stars borrow ONE shelf, never sub-shelves.' } ] },
  { nav: 'Star depth', h2: 'import java.util.* covers…', sub: 'How deep does * reach?', blocks: [
   { t: 'mistake', qname: 'pkg', q: 'Does java.util.* include java.util.concurrent?', options: [ { v: 'a', html: 'No — stars are SHALLOW.' }, { v: 'b', html: 'Yes — all children.' }, { v: 'c', html: 'Only on Mondays.' } ], good: 'a', okText: 'One shelf per star. Import each shelf you touch.', noText: 'Is * deep or shallow?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Shelves and borrowing.', blocks: [
   { t: 'quiz', celTitle: 'Stocker unlocked!', celText: 'Dots mirror folders; stars shallow; full names break ties.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'package x.y', label: 'declares' }, { code: 'import', label: 'borrows' }, { code: 'java.lang', label: 'free' } ], next: 'Stage 6: practical Java.' } ] } ] }
};
