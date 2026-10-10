/* Fluid per-topic layouts, review checkpoints (3 topics). */
export const LAYOUTS_D = {
'review-basics': { heroTitle: 'Checkpoint: Basics', heroDesc: 'Stages 1–2 in one sweep. Water only YOUR dry spots.', tip: 'Recall without looking. Rereading builds illusions.',
 steps: [
  { nav: 'Garden check', h2: 'Rows 1–2, targeted', sub: 'Missed quizzes = dry spots.', blocks: [
   { t: 'analogy', emoji: '🌱', html: '<strong>Garden check-up.</strong> Water ONLY dry spots (your missed quizzes on the progress page). Blooming rows get praise, not re-reads.' },
   { t: 'codelab', fromLesson: true, about: 'The big three of stage 2, four lines.', slots: [ { title: '5/2', value: '2', note: 'Truncated' }, { title: '5/2.0', value: '2.5', note: 'Lifted' }, { title: '"hi"+"!"', value: 'hi!', note: 'Knotted', good: true } ], note: 'Retrieval > rereading. Cover answers, recall FIRST.' } ] },
  { nav: 'Blurt drill', h2: 'Eight primitives, no peeking', sub: 'Ranges included if brave.', blocks: [
   { t: 'matcher', title: 'Sort the facts', desc: 'Match rule to meaning.', values: [ { v: 'a', label: '5/2 with ints' }, { v: 'b', label: 'JDK contains' }, { v: 'c', label: 'After nextInt…' } ], types: ['2 (truncates)', 'JRE + javac + tools', 'Extra nextLine!'], map: { a: '2 (truncates)', b: 'JRE + javac + tools', c: 'Extra nextLine!' } } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Pipeline, types, crumbs.', blocks: [
   { t: 'quiz', celTitle: 'Roots watered!', celText: 'Pipeline, truncation, equals, crumbs — solid.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'javac→java', label: 'pipeline' }, { code: '(double)s/c', label: 'cast first' }, { code: 'equals()', label: 'not ==' } ], next: 'Onward to logic!' } ] } ] },
'review-logic': { heroTitle: 'Checkpoint: Logic', heroDesc: 'Loops, branches, methods, debugging — traced fast, tables ready.', tip: 'Four columns: round, vars, decision, action.',
 steps: [
  { nav: 'Match replay', h2: 'Pause, note, predict', sub: 'Replays build instinct.', blocks: [
   { t: 'analogy', emoji: '📼', html: '<strong>Match replay.</strong> Pause each whistle (condition), note score (variables), predict next play. Then WRITE fresh loops — watching isn’t training.' },
   { t: 'codelab', fromLesson: true, about: 'Skip 3, sum the rest.', slots: [ { title: 'Rounds 1–2', value: 'total = 3', note: 'Added' }, { title: 'Round 3', value: 'Skipped', note: 'continue' }, { title: 'Total', value: '7', note: '1+2+4', good: true } ], note: 'Off-by-one lives at boundaries: test 0, 1, n−1, n.' } ] },
  { nav: 'First move?', h2: 'Wrong total, 100 lines', sub: 'Bisect or rewrite?', blocks: [
   { t: 'mistake', qname: 'rl', q: 'Wrong total in 100 lines. FIRST move?', options: [ { v: 'a', html: 'Disable half; halve the suspects.' }, { v: 'b', html: 'Rewrite everything.' }, { v: 'c', html: 'Change five things.' } ], good: 'a', okText: 'Bisect: guilty vs innocent half. Convict fast.', noText: 'How do you halve 100 suspects in ONE move?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Tables, bounds, errors.', blocks: [
   { t: 'quiz', celTitle: 'Engine tuned!', celText: 'Trace tables; < n runs n; first error first.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'i < n', label: 'n runs' }, { code: 'edges', label: '0,1,n-1,n' }, { code: 'error #1', label: 'fix first' } ], next: 'Onward to objects!' } ] } ] },
'review-oop': { heroTitle: 'Checkpoint: OOP Story', heroDesc: 'Blueprints to packages in 60 seconds — then BUILD the mini-library.', tip: 'Reading twice teaches nothing. Type it.',
 steps: [
  { nav: 'Museum audit', h2: 'Rooms to passes', sub: 'Chain the whole arc aloud.', blocks: [
   { t: 'analogy', emoji: '🏛️', html: '<strong>Museum audit.</strong> Rooms (packages), exhibits (objects), rules (encapsulation), wings (inheritance), passes (interfaces), installs (composition). Then BUILD — audits admire, builders build.' },
   { t: 'code', label: 'OOP minimum', fromLesson: true, gloss: '<strong>Private + constructor + getter</strong> = smallest honest object. Next: borrowed flag, then Library of many.' } ] },
  { nav: 'Design default', h2: 'Prefer… what?', sub: 'One breath, full tree.', blocks: [
   { t: 'mistake', qname: 'ro', q: 'Default design posture?', options: [ { v: 'a', html: 'has-a; inherit true kinds; promise via interfaces.' }, { v: 'b', html: 'Always inherit everything.' }, { v: 'c', html: 'One giant public class.' } ], good: 'a', okText: 'Holder by default; kind by proof; contracts for capabilities.', noText: 'What does the is-a test say?' } ] },
  { nav: 'Quiz + pocket guide', h2: 'Check + keep', sub: 'Relations and rules.', blocks: [
   { t: 'quiz', celTitle: 'Curator unlocked!', celText: 'has-a default; encapsulate; shelve in packages.' },
   { t: 'reference', title: 'Your pocket reference', pills: [ { code: 'has-a', label: 'default' }, { code: 'is-a', label: 'prove it' }, { code: 'private first', label: 'always' } ], next: 'Capstone: build it all!' } ] } ] }
};
