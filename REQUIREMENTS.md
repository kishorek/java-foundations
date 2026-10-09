## 1. Your Role and Mission

Act as a principal instructional designer, expert Java educator, senior frontend architect, educational game designer, animation specialist, UX designer, and software quality engineer.

Your mission is to design and build a complete, polished, interactive, node based Java foundations learning platform for absolute beginners.

This is not a documentation website, a textbook converted into HTML, or a collection of ordinary tutorial pages. It is an interactive learning experience that teaches someone to program from zero knowledge through guided explanations, animated analogies, visual experiments, coding exercises, quizzes, progressive challenges, and small projects.

The learner may have never written a single line of code. They may not know what a variable, a function, a programming language, or a compiler is. Assume no prior knowledge and never make the learner feel inadequate for asking a basic question.

Build the actual working application, all lesson pages, all supporting assets, and the static deployment package. Do not stop after producing a plan, wireframe, curriculum, or sample lesson.

## 2. Primary Learning Objective

At the end of the course, the learner should be able to:

1. Explain what programming is and how a Java program executes.
2. Read and write simple Java programs independently.
3. Understand variables, data types, operators, input, and output.
4. Write conditional statements, loops, methods, and basic algorithms.
5. Work with strings, arrays, and elementary data structures.
6. Understand classes, objects, constructors, encapsulation, inheritance, polymorphism, abstraction, and interfaces.
7. Use collections, exceptions, files, and basic unit tests.
8. Organize a small Java project and build a practical console application.
9. Read compiler errors, debug incorrect logic, and explain their own code.

Prioritize conceptual understanding, mental models, and independent problem solving over memorization.

## 3. Target Audience and Teaching Philosophy

The audience consists of absolute beginners, school students, career changers, and adults learning programming for the first time.

Assume the learner does not understand technical vocabulary. Introduce every new term in plain English before using it extensively.

Follow these teaching principles:

1. Explain the real world problem before introducing the programming concept.
2. Introduce one major new idea at a time.
3. Use concrete examples before abstract definitions.
4. Animate invisible processes such as variable assignment, memory references, compilation, looping, and method calls.
5. Show both correct and incorrect examples.
6. Encourage experimentation without penalizing mistakes.
7. Revisit earlier concepts in later lessons to strengthen retention.
8. Gradually reduce guidance as the learner becomes more confident.
9. Teach Java accurately without oversimplifying it into technically incorrect explanations.
10. Explain why a feature exists, what problem it solves, when to use it, and when it is unnecessary.

Use approximately 95 percent clear, friendly educational content and 5 percent gentle humor. Humor should be occasional, relevant, and never distracting or condescending.

For example, a variable can be a labelled lunchbox, an array can be an egg tray, a loop can be a washing machine repeating its cycle, and an exception can be the unexpected guest who arrives at a wedding without an invitation.

Use analogies as introductory mental models, then explicitly explain where each analogy stops matching real Java behavior.

## 4. Product Definition

Build a complete, responsive, node based Java learning website with the following components:

1. A course dashboard showing progress and recommended next lessons.
2. An interactive prerequisite graph representing lessons as connected nodes.
3. A dedicated lesson page for every lesson in the syllabus.
4. Interactive animations embedded in the lessons.
5. Small quizzes and coding exercises in every lesson.
6. A Java playground or carefully simulated execution environment where feasible.
7. Guided mini projects and a final capstone project.
8. A glossary of beginner friendly technical terms.
9. A searchable course index.
10. A progress tracker that works without a backend.
11. A review section for concepts the learner has previously struggled with.
12. A completion page with a summary of demonstrated skills.

The course graph must be functional, not decorative. Selecting a lesson node should open its corresponding lesson. Locked or unrecommended nodes should explain which prerequisite lessons need to be completed first.

Provide a conventional lesson list and navigation alongside the graph so that learners are not forced to understand a node graph before they can learn programming.

## 5. Node Based Curriculum Architecture

Represent the course as a directed acyclic graph wherever practical.

Each lesson should be a content node with explicit prerequisite nodes, learning objectives, estimated duration, exercises, quiz items, and completion criteria.

Create distinct node categories:

1. Concept nodes introduce a new idea.
2. Demonstration nodes show a concept in action.
3. Practice nodes allow learners to experiment.
4. Quiz nodes test understanding.
5. Project nodes combine multiple concepts.
6. Review nodes reinforce earlier knowledge.

Use prerequisite relationships to recommend the next appropriate lesson.

Do not create circular dependencies. If a topic needs to revisit a previous concept, create a review relationship instead of a circular prerequisite.

