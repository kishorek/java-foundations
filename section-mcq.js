/* Section checks for the Java Foundations lessons.
   Renders JSON question blocks and updates scores in place. */
(function () {
  "use strict";

  var LETTERS = ["A", "B", "C", "D"];

  function boot(root) {
    injectStyles();
    var scope = root && root.querySelectorAll ? root : document;
    var scripts = Array.prototype.slice.call(scope.querySelectorAll("script.section-mcq")).filter(function (script) {
      return script.dataset.mcqMounted !== "1";
    });
    scripts.forEach(function (script) { script.dataset.mcqMounted = "1"; });
    if (!scripts.length) return;
    var blocks = scripts.map(function (script, index) {
      return mountBlock(script, index);
    }).filter(Boolean);
    if (!blocks.length) return;
    var summary = mountSummary(scope);
    function refresh() {
      paintSummary(summary, blocks);
    }
    blocks.forEach(function (block) {
      block.onChange = refresh;
    });
    refresh();
  }

  function mountBlock(script, index) {
    var data;
    try {
      data = JSON.parse(script.textContent);
    } catch (err) {
      console.error("Section check could not be read", err);
      return null;
    }
    if (!data || !Array.isArray(data.questions) || !data.questions.length) return null;

    var block = document.createElement("section");
    block.className = "mcq-block";
    block.setAttribute("aria-label", "Check your understanding. " + (data.title || "This section"));

    var head = document.createElement("div");
    head.className = "mcq-head";
    var title = document.createElement("h3");
    title.className = "mcq-title";
    title.textContent = "Check your understanding";
    var progress = document.createElement("p");
    progress.className = "mcq-progress";
    progress.setAttribute("role", "status");
    var meter = document.createElement("div");
    meter.className = "mcq-meter";
    meter.setAttribute("aria-hidden", "true");
    var meterFill = document.createElement("span");
    meter.appendChild(meterFill);
    var hint = document.createElement("p");
    hint.className = "mcq-hint";
    hint.textContent = (data.questions.length > 10
      ? "This section has " + data.questions.length + " questions, shown 10 at a time. "
      : "") + "Theory checks the idea. Practice asks you to use it. Choose an answer, or change it, and the feedback updates straight away.";
    head.appendChild(title);
    head.appendChild(progress);
    head.appendChild(meter);
    if (data.teach) {
      var teach = document.createElement("p");
      teach.className = "mcq-teach";
      teach.textContent = data.teach;
      head.appendChild(teach);
    }
    head.appendChild(hint);
    block.appendChild(head);

    var state = data.questions.map(function () { return { selected: null }; });
    var api = {
      onChange: function () {},
      score: function () { return score(); },
      paintProgress: function () { paintProgress(); }
    };

    var pager = null;
    var pageLabel = null;
    var prevBtn = null;
    var nextBtn = null;
    var page = 0;
    var pageSize = 10;
    if (data.questions.length > pageSize) {
      pager = document.createElement("div");
      pager.className = "mcq-pager";
      prevBtn = document.createElement("button");
      prevBtn.type = "button";
      prevBtn.textContent = "Previous 10";
      pageLabel = document.createElement("span");
      nextBtn = document.createElement("button");
      nextBtn.type = "button";
      nextBtn.textContent = "Next 10";
      pager.appendChild(prevBtn);
      pager.appendChild(pageLabel);
      pager.appendChild(nextBtn);
      block.appendChild(pager);
    }

    var questionNodes = data.questions.map(function (question, qIndex) {
      var node = renderQuestion(question, qIndex, index, state, api);
      block.appendChild(node);
      return node;
    });

    function showPage() {
      if (!pager) return;
      var last = Math.max(0, Math.ceil(questionNodes.length / pageSize) - 1);
      if (page > last) page = last;
      questionNodes.forEach(function (node, qIndex) {
        node.hidden = Math.floor(qIndex / pageSize) !== page;
      });
      var start = page * pageSize + 1;
      var end = Math.min(questionNodes.length, (page + 1) * pageSize);
      pageLabel.textContent = "Questions " + start + "–" + end + " of " + questionNodes.length;
      prevBtn.disabled = page === 0;
      nextBtn.disabled = page === last;
    }
    if (pager) {
      prevBtn.addEventListener("click", function () { page -= 1; showPage(); });
      nextBtn.addEventListener("click", function () { page += 1; showPage(); });
      showPage();
    }

    script.insertAdjacentElement("afterend", block);

    function score() {
      var answered = 0;
      var correct = 0;
      data.questions.forEach(function (question, qIndex) {
        if (state[qIndex].selected === null) return;
        answered += 1;
        if (state[qIndex].selected === question.answer) correct += 1;
      });
      return {
        title: data.title || "This section",
        answered: answered,
        correct: correct,
        total: data.questions.length
      };
    }

    function paintProgress() {
      var result = score();
      progress.textContent = result.answered + " of " + result.total + " answered · " + result.correct + " correct";
      var pct = result.total ? Math.round((result.correct / result.total) * 100) : 0;
      meterFill.style.width = pct + "%";
    }

    paintProgress();
    return api;

    function renderQuestion(question, qIndex, blockIndex, stateList, api) {
      var item = document.createElement("div");
      item.className = "mcq-q";
      var prompt = document.createElement("p");
      prompt.className = "mcq-prompt";
      prompt.id = "mcq-p-" + blockIndex + "-" + qIndex;
      var kind = question.debug ? "debug" : (question.kind || "");
      if (kind === "theory" || kind === "practice" || kind === "debug") {
        var tag = document.createElement("span");
        tag.className = "mcq-tag " + kind;
        tag.textContent = kind === "theory" ? "Theory" : kind === "practice" ? "Practice" : "Debugging";
        prompt.appendChild(tag);
        prompt.appendChild(document.createTextNode(" "));
      }
      prompt.appendChild(document.createTextNode((qIndex + 1) + ". " + question.q));
      item.appendChild(prompt);

      if (question.code) {
        var code = document.createElement("pre");
        code.className = "mcq-code";
        code.textContent = question.code;
        item.appendChild(code);
      }

      var options = document.createElement("div");
      options.className = "mcq-options";
      options.setAttribute("role", "group");
      options.setAttribute("aria-labelledby", prompt.id);

      var buttons = question.options.map(function (text, optIndex) {
        var button = document.createElement("button");
        button.type = "button";
        button.className = "mcq-option";
        button.setAttribute("aria-pressed", "false");
        var letter = document.createElement("span");
        letter.className = "mcq-letter";
        letter.textContent = LETTERS[optIndex];
        var label = document.createElement("span");
        label.className = "mcq-label";
        label.textContent = text;
        var mark = document.createElement("span");
        mark.className = "mcq-status";
        button.appendChild(letter);
        button.appendChild(label);
        button.appendChild(mark);
        button.addEventListener("click", function () {
          stateList[qIndex].selected = optIndex;
          paint();
          paintProgress();
          api.onChange();
        });
        options.appendChild(button);
        return button;
      });
      item.appendChild(options);

      var feedback = document.createElement("div");
      feedback.className = "mcq-feedback";
      feedback.setAttribute("role", "status");
      item.appendChild(feedback);

      var fix = document.createElement("pre");
      fix.className = "mcq-code mcq-fix";
      fix.hidden = true;
      item.appendChild(fix);

      function paint() {
        var selected = stateList[qIndex].selected;
        buttons.forEach(function (button, optIndex) {
          var status = button.querySelector(".mcq-status");
          button.classList.remove("is-selected", "is-correct", "is-wrong");
          button.setAttribute("aria-pressed", selected === optIndex ? "true" : "false");
          status.textContent = "";
          if (selected === null) return;
          if (optIndex === question.answer) button.classList.add("is-correct");
          if (optIndex === selected) button.classList.add("is-selected");
          if (optIndex === selected && optIndex !== question.answer) button.classList.add("is-wrong");
          if (optIndex === selected && optIndex === question.answer) status.textContent = "Your answer · Correct";
          else if (optIndex === selected) status.textContent = "Your answer";
          else if (optIndex === question.answer) status.textContent = "Correct answer";
        });

        if (selected === null) {
          feedback.className = "mcq-feedback";
          feedback.textContent = "";
          fix.hidden = true;
          return;
        }

        var correct = selected === question.answer;
        var letter = LETTERS[question.answer];
        feedback.className = "mcq-feedback is-show " + (correct ? "is-good" : "is-bad");
        feedback.textContent = (correct
          ? "Correct. "
          : "Incorrect. The correct answer is " + letter + ". ") + question.explain;
        if (question.fix) {
          fix.hidden = false;
          fix.textContent = "A corrected version:\n" + question.fix;
        } else {
          fix.hidden = true;
        }
      }

      return item;
    }
  }

  function mountSummary(scope) {
    var summary = document.createElement("section");
    summary.className = "mcq-page-summary";
    summary.setAttribute("aria-label", "Score summary for this page");
    var score = document.createElement("p");
    score.className = "mcq-page-score";
    var sub = document.createElement("p");
    sub.className = "mcq-page-sub";
    var list = document.createElement("ul");
    list.className = "mcq-page-list";
    summary.appendChild(score);
    summary.appendChild(sub);
    summary.appendChild(list);

    var host = scope && scope !== document
      ? scope
      : (document.querySelector("section.content") || document.querySelector("main") || document.body);
    var before = null;
    Array.prototype.forEach.call(host.children, function (child) {
      if (before || !child.classList) return;
      if (child.classList.contains("footer-nav") || child.classList.contains("navbuttons") || child.classList.contains("footer")) {
        before = child;
      }
    });
    if (before) host.insertBefore(summary, before);
    else host.appendChild(summary);
    summary._score = score;
    summary._sub = sub;
    summary._list = list;
    return summary;
  }

  function paintSummary(summary, blocks) {
    var answered = 0;
    var correct = 0;
    var total = 0;
    summary._list.textContent = "";
    blocks.forEach(function (block) {
      var result = block.score();
      answered += result.answered;
      correct += result.correct;
      total += result.total;
      var li = document.createElement("li");
      li.textContent = result.title + ": " + result.correct + " correct · " + result.answered + " of " + result.total + " answered";
      summary._list.appendChild(li);
    });
    summary._score.textContent = "This page: " + correct + " correct out of " + total + " section checks";
    summary._sub.textContent = answered + " answered. Change any selection and this summary updates. The original end-of-lesson quiz is unchanged.";
  }

  function injectStyles() {
    if (document.getElementById("section-mcq-styles")) return;
    var style = document.createElement("style");
    style.id = "section-mcq-styles";
    style.textContent = [
      ".mcq-block{--mcq-ink:var(--ink,#182338);--mcq-muted:var(--muted,#607089);--mcq-line:var(--line,#d5dfec);--mcq-blue:var(--blue,#2457d6);--mcq-bg:#f8fbff;margin:18px 0 8px;padding:16px 16px 12px;border:1px solid var(--mcq-line);border-radius:16px;background:var(--mcq-bg);color:var(--mcq-ink)}",
      ".mcq-head{margin-bottom:8px}",
      ".mcq-title{margin:0 0 4px;font-size:1.05rem;line-height:1.3;color:var(--mcq-ink)}",
      ".mcq-progress{margin:0;font-size:.92rem;font-weight:700;color:var(--mcq-blue)}",
      ".mcq-hint{margin:6px 0 0;font-size:.88rem;color:var(--mcq-muted)}",
      ".mcq-pager{display:flex;align-items:center;justify-content:space-between;gap:8px;margin:12px 0 4px}",
      ".mcq-pager button{border:1px solid var(--mcq-line);background:#fff;color:var(--mcq-ink);border-radius:10px;padding:8px 12px;font:inherit;font-weight:700;cursor:pointer}",
      ".mcq-pager button:hover{border-color:#9db4e4;background:#f3f7ff}",
      ".mcq-pager button:disabled{opacity:.45;cursor:default}",
      ".mcq-pager span{font-size:.9rem;font-weight:700;text-align:center}",
      ".mcq-q[hidden]{display:none}",
      ".mcq-meter{height:7px;margin-top:8px;background:#e6edf6;border-radius:99px;overflow:hidden}",
      ".mcq-meter span{display:block;height:100%;width:0;background:#13795b;border-radius:99px;transition:width .2s ease}",
      ".mcq-q{margin:14px 0;padding-top:12px;border-top:1px solid var(--mcq-line)}",
      ".mcq-prompt{margin:0 0 8px;font-weight:700;line-height:1.45}",
      ".mcq-teach{margin:8px 0 0;line-height:1.45}",
      ".mcq-tag{display:inline-block;margin-right:4px;padding:1px 8px;border-radius:99px;background:#fff2df;color:#8a4b08;font-size:.72rem;font-weight:800;letter-spacing:.03em;vertical-align:1px}",
      ".mcq-tag.theory{background:#eaf0ff;color:#2457d6}",
      ".mcq-tag.practice{background:#e7f7ef;color:#0f5c3e}",
      "a.quiz-menu{display:flex;align-items:center;gap:8px;margin:12px 0 0;padding:10px 12px;border-radius:12px;background:#eaf0ff;color:#2457d6;font-weight:750;text-decoration:none}",
      "a.quiz-menu:hover{background:#d6e2ff}",
      ".mcq-code{margin:8px 0;padding:12px 14px;overflow:auto;border-radius:12px;background:#111827;color:#e8eef9;font:13px/1.5 ui-monospace,SFMono-Regular,Consolas,monospace;white-space:pre-wrap}",
      ".mcq-options{display:grid;gap:8px}",
      ".mcq-option{display:flex;align-items:flex-start;gap:10px;width:100%;margin:0;padding:10px 12px;border:2px solid #d5dfec;border-radius:12px;background:#fff;color:var(--mcq-ink);font:inherit;font-weight:600;line-height:1.4;text-align:left;cursor:pointer}",
      ".mcq-option:hover{border-color:#9db4e4;background:#f3f7ff}",
      ".mcq-option:focus-visible{outline:3px solid var(--mcq-blue);outline-offset:2px}",
      ".mcq-letter{flex:0 0 auto;width:1.7rem;height:1.7rem;border-radius:8px;background:#eaf0ff;color:var(--mcq-blue);font-size:.82rem;font-weight:800;line-height:1.7rem;text-align:center}",
      ".mcq-label{flex:1}",
      ".mcq-status{flex:0 0 auto;max-width:42%;font-size:.75rem;font-weight:800;color:var(--mcq-muted);text-align:right}",
      ".mcq-option.is-selected{border-color:var(--mcq-blue);box-shadow:0 0 0 3px #2457d622}",
      ".mcq-option.is-correct{border-color:#13795b;background:#e7f7ef}",
      ".mcq-option.is-correct .mcq-letter{background:#13795b;color:#fff}",
      ".mcq-option.is-correct .mcq-status{color:#0f5c3e}",
      ".mcq-option.is-wrong{border-color:#c2414a;background:#fdecee}",
      ".mcq-option.is-wrong .mcq-letter{background:#c2414a;color:#fff}",
      ".mcq-option.is-wrong .mcq-status{color:#8d2430}",
      ".mcq-feedback{display:none;margin-top:8px;padding:10px 12px;border-radius:12px;line-height:1.45}",
      ".mcq-feedback.is-show{display:block}",
      ".mcq-feedback.is-good{background:#e7f7ef;color:#0f5c3e}",
      ".mcq-feedback.is-bad{background:#fdecee;color:#7a2430}",
      ".mcq-fix{border:1px solid #1f6b45}",
      ".mcq-page-summary{margin:18px 0;padding:14px 16px;border:1px solid var(--line,#d5dfec);border-radius:16px;background:#fff;color:var(--ink,#182338)}",
      ".mcq-page-score{margin:0;font-weight:800}",
      ".mcq-page-sub{margin:4px 0 8px;color:var(--muted,#607089);font-size:.9rem}",
      ".mcq-page-list{margin:0;padding-left:1.1rem}",
      ".mcq-page-list li{margin:3px 0}",
      "@media(max-width:700px){.mcq-block{padding:14px 12px}.mcq-status{max-width:100%}.mcq-option{flex-wrap:wrap}.mcq-status{flex-basis:100%;text-align:left;padding-left:2.4rem}}"
    ].join("");
    document.head.appendChild(style);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { boot(document); });
  else boot(document);
  window.SectionMCQ = { boot: boot };
})();
