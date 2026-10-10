/* Fluid per-topic layouts, stages 1-2. Each topic has its OWN steps/widgets (no rigid template). */
export const LAYOUTS_A = {
'prog-what': { heroTitle: 'Programs & How They Think', heroDesc: 'What a program is, and the input → process → output pattern behind every app you love.', tip: 'Name one app’s input, process, and output out loud — the pattern sticks instantly.',
 steps: [
  { nav: 'The big idea', h2: 'Instructions a literal robot can follow', sub: 'Programs are exact instructions plus the data they work on.', blocks: [
   { t: 'analogy', emoji: '📝', html: '<strong>Think of a recipe card.</strong> Ingredients = data, steps = instructions, cook = computer. Vague steps (“add some salt”) work for humans — and fail for machines.' },
   { t: 'text', html: 'Your music app, bank app, and games are all programs: <strong>input</strong> (taps, files) → <strong>process</strong> (calculate, decide) → <strong>output</strong> (screen, sound). Same pattern, everywhere.' } ] },
  { nav: 'See it run', h2: 'One program, three jobs', sub: 'Predict, then run the lab.', blocks: [
   { t: 'codelab', fromLesson: true, about: 'Two stored numbers, one addition, one print. The instructions stay fixed — only the data changes.', slots: [ { title: 'Input · a, b', value: '4, 5', note: 'Stored data' }, { title: 'Process · a + b', value: '9', note: 'Calculated' }, { title: 'Output', value: '9', note: 'Printed', good: true } ], note: 'Fixed instructions, changing data — run it again mentally with 100 + 200.' } ] },
  { nav: 'Sort the lines', h2: 'Storing, doing, or showing?', sub: 'Match each line to its job.', blocks: [
   { t: 'matcher', title: 'Label the jobs', desc: 'Pick what each line DOES.', values: [ { v: 'store', label: 'int a = 4;' }, { v: 'do', label: 'a + b' }, { v: 'show', label: 'println(sum);' } ], types: ['Storing (input/data)', 'Doing (process)', 'Showing (output)'], map: { store: 'Storing (input/data)', do: 'Doing (process)', show: 'Showing (output)' } } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Score yourself, pocket the pattern.', blocks: [
   { t: 'quiz', celTitle: 'Thinker unlocked!', celText: 'Programs = exact instructions + data. Everything else builds on this.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'program', label: 'instructions + data' }, { code: 'input', label: 'taps, files' }, { code: 'process', label: 'calculate' }, { code: 'output', label: 'screen' } ], next: 'Next: algorithms — recipes strict enough for machines.' } ] } ] },
'algorithm': { heroTitle: 'Algorithms: Recipes for Machines', heroDesc: 'Finite steps, clear order, definite end — plus the max-of-two algorithm.', tip: 'Number your steps and check each needs only earlier results.',
 steps: [
  { nav: 'Strict recipes', h2: 'Clear steps plus a guaranteed end', sub: 'Unambiguous, ordered, finite — miss one and it is not an algorithm.', blocks: [
   { t: 'analogy', emoji: '🌅', html: '<strong>Think of a morning routine.</strong> Alarm → brush → dress → eat. Same order daily, ends when you leave. Now remove anything opinion-based (“dress nicely”) — that is an algorithm.' },
   { t: 'callout', html: '<strong>Pseudocode first:</strong> write the steps in plain words BEFORE coding. Logic errors found in words cost seconds; in code they cost much more.' } ] },
  { nav: 'Max of two', h2: 'Watch a real algorithm decide', sub: 'Compare, pick, print — always ending.', blocks: [
   { t: 'codelab', fromLesson: true, about: 'Steps run in order: store, compare, pick, print. One branch runs, the other sleeps.', slots: [ { title: 'Compare · 7 > 4', value: 'true', note: 'Decision' }, { title: 'Pick', value: 'max = 7', note: 'True branch' }, { title: 'Output', value: '7', note: 'Always ends', good: true } ], note: 'Any two numbers reach the print. Finite, exact, done.' } ] },
  { nav: 'Vague or exact?', h2: 'Spot the broken step', sub: 'One of these is not an algorithm step.', blocks: [
   { t: 'mistake', qname: 'alg', q: 'Which step RUINS an algorithm?', code: '1. add 200g flour\n2. bake 20 min at 180C\n3. make it tasty', options: [ { v: 'a', html: 'Step 3 — “tasty” cannot be tested.' }, { v: 'b', html: 'Step 1 — grams confuse robots.' }, { v: 'c', html: 'All steps are perfect.' } ], good: 'a', okText: 'Exactly — “tasty” is an opinion. Rewrite: “add 1 tsp salt”.', noText: 'Look again: which step can a literal robot TEST? Only one fails that.' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Lock in the three properties.', blocks: [
   { t: 'quiz', celTitle: 'Recipe-master unlocked!', celText: 'Unambiguous + ordered + finite. You think in algorithms now.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'unambiguous', label: 'one meaning' }, { code: 'ordered', label: 'step order matters' }, { code: 'finite', label: 'always ends' }, { code: 'pseudocode', label: 'words before code' } ], next: 'Next: source code — the text humans write.' } ] } ] },
'source-code': { heroTitle: 'Source Code: Text That Becomes Apps', heroDesc: 'Human-readable text, strict syntax, and the two readers of every file.', tip: 'Read error #1 only. Fix it. Rebuild. Repeat.',
 steps: [
  { nav: 'Recipe vs meal', h2: 'The book, not the dinner', sub: 'Source is potential; the running app is dinner.', blocks: [
   { t: 'analogy', emoji: '📖', html: '<strong>A recipe book versus the meal.</strong> The book can be shared, reviewed, corrected, re-cooked. The meal vanishes after eating. Fix the BOOK, never the meal.' },
   { t: 'code', label: 'Java example', fromLesson: true, gloss: '<strong>Two readers:</strong> the translator (strict, dumb) and humans (need clear names). Professionals write for the humans.' } ] },
  { nav: 'How translation works', h2: 'Syntax is all-or-nothing', sub: 'One error = zero program.', blocks: [
   { t: 'facts', title: 'The pipeline in four facts', rows: [ ['<b>.java</b>', 'Source text you write and edit'], ['<b>syntax</b>', 'Spelling + grammar; one miss stops all'], ['<b>.class</b>', 'Bytecode the translator produces'], ['<b>rule</b>', 'Public class Hello lives in Hello.java'] ] },
   { t: 'mistake', qname: 'src', q: 'Which line stops translation?', code: '// say hi\nSystem.out.println("hi")\nSystem.out.println("hi");', options: [ { v: 'a', html: 'Line 2 — missing its semicolon.' }, { v: 'b', html: 'Line 1 — comments are illegal.' }, { v: 'c', html: 'Line 3 — too many semicolons.' } ], good: 'a', okText: 'Right — statements end with ; and comments are always safe.', noText: 'Comments never break builds. Look for the unterminated statement.' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Source facts that pay forever.', blocks: [
   { t: 'quiz', celTitle: 'Reader unlocked!', celText: 'Source is text for two readers. Name things for the humans.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: '.java', label: 'source in' }, { code: '.class', label: 'bytecode out' }, { code: '//', label: 'human note' }, { code: 'Hello ↔ Hello.java', label: 'names match' } ], next: 'Next: how computers execute programs.' } ] } ] },
'execute': { heroTitle: 'How Computers Execute Programs', heroDesc: 'Fetch, decode, execute — billions of tiny steps with memory as the workbench.', tip: 'Frozen + fan noise = still executing (wrong steps).',
 steps: [
  { nav: 'The kitchen', h2: 'Shelf, counter, hands', sub: 'Disk stores, RAM stages, CPU acts — one card at a time.', blocks: [
   { t: 'analogy', emoji: '👨‍🍳', html: '<strong>Think of a kitchen.</strong> Recipe shelf (disk) → counter (RAM) → chef hands (CPU). Ingredients travel shelf → counter → hands, one card at a time, billions of times per second.' },
   { t: 'callout', kind: 'mistake', html: '<strong>Where it breaks:</strong> chefs improvise. A CPU does exactly one tiny operation per tick with zero improvisation — speed comes from tick COUNT, not cleverness.' } ] },
  { nav: 'Watch a cycle', h2: 'Load, load, add, print', sub: 'Four trivial steps become “add and print”.', blocks: [
   { t: 'codelab', fromLesson: true, about: 'Each line is fetch → decode → execute. Comments map the machine steps.', slots: [ { title: 'LOAD a, b', value: '4, 5', note: 'Into memory' }, { title: 'ADD', value: 'c = 9', note: 'Executed' }, { title: 'PRINT', value: '9', note: 'Shown', good: true } ], note: 'Simplicity × billions of ticks = all computing.' } ] },
  { nav: 'Counter vs shelf', h2: 'RAM or disk?', sub: 'Match each resident to its home.', blocks: [
   { t: 'matcher', title: 'Where does it live?', desc: 'Running variable, saved file, vanished work — place each.', values: [ { v: 'var', label: 'A running variable' }, { v: 'file', label: 'Hello.java' }, { v: 'unsaved', label: 'Unsaved typing in a blackout' } ], types: ['RAM (counter)', 'Disk (shelf)', 'Gone forever'], map: { var: 'RAM (counter)', file: 'Disk (shelf)', unsaved: 'Gone forever' } } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'The cycle that explains half of all errors.', blocks: [
   { t: 'quiz', celTitle: 'Cycle unlocked!', celText: 'Fetch → decode → execute. RAM is temporary; disk is forever.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'fetch', label: 'grab it' }, { code: 'decode', label: 'read it' }, { code: 'execute', label: 'do it' }, { code: 'RAM', label: 'wiped at power-off' } ], next: 'Next: what Java is and why it wins.' } ] } ] },
'java-intro': { heroTitle: 'What Is Java?', heroDesc: 'Strict, object-oriented, runs-everywhere — and why beginners should pick the strict language.', tip: 'Treat every compiler error as free coaching, not failure.',
 steps: [
  { nav: 'Training wheels + map', h2: 'Strict today, grateful tomorrow', sub: 'Rules that prevent whole bug families.', blocks: [
   { t: 'analogy', emoji: '🚲', html: '<strong>Training wheels with a city map.</strong> Java’s rules feel fussy (bike lanes!) but prevent crashes — and the map leads downtown: jobs, Android, servers.' },
   { t: 'facts', title: 'Java in four facts', rows: [ ['<b>1995</b>', 'Born at Sun; free OpenJDK builds today'], ['<b>statically typed</b>', 'Types declared; bugs caught early'], ['<b>runs</b>', 'Android, banks, Minecraft, big sites'], ['<b>this course</b>', 'Java 17 LTS — modern and stable'] ] } ] },
  { nav: 'Write once, run anywhere', h2: 'One bytecode, every system', sub: 'Each system’s JVM runs the same file.', blocks: [
   { t: 'reveal', id: 'wora', title: 'How does WORA actually work?', desc: 'Tap to trace the journey.', label: 'Trace it', html: '<b>Hello.java</b> → <b>javac</b> → <b>Hello.class</b> (bytecode) → Windows JVM, Mac JVM, Linux JVM all run it unchanged. The JVM absorbs machine differences.' },
   { t: 'mistake', qname: 'jv', q: 'Which job fits Java LEAST?', options: [ { v: 'a', html: 'Tiny throwaway browser animation' }, { v: 'b', html: 'Android app' }, { v: 'c', html: 'Bank back end' } ], good: 'a', okText: 'Right — tiny web scripts favor JavaScript. Java wins big, long-lived systems.', noText: 'Think size and lifespan: where does strictness pay off?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Identity, promise, and version.', blocks: [
   { t: 'quiz', celTitle: 'Java fan unlocked!', celText: 'Strict, object-oriented, everywhere — on Java 17 LTS.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'WORA', label: 'one bytecode, all JVMs' }, { code: 'static types', label: 'early bug-catching' }, { code: 'Java 17 LTS', label: 'our target' } ], next: 'Next: JDK, JRE, JVM — the pipeline.' } ] } ] },
'jdk-jre-jvm': { heroTitle: 'JDK, JRE & JVM', heroDesc: 'Who builds, who runs, who executes — and the two commands you will type for months.', tip: 'javac takes FILES; java takes CLASSES.',
 steps: [
  { nav: 'Film set', h2: 'Script tools, studio, actor', sub: 'JDK → JRE → JVM, each containing the last.', blocks: [
   { t: 'analogy', emoji: '🎬', html: '<strong>Script tools (JDK)</strong> → equipped studio (JRE) → actor (JVM) performing your scene. Writers need the studio; audiences need studio + actor.' },
   { t: 'code', label: 'Terminal commands', code: '$ javac Main.java   # JDK builds: source -> class\n$ java Main         # JRE/JVM runs it', gloss: '<strong>Two tools, two jobs:</strong> javac consumes the FILE, java consumes the CLASS. Errors at step one = code problem; step two = runtime problem.' } ] },
  { nav: 'Who does what', h2: 'Match tool to job', sub: 'Build, launch, execute — place each.', blocks: [
   { t: 'matcher', title: 'Assign the jobs', desc: 'javac, java, JVM — who does what?', values: [ { v: 'a', label: 'javac' }, { v: 'b', label: 'java' }, { v: 'c', label: 'JVM' } ], types: ['Compiles source', 'Launches runtime', 'Executes bytecode'], map: { a: 'Compiles source', b: 'Launches runtime', c: 'Executes bytecode' } },
   { t: 'callout', kind: 'mistake', html: '<strong>“javac: command not found”</strong> = no JDK on PATH (JRE-only or nothing). An install problem, never a code problem.' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Containments and commands.', blocks: [
   { t: 'quiz', celTitle: 'Pipeline unlocked!', celText: 'JDK ⊃ JRE ⊃ JVM. Both version commands should say 17.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'JDK', label: 'builds (javac)' }, { code: 'JRE', label: 'runs (libs)' }, { code: 'JVM', label: 'executes' }, { code: 'java -version', label: 'check both = 17' } ], next: 'Next: setup — your first real build.' } ] } ] },
'setup': { heroTitle: 'Setup: Your First Build', heroDesc: 'Install JDK 17, write Main.java, compile, run. Five minutes that pay off all course.', tip: 'Fix error #1 only. Rebuild. The rest are usually ghosts.',
 steps: [
  { nav: 'First pancake', h2: 'One victory proves the kitchen', sub: 'Editor + compiler + runner, all at once.', blocks: [
   { t: 'analogy', emoji: '🥞', html: '<strong>The first pancake.</strong> Odd-looking, but it proves heat, pan, and batter. Hello World proves editor, compiler, runner — keep this program; the ritual repeats every lesson.' },
   { t: 'code', label: 'Main.java — save EXACTLY so', fromLesson: true, gloss: '<strong>Then in terminal:</strong> <code>javac Main.java</code> builds Main.class; <code>java Main</code> runs it.' } ] },
  { nav: 'The ritual', h2: 'Save → build → run', sub: 'Five steps, memorized forever.', blocks: [
   { t: 'facts', title: 'The loop, precisely', rows: [ ['<b>1–2</b>', 'Install JDK 17, verify java -version'], ['<b>3</b>', 'Save class Main in Main.java (case!)'], ['<b>4</b>', 'javac Main.java → Main.class'], ['<b>5</b>', 'java Main → output appears'] ] },
   { t: 'mistake', qname: 'setup', q: 'What is wrong here: <code>java Main.java</code>?', options: [ { v: 'a', html: 'java wants a CLASS, not a file.' }, { v: 'b', html: 'Main is too long a name.' }, { v: 'c', html: 'Nothing — that is correct.' } ], good: 'a', okText: 'Exactly: javac takes files, java takes classes.', noText: 'Which tool eats files, and which eats class names?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Ritual, names, and error order.', blocks: [
   { t: 'quiz', celTitle: 'Builder unlocked!', celText: 'Save → javac → java. File = class, exactly.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'javac X.java', label: 'build file' }, { code: 'java X', label: 'run class' }, { code: 'Main ↔ Main.java', label: 'exact case' }, { code: 'error #1 first', label: 'ignore ghosts' } ], next: 'Next: your first real program.' } ] } ] },
'first-program': { heroTitle: 'Your First Java Program', heroDesc: 'The class envelope, the main door, and three lines that obey.', tip: 'Type it by hand — never copy-paste lesson one.',
 steps: [
  { nav: 'Envelope + door', h2: 'Learn the uniform once', sub: 'Every Java program wears it.', blocks: [
   { t: 'analogy', emoji: '✉️', html: '<strong>Envelope plus letter.</strong> Class = envelope named Main. main = the arrow saying START HERE. The JVM opens every envelope exactly at main — no substitutes.' },
   { t: 'code', label: 'Main.java', fromLesson: true, gloss: '<strong>Read it:</strong> envelope (class) → door (main) → three instructions, each ending with <code>;</code>, running top-down.' } ] },
  { nav: 'Run it', h2: 'Three lines, three prints', sub: 'Predict the order, then reveal.', blocks: [
   { t: 'codelab', fromLesson: true, about: 'The JVM enters main and walks down. Nothing skips, nothing guesses.', slots: [ { title: 'Line 1', value: 'Hello, Java!', note: 'Prints first' }, { title: 'Line 2', value: 'I am learning.', note: 'Prints next' }, { title: 'Line 3', value: 'Line by line.', note: 'Prints last', good: true } ], note: 'Top-down, semicolon by semicolon. That order IS the program.' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Doors, semicolons, and static.', blocks: [
   { t: 'quiz', celTitle: 'Uniform unlocked!', celText: 'Class = envelope, main = door, ; ends instructions.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'class Main', label: 'envelope' }, { code: 'main(...)', label: 'start door' }, { code: ';', label: 'instruction ends' }, { code: 'static', label: 'no object needed' } ], next: 'Next: printing — your X-ray.' } ] } ] },
'printing': { heroTitle: 'Printing Output', heroDesc: 'println vs print vs printf — plus the left-to-right glue trap.', tip: 'End every printf with %n, or the next line sticks.',
 steps: [
  { nav: 'Label printer', h2: 'Three heads, three habits', sub: 'Break line, stay put, fill blanks.', blocks: [
   { t: 'analogy', emoji: '🖨️', html: '<strong>A label printer.</strong> println prints + feeds a new line; print stays; printf fills blanks (“$__. __”). Plain text only — no colors without extra tools.' },
   { t: 'code', label: 'Java example', fromLesson: true, gloss: '<strong>Watch line 2–3:</strong> print leaves the cursor waiting, so println(6) lands on the SAME line: “Total: 6”.' } ] },
  { nav: 'The glue trap', h2: '"Total: " + 2 + 3 = ?', sub: 'Left-to-right gluing surprises everyone once.', blocks: [
   { t: 'matcher', title: 'Predict each print', desc: 'Match expression to result.', values: [ { v: 'a', label: '3 + 2 (no quotes)' }, { v: 'b', label: '"Age: " + 18 + 2' }, { v: 'c', label: '"Age: " + (18 + 2)' } ], types: ['5', 'Age: 182', 'Age: 20'], map: { a: '5', b: 'Age: 182', c: 'Age: 20' } },
   { t: 'callout', html: '<strong>Rule:</strong> math happens until the FIRST string appears. Brackets compute first — always.' } ] },
  { nav: 'Format like a pro', h2: 'printf placeholders', sub: '%d, %.2f, %s, %n — and rounding.', blocks: [
   { t: 'codelab', code: 'System.out.printf("Price: $%.2f%n", 2.5);\nSystem.out.printf("%s is %d%n", "Ada", 18);', about: 'Placeholders fill in order; %.2f rounds to two places.', slots: [ { title: '%.2f ← 2.5', value: '$2.50', note: 'Rounded' }, { title: '%s, %d', value: 'Ada is 18', note: 'In order', good: true } ], note: '%.2f rounds (2.555 → 2.56). %n is the portable newline.' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Heads, glue, and formats.', blocks: [
   { t: 'quiz', celTitle: 'Printer unlocked!', celText: 'println breaks, print stays, printf formats.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'println', label: '+ newline' }, { code: 'print', label: 'stays' }, { code: '%d %s %.2f', label: 'placeholders' }, { code: '%n', label: 'newline' } ], next: 'Next: comments — notes for humans.' } ] } ] },
'comments': { heroTitle: 'Comments & Readable Code', heroDesc: 'Code says WHAT; comments say WHY. Future-you debugs at midnight — be kind.', tip: 'Comment WHY; let names say WHAT.',
 steps: [
  { nav: 'Museum plaques', h2: 'Painting plus plaque', sub: 'Plaque the why, never every brushstroke.', blocks: [
   { t: 'analogy', emoji: '🖼️', html: '<strong>Museum plaque.</strong> The painting (code) shows; the plaque (comment) explains why it matters. But plaques never repaint — stale comments that contradict code mislead worse than silence.' },
   { t: 'code', label: 'Main.java', fromLesson: true, gloss: '<strong>//</strong> one line, <strong>/* */</strong> many, <strong>/** */</strong> documentation. Compiler strips all three before running.' } ] },
  { nav: 'Keep or kill?', h2: 'Which comment earns rent?', sub: 'Judge two comments.', blocks: [
   { t: 'mistake', qname: 'com', q: 'Which comment HELPS?', options: [ { v: 'a', html: '// retry 3×: server drops first ping' }, { v: 'b', html: '// increment i, i++' }, { v: 'c', html: '// backup of deleted code, keep!' } ], good: 'a', okText: 'B carries knowledge the code cannot show. The rest are noise or rot.', noText: 'Ask: does it explain WHY something surprising exists?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Styles, purpose, and corpses.', blocks: [
   { t: 'quiz', celTitle: 'Plaque-writer unlocked!', celText: '// line, /* */ block, WHY not WHAT.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: '//', label: 'one line' }, { code: '/* */', label: 'block' }, { code: 'WHY', label: 'not WHAT' }, { code: 'delete corpses', label: 'git remembers' } ], next: 'Next: variables — labelled lunchboxes.' } ] } ] },
'variables': { heroTitle: 'Variables: Storage Boxes', heroDesc: 'Type + name + value. Store it, peek at it, swap it — the tag stays.', tip: 'Right side computes FIRST, then stores. Always.',
 steps: [
  { nav: 'Lunchboxes', h2: 'One box, one food, one tag', sub: 'Sticker = type, tag = name, soup = value.', blocks: [
   { t: 'analogy', emoji: '🍱', html: '<strong>Labelled lunchboxes.</strong> Type sticker (“soup only”), name tag (“Aarav’s”), today’s soup (value). Swap soup daily; sticker stays. Java’s auntie (compiler) refuses sandwiches in soup boxes.' },
   { t: 'callout', kind: 'mistake', html: '<strong>= STORES, == asks.</strong> Single equals puts values in; double equals compares. Different jobs, different symbols.' } ] },
  { nav: 'Watch the box', h2: 'Change age, keep the name', sub: 'The value moves; the variable stays.', blocks: [
   { t: 'updater', title: 'Watch the box change', desc: 'The variable is named age. Put values in and watch.', varName: 'age', varNote: 'The name in code', slotTitle: 'Inside the box · value', initial: '17', mean: 'A whole number', min: 0, max: 120, meanTpl: '{v} is stored as a whole number', okTpl: 'The age box now contains {v} — value changed, name unchanged.' } ] },
  { nav: 'Build declarations', h2: 'Type, name, value, semicolon', sub: 'Assemble the five pieces live.', blocks: [
   { t: 'builder', title: 'Declaration builder', desc: 'Pick a type, name it, set a value — the statement writes itself.', types: [ { v: 'int', label: 'int · whole number' }, { v: 'double', label: 'double · decimal' }, { v: 'String', label: 'String · text' }, { v: 'boolean', label: 'boolean · true/false' } ], name: 'age', value: '17' },
   { t: 'callout', html: '<strong>Names:</strong> start with a letter, camelCase (<code>userAge</code>), meaningful. <code>age</code> and <code>Age</code> are different boxes!' } ] },
  { nav: 'Birthday lab', h2: '17 → 18 → 19', sub: 'Run the swaps and watch.', blocks: [
   { t: 'codelab', fromLesson: true, about: 'Each print reads the CURRENT content. Old values vanish on overwrite.', slots: [ { title: 'Print 1', value: '17', note: 'Initial' }, { title: 'Print 2', value: '18', note: 'Overwritten' }, { title: 'Print 3', value: '19', note: 'Read+add+store', good: true } ], note: 'One box, one current value. age = age + 1 reads, adds, stores back.' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Parts, symbols, and init rules.', blocks: [
   { t: 'quiz', celTitle: 'Box-keeper unlocked!', celText: 'Type + name + value. = stores, locals need init.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'int age = 18;', label: 'declare + init' }, { code: '=', label: 'stores' }, { code: '==', label: 'compares' }, { code: 'camelCase', label: 'naming' } ], next: 'Next: the 8 primitive types.' } ] } ] },
'primitives': { heroTitle: 'Primitive Data Types', heroDesc: 'Eight built-in boxes, exact ranges, and why tiny boxes wrap silently.', tip: 'Size the box BEFORE the math. Overflow never warns.',
 steps: [
  { nav: 'Measuring cups', h2: 'Espresso to bucket', sub: 'Pick the smallest box that safely fits.', blocks: [
   { t: 'analogy', emoji: '🥛', html: '<strong>Measuring cups.</strong> byte = espresso shot, int = everyday mug, long = bucket, float/double = graduated cylinders, char = letter tile, boolean = light switch. Overflow? Cups spill LOUDLY. Numbers wrap SILENTLY (127 + 1 → −128).' },
   { t: 'typegrid', cards: [ { emoji: '🫘', type: 'byte', desc: 'Tiny whole numbers −128 to 127. Storage, not math.', example: '100' }, { emoji: '📏', type: 'short', desc: 'Small whole numbers ±32k. Bigger than byte.', example: '25000' }, { emoji: '🔢', type: 'int', desc: 'Whole numbers ±2.1 billion. The default choice.', example: '18' }, { emoji: '🏦', type: 'long', desc: 'Huge whole numbers. Big literals need L.', example: '8000000000L' }, { emoji: '🪙', type: 'float', desc: '~7 trustworthy digits. Decimals need f.', example: '36.6f' }, { emoji: '💧', type: 'double', desc: '~15 digits. Default for 3.5. Money + science.', example: '19.99' }, { emoji: '🔠', type: 'char', desc: 'One UTF-16 unit in single quotes. Secretly a number.', example: "'A' (=65)" }, { emoji: '✅', type: 'boolean', desc: 'Exactly true or false. No 0/1 tricks.', example: 'true' } ] } ] },
  { nav: 'Choose the box', h2: 'Match data to type', sub: 'Five residents, five boxes.', blocks: [
   { t: 'matcher', title: 'Pick the smallest safe box', desc: 'Age, population, pi, grade letter, light switch.', values: [ { v: 'age', label: 'A person’s age: 34' }, { v: 'pop', label: 'Planet population' }, { v: 'pi', label: 'Pi: 3.14159' }, { v: 'grade', label: 'Grade letter: A' }, { v: 'light', label: 'Light on/off' } ], types: ['int', 'long', 'double', 'char', 'boolean'], map: { age: 'int', pop: 'long', pi: 'double', grade: 'char', light: 'boolean' } } ] },
  { nav: 'Suffix lab', h2: 'L, f, and quotes', sub: 'Build literals that compile.', blocks: [
   { t: 'builder', title: 'Literal builder', desc: 'Try huge numbers, decimals, letters — validation enforces ranges + suffixes.', types: [ { v: 'int', label: 'int' }, { v: 'long', label: 'long (+L auto? no — see tip)' }, { v: 'float', label: 'float' }, { v: 'double', label: 'double' }, { v: 'char', label: 'char' } ], name: 'x', value: '5' },
   { t: 'callout', kind: 'mistake', html: '<strong>Classic fails:</strong> <code>long x = 8000000000;</code> (literal overflows as int first!) and <code>float t = 36.6;</code> (born double). Suffix the LITERAL: <code>8000000000L</code>, <code>36.6f</code>.' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Defaults, suffixes, wraps.', blocks: [
   { t: 'quiz', celTitle: 'Measurer unlocked!', celText: '8 primitives; int/double defaults; L, f, single quotes.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'int', label: 'default whole' }, { code: 'double', label: 'default decimal' }, { code: 'L / f', label: 'suffixes' }, { code: "'A'=65", label: 'char = number' } ], next: 'Next: references — slips, not houses.' } ] } ] },
'references': { heroTitle: 'References Point at Objects', heroDesc: 'Cash in hand vs address slips. Copying a slip shares the house.', tip: 'Say POINTS TO, never CONTAINS.',
 steps: [
  { nav: 'Keys vs houses', h2: 'Photocopying keys', sub: 'Copy the slip, share the house.', blocks: [
   { t: 'analogy', emoji: '🏠', html: '<strong>House addresses.</strong> Two slips can point at ONE house. Primitives = cash in hand; references = slips to heap-houses. A slip reading <code>null</code> points at an empty lot — visiting crashes.' },
   { t: 'reveal', id: 'share', title: 'What does b = a share?', desc: 'Two slips, one string — predict, then reveal.', label: 'Reveal the sharing', html: '<b>One house, two slips.</b> Renovate through one (append !), see it through both. To truly clone, build with <code>new</code>.' } ] },
  { nav: 'Spot the crash', h2: 'Which line detonates?', sub: 'Null has no house.', blocks: [
   { t: 'mistake', qname: 'ref', q: 'String s = null; s.length(); — what happens?', options: [ { v: 'a', html: 'NullPointerException — no house at null.' }, { v: 'b', html: 'Returns 0 quietly.' }, { v: 'c', html: 'Returns null safely.' } ], good: 'a', okText: 'Exactly. Guard: if (s != null) … before touching.', noText: 'null is an empty lot. What happens when you “visit” one?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Slips, houses, and guards.', blocks: [
   { t: 'quiz', celTitle: 'Navigator unlocked!', celText: 'References point; new builds; null points nowhere.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'new', label: 'builds house' }, { code: 'null', label: 'empty lot' }, { code: '= copies slip', label: 'shares house' }, { code: '!= null', label: 'guard first' } ], next: 'Next: literals and named constants.' } ] } ] },
'literals': { heroTitle: 'Literals & Constants', heroDesc: 'Values typed directly, default types, and engraved PI tags.', tip: 'Name every magic number. Future-you says thanks.',
 steps: [
  { nav: 'Sticky vs engraved', h2: 'Twenty notes or one tag?', sub: 'final PI = single truth, reused safely.', blocks: [
   { t: 'analogy', emoji: '🏷️', html: '<strong>Name tags vs sticky notes.</strong> 3.14159 scribbled 20× rots separately. <code>final double PI = 3.14159</code> is one engraved tag — change once, correct everywhere. Reassigning it breaks the build ON PURPOSE.' },
   { t: 'code', label: 'The engraved tag', fromLesson: true, gloss: '<strong>UPPER_CASE shouts “do not touch”.</strong> Integers born int (L for long), decimals born double (f for float).' } ] },
  { nav: 'Name that literal', h2: 'Six values, six types', sub: 'Match each literal to its birth type.', blocks: [
   { t: 'matcher', title: 'Birth certificates', desc: 'What type is each born as?', values: [ { v: 'a', label: '7' }, { v: 'b', label: '7L' }, { v: 'c', label: '7.0' }, { v: 'd', label: '7.0f' }, { v: 'e', label: 'single-quoted A' }, { v: 'f', label: 'double-quoted A' } ], types: ['int', 'long', 'double', 'float', 'char', 'String'], map: { a: 'int', b: 'long', c: 'double', d: 'float', e: 'char', f: 'String' } },
   { t: 'callout', kind: 'mistake', html: '<strong>final ≠ frozen:</strong> <code>final</code> locks the SLIP, not the house. A final StringBuilder can still append!' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Defaults, suffixes, finals.', blocks: [
   { t: 'quiz', celTitle: 'Tag-maker unlocked!', celText: 'Defaults + suffixes; magic numbers become constants.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'L', label: 'long literal' }, { code: 'f', label: 'float literal' }, { code: 'final X', label: 'set once' }, { code: '1_000', label: 'human commas' } ], next: 'Next: casting — buckets and mugs.' } ] } ] },
'casting': { heroTitle: 'Casting: Buckets & Mugs', heroDesc: 'Widening pours free; narrowing spills — sign (int) and own the chop.', tip: 'Cast BEFORE dividing, or decimals die first.',
 steps: [
  { nav: 'Funnel rules', h2: 'Mug→bucket free, bucket→mug spills', sub: 'Casts chop; they never round.', blocks: [
   { t: 'analogy', emoji: '🪣', html: '<strong>Funnels.</strong> int → long always fits (automatic). double → int spills — sign <code>(int)</code> to accept it. And the spill is silent truncation: <code>(int) 3.99</code> = 3, not 4.' },
   { t: 'codelab', fromLesson: true, about: 'int/int stays int; one double lifts all; casts chop; Math.round rounds.', slots: [ { title: '5 / 2', value: '2', note: 'Chopped!' }, { title: '5 / 2.0', value: '2.5', note: 'Lifted' }, { title: '(int) 3.99', value: '3', note: 'Chop' }, { title: 'round(3.99)', value: '4', note: 'Round', good: true } ], note: 'The average bug: double avg = sum / count truncates FIRST. Cast before dividing!' } ] },
  { nav: 'Fix the average', h2: 'Spot the truncation', sub: 'sum=7, count=2: rescue the .5.', blocks: [
   { t: 'mistake', qname: 'cast', q: 'double avg = sum / count; (ints 7, 2) gives 3.0. Fix?', options: [ { v: 'a', html: 'double avg = (double) sum / count;' }, { v: 'b', html: 'int avg = sum / count;' }, { v: 'c', html: 'avg = sum / count + 0.5;' } ], good: 'a', okText: 'Cast BEFORE the division — afterwards rescues nothing.', noText: 'The damage happens DURING division. When must the cast act?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Widen, narrow, chop, round.', blocks: [
   { t: 'quiz', celTitle: 'Pourer unlocked!', celText: 'Widen free; narrow with (type); chop vs round deliberate.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: '(int) 3.99→3', label: 'chop' }, { code: '(double)s/c', label: 'cast first' }, { code: 'round()', label: 'real round' }, { code: '5/2=2', label: 'int math' } ], next: 'Next: operators — verbs with VIP order.' } ] } ] },
'operators': { heroTitle: 'Operators', heroDesc: 'Math, comparison, logic — VIP precedence, remainder tricks, and short-circuit guards.', tip: 'Unsure of order? Brackets. Explicit beats clever.',
 steps: [
  { nav: 'Canteen VIPs', h2: '× ÷ % first, brackets over all', sub: '2 + 3 × 4 = 14, not 20.', blocks: [
   { t: 'analogy', emoji: '🍽️', html: '<strong>Canteen line with VIPs.</strong> × ÷ % stride first, + − follow, comparisons trail, && then || last. Brackets are the teacher escorting anyone to the front.' },
   { t: 'facts', title: 'The order that matters', rows: [ ['<b>× ÷ %</b>', 'VIPs first: 2 + 3×4 = 14'], ['<b>comparisons</b>', 'Then questions: age >= 18'], ['<b>&& then ||</b>', 'AND before OR'], ['<b>()</b>', 'Overrules everything'] ] } ] },
  { nav: 'Remainder lab', h2: '% keeps leftovers', sub: '7 % 3 = 1. Evenness test inside.', blocks: [
   { t: 'codelab', fromLesson: true, about: 'Remainder powers cycles, parity, wrapping.', slots: [ { title: 'teen?', value: 'false', note: '20 fails ≤19' }, { title: '7 % 3', value: '1', note: 'Leftover' }, { title: 'i++ @5', value: '5→6', note: 'Yield then step', good: true } ], note: 'n % 2 == 0 tests evenness — the most-used % trick.' } ] },
  { nav: 'Spot the =', h2: 'Store vs ask', sub: 'One symbol, two jobs — don’t mix.', blocks: [
   { t: 'mistake', qname: 'op', q: 'if (x = 5) — what is wrong?', options: [ { v: 'a', html: '= stores 5; it never asks. Use ==.' }, { v: 'b', html: 'Nothing — perfect comparison.' }, { v: 'c', html: '5 is too big to compare.' } ], good: 'a', okText: 'Single = stores; double == compares. Same for strings? No — equals()!', noText: 'Does = ask a question, or file something away?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Remainders, logic, postfix.', blocks: [
   { t: 'quiz', celTitle: 'Verb-master unlocked!', celText: '% remainders, = vs ==, brackets over memory.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: '%', label: 'remainder' }, { code: '&& || !', label: 'logic' }, { code: '+=', label: 'update' }, { code: 'i++', label: 'use then step' } ], next: 'Next: Strings — knot new ribbons.' } ] } ] },
'strings': { heroTitle: 'Strings: Text Objects', heroDesc: '+ knots NEW strings; equals compares beads; length counts all.', tip: 'Compare text with equals. Always. Forever.',
 steps: [
  { nav: 'Bead ribbons', h2: 'Knot, don’t mutate', sub: 'Originals hang untouched.', blocks: [
   { t: 'analogy', emoji: '📿', html: '<strong>Bead strings.</strong> + knots two threads into a LONGER NEW one. Originals stay on the wall (immutability preview!). And == compares KNOTS (identity) — beads need <code>.equals()</code>.' },
   { t: 'builder', title: 'Badge builder', desc: 'Build “Ada (18)”-style badges and watch the glue.', types: [ { v: 'String', label: 'String · text' } ], name: 'badge', value: 'Ada' } ] },
  { nav: 'Glue order lab', h2: '"Age: " + 18 + 2 = ?', sub: 'Left-to-right gluing, revealed.', blocks: [
   { t: 'codelab', fromLesson: true, about: 'Text appears at the first glue and never leaves.', slots: [ { title: 'msg', value: 'Hi Ada, age 18', note: 'Knotted new' }, { title: 'length', value: '14', note: 'All chars count' }, { title: 'equals?', value: 'true', note: 'Beads match', good: true } ], note: '"Age: " + (18 + 2) computes brackets first → Age: 20.' } ] },
  { nav: 'Knot or beads?', h2: '== vs equals', sub: 'The most classic Java trap.', blocks: [
   { t: 'mistake', qname: 'str', q: 'if (name == "Ada") — reliable?', options: [ { v: 'a', html: 'No — == checks identity. Use equals().' }, { v: 'b', html: 'Yes — always correct.' }, { v: 'c', html: 'Only on Tuesdays.' } ], good: 'a', okText: 'Content needs equals. == asks “same house?” — usually false.', noText: 'Knots vs beads: which does == really compare?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Knots, glue order, emptiness.', blocks: [
   { t: 'quiz', celTitle: 'Text-weaver unlocked!', celText: '+ knots new; equals compares; length counts all.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: '+', label: 'knots new' }, { code: 'equals()', label: 'content' }, { code: 'length()', label: 'counts all' }, { code: '"" vs null', label: 'empty vs missing' } ], next: 'Next: Scanner — programs that listen.' } ] } ] },
'scanner': { heroTitle: 'Scanner: Programs That Listen', heroDesc: 'Read numbers and lines — including the famous newline trap, dodged on purpose.', tip: 'Eat the crumb: extra nextLine() after every number.',
 steps: [
  { nav: 'Curious cashier', h2: 'Tokens vs whole trays', sub: 'nextInt grabs a token; nextLine scoops the tray.', blocks: [
   { t: 'analogy', emoji: '💁', html: '<strong>Curious cashier.</strong> After a number, a leftover newline crumb sits on the tray — the next scoop grabs the CRUMB, skipping your answer. One extra <code>nextLine()</code> eats it.' },
   { t: 'code', label: 'The Q&A program', fromLesson: true, gloss: '<strong>Interactive:</strong> run it, type 18 then Ada. Watch the crumb get eaten on its own line.' } ] },
  { nav: 'Trap replay', h2: 'With vs without the fix', sub: 'Same input, two fates.', blocks: [
   { t: 'reveal', id: 'trap', title: 'What happens WITHOUT the extra line?', desc: 'Predict, then reveal the skip.', label: 'Reveal the skip', html: 'Name reads <b>""</b> — the leftover newline was “the answer”. The program never waits. One extra <code>nextLine()</code> after <code>nextInt()</code> fixes everything.' },
   { t: 'callout', kind: 'mistake', html: '<strong>abc for nextInt()?</strong> InputMismatchException — crash. Peek with <code>hasNextInt()</code> first.' } ] },
  { nav: 'Guard lab', h2: 'Peek before you grab', sub: 'hasNextInt prevents the crash.', blocks: [
   { t: 'mistake', qname: 'scan', q: 'Reading a full name “Ada L” needs…', options: [ { v: 'a', html: 'nextLine() — whole line, spaces included.' }, { v: 'b', html: 'next() — one token is enough.' }, { v: 'c', html: 'nextInt() — names are numbers.' } ], good: 'a', okText: 'next() halts at the first space: “Ada”. Sentences need nextLine().', noText: 'Which tool stops at whitespace, and which ignores it?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Tokens, crumbs, guards.', blocks: [
   { t: 'quiz', celTitle: 'Listener unlocked!', celText: 'nextInt/nextLine; eat crumbs; validate with hasNextX.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'nextInt()', label: 'number token' }, { code: 'nextLine()', label: 'whole line' }, { code: '+nextLine()', label: 'eat crumb' }, { code: 'hasNextInt()', label: 'peek safe' } ], next: 'Stage 3: decisions and logic.' } ] } ] }
};