Store the course graph and lesson metadata in structured, maintainable data files. Each node must have a stable identifier that remains unchanged when lesson titles or page layouts change.

Example node metadata:

{
  "id": "java-variables",
  "title": "Variables: Your Program's Storage Boxes",
  "stage": 2,
  "type": "concept",
  "prerequisites": ["java-first-program"],
  "durationMinutes": 15,
  "objectives": [
    "Explain what a variable stores",
    "Declare and initialize a variable",
    "Read and update a variable's value"
  ],
  "lessonPath": "lessons/variables.html"
}

This is an illustrative schema. Design and implement a complete schema that supports all required node types and lesson features.

The interface should distinguish completed, available, currently selected, and locked nodes using accessible colors, text labels, and icons rather than color alone.

Provide graph zoom, pan, reset, and a fit to screen control where appropriate. Support keyboard navigation and offer an accessible list view as an alternative.

## 6. Mandatory Course Syllabus

Create a dedicated, fully developed lesson page for every topic listed below. Do not merge several major topics into one generic page merely to reduce implementation effort.

You may divide a difficult topic into additional pages when doing so improves comprehension. Every required topic must remain discoverable in the course index.

### Stage 1: Programming Fundamentals

01. What Is Programming?
02. What Is an Algorithm?
03. What Is Source Code?
04. How Computers Execute Programs
05. What Is Java and What Can It Build?
06. JDK, JRE, and JVM
07. Setting Up Java and Running a Program

### Stage 2: Java Syntax and Basic Building Blocks

08. Your First Java Program
09. Printing Output
10. Comments and Readable Code
11. Variables
12. Primitive Data Types: byte, short, int, long, float, double, char, boolean
13. Reference Types and Object References
14. Literals and Constants
15. Type Conversion and Casting
16. Operators
17. Strings
18. User Input with Scanner

For data types, explain why multiple numeric types exist, the approximate storage and range of each relevant type, the difference between integer and floating point values, and how to choose a suitable type.

Explain that float and double have different precision, that long literals may require an L suffix, that floating point literals are double by default, and that Java char represents a UTF 16 code unit rather than every possible Unicode character.

Explain reference variables without suggesting that every reference variable directly contains an entire object.

### Stage 3: Decisions and Programming Logic

19. Boolean Expressions
20. if, else if, and else
21. Nested Conditions
22. switch Statements and Expressions
23. for Loops
24. while and do while Loops
25. break and continue
26. Nested Loops
27. Methods
28. Parameters and Return Values
29. Variable Scope and Lifetime
30. Debugging and Reading Errors

Teach loops using visual execution traces. Show the current value of each variable, the condition being evaluated, the body being executed, and the next step.

Teach methods using everyday examples such as a vending machine, a reusable recipe, or a service counter.

Distinguish syntax errors, compilation errors, runtime exceptions, and logical errors.

### Stage 4: Arrays, Strings, and Basic Algorithms

31. Arrays
32. Array Indexing and Bounds
33. Traversing and Updating Arrays
34. Two Dimensional Arrays
35. Useful String Methods
36. String Immutability
37. StringBuilder
38. Basic Algorithms: Searching, Counting, Minimum, and Maximum

Show array elements in visual memory cells with indexes and values. Demonstrate how loops move through them.

Explain why arrays have a fixed length and introduce dynamic collections only after learners understand arrays.

### Stage 5: Object Oriented Programming

39. Classes and Objects
40. Fields and Methods
41. Constructors
42. The this Keyword
43. Encapsulation
44. Access Modifiers
45. Static Members
46. Inheritance
47. Method Overriding
48. Polymorphism
49. Abstract Classes
50. Interfaces
51. Composition
52. Packages and Imports

Use a consistent example domain, such as a library, restaurant, or school, to connect the topics.

Explain the distinction between a class and an object, state and behavior, instance members and static members, overloading and overriding, and inheritance and composition.

Show how polymorphism works by using a common type to interact with different implementations.

Explain that Java classes support single inheritance of classes, while a class can implement multiple interfaces.

Do not introduce all four pillars of object oriented programming in one overwhelming lesson. Build the concepts in dependency order.

### Stage 6: Practical Java Programming

53. Exception Handling: try, catch, finally, throw, and throws
54. Common Exceptions and Defensive Programming
55. The Collections Framework: List, Set, and Map
56. ArrayList and HashMap
57. Generics and Type Safety
58. Enums
59. File Reading and Writing
60. Basic Unit Testing
61. Project Structure, Maven or Gradle, and Dependencies
62. Coding Conventions and Maintainable Code

