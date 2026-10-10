/* Fluid per-topic layouts, stages 3-4 (20 topics). */
export const LAYOUTS_B = {
'boolean-expr': { heroTitle: 'Boolean Expressions', heroDesc: 'Yes/no questions that power every decision. True, false — never maybe.', tip: 'Read && chains left to right; false anywhere kills AND.',
 steps: [
  { nav: 'Bouncer checklist', h2: 'Age? Ticket? Banned?', sub: 'Three checks, one verdict.', blocks: [
   { t: 'analogy', emoji: '🧍', html: '<strong>The bouncer’s checklist.</strong> age ≥ 18? AND on the list? NOT banned? Each is true/false; combined verdict lifts the rope. Booleans never bend — no “maybe”, ever.' },
   { t: 'code', label: 'Voting check', code: 'int age = 20;\nboolean canVote = age >= 18;      // true\nboolean vip = age >= 18 && age < 65; // true\nboolean deny = !(age >= 18);         // false', gloss: '<strong>Comparisons make booleans;</strong> && || ! combine them. Order: !, comparisons, &&, ||.' } ] },
  { nav: 'Short-circuit saves', h2: 'The guard that skips', sub: 'false && ANYTHING never touches the right side.', blocks: [
   { t: 'reveal', id: 'sc', title: 'Why is (s != null && s.length() > 0) safe?', desc: 'Predict, then reveal the skip.', label: 'Reveal the guard', html: 'If <b>s is null</b>, the left side is false — && STOPS, and <code>length()</code> never runs. No crash, by design.' },
   { t: 'callout', kind: 'mistake', html: '<strong>Text trap:</strong> <code>==</code> on Strings compares houses, not words. Content needs <code>.equals()</code>.' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Operators and guards.', blocks: [
   { t: 'quiz', celTitle: 'Decider unlocked!', celText: '&& both, || either, ! flips. Guards short-circuit.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: '&&', label: 'both true' }, { code: '||', label: 'either true' }, { code: '!', label: 'flips' }, { code: 's != null && ...', label: 'safe guard' } ], next: 'Next: if / else chains.' } ] } ] },
'if-else': { heroTitle: 'if / else if / else', heroDesc: 'One question, two futures. First true branch wins; the rest sleep.', tip: 'Order specific → general, or top grades die.',
 steps: [
  { nav: 'Trek fork', h2: 'Raining? Left. Else right.', sub: 'Exactly one path walks.', blocks: [
   { t: 'analogy', emoji: '🥾', html: '<strong>A fork on a trek path.</strong> Sign says raining? Left to shelter, else right to viewpoint. You walk ONE branch, never both — and code can’t turn back.' },
   { t: 'codelab', fromLesson: true, about: '82 fails ≥90, passes ≥75. Later branches never evaluate.', slots: [ { title: '≥ 90?', value: 'No', note: 'Skip' }, { title: '≥ 75?', value: 'Yes → B', note: 'Runs', good: true }, { title: 'Rest', value: 'Skipped', note: 'Unseen' } ], note: 'First true wins. Chain exclusive; separate ifs independent.' } ] },
  { nav: 'The stray semicolon', h2: 'if (x > 5); — spot it', sub: 'One character, total betrayal.', blocks: [
   { t: 'mistake', qname: 'if', q: 'if (x > 5); { launch(); } — what runs?', options: [ { v: 'a', html: 'launch() ALWAYS — the ; ended the if.' }, { v: 'b', html: 'launch() only when x > 5.' }, { v: 'c', html: 'Nothing — it crashes.' } ], good: 'a', okText: 'The semicolon IS the if-body (empty). Brace everything, no strays.', noText: 'What does a lone semicolon MEAN to Java?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Exclusivity and order.', blocks: [
   { t: 'quiz', celTitle: 'Chooser unlocked!', celText: 'First true runs; specific beats general.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'if / else if / else', label: 'exclusive chain' }, { code: 'specific first', label: 'ordering' }, { code: '{ }', label: 'always brace' } ], next: 'Next: nested conditions.' } ] } ] },
'nested-cond': { heroTitle: 'Nested Conditions', heroDesc: 'Choices inside choices — and the flattening that tames them.', tip: 'Count paths. Too many? Flatten with &&.',
 steps: [
  { nav: 'Russian dolls', h2: 'Weekend? Open. Sunny?', sub: 'Inner asks only if outer says yes.', blocks: [
   { t: 'analogy', emoji: '🪆', html: '<strong>Russian dolls.</strong> Outer asks “weekend?” — only YES opens it to find “sunny?” inside. Two levels fine; five deep and nobody knows which doll they’re in. Paths multiply: 3 levels ≈ 8 paths.' },
   { t: 'codelab', fromLesson: true, about: 'Weekend true opens; sunny false picks inner else.', slots: [ { title: 'weekend?', value: 'true → open', note: 'Outer' }, { title: 'sunny?', value: 'false', note: 'Inner' }, { title: 'Prints', value: 'Museum', note: 'Inner else', good: true } ], note: 'Flatten when possible: if (weekend && sunny) halves the paths.' } ] },
  { nav: 'Dangling else', h2: 'Which if owns this else?', sub: 'Nearest wins — brace to show it.', blocks: [
   { t: 'mistake', qname: 'nest', q: 'if (a) if (b) X; else Y; — whose else?', options: [ { v: 'a', html: 'The INNER if (nearest).' }, { v: 'b', html: 'The OUTER if.' }, { v: 'c', html: 'Both at once.' } ], good: 'a', okText: 'Nearest-if binding. Braces make it visible — brace nested code always.', noText: 'An else reaches for the closest open if.' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Nesting vs flattening.', blocks: [
   { t: 'quiz', celTitle: 'Nester unlocked!', celText: 'Nest with braces; flatten with && when inner has no else.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'if in if', label: 'layered' }, { code: 'a && b', label: 'flattened' }, { code: 'else→nearest', label: 'dangle rule' } ], next: 'Next: switch sorters.' } ] } ] },
'switch': { heroTitle: 'switch: The Mail Sorter', heroDesc: 'One value, many labeled slots. Arrows kill fall-through.', tip: 'Ranges need if-else. Labels need switch.',
 steps: [
  { nav: 'Pincode sorter', h2: 'One code, one slot', sub: 'Default catches unknowns.', blocks: [
   { t: 'analogy', emoji: '📮', html: '<strong>Pincode sorter.</strong> Glances at ONE code, slides the letter into exactly one slot. Old style without <code>break</code>? The letter slides into the NEXT slot too (fall-through chaos). Arrow form <code>-></code> can’t fall through.' },
   { t: 'codelab', fromLesson: true, about: 'day = 3 matches one arrow; the expression yields the string.', slots: [ { title: 'day', value: '3', note: 'Stamped' }, { title: 'Slot 3', value: 'Wednesday', note: 'Matched', good: true }, { title: 'default', value: 'Sleeps', note: 'Unneeded' } ], note: 'Arrow switches are expressions: they HAND BACK values.' } ] },
  { nav: 'Fall-through trap', h2: 'No break? Both run.', sub: 'Colon style slides onward.', blocks: [
   { t: 'mistake', qname: 'sw', q: 'case 1: a(); case 2: b(); (no breaks), day=1 runs…', options: [ { v: 'a', html: 'BOTH a() and b() — slides through.' }, { v: 'b', html: 'Only a().' }, { v: 'c', html: 'Neither — error.' } ], good: 'a', okText: 'Colon cases slide unless stopped. Arrows never slide.', noText: 'What STOPS a colon case from continuing?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Labels, arrows, defaults.', blocks: [
   { t: 'quiz', celTitle: 'Sorter unlocked!', celText: 'One value, exact labels, always default.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'case 1 ->', label: 'no break needed' }, { code: 'break;', label: 'colon style' }, { code: 'default', label: 'catch unknowns' } ], next: 'Next: for loops.' } ] } ] },
'for-loops': { heroTitle: 'for Loops', heroDesc: 'Repeat WITH a counter: start, check, step. i < n runs n times.', tip: '< n from 0 = n runs. <= adds one.',
 steps: [
  { nav: 'Washing machine', h2: 'Dial, check, tick', sub: 'Same three parts, every load.', blocks: [
   { t: 'analogy', emoji: '🌀', html: '<strong>Washing machine.</strong> Dial 5 cycles (i = 0), check “done?” (i < 5), wash + tick (i++). Init runs ONCE, check BEFORE every round, update AFTER.' },
   { t: 'codelab', fromLesson: true, about: 'Rounds 1, 2, 3 — then i = 4 fails ≤ 3.', slots: [ { title: 'i = 1', value: 'Cycle 1', note: 'Check ✓' }, { title: 'i = 3', value: 'Cycle 3', note: 'Last pass' }, { title: 'i = 4', value: 'Done', note: 'Check fails', good: true } ], note: 'Order per round: check → body → update. Trace it in a table!' } ] },
  { nav: 'Run counter', h2: 'Dial a count, read the runs', sub: 'The box holds n; the loop obeys.', blocks: [
   { t: 'updater', title: 'How many runs?', desc: 'Set n. A loop i = 0; i < n runs exactly n times.', varName: 'n', varNote: 'Your dial', slotTitle: 'Loop runs', initial: '5', mean: '5 total runs', min: 1, max: 20, meanTpl: '{v} total runs', okTpl: 'Dial {v}: i visits 0, 1, … and stops before {v} — exactly {v} rounds.' } ] },
  { nav: 'Off-by-one lab', h2: '< vs <= from zero', sub: 'One character, one extra run.', blocks: [
   { t: 'matcher', title: 'Count the runs', desc: 'Match each header to its run count.', values: [ { v: 'a', label: 'i=0; i<5' }, { v: 'b', label: 'i=0; i<=5' }, { v: 'c', label: 'i=1; i<=3' } ], types: ['5 runs', '6 runs', '3 runs'], map: { a: '5 runs', b: '6 runs', c: '3 runs' } },
   { t: 'callout', kind: 'mistake', html: '<strong>Forgotten i++?</strong> Check never changes → infinite loop, fan screaming. Every loop must advance what the check watches.' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Anatomy and boundaries.', blocks: [
   { t: 'quiz', celTitle: 'Counter unlocked!', celText: 'Init once, check each round, update each round.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'i < n', label: 'n runs' }, { code: 'i <= n', label: 'n+1 runs' }, { code: 'check→body→update', label: 'heartbeat' } ], next: 'Next: while loops.' } ] } ] },
'while-loops': { heroTitle: 'while & do-while', heroDesc: 'Repeat WHILE true — for counts you can’t know upfront.', tip: 'Unknown rounds → while. Must-run-once → do-while.',
 steps: [
  { nav: 'Taste and stir', h2: 'While salty, stir', sub: 'Check first, or taste first?', blocks: [
   { t: 'analogy', emoji: '🍲', html: '<strong>Taste-and-stir.</strong> WHILE too salty → stir + taste again. do-while tastes FIRST — always stirs at least once, even perfect soup. Mind its trailing semicolon!' },
   { t: 'codelab', fromLesson: true, about: 'One while round (0 ≠ 1234 → set → exit); do-while counts 3→1 guaranteed.', slots: [ { title: 'while check', value: '0≠1234 ✓', note: 'Enter once' }, { title: 'After body', value: 'Unlocked in 1', note: 'Exit', good: true }, { title: 'do-while', value: '3, 2, 1', note: 'Runs first' } ], note: 'Something inside MUST move the condition toward false.' } ] },
  { nav: 'Pick the loop', h2: 'for, while, or do?', sub: 'Three jobs, three tools.', blocks: [
   { t: 'matcher', title: 'Match job to loop', desc: 'Known count? Unknown? Must-run-once?', values: [ { v: 'a', label: 'Print 1 to 10' }, { v: 'b', label: 'Read lines till file ends' }, { v: 'c', label: 'Ask password, at least once' } ], types: ['for', 'while', 'do-while'], map: { a: 'for', b: 'while', c: 'do-while' } } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Pre-check vs post-check.', blocks: [
   { t: 'quiz', celTitle: 'Stirrer unlocked!', celText: 'while maybe-zero; do-while at-least-once; advance always.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'while', label: 'checks first' }, { code: 'do-while', label: 'runs once +' }, { code: 'advance!', label: 'or spin forever' } ], next: 'Next: break & continue.' } ] } ] },
'break-continue': { heroTitle: 'break & continue', heroDesc: 'Emergency exit vs skipping one dance move. Reshape loops without nesting.', tip: 'break = quit all. continue = skip one.',
 steps: [
  { nav: 'Hopscotch rules', h2: 'Skip square 4, or go home?', sub: 'Skipping ≠ quitting.', blocks: [
   { t: 'analogy', emoji: '🤸', html: '<strong>Hopscotch.</strong> continue = hop OVER square 4, keep playing. break = stop the game, go home. Reserve break for “FOUND IT!” and continue for “skip bad data”.' },
   { t: 'codelab', fromLesson: true, about: 'Round 3’s print jumped; round 5 ends everything.', slots: [ { title: 'Prints', value: '1, 2, 4', note: '3 skipped' }, { title: 'At 5', value: 'break!', note: 'Loop over' }, { title: 'After', value: 'over', note: 'Always runs', good: true } ], note: 'Code after the loop ALWAYS runs — break exits loops, not methods.' } ] },
  { nav: 'While-loop danger', h2: 'continue can freeze while', sub: 'Skipped increments = frozen state.', blocks: [
   { t: 'mistake', qname: 'bc', q: 'continue in while with i++ at the BOTTOM — risk?', options: [ { v: 'a', html: 'Jumps OVER i++ → frozen → infinite.' }, { v: 'b', html: 'No risk at all.' }, { v: 'c', html: 'Deletes the loop.' } ], good: 'a', okText: 'In for, update still runs; in while, nothing re-runs but the check.', noText: 'What does continue skip in a while body?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Skip-one vs quit-all.', blocks: [
   { t: 'quiz', celTitle: 'Hopper unlocked!', celText: 'continue skips a round; break exits all rounds.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'continue', label: 'skip one round' }, { code: 'break', label: 'exit loop' }, { code: 'found→break', label: 'search idiom' } ], next: 'Next: nested loops.' } ] } ] },
'nested-loops': { heroTitle: 'Nested Loops', heroDesc: 'Outer picks rows, inner visits seats. Total = rows × seats.', tip: 'Estimate rows × cols BEFORE nesting big.',
 steps: [
  { nav: 'Cinema usher', h2: 'Rows × seats, every show', sub: 'Inner restarts per outer round.', blocks: [
   { t: 'analogy', emoji: '🎬', html: '<strong>Cinema usher.</strong> Walks rows 1–5 (outer); at EACH row counts seats 1–8 (inner, restarting). Total = 5 × 8 = 40 visits. 100×100 = 10,000 — nesting multiplies QUADRATICALLY.' },
   { t: 'codelab', fromLesson: true, about: 'Inner completes 3 per outer; println breaks rows.', slots: [ { title: 'Row 1', value: '1x1 1x2 1x3', note: 'Inner full' }, { title: 'Row 2', value: '2x1 2x2 2x3', note: 'Restarted' }, { title: 'Total', value: '6 = 2×3', note: 'Multiplied', good: true } ], note: 'Different counters (r, c)! Shared i corrupts the outer count.' } ] },
  { nav: 'Grid pattern', h2: 'print inside, println per row', sub: 'Swap them → confetti.', blocks: [
   { t: 'mistake', qname: 'nl', q: 'println placed INSIDE the inner loop gives…', options: [ { v: 'a', html: 'A vertical list — grid collapses.' }, { v: 'b', html: 'A perfect grid.' }, { v: 'c', html: 'No output.' } ], good: 'a', okText: 'print seats inside; println the row break in the outer, after inner finishes.', noText: 'How many newlines per row do you want?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Rows, seats, totals.', blocks: [
   { t: 'quiz', celTitle: 'Usher unlocked!', celText: 'Outer rows, inner seats, total multiplied.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'outer r', label: 'rows' }, { code: 'inner c', label: 'seats' }, { code: 'rows × cols', label: 'total work' } ], next: 'Next: methods.' } ] } ] },
'methods': { heroTitle: 'Methods: Recipe Cards', heroDesc: 'Name it once, cook it anywhere. Fix once, improve everywhere.', tip: 'Extract a method the SECOND time you paste.',
 steps: [
  { nav: 'Vending machine', h2: 'Press B3, snack drops', sub: 'Reuse without knowing insides.', blocks: [
   { t: 'analogy', emoji: '🥤', html: '<strong>Vending machine.</strong> Press B3 (call), hidden steps run, snack drops. Reuse forever without caring about insides. Copy-paste instead? The bug gets fixed twice and survives in copy three.' },
   { t: 'code', label: 'Chef.java', fromLesson: true, gloss: '<strong>Define once, call often.</strong> Each call jumps in, runs, jumps back. void = does things, returns nothing.' } ] },
  { nav: 'Call counting', h2: 'Two calls, two greetings', sub: 'Definition ≠ execution.', blocks: [
   { t: 'codelab', code: 'greet(); // "Welcome!"\ngreet(); // "Welcome!" again', about: 'Calls execute; definitions wait.', slots: [ { title: 'Call 1', value: 'Welcome!', note: 'Runs' }, { title: 'Call 2', value: 'Welcome!', note: 'Runs again', good: true } ], note: 'Change the card once — both servings improve. That is DRY.' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Reuse, calls, void.', blocks: [
   { t: 'quiz', celTitle: 'Chef unlocked!', celText: 'Define once, call often. void does, returns nothing.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'define', label: 'write once' }, { code: 'call()', label: 'run it' }, { code: 'void', label: 'no takeaway' }, { code: 'DRY', label: "don't repeat" } ], next: 'Next: parameters & returns.' } ] } ] },
'params-return': { heroTitle: 'Parameters & Return Values', heroDesc: 'Order slips IN, served plates OUT. Types must match exactly.', tip: 'Catch the plate: int s = add(4,5);',
 steps: [
  { nav: 'Service counter', h2: 'Slips in, plates out', sub: 'Same kitchen, different orders.', blocks: [
   { t: 'analogy', emoji: '🧾', html: '<strong>Service counter.</strong> Slip says paneer, spice 2 (parameters). Kitchen returns a plate (return value) or shouts “done!” (void). Wrong slip shape? Java REFUSES — compile error, no guessing.' },
   { t: 'code', label: 'Order slip demo', fromLesson: true, gloss: '<strong>Parameter</strong> = slot in definition. <strong>Argument</strong> = value at call. <code>return</code> serves ONE value and exits instantly.' } ] },
  { nav: 'Slot machine', h2: 'Fill every slot', sub: 'Count and types must match.', blocks: [
   { t: 'mistake', qname: 'pr', q: 'add(4) when add(int a, int b) needs two — result?', options: [ { v: 'a', html: 'Compile error — slot unfilled.' }, { v: 'b', html: 'Runs, b becomes 0.' }, { v: 'c', html: 'Asks the user for b.' } ], good: 'a', okText: 'Count, order, types — checked BEFORE running.', noText: 'Does Java guess missing arguments, or refuse?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Slots, plates, copies.', blocks: [
   { t: 'quiz', celTitle: 'Waiter unlocked!', celText: 'Params in, return out, arguments copied.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'param', label: 'slot in def' }, { code: 'argument', label: 'value at call' }, { code: 'return v;', label: 'serve + exit' }, { code: 'void', label: 'shouts done' } ], next: 'Next: scope — hotel rooms.' } ] } ] },
'scope': { heroTitle: 'Scope & Lifetime', heroDesc: 'Braces are hotel rooms. Inner sees outer; outer never sees inner.', tip: 'Smallest block, latest declaration.',
 steps: [
  { nav: 'Hotel rooms', h2: 'Lobby vs diary', sub: 'Checkout deletes everything inside.', blocks: [
   { t: 'analogy', emoji: '🏨', html: '<strong>Hotel.</strong> Lobby whiteboard (outer) visible from every room; room diary (inner) dies at checkout <code>}</code>. No snooping across braces — share via parameters and returns only.' },
   { t: 'code', label: 'hall vs room', fromLesson: true, gloss: '<strong>Inner sees outer</strong> (prints 3). Outer never sees inner (the commented line would NOT compile).' } ] },
  { nav: 'Alive or not?', h2: 'After }, it is gone', sub: 'The compiler enforces checkout.', blocks: [
   { t: 'mistake', qname: 'sc', q: '{ int q = 5; } print(q); — compiles?', options: [ { v: 'a', html: 'No — q checked out at }.' }, { v: 'b', html: 'Yes — prints 5.' }, { v: 'c', html: 'Yes — prints 0.' } ], good: 'a', okText: 'Lifetime ends at the brace. Move the print inside, or declare outside.', noText: 'Where exactly did q check out?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Visibility and lifetime.', blocks: [
   { t: 'quiz', celTitle: 'Concierge unlocked!', celText: 'Braces bind life; inner sees outer only.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: '{ }', label: 'room bounds' }, { code: 'inner→outer', label: 'sees out' }, { code: 'small scope', label: 'declare late' } ], next: 'Next: debugging like a detective.' } ] } ] },
'debugging': { heroTitle: 'Debugging & Reading Errors', heroDesc: 'Four bug species, file:line addresses, and the one-change workflow.', tip: 'First error first. One change, one re-run.',
 steps: [
  { nav: 'Detective kit', h2: 'Victim, witnesses, alibis', sub: 'Later errors are usually gossip.', blocks: [
   { t: 'analogy', emoji: '🕵️', html: '<strong>Detective kit.</strong> Victim = error line. Witnesses = prints showing values. Rule: investigate the FIRST error — #2–#20 are its echoes. And never guess fixes (“maybe THIS?”) — science, not horoscopes.' },
   { t: 'facts', title: 'Four species', rows: [ ['<b>syntax</b>', 'Red ink, zero building'], ['<b>type</b>', 'Wrong types, no run'], ['<b>runtime</b>', 'Builds, then crashes mid-run'], ['<b>logic</b>', 'Runs fine, answers WRONG (dangerous)'] ] } ] },
  { nav: 'Read the address', h2: 'Main.java:7 means GO', sub: 'Traces give addresses, not riddles.', blocks: [
   { t: 'codelab', fromLesson: true, about: 'Valid index prints; the killer stays commented; total passes its oracle.', slots: [ { title: 'm[0]', value: '80', note: 'Control ✓' }, { title: 'm[5]?', value: 'CRASH', note: 'Commented!' }, { title: 'total', value: '170', note: 'Oracle ✓', good: true } ], note: 'No red ink ≠ correct. Test against hand-computed oracles!' } ] },
  { nav: 'Bisect drill', h2: 'Wrong total, 100 lines', sub: 'Your first move?', blocks: [
   { t: 'mistake', qname: 'dbg', q: '100-line program, wrong total. FIRST move?', options: [ { v: 'a', html: 'Disable half; see which half holds it.' }, { v: 'b', html: 'Rewrite all 100 lines.' }, { v: 'c', html: 'Change five things at once.' } ], good: 'a', okText: 'Bisect: guilty half vs innocent half. Halve again. Convict fast.', noText: 'How do you halve 100 suspects in one move?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Species, traces, workflow.', blocks: [
   { t: 'quiz', celTitle: 'Detective unlocked!', celText: 'file:line addresses; first error; oracles for logic.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'file:line', label: 'go there' }, { code: 'error #1', label: 'fix first' }, { code: '1 change', label: 'per test' }, { code: 'oracle', label: 'known answer' } ], next: 'Stage 4: arrays and text.' } ] } ] },
'arrays': { heroTitle: 'Arrays: Egg Trays', heroDesc: 'One type, numbered from 0, fixed at birth. Length never moves.', tip: 'Last index is ALWAYS length − 1.',
 steps: [
  { nav: 'Egg tray', h2: '12 slots, zero stretch', sub: 'Need 13? New tray (or ArrayList later).', blocks: [
   { t: 'analogy', emoji: '🥚', html: '<strong>Egg tray.</strong> Fixed slots, slot 0 first. Never stretches, never mixes types. Unused slots hold defaults (0 / false / null) — not “empty”.' },
   { t: 'codelab', fromLesson: true, about: 'Tray of 3: read slot 0, overwrite slot 1.', slots: [ { title: 'length', value: '3', note: 'Fixed' }, { title: 'eggs[0]', value: '10', note: 'Read' }, { title: 'eggs[1]', value: '99', note: 'Swapped', good: true } ], note: 'a.length has NO brackets — it is a field, not a method!' } ] },
  { nav: 'Build or share?', h2: 'new vs null vs share', sub: 'Three declarations, three fates.', blocks: [
   { t: 'mistake', qname: 'arr', q: 'int[] a; then a[0] — what happens?', options: [ { v: 'a', html: 'NullPointer — never built (null).' }, { v: 'b', html: 'Reads 0 safely.' }, { v: 'c', html: 'Builds itself.' } ], good: 'a', okText: 'Declare ≠ build. a = new int[3] FIRST, then touch slots.', noText: 'Does declaring a variable also build the tray?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Types, indexes, defaults.', blocks: [
   { t: 'quiz', celTitle: 'Tray-keeper unlocked!', celText: 'One type, 0-based, fixed; length is a field.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'new int[3]', label: 'build it' }, { code: 'a[0]', label: 'first slot' }, { code: 'a.length', label: 'no brackets!' }, { code: 'length−1', label: 'last slot' } ], next: 'Next: indexing & bounds.' } ] } ] },
'indexing-bounds': { heroTitle: 'Indexing & Bounds', heroDesc: 'Doors 0 to length−1. Knock elsewhere → loud exception, exact line.', tip: 'Tour loops with strict < length. Always.',
 steps: [
  { nav: 'Hotel doors', h2: 'Top floor = floors − 1', sub: 'Floor 9 doesn’t exist — security escorts you.', blocks: [
   { t: 'analogy', emoji: '🏨', html: '<strong>Hotel floors 0–4.</strong> Five floors, top = 4. Knock on 9 → ArrayIndexOutOfBoundsException. Java NEVER forgives — and that strictness is the feature (other languages return garbage).' },
   { t: 'code', label: 'Doors 0–2', fromLesson: true, gloss: '<strong>First = 0, last = length − 1.</strong> Uncomment the a[3] line yourself to meet the exception personally.' } ] },
  { nav: 'Ghost door', h2: '<= crashes the finale', sub: 'One character saves the tour.', blocks: [
   { t: 'mistake', qname: 'idx', q: 'for (i = 0; i <= a.length; i++) — verdict?', options: [ { v: 'a', html: 'Crashes on the ghost door past the end.' }, { v: 'b', html: 'Perfect tour.' }, { v: 'c', html: 'Skips the first slot.' } ], good: 'a', okText: 'Strict <: i < a.length. One character, zero crashes.', noText: 'Which door does the FINAL round knock on?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Doors, tours, fields-vs-methods.', blocks: [
   { t: 'quiz', celTitle: 'Doorkeeper unlocked!', celText: '0 first, length−1 last, < tours, violations detonate.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: '0', label: 'first door' }, { code: 'len−1', label: 'last door' }, { code: 'i < len', label: 'safe tour' }, { code: 'a.length', label: 'field!' } ], next: 'Next: traversing arrays.' } ] } ] },
'traverse-arrays': { heroTitle: 'Traversing Arrays', heroDesc: 'Two tour buses: counting (writes) vs sightseeing (reads).', tip: 'Read with for-each; write with indexes.',
 steps: [
  { nav: 'Two buses', h2: 'Count seats or greet faces?', sub: 'Photos can’t move furniture.', blocks: [
   { t: 'analogy', emoji: '🚌', html: '<strong>Two buses.</strong> Classic for counts seats (has the INDEX — can repaint). for-each greets passengers (no index). Editing the for-each photo (v += 5) changes NOTHING in the tray!' },
   { t: 'codelab', fromLesson: true, about: 'Read tour sums 240; write tour upgrades to 85.', slots: [ { title: 'for-each sum', value: '240', note: 'Read only' }, { title: 'm[0] after +5', value: '85', note: 'Upgraded', good: true } ], note: 'Accumulators init BEFORE the loop (sum = 0). #1 traversal bug otherwise.' } ] },
  { nav: 'Photo vs slip', h2: 'Which v edits stick?', sub: 'Primitives vs objects differ!', blocks: [
   { t: 'mistake', qname: 'trav', q: 'for (int v : m) v += 5; on int[] — tray changes?', options: [ { v: 'a', html: 'No — v is a photo copy.' }, { v: 'b', html: 'Yes — fully upgraded.' }, { v: 'c', html: 'Only the first slot.' } ], good: 'a', okText: 'Photos for primitives! (Objects copy the slip — methods on them DO reach home.)', noText: 'Can you deliver furniture to a photograph?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Buses, copies, accumulators.', blocks: [
   { t: 'quiz', celTitle: 'Tour guide unlocked!', celText: 'for-each reads; indexes write; init accumulators.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'for (v : a)', label: 'read tour' }, { code: 'for (i...)', label: 'write tour' }, { code: 'sum = 0', label: 'init first' } ], next: 'Next: 2D grids.' } ] } ] },
'arrays-2d': { heroTitle: '2D Arrays: Grids', heroDesc: '[row][seat] addressing. Rows are independent trays — jagged allowed.', tip: 'Inner bound is seats[r].length — per row.',
 steps: [
  { nav: 'Cinema blocks', h2: 'Block C, chair 4', sub: 'Without checking every chair.', blocks: [
   { t: 'analogy', emoji: '🎦', html: '<strong>Cinema.</strong> Block C chair 4 = grid[2][3] backstage (zero-based!). Balconies differ in length — each row is its OWN array, so jagged rows are legal.' },
   { t: 'codelab', fromLesson: true, about: 'Two-number addressing + nested count of free seats.', slots: [ { title: 'seats[0][1]', value: '0 (taken)', note: 'One seat' }, { title: 'size', value: '2×3', note: 'Rows × seats' }, { title: 'free', value: '4', note: 'Nested count', good: true } ], note: 'g.length = rows; g[r].length = seats in THAT row.' } ] },
  { nav: 'Flat loop fallacy', h2: 'One loop visits… what?', sub: 'Rows, not seats!', blocks: [
   { t: 'mistake', qname: '2d', q: 'Single loop over grid g visits…', options: [ { v: 'a', html: 'ROWS (each an array), not seats.' }, { v: 'b', html: 'Every seat directly.' }, { v: 'c', html: 'Nothing.' } ], good: 'a', okText: 'Two dimensions demand two loops: outer rows, inner seats[r].length.', noText: 'What IS each element of g?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Addressing and tours.', blocks: [
   { t: 'quiz', celTitle: 'Usher 2D unlocked!', celText: '[row][col] zero-based; per-row lengths; nested tours.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'g[r][c]', label: 'one seat' }, { code: 'g.length', label: 'rows' }, { code: 'g[r].length', label: 'this row' } ], next: 'Next: String toolkit.' } ] } ] },
'string-methods': { heroTitle: 'String Toolkit', heroDesc: 'Seven tools for 90% of text work: measure, peek, slice, find, compare, clean, split.', tip: 'End index EXCLUDED. -1 means absent.',
 steps: [
  { nav: 'Swiss knife', h2: 'Ruler, tweezers, scissors…', sub: 'One tool per text job.', blocks: [
   { t: 'analogy', emoji: '🔪', html: '<strong>Swiss knife.</strong> length() ruler, charAt() tweezers, substring() scissors, equals() scale, trim() towel, split() cutter. But scissors return FRESH paper — originals never cut!' },
   { t: 'typegrid', cards: [ { emoji: '📏', type: 'length()', desc: 'Counts every character, spaces included.', example: '"Hi" → 2' }, { emoji: '🔍', type: 'charAt(i)', desc: 'Peeks at slot i. Zero-based, crashes past end.', example: '"Hi".charAt(0)' }, { emoji: '✂️', type: 'substring(a,b)', desc: 'Slices a..b with b EXCLUDED.', example: '"Java" → "Ja"' }, { emoji: '⚖️', type: 'equals()', desc: 'Compares CONTENT, unlike ==.', example: 's.equals("x")' }, { emoji: '🧹', type: 'trim()', desc: 'Shaves edge whitespace, returns new.', example: '" a ".trim()' }, { emoji: '🔎', type: 'indexOf(x)', desc: 'Finds position; −1 means absent.', example: '"Java".indexOf("v")' } ] } ] },
  { nav: 'Regex trap', h2: 'split(".") shreds all', sub: 'Split takes REGEX, not text.', blocks: [
   { t: 'mistake', qname: 'sm', q: 'split(".") to cut on dots gives…', options: [ { v: 'a', html: 'Shredded everything — . means “any char”.' }, { v: 'b', html: 'Clean dot-split.' }, { v: 'c', html: 'An error always.' } ], good: 'a', okText: 'Escape it: split("\\."). Regex tax, paid once.', noText: 'What does a lone dot mean in regex?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Slices, finds, compares.', blocks: [
   { t: 'quiz', celTitle: 'Toolkit unlocked!', celText: 'End excluded; −1 absent; fresh strings; regex split.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'length()', label: 'measure' }, { code: 'substring(a,b)', label: 'b excluded' }, { code: 'indexOf', label: '−1 absent' }, { code: 'split("\\\\.")', label: 'escaped dot' } ], next: 'Next: why strings never change.' } ] } ] },
'string-immut': { heroTitle: 'String Immutability', heroDesc: 'Strings never change. Every “edit” builds new — safe to share, costly in loops.', tip: 'Catch the return, or the work evaporates.',
 steps: [
  { nav: 'Book vs whiteboard', h2: 'Photocopies, not edits', sub: 'toUpperCase photocopies; original shelved.', blocks: [
   { t: 'analogy', emoji: '📕', html: '<strong>Printed book vs whiteboard.</strong> s.toUpperCase() PHOTOCOPIES in caps; the original sits unchanged. Photocopying 10,000 pages in a loop? Madness — whiteboard (StringBuilder) next lesson.' },
   { t: 'codelab', fromLesson: true, about: 'Line 4’s result dropped on the floor; reassignment keeps it.', slots: [ { title: 'After call', value: 'java', note: 'Unchanged!' }, { title: 'After s = …', value: 'JAVA', note: 'Caught', good: true } ], note: 'No mutation exists — only reassignment repoints s.' } ] },
  { nav: 'Pool illusion', h2: 'Why == sometimes “works”', sub: 'Literals share one pooled object.', blocks: [
   { t: 'mistake', qname: 'si', q: '"hi" == "hi" is often true. Trust == now?', options: [ { v: 'a', html: 'No — pooling fools; transforms break it. equals().' }, { v: 'b', html: 'Yes — == compares content.' }, { v: 'c', html: 'Only for "hi".' } ], good: 'a', okText: 'Pool reuses literals — exactly WHY == fools beginners.', noText: 'What happens after toUpperCase builds a NEW house?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Catch, pool, Builder.', blocks: [
   { t: 'quiz', celTitle: 'Librarian unlocked!', celText: 'Never mutate; catch returns; loops need Builder.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 's = s.trim()', label: 'catch it!' }, { code: 'pool', label: 'shared literals' }, { code: 'Builder', label: 'for loops' } ], next: 'Next: StringBuilder.' } ] } ] },
'stringbuilder': { heroTitle: 'StringBuilder', heroDesc: 'The whiteboard for text: append in place, photograph at the end.', tip: 'Loop-built text → Builder. Small joins → +.',
 steps: [
  { nav: 'Whiteboard list', h2: '1,000 signatures, one board', sub: 'Append per visitor, photo at close.', blocks: [
   { t: 'analogy', emoji: '📋', html: '<strong>Whiteboard.</strong> Append a line per visitor, erase typos in place, photograph (toString) at the end. append returns THIS — chains cost nothing.' },
   { t: 'codelab', fromLesson: true, about: 'One object absorbs all appends; reverse flips the SAME board.', slots: [ { title: 'Built', value: '1 2 3', note: 'Appended' }, { title: 'Flipped', value: '3 2 1', note: 'In place!', good: true } ], note: 'Builder ≠ String: photograph with toString() before comparing.' } ] },
  { nav: 'Cost showdown', h2: '+ in a loop vs Builder', sub: 'O(n²) photocopies vs O(n) board.', blocks: [
   { t: 'matcher', title: 'Pick the tool', desc: 'Two text jobs — right tool each.', values: [ { v: 'a', label: 'Join 3 fixed pieces' }, { v: 'b', label: 'Build 10k pieces in a loop' } ], types: ['Plain +', 'StringBuilder'], map: { a: 'Plain +', b: 'StringBuilder' } } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Append, photo, costs.', blocks: [
   { t: 'quiz', celTitle: 'Scribe unlocked!', celText: 'append chains; toString finishes; loops need boards.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'append(x)', label: 'chain it' }, { code: 'toString()', label: 'photograph' }, { code: 'reverse()', label: 'in place' } ], next: 'Next: searching & counting.' } ] } ] },
'algorithms-basic': { heroTitle: 'Search, Count, Min/Max', heroDesc: 'One loop skeleton, three memories. Crown, click, locate.', tip: 'Crown REAL contenders (a[0]), never 0.',
 steps: [
  { nav: 'Trophy walk', h2: 'Tallest student, one pass', sub: 'Crown first, dethrone taller.', blocks: [
   { t: 'analogy', emoji: '🏆', html: '<strong>Trophy walk.</strong> Crown student one, walk the line, swap on taller. Counting = clicker per match. Searching = stop at first call + sentinel −1 for absent.' },
   { t: 'codelab', fromLesson: true, about: 'One walk, three answers. 4 crowns, 9 dethrones.', slots: [ { title: 'max', value: '9', note: 'Dethroned' }, { title: 'nines', value: '2', note: 'Clicked' }, { title: 'first 2 at', value: '2', note: 'Located', good: true } ], note: 'Empty line? No first student — decide empty UP FRONT.' } ] },
  { nav: 'Fake champion', h2: 'max = 0 vs {-5,-3}', sub: 'Zero outranks all — wrongly.', blocks: [
   { t: 'mistake', qname: 'algo', q: 'max = 0 over {-5, -3} reports…', options: [ { v: 'a', html: '0 — the fake never fought.' }, { v: 'b', html: '-3 — correct.' }, { v: 'c', html: 'It crashes.' } ], good: 'a', okText: 'Crown a[0]: real contender, honest fights.', noText: 'Did 0 ever compete with the data?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Skeleton, sentinels, edges.', blocks: [
   { t: 'quiz', celTitle: 'Scout unlocked!', celText: 'Init memory → tour → update → report. O(n) felt.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'best = a[0]', label: 'crown real' }, { code: 'c = 0', label: 'clicker' }, { code: '-1', label: 'absent' }, { code: 'O(n)', label: 'linear' } ], next: 'Stage 5: objects.' } ] } ] }
};