Use modern Java APIs and clearly identify the Java version targeted by the course. Prefer a current supported LTS release and avoid outdated practices unless explaining them for historical context.

Introduce Maven as the default build tool for the beginner project unless there is a strong reason to choose otherwise.

Introduce generics after the learner understands reference types and collections. Explain checked and unchecked exceptions without claiming that all runtime exceptions must be caught.

For file handling, demonstrate safe resource management using try with resources.

For testing, show a basic unit test using JUnit and explain the difference between expected and actual results.

## 7. Mandatory Project Sequence

Create complete project pages with incremental milestones, starter code, expected behavior, hints, tests, and solution explanations.

### Project 1: Simple Calculator

Prerequisites: output, variables, data types, operators, and user input.

Requirements:

1. Accept two numbers.
2. Perform addition, subtraction, multiplication, and division.
3. Display results clearly.
4. Explain numeric types and division behavior.
5. Detect division by zero appropriately.
6. Add optional challenges such as repeated calculations.

### Project 2: Student Grade Calculator

Prerequisites: conditions, loops, methods, and input validation.

Requirements:

1. Accept student marks.
2. Validate allowed mark ranges.
3. Calculate totals and averages.
4. Assign grades using configurable rules.
5. Display a clear report.
6. Explain edge cases and test them.

### Project 3: Library Management System

Prerequisites: arrays, strings, classes, constructors, encapsulation, and interfaces.

Requirements:

1. Represent books and library users.
2. Add, search, list, borrow, and return books.
3. Demonstrate object state and behavior.
4. Separate responsibilities across classes.
5. Introduce interfaces or composition only where they provide a clear benefit.
6. Include a guided refactoring exercise.

### Project 4: Employee Management Application

Prerequisites: collections, exceptions, file handling, and basic testing.

Requirements:

1. Add and list employees.
2. Search by employee identifier.
3. Update and remove records.
4. Validate input and handle expected errors.
5. Save and load data from local files.
6. Add unit tests for important operations.
7. Organize the code into appropriate packages.

### Final Capstone: Command Line Task Manager

Build a small but complete Java application that combines variables, conditions, loops, methods, classes, collections, exceptions, file storage, and testing.

The learner should be able to add, list, complete, search, and remove tasks, with persistence between program executions.

Provide staged implementation milestones rather than revealing the complete solution immediately.

## 8. Mandatory Lesson Page Structure

Every lesson page must follow a consistent instructional framework, adapted to the topic.

### A. Lesson opening

Include:

1. A clear, engaging lesson title.
2. A short introduction describing what the learner will discover.
3. An estimated duration.
4. Explicit learning objectives.
5. Prerequisites with links to relevant lessons.
6. A motivating question that connects the concept to everyday life.

### B. Start with an analogy

Introduce a relatable real world scenario before presenting technical definitions.

For example, explain variables using labelled storage containers, loops using repeated daily routines, and objects using real world entities with their own information and behavior.

Include a small illustration or animation that makes the analogy immediately understandable.

After the analogy, identify what maps to the programming concept and where the analogy is imperfect.

### C. Explain the concept

Introduce the formal terminology gradually.

Use short paragraphs, progressive disclosure, examples, visual diagrams, and comparison tables when useful.

Every technical term must have a beginner friendly definition at its first important appearance, with a link to the glossary.

### D. Animated visual explanation

Create an interactive animation that explains the central idea of the lesson.

Provide play, pause, restart, previous step, and next step controls when applicable.

The learner must be able to move through the explanation at their own pace.

Show labels and explanations during important transitions. Do not rely solely on movement, color, or sound.

### E. Live code demonstration

Show a small, correct Java example.

Include:

1. Syntax highlighted source code.
2. Explanations of important lines.
3. An expected output panel.
4. A step by step execution trace.
5. An explanation of why the output occurs.
6. A button to copy the example.

Keep each initial example as small as possible. Introduce complexity only after the simplest version is understood.

### F. Interactive experiment

Allow the learner to change appropriate values, choose different options, or modify a small code fragment and observe the consequences.

For example, let the learner change an integer value, step through a loop, change a condition, or inspect an array.

When a fully functional Java execution environment is unavailable, implement a transparent, carefully scoped visual simulator for the particular concept. Never pretend that simulated output came from a real Java compiler.

### G. Common mistakes

Include at least three realistic beginner mistakes where the topic permits.

For each mistake, show the incorrect example, explain why it fails, and demonstrate the corrected version.

Include common misconceptions such as using == to compare String contents, confusing = with ==, accessing an invalid array index, or forgetting that integer division truncates the fractional part.

Explain the relevant behavior accurately and in context.

### H. Guided practice

Provide at least two short practice activities for each lesson.

Include different types of practice, such as predicting output, filling in missing code, arranging execution steps, identifying an error, matching terminology, or solving a small problem.

Provide graduated hints. Show the solution only when requested or when the learner has made a genuine attempt.

### I. Lesson quiz

Every lesson must have a short quiz containing at least three questions, with four answer choices for multiple choice questions where appropriate.

Use a mixture of conceptual understanding, code interpretation, debugging, and application questions.

Every answer must include feedback explaining why it is correct or incorrect. Distractors should represent realistic beginner misconceptions rather than arbitrary trick answers.

Include at least one question that requires the learner to apply the concept rather than repeat its definition.

Randomize answer order where appropriate without breaking the correctness of the answer key.

Track quiz attempts and results locally.

### J. Summary and retrieval practice

End each lesson with:

1. Three to five important takeaways.
2. A short recall challenge.
3. A practical task to complete independently.
4. Links to prerequisite concepts and related lessons.
5. A clear next lesson action.

Mark a lesson as completed only when its configured completion requirements are met, such as viewing the essential content, completing the practice, and reaching the quiz threshold.

Allow learners to revisit completed lessons without penalty.

## 9. Animation and Interaction Design

Animations must teach, not decorate.

Use CSS transitions, CSS keyframes, inline SVG, and JavaScript for deterministic, lightweight animations.

Do not rely on large video files, remotely hosted animation libraries, or external APIs.

Build reusable visual components for:

1. Variable containers and value changes.
2. Primitive versus reference type illustrations.
3. Data type size and range comparisons.
4. Compiler and execution pipelines.
5. Conditional decision branches.
6. Loop iteration and termination.
7. Method calls and return values.
8. Array indexing and traversal.
9. Object instances, fields, and references.
10. Inheritance and polymorphic method dispatch.
11. Collections and key value relationships.
12. Exception propagation and handling.
13. File reading and writing.
14. Test execution and pass or fail results.

Each animation should have a clear learning purpose, a concise explanation, and controls for the learner.

Respect the reduced motion preference of the operating system and provide a nonanimated alternative where practical.

Ensure animations do not automatically restart, flicker, or compete with lesson text.

## 10. Quiz and Assessment Engine

Implement a reusable assessment system rather than hardcoding separate quiz behavior in every lesson.

Support:

1. Single answer multiple choice.
2. Multiple selection where appropriate.
3. Predict the output.
4. True or false.
5. Match the concept.
6. Find the bug.
7. Fill in missing code.
8. Arrange the steps.
9. Short code tracing exercises.

Each question should contain a stable identifier, prompt, answer data, explanation, difficulty, and associated learning objective.

Track attempts, correct answers, mistakes, hints requested, and mastery status.

Use immediate feedback and an optional retry mode.

Create a review queue that prioritizes concepts the learner repeatedly misses.

Do not create punitive scoring or public leaderboards. The goal is learning and confidence, not competition.

## 11. Java Code Playground

Provide a beginner friendly code playground with an editor, output panel, reset button, copy button, and sample challenges.

The preferred implementation is to support real Java execution through a separately configured execution provider only when one is explicitly enabled and available.

The default S3 hosted experience must not depend on an execution backend.

Implement useful local visual simulations for selected concepts, including variables, expressions, conditions, loops, arrays, and basic methods, where practical.

Clearly label which experiences are visual simulations and which actually compile and execute Java.

Never claim that arbitrary Java code can be executed by a static website without an execution engine.

Design the playground architecture so a future isolated Java execution service can be added without rewriting the entire course.

If an external Java execution service is configured, keep credentials out of static files, document security requirements, and handle timeouts, output limits, and execution failures.

## 12. Technical Architecture

Build a production quality static website with the following priorities:

1. HTML5, CSS, and modern JavaScript.
2. TypeScript if it improves maintainability and correctness.
3. Vite or an equivalent build tool for development and production packaging.
4. A lightweight graph visualization implementation, preferably SVG or Canvas with accessible controls.
5. A lightweight syntax highlighter bundled locally.
6. Local JSON or JavaScript modules for lesson content and metadata.
7. Local browser storage for progress, quiz history, and learner settings.

Use a modular architecture with reusable layout components, lesson renderers, animation components, quiz components, graph components, and progress management.

Do not require React or another large framework merely for the sake of using one. If a framework is selected, justify the tradeoff and ensure that the final output remains a static website.

Avoid server side rendering, backend services, server side sessions, databases, and mandatory accounts.

All core learning features must function after the static files have been deployed.

## 13. Static Amazon S3 Deployment

The production output must be deployable to an Amazon S3 bucket configured for static website hosting.

The course must not require a Node.js server in production. Node.js may be used during local development and building only.

Generate a clean output directory containing all deployable HTML, CSS, JavaScript, fonts, icons, images, JSON data, and other required assets.

Requirements:

1. Use relative or deployment safe asset paths where practical.
2. Avoid assuming that the website is hosted at the root of a domain.
3. Support deployment under a configurable base path.
4. Ensure every lesson URL works after upload.
5. Ensure page refreshes do not cause broken routes.
6. Prefer real static HTML files for lesson pages or generate a complete set of HTML files during the build.
7. Avoid relying on SPA fallback routing that may not be available on S3 website hosting.
8. Use an appropriate index.html and error.html.
9. Configure cache friendly asset filenames or content hashes.
10. Document MIME types, cache headers, and deployment considerations.
11. Explain how to configure an S3 bucket for public static website hosting when appropriate.
12. Explain that HTTPS and custom domain delivery generally require CloudFront or another HTTPS capable hosting layer.
13. Provide an optional CloudFront deployment guide.
14. Do not include credentials, secrets, or development files in the production output.

Store user progress in localStorage with versioned schemas and graceful handling of unavailable storage.

Provide a progress export and import feature using a downloadable JSON file, allowing learners to transfer progress between browsers or devices.

Explain that browser localStorage is specific to a browser and origin, and that clearing site data may erase progress unless the learner exports it.

## 14. Static Page Generation and Course Navigation

Generate a dedicated HTML page for each lesson during the production build.

Each lesson should have a meaningful title, unique page metadata, a descriptive URL, and a stable lesson identifier.

Include:

1. Course home page.
2. Stage overview pages.
3. Interactive graph page.
4. Individual lesson pages.
5. Project pages.
6. Glossary page.
7. Search page or integrated search interface.
8. Progress dashboard.
9. Help and accessibility information.
10. A not found page.

The build process should read lesson metadata and generate all required pages consistently.

Implement next and previous navigation based on the course graph, not merely alphabetical ordering.

Include breadcrumbs, stage labels, prerequisite links, estimated duration, completion state, and clear navigation controls.

Ensure direct navigation to a lesson URL works without first opening the homepage.

Include a site map or generated course index that lists every lesson and project.

## 15. Visual Design Direction

Create a premium educational interface that feels like a modern interactive science museum combined with a well designed learning application.

Use a clear typographic hierarchy, generous whitespace, readable code blocks, restrained colors, consistent spacing, and responsive layouts.

Avoid a generic dashboard filled with cards, excessive gradients, unnecessary glass effects, oversized decorative illustrations, or distracting animations.

Use diagrams and visual experiments when they provide more instructional value than text.

Include:

1. A welcoming course landing page.
2. A visual course map.
3. A persistent lesson navigation system on desktop.
4. A compact navigation drawer on mobile.
5. A focused reading area for lesson content.
6. A clearly separated interactive demonstration panel.
7. Consistent quiz and feedback components.
8. A visible progress indicator.
9. Light and dark themes if they can be implemented without compromising accessibility.
10. A responsive layout for desktop, tablet, and mobile.

The interface must remain usable at narrow viewport widths and at increased browser zoom.

Do not make the course depend on a particular screen size, pointer device, or hover interaction.

## 16. Accessibility and Inclusion

Target WCAG 2.2 AA where practical.

Provide semantic HTML, accessible names, keyboard operability, visible focus indicators, sufficient contrast, meaningful headings, and appropriate screen reader announcements.

Use native buttons and form controls.

Do not communicate quiz correctness, graph state, or lesson completion through color alone.

Ensure code samples can be selected and copied.

Provide text alternatives for meaningful diagrams and explanations for animations.

Support reduced motion, zoom, and keyboard only navigation.

Keep language simple without being childish. The tone should respect learners of all ages.

## 17. Content Quality Rules

Every lesson must contain real, topic specific educational material.

Do not use placeholder paragraphs, generic explanations repeated across pages, lorem ipsum, fake buttons, empty quiz answers, or animations that do not explain the current topic.

Never use a lesson title as a substitute for the actual lesson.

Do not make all lessons follow the exact same analogy, example, or animation.

Use a consistent example domain where useful, but introduce fresh examples to show transfer of learning.

All Java code examples must be syntactically correct for the declared Java version unless explicitly presented as an error

## 18. Additional Notes
Do not use complex jargons/english words.

Have some fun in the content (not more than 5%) to keep it engaging.

All the courses should be cohesive

