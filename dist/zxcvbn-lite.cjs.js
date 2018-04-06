'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var frequency_lists;

frequency_lists = {
  passwords: "123456,password,12345678,qwerty,123456789,12345,1234,111111,1234567,dragon,123123,baseball,abc123".split(","),
  english_wikipedia: "the,of".split(","),
  female_names: "mary,patricia".split(","),
  surnames: "smith,johnson".split(","),
  us_tv_and_film: "you,i".split(","),
  male_names: "james,john".split(",")
};

var frequency_lists_1 = frequency_lists;

var adjacency_graphs;

adjacency_graphs = {
  qwerty: {
    "!": ["`~", null, null, "2@", "qQ", null],
    "\"": [";:", "[{", "]}", null, null, "/?"],
    "#": ["2@", null, null, "4$", "eE", "wW"],
    "$": ["3#", null, null, "5%", "rR", "eE"],
    "%": ["4$", null, null, "6^", "tT", "rR"],
    "&": ["6^", null, null, "8*", "uU", "yY"],
    "'": [";:", "[{", "]}", null, null, "/?"],
    "(": ["8*", null, null, "0)", "oO", "iI"],
    ")": ["9(", null, null, "-_", "pP", "oO"],
    "*": ["7&", null, null, "9(", "iI", "uU"],
    "+": ["-_", null, null, null, "]}", "[{"],
    ",": ["mM", "kK", "lL", ".>", null, null],
    "-": ["0)", null, null, "=+", "[{", "pP"],
    ".": [",<", "lL", ";:", "/?", null, null],
    "/": [".>", ";:", "'\"", null, null, null],
    "0": ["9(", null, null, "-_", "pP", "oO"],
    "1": ["`~", null, null, "2@", "qQ", null],
    "2": ["1!", null, null, "3#", "wW", "qQ"],
    "3": ["2@", null, null, "4$", "eE", "wW"],
    "4": ["3#", null, null, "5%", "rR", "eE"],
    "5": ["4$", null, null, "6^", "tT", "rR"],
    "6": ["5%", null, null, "7&", "yY", "tT"],
    "7": ["6^", null, null, "8*", "uU", "yY"],
    "8": ["7&", null, null, "9(", "iI", "uU"],
    "9": ["8*", null, null, "0)", "oO", "iI"],
    ":": ["lL", "pP", "[{", "'\"", "/?", ".>"],
    ";": ["lL", "pP", "[{", "'\"", "/?", ".>"],
    "<": ["mM", "kK", "lL", ".>", null, null],
    "=": ["-_", null, null, null, "]}", "[{"],
    ">": [",<", "lL", ";:", "/?", null, null],
    "?": [".>", ";:", "'\"", null, null, null],
    "@": ["1!", null, null, "3#", "wW", "qQ"],
    "A": [null, "qQ", "wW", "sS", "zZ", null],
    "B": ["vV", "gG", "hH", "nN", null, null],
    "C": ["xX", "dD", "fF", "vV", null, null],
    "D": ["sS", "eE", "rR", "fF", "cC", "xX"],
    "E": ["wW", "3#", "4$", "rR", "dD", "sS"],
    "F": ["dD", "rR", "tT", "gG", "vV", "cC"],
    "G": ["fF", "tT", "yY", "hH", "bB", "vV"],
    "H": ["gG", "yY", "uU", "jJ", "nN", "bB"],
    "I": ["uU", "8*", "9(", "oO", "kK", "jJ"],
    "J": ["hH", "uU", "iI", "kK", "mM", "nN"],
    "K": ["jJ", "iI", "oO", "lL", ",<", "mM"],
    "L": ["kK", "oO", "pP", ";:", ".>", ",<"],
    "M": ["nN", "jJ", "kK", ",<", null, null],
    "N": ["bB", "hH", "jJ", "mM", null, null],
    "O": ["iI", "9(", "0)", "pP", "lL", "kK"],
    "P": ["oO", "0)", "-_", "[{", ";:", "lL"],
    "Q": [null, "1!", "2@", "wW", "aA", null],
    "R": ["eE", "4$", "5%", "tT", "fF", "dD"],
    "S": ["aA", "wW", "eE", "dD", "xX", "zZ"],
    "T": ["rR", "5%", "6^", "yY", "gG", "fF"],
    "U": ["yY", "7&", "8*", "iI", "jJ", "hH"],
    "V": ["cC", "fF", "gG", "bB", null, null],
    "W": ["qQ", "2@", "3#", "eE", "sS", "aA"],
    "X": ["zZ", "sS", "dD", "cC", null, null],
    "Y": ["tT", "6^", "7&", "uU", "hH", "gG"],
    "Z": [null, "aA", "sS", "xX", null, null],
    "[": ["pP", "-_", "=+", "]}", "'\"", ";:"],
    "\\": ["]}", null, null, null, null, null],
    "]": ["[{", "=+", null, "\\|", null, "'\""],
    "^": ["5%", null, null, "7&", "yY", "tT"],
    "_": ["0)", null, null, "=+", "[{", "pP"],
    "`": [null, null, null, "1!", null, null],
    "a": [null, "qQ", "wW", "sS", "zZ", null],
    "b": ["vV", "gG", "hH", "nN", null, null],
    "c": ["xX", "dD", "fF", "vV", null, null],
    "d": ["sS", "eE", "rR", "fF", "cC", "xX"],
    "e": ["wW", "3#", "4$", "rR", "dD", "sS"],
    "f": ["dD", "rR", "tT", "gG", "vV", "cC"],
    "g": ["fF", "tT", "yY", "hH", "bB", "vV"],
    "h": ["gG", "yY", "uU", "jJ", "nN", "bB"],
    "i": ["uU", "8*", "9(", "oO", "kK", "jJ"],
    "j": ["hH", "uU", "iI", "kK", "mM", "nN"],
    "k": ["jJ", "iI", "oO", "lL", ",<", "mM"],
    "l": ["kK", "oO", "pP", ";:", ".>", ",<"],
    "m": ["nN", "jJ", "kK", ",<", null, null],
    "n": ["bB", "hH", "jJ", "mM", null, null],
    "o": ["iI", "9(", "0)", "pP", "lL", "kK"],
    "p": ["oO", "0)", "-_", "[{", ";:", "lL"],
    "q": [null, "1!", "2@", "wW", "aA", null],
    "r": ["eE", "4$", "5%", "tT", "fF", "dD"],
    "s": ["aA", "wW", "eE", "dD", "xX", "zZ"],
    "t": ["rR", "5%", "6^", "yY", "gG", "fF"],
    "u": ["yY", "7&", "8*", "iI", "jJ", "hH"],
    "v": ["cC", "fF", "gG", "bB", null, null],
    "w": ["qQ", "2@", "3#", "eE", "sS", "aA"],
    "x": ["zZ", "sS", "dD", "cC", null, null],
    "y": ["tT", "6^", "7&", "uU", "hH", "gG"],
    "z": [null, "aA", "sS", "xX", null, null],
    "{": ["pP", "-_", "=+", "]}", "'\"", ";:"],
    "|": ["]}", null, null, null, null, null],
    "}": ["[{", "=+", null, "\\|", null, "'\""],
    "~": [null, null, null, "1!", null, null]
  },
  dvorak: {
    "!": ["`~", null, null, "2@", "'\"", null],
    "\"": [null, "1!", "2@", ",<", "aA", null],
    "#": ["2@", null, null, "4$", ".>", ",<"],
    "$": ["3#", null, null, "5%", "pP", ".>"],
    "%": ["4$", null, null, "6^", "yY", "pP"],
    "&": ["6^", null, null, "8*", "gG", "fF"],
    "'": [null, "1!", "2@", ",<", "aA", null],
    "(": ["8*", null, null, "0)", "rR", "cC"],
    ")": ["9(", null, null, "[{", "lL", "rR"],
    "*": ["7&", null, null, "9(", "cC", "gG"],
    "+": ["/?", "]}", null, "\\|", null, "-_"],
    ",": ["'\"", "2@", "3#", ".>", "oO", "aA"],
    "-": ["sS", "/?", "=+", null, null, "zZ"],
    ".": [",<", "3#", "4$", "pP", "eE", "oO"],
    "/": ["lL", "[{", "]}", "=+", "-_", "sS"],
    "0": ["9(", null, null, "[{", "lL", "rR"],
    "1": ["`~", null, null, "2@", "'\"", null],
    "2": ["1!", null, null, "3#", ",<", "'\""],
    "3": ["2@", null, null, "4$", ".>", ",<"],
    "4": ["3#", null, null, "5%", "pP", ".>"],
    "5": ["4$", null, null, "6^", "yY", "pP"],
    "6": ["5%", null, null, "7&", "fF", "yY"],
    "7": ["6^", null, null, "8*", "gG", "fF"],
    "8": ["7&", null, null, "9(", "cC", "gG"],
    "9": ["8*", null, null, "0)", "rR", "cC"],
    ":": [null, "aA", "oO", "qQ", null, null],
    ";": [null, "aA", "oO", "qQ", null, null],
    "<": ["'\"", "2@", "3#", ".>", "oO", "aA"],
    "=": ["/?", "]}", null, "\\|", null, "-_"],
    ">": [",<", "3#", "4$", "pP", "eE", "oO"],
    "?": ["lL", "[{", "]}", "=+", "-_", "sS"],
    "@": ["1!", null, null, "3#", ",<", "'\""],
    "A": [null, "'\"", ",<", "oO", ";:", null],
    "B": ["xX", "dD", "hH", "mM", null, null],
    "C": ["gG", "8*", "9(", "rR", "tT", "hH"],
    "D": ["iI", "fF", "gG", "hH", "bB", "xX"],
    "E": ["oO", ".>", "pP", "uU", "jJ", "qQ"],
    "F": ["yY", "6^", "7&", "gG", "dD", "iI"],
    "G": ["fF", "7&", "8*", "cC", "hH", "dD"],
    "H": ["dD", "gG", "cC", "tT", "mM", "bB"],
    "I": ["uU", "yY", "fF", "dD", "xX", "kK"],
    "J": ["qQ", "eE", "uU", "kK", null, null],
    "K": ["jJ", "uU", "iI", "xX", null, null],
    "L": ["rR", "0)", "[{", "/?", "sS", "nN"],
    "M": ["bB", "hH", "tT", "wW", null, null],
    "N": ["tT", "rR", "lL", "sS", "vV", "wW"],
    "O": ["aA", ",<", ".>", "eE", "qQ", ";:"],
    "P": [".>", "4$", "5%", "yY", "uU", "eE"],
    "Q": [";:", "oO", "eE", "jJ", null, null],
    "R": ["cC", "9(", "0)", "lL", "nN", "tT"],
    "S": ["nN", "lL", "/?", "-_", "zZ", "vV"],
    "T": ["hH", "cC", "rR", "nN", "wW", "mM"],
    "U": ["eE", "pP", "yY", "iI", "kK", "jJ"],
    "V": ["wW", "nN", "sS", "zZ", null, null],
    "W": ["mM", "tT", "nN", "vV", null, null],
    "X": ["kK", "iI", "dD", "bB", null, null],
    "Y": ["pP", "5%", "6^", "fF", "iI", "uU"],
    "Z": ["vV", "sS", "-_", null, null, null],
    "[": ["0)", null, null, "]}", "/?", "lL"],
    "\\": ["=+", null, null, null, null, null],
    "]": ["[{", null, null, null, "=+", "/?"],
    "^": ["5%", null, null, "7&", "fF", "yY"],
    "_": ["sS", "/?", "=+", null, null, "zZ"],
    "`": [null, null, null, "1!", null, null],
    "a": [null, "'\"", ",<", "oO", ";:", null],
    "b": ["xX", "dD", "hH", "mM", null, null],
    "c": ["gG", "8*", "9(", "rR", "tT", "hH"],
    "d": ["iI", "fF", "gG", "hH", "bB", "xX"],
    "e": ["oO", ".>", "pP", "uU", "jJ", "qQ"],
    "f": ["yY", "6^", "7&", "gG", "dD", "iI"],
    "g": ["fF", "7&", "8*", "cC", "hH", "dD"],
    "h": ["dD", "gG", "cC", "tT", "mM", "bB"],
    "i": ["uU", "yY", "fF", "dD", "xX", "kK"],
    "j": ["qQ", "eE", "uU", "kK", null, null],
    "k": ["jJ", "uU", "iI", "xX", null, null],
    "l": ["rR", "0)", "[{", "/?", "sS", "nN"],
    "m": ["bB", "hH", "tT", "wW", null, null],
    "n": ["tT", "rR", "lL", "sS", "vV", "wW"],
    "o": ["aA", ",<", ".>", "eE", "qQ", ";:"],
    "p": [".>", "4$", "5%", "yY", "uU", "eE"],
    "q": [";:", "oO", "eE", "jJ", null, null],
    "r": ["cC", "9(", "0)", "lL", "nN", "tT"],
    "s": ["nN", "lL", "/?", "-_", "zZ", "vV"],
    "t": ["hH", "cC", "rR", "nN", "wW", "mM"],
    "u": ["eE", "pP", "yY", "iI", "kK", "jJ"],
    "v": ["wW", "nN", "sS", "zZ", null, null],
    "w": ["mM", "tT", "nN", "vV", null, null],
    "x": ["kK", "iI", "dD", "bB", null, null],
    "y": ["pP", "5%", "6^", "fF", "iI", "uU"],
    "z": ["vV", "sS", "-_", null, null, null],
    "{": ["0)", null, null, "]}", "/?", "lL"],
    "|": ["=+", null, null, null, null, null],
    "}": ["[{", null, null, null, "=+", "/?"],
    "~": [null, null, null, "1!", null, null]
  },
  keypad: {
    "*": ["/", null, null, null, "-", "+", "9", "8"],
    "+": ["9", "*", "-", null, null, null, null, "6"],
    "-": ["*", null, null, null, null, null, "+", "9"],
    ".": ["0", "2", "3", null, null, null, null, null],
    "/": [null, null, null, null, "*", "9", "8", "7"],
    "0": [null, "1", "2", "3", ".", null, null, null],
    "1": [null, null, "4", "5", "2", "0", null, null],
    "2": ["1", "4", "5", "6", "3", ".", "0", null],
    "3": ["2", "5", "6", null, null, null, ".", "0"],
    "4": [null, null, "7", "8", "5", "2", "1", null],
    "5": ["4", "7", "8", "9", "6", "3", "2", "1"],
    "6": ["5", "8", "9", "+", null, null, "3", "2"],
    "7": [null, null, null, "/", "8", "5", "4", null],
    "8": ["7", null, "/", "*", "9", "6", "5", "4"],
    "9": ["8", "/", "*", "-", "+", null, "6", "5"]
  },
  mac_keypad: {
    "*": ["/", null, null, null, null, null, "-", "9"],
    "+": ["6", "9", "-", null, null, null, null, "3"],
    "-": ["9", "/", "*", null, null, null, "+", "6"],
    ".": ["0", "2", "3", null, null, null, null, null],
    "/": ["=", null, null, null, "*", "-", "9", "8"],
    "0": [null, "1", "2", "3", ".", null, null, null],
    "1": [null, null, "4", "5", "2", "0", null, null],
    "2": ["1", "4", "5", "6", "3", ".", "0", null],
    "3": ["2", "5", "6", "+", null, null, ".", "0"],
    "4": [null, null, "7", "8", "5", "2", "1", null],
    "5": ["4", "7", "8", "9", "6", "3", "2", "1"],
    "6": ["5", "8", "9", "-", "+", null, "3", "2"],
    "7": [null, null, null, "=", "8", "5", "4", null],
    "8": ["7", null, "=", "/", "9", "6", "5", "4"],
    "9": ["8", "=", "/", "*", "-", "+", "6", "5"],
    "=": [null, null, null, null, "/", "9", "8", "7"]
  }
};

var adjacency_graphs_1 = adjacency_graphs;

var BRUTEFORCE_CARDINALITY, MIN_GUESSES_BEFORE_GROWING_SEQUENCE, MIN_SUBMATCH_GUESSES_MULTI_CHAR, MIN_SUBMATCH_GUESSES_SINGLE_CHAR, adjacency_graphs$1, calc_average_degree, k, scoring, v;

adjacency_graphs$1 = adjacency_graphs_1;

calc_average_degree = function (graph) {
  var average, k, key, n, neighbors, v;
  average = 0;
  for (key in graph) {
    neighbors = graph[key];
    average += function () {
      var len, o, results;
      results = [];
      for (o = 0, len = neighbors.length; o < len; o++) {
        n = neighbors[o];
        if (n) {
          results.push(n);
        }
      }
      return results;
    }().length;
  }
  average /= function () {
    var results;
    results = [];
    for (k in graph) {
      v = graph[k];
      results.push(k);
    }
    return results;
  }().length;
  return average;
};

BRUTEFORCE_CARDINALITY = 10;

MIN_GUESSES_BEFORE_GROWING_SEQUENCE = 10000;

MIN_SUBMATCH_GUESSES_SINGLE_CHAR = 10;

MIN_SUBMATCH_GUESSES_MULTI_CHAR = 50;

scoring = {
  nCk: function (n, k) {
    var d, o, r, ref;
    if (k > n) {
      return 0;
    }
    if (k === 0) {
      return 1;
    }
    r = 1;
    for (d = o = 1, ref = k; 1 <= ref ? o <= ref : o >= ref; d = 1 <= ref ? ++o : --o) {
      r *= n;
      r /= d;
      n -= 1;
    }
    return r;
  },
  log10: function (n) {
    return Math.log(n) / Math.log(10);
  },
  log2: function (n) {
    return Math.log(n) / Math.log(2);
  },
  factorial: function (n) {
    var f, i, o, ref;
    if (n < 2) {
      return 1;
    }
    f = 1;
    for (i = o = 2, ref = n; 2 <= ref ? o <= ref : o >= ref; i = 2 <= ref ? ++o : --o) {
      f *= i;
    }
    return f;
  },
  most_guessable_match_sequence: function (password, matches, _exclude_additive) {
    var _, bruteforce_update, guesses, k, l, len, len1, len2, lst, m, make_bruteforce_match, matches_by_j, n, o, optimal, optimal_l, optimal_match_sequence, q, ref, ref1, u, unwind, update, w;
    if (_exclude_additive == null) {
      _exclude_additive = false;
    }
    n = password.length;
    matches_by_j = function () {
      var o, ref, results;
      results = [];
      for (_ = o = 0, ref = n; 0 <= ref ? o < ref : o > ref; _ = 0 <= ref ? ++o : --o) {
        results.push([]);
      }
      return results;
    }();
    for (o = 0, len = matches.length; o < len; o++) {
      m = matches[o];
      matches_by_j[m.j].push(m);
    }
    for (q = 0, len1 = matches_by_j.length; q < len1; q++) {
      lst = matches_by_j[q];
      lst.sort(function (m1, m2) {
        return m1.i - m2.i;
      });
    }
    optimal = {
      m: function () {
        var ref, results, u;
        results = [];
        for (_ = u = 0, ref = n; 0 <= ref ? u < ref : u > ref; _ = 0 <= ref ? ++u : --u) {
          results.push({});
        }
        return results;
      }(),
      pi: function () {
        var ref, results, u;
        results = [];
        for (_ = u = 0, ref = n; 0 <= ref ? u < ref : u > ref; _ = 0 <= ref ? ++u : --u) {
          results.push({});
        }
        return results;
      }(),
      g: function () {
        var ref, results, u;
        results = [];
        for (_ = u = 0, ref = n; 0 <= ref ? u < ref : u > ref; _ = 0 <= ref ? ++u : --u) {
          results.push({});
        }
        return results;
      }()
    };
    update = function (_this) {
      return function (m, l) {
        var competing_g, competing_l, g, k, pi, ref;
        k = m.j;
        pi = _this.estimate_guesses(m, password);
        if (l > 1) {
          pi *= optimal.pi[m.i - 1][l - 1];
        }
        g = _this.factorial(l) * pi;
        if (!_exclude_additive) {
          g += Math.pow(MIN_GUESSES_BEFORE_GROWING_SEQUENCE, l - 1);
        }
        ref = optimal.g[k];
        for (competing_l in ref) {
          competing_g = ref[competing_l];
          if (competing_l > l) {
            continue;
          }
          if (competing_g <= g) {
            return;
          }
        }
        optimal.g[k][l] = g;
        optimal.m[k][l] = m;
        return optimal.pi[k][l] = pi;
      };
    }(this);
    bruteforce_update = function (_this) {
      return function (k) {
        var i, l, last_m, ref, results, u;
        m = make_bruteforce_match(0, k);
        update(m, 1);
        results = [];
        for (i = u = 1, ref = k; 1 <= ref ? u <= ref : u >= ref; i = 1 <= ref ? ++u : --u) {
          m = make_bruteforce_match(i, k);
          results.push(function () {
            var ref1, results1;
            ref1 = optimal.m[i - 1];
            results1 = [];
            for (l in ref1) {
              last_m = ref1[l];
              l = parseInt(l);
              if (last_m.pattern === 'bruteforce') {
                continue;
              }
              results1.push(update(m, l + 1));
            }
            return results1;
          }());
        }
        return results;
      };
    }(this);
    make_bruteforce_match = function (_this) {
      return function (i, j) {
        return {
          pattern: 'bruteforce',
          token: password.slice(i, +j + 1 || 9e9),
          i: i,
          j: j
        };
      };
    }(this);
    unwind = function (_this) {
      return function (n) {
        var candidate_g, candidate_l, g, k, l, optimal_match_sequence, ref;
        optimal_match_sequence = [];
        k = n - 1;
        l = void 0;
        g = 2e308;
        ref = optimal.g[k];
        for (candidate_l in ref) {
          candidate_g = ref[candidate_l];
          if (candidate_g < g) {
            l = candidate_l;
            g = candidate_g;
          }
        }
        while (k >= 0) {
          m = optimal.m[k][l];
          optimal_match_sequence.unshift(m);
          k = m.i - 1;
          l--;
        }
        return optimal_match_sequence;
      };
    }(this);
    for (k = u = 0, ref = n; 0 <= ref ? u < ref : u > ref; k = 0 <= ref ? ++u : --u) {
      ref1 = matches_by_j[k];
      for (w = 0, len2 = ref1.length; w < len2; w++) {
        m = ref1[w];
        if (m.i > 0) {
          for (l in optimal.m[m.i - 1]) {
            l = parseInt(l);
            update(m, l + 1);
          }
        } else {
          update(m, 1);
        }
      }
      bruteforce_update(k);
    }
    optimal_match_sequence = unwind(n);
    optimal_l = optimal_match_sequence.length;
    if (password.length === 0) {
      guesses = 1;
    } else {
      guesses = optimal.g[n - 1][optimal_l];
    }
    return {
      password: password,
      guesses: guesses,
      guesses_log10: this.log10(guesses),
      sequence: optimal_match_sequence
    };
  },
  estimate_guesses: function (match, password) {
    var estimation_functions, guesses, min_guesses;
    if (match.guesses != null) {
      return match.guesses;
    }
    min_guesses = 1;
    if (match.token.length < password.length) {
      min_guesses = match.token.length === 1 ? MIN_SUBMATCH_GUESSES_SINGLE_CHAR : MIN_SUBMATCH_GUESSES_MULTI_CHAR;
    }
    estimation_functions = {
      bruteforce: this.bruteforce_guesses,
      dictionary: this.dictionary_guesses,
      spatial: this.spatial_guesses,
      repeat: this.repeat_guesses,
      sequence: this.sequence_guesses,
      regex: this.regex_guesses,
      date: this.date_guesses
    };
    guesses = estimation_functions[match.pattern].call(this, match);
    match.guesses = Math.max(guesses, min_guesses);
    match.guesses_log10 = this.log10(match.guesses);
    return match.guesses;
  },
  bruteforce_guesses: function (match) {
    var guesses, min_guesses;
    guesses = Math.pow(BRUTEFORCE_CARDINALITY, match.token.length);
    if (guesses === Number.POSITIVE_INFINITY) {
      guesses = Number.MAX_VALUE;
    }
    min_guesses = match.token.length === 1 ? MIN_SUBMATCH_GUESSES_SINGLE_CHAR + 1 : MIN_SUBMATCH_GUESSES_MULTI_CHAR + 1;
    return Math.max(guesses, min_guesses);
  },
  repeat_guesses: function (match) {
    return match.base_guesses * match.repeat_count;
  },
  sequence_guesses: function (match) {
    var base_guesses, first_chr;
    first_chr = match.token.charAt(0);
    if (first_chr === 'a' || first_chr === 'A' || first_chr === 'z' || first_chr === 'Z' || first_chr === '0' || first_chr === '1' || first_chr === '9') {
      base_guesses = 4;
    } else {
      if (first_chr.match(/\d/)) {
        base_guesses = 10;
      } else {
        base_guesses = 26;
      }
    }
    if (!match.ascending) {
      base_guesses *= 2;
    }
    return base_guesses * match.token.length;
  },
  MIN_YEAR_SPACE: 20,
  REFERENCE_YEAR: new Date().getFullYear(),
  regex_guesses: function (match) {
    var char_class_bases, year_space;
    char_class_bases = {
      alpha_lower: 26,
      alpha_upper: 26,
      alpha: 52,
      alphanumeric: 62,
      digits: 10,
      symbols: 33
    };
    if (match.regex_name in char_class_bases) {
      return Math.pow(char_class_bases[match.regex_name], match.token.length);
    } else {
      switch (match.regex_name) {
        case 'recent_year':
          year_space = Math.abs(parseInt(match.regex_match[0]) - this.REFERENCE_YEAR);
          year_space = Math.max(year_space, this.MIN_YEAR_SPACE);
          return year_space;
      }
    }
  },
  date_guesses: function (match) {
    var guesses, year_space;
    year_space = Math.max(Math.abs(match.year - this.REFERENCE_YEAR), this.MIN_YEAR_SPACE);
    guesses = year_space * 365;
    if (match.separator) {
      guesses *= 4;
    }
    return guesses;
  },
  KEYBOARD_AVERAGE_DEGREE: calc_average_degree(adjacency_graphs$1.qwerty),
  KEYPAD_AVERAGE_DEGREE: calc_average_degree(adjacency_graphs$1.keypad),
  KEYBOARD_STARTING_POSITIONS: function () {
    var ref, results;
    ref = adjacency_graphs$1.qwerty;
    results = [];
    for (k in ref) {
      v = ref[k];
      results.push(k);
    }
    return results;
  }().length,
  KEYPAD_STARTING_POSITIONS: function () {
    var ref, results;
    ref = adjacency_graphs$1.keypad;
    results = [];
    for (k in ref) {
      v = ref[k];
      results.push(k);
    }
    return results;
  }().length,
  spatial_guesses: function (match) {
    var L, S, U, d, guesses, i, j, o, possible_turns, q, ref, ref1, ref2, ref3, s, shifted_variations, t, u;
    if ((ref = match.graph) === 'qwerty' || ref === 'dvorak') {
      s = this.KEYBOARD_STARTING_POSITIONS;
      d = this.KEYBOARD_AVERAGE_DEGREE;
    } else {
      s = this.KEYPAD_STARTING_POSITIONS;
      d = this.KEYPAD_AVERAGE_DEGREE;
    }
    guesses = 0;
    L = match.token.length;
    t = match.turns;
    for (i = o = 2, ref1 = L; 2 <= ref1 ? o <= ref1 : o >= ref1; i = 2 <= ref1 ? ++o : --o) {
      possible_turns = Math.min(t, i - 1);
      for (j = q = 1, ref2 = possible_turns; 1 <= ref2 ? q <= ref2 : q >= ref2; j = 1 <= ref2 ? ++q : --q) {
        guesses += this.nCk(i - 1, j - 1) * s * Math.pow(d, j);
      }
    }
    if (match.shifted_count) {
      S = match.shifted_count;
      U = match.token.length - match.shifted_count;
      if (S === 0 || U === 0) {
        guesses *= 2;
      } else {
        shifted_variations = 0;
        for (i = u = 1, ref3 = Math.min(S, U); 1 <= ref3 ? u <= ref3 : u >= ref3; i = 1 <= ref3 ? ++u : --u) {
          shifted_variations += this.nCk(S + U, i);
        }
        guesses *= shifted_variations;
      }
    }
    return guesses;
  },
  dictionary_guesses: function (match) {
    var reversed_variations;
    match.base_guesses = match.rank;
    match.uppercase_variations = this.uppercase_variations(match);
    match.l33t_variations = this.l33t_variations(match);
    reversed_variations = match.reversed && 2 || 1;
    return match.base_guesses * match.uppercase_variations * match.l33t_variations * reversed_variations;
  },
  START_UPPER: /^[A-Z][^A-Z]+$/,
  END_UPPER: /^[^A-Z]+[A-Z]$/,
  ALL_UPPER: /^[^a-z]+$/,
  ALL_LOWER: /^[^A-Z]+$/,
  uppercase_variations: function (match) {
    var L, U, chr, i, len, o, q, ref, ref1, regex, variations, word;
    word = match.token;
    if (word.match(this.ALL_LOWER) || word.toLowerCase() === word) {
      return 1;
    }
    ref = [this.START_UPPER, this.END_UPPER, this.ALL_UPPER];
    for (o = 0, len = ref.length; o < len; o++) {
      regex = ref[o];
      if (word.match(regex)) {
        return 2;
      }
    }
    U = function () {
      var len1, q, ref1, results;
      ref1 = word.split('');
      results = [];
      for (q = 0, len1 = ref1.length; q < len1; q++) {
        chr = ref1[q];
        if (chr.match(/[A-Z]/)) {
          results.push(chr);
        }
      }
      return results;
    }().length;
    L = function () {
      var len1, q, ref1, results;
      ref1 = word.split('');
      results = [];
      for (q = 0, len1 = ref1.length; q < len1; q++) {
        chr = ref1[q];
        if (chr.match(/[a-z]/)) {
          results.push(chr);
        }
      }
      return results;
    }().length;
    variations = 0;
    for (i = q = 1, ref1 = Math.min(U, L); 1 <= ref1 ? q <= ref1 : q >= ref1; i = 1 <= ref1 ? ++q : --q) {
      variations += this.nCk(U + L, i);
    }
    return variations;
  },
  l33t_variations: function (match) {
    var S, U, chr, chrs, i, o, p, possibilities, ref, ref1, subbed, unsubbed, variations;
    if (!match.l33t) {
      return 1;
    }
    variations = 1;
    ref = match.sub;
    for (subbed in ref) {
      unsubbed = ref[subbed];
      chrs = match.token.toLowerCase().split('');
      S = function () {
        var len, o, results;
        results = [];
        for (o = 0, len = chrs.length; o < len; o++) {
          chr = chrs[o];
          if (chr === subbed) {
            results.push(chr);
          }
        }
        return results;
      }().length;
      U = function () {
        var len, o, results;
        results = [];
        for (o = 0, len = chrs.length; o < len; o++) {
          chr = chrs[o];
          if (chr === unsubbed) {
            results.push(chr);
          }
        }
        return results;
      }().length;
      if (S === 0 || U === 0) {
        variations *= 2;
      } else {
        p = Math.min(U, S);
        possibilities = 0;
        for (i = o = 1, ref1 = p; 1 <= ref1 ? o <= ref1 : o >= ref1; i = 1 <= ref1 ? ++o : --o) {
          possibilities += this.nCk(U + S, i);
        }
        variations *= possibilities;
      }
    }
    return variations;
  }
};

var scoring_1 = scoring;

var DATE_MAX_YEAR, DATE_MIN_YEAR, DATE_SPLITS, GRAPHS, L33T_TABLE, RANKED_DICTIONARIES, REGEXEN, adjacency_graphs$2, build_ranked_dict, frequency_lists$1, lst, matching, name, scoring$1;

frequency_lists$1 = frequency_lists_1;

adjacency_graphs$2 = adjacency_graphs_1;

scoring$1 = scoring_1;

build_ranked_dict = function (ordered_list) {
  var i, len1, o, result, word;
  result = {};
  i = 1;
  for (o = 0, len1 = ordered_list.length; o < len1; o++) {
    word = ordered_list[o];
    result[word] = i;
    i += 1;
  }
  return result;
};

RANKED_DICTIONARIES = {};

for (name in frequency_lists$1) {
  lst = frequency_lists$1[name];
  RANKED_DICTIONARIES[name] = build_ranked_dict(lst);
}

GRAPHS = {
  qwerty: adjacency_graphs$2.qwerty,
  dvorak: adjacency_graphs$2.dvorak,
  keypad: adjacency_graphs$2.keypad,
  mac_keypad: adjacency_graphs$2.mac_keypad
};

L33T_TABLE = {
  a: ['4', '@'],
  b: ['8'],
  c: ['(', '{', '[', '<'],
  e: ['3'],
  g: ['6', '9'],
  i: ['1', '!', '|'],
  l: ['1', '|', '7'],
  o: ['0'],
  s: ['$', '5'],
  t: ['+', '7'],
  x: ['%'],
  z: ['2']
};

REGEXEN = {
  recent_year: /19\d\d|200\d|201\d/g
};

DATE_MAX_YEAR = 2050;

DATE_MIN_YEAR = 1000;

DATE_SPLITS = {
  4: [[1, 2], [2, 3]],
  5: [[1, 3], [2, 3]],
  6: [[1, 2], [2, 4], [4, 5]],
  7: [[1, 3], [2, 3], [4, 5], [4, 6]],
  8: [[2, 4], [4, 6]]
};

matching = {
  empty: function (obj) {
    var k;
    return function () {
      var results;
      results = [];
      for (k in obj) {
        results.push(k);
      }
      return results;
    }().length === 0;
  },
  extend: function (lst, lst2) {
    return lst.push.apply(lst, lst2);
  },
  translate: function (string, chr_map) {
    var chr;
    return function () {
      var len1, o, ref, results;
      ref = string.split('');
      results = [];
      for (o = 0, len1 = ref.length; o < len1; o++) {
        chr = ref[o];
        results.push(chr_map[chr] || chr);
      }
      return results;
    }().join('');
  },
  mod: function (n, m) {
    return (n % m + m) % m;
  },
  sorted: function (matches) {
    return matches.sort(function (m1, m2) {
      return m1.i - m2.i || m1.j - m2.j;
    });
  },
  omnimatch: function (password) {
    var len1, matcher, matchers, matches, o;
    matches = [];
    matchers = [this.dictionary_match, this.reverse_dictionary_match, this.l33t_match, this.spatial_match, this.repeat_match, this.sequence_match, this.regex_match, this.date_match];
    for (o = 0, len1 = matchers.length; o < len1; o++) {
      matcher = matchers[o];
      this.extend(matches, matcher.call(this, password));
    }
    return this.sorted(matches);
  },
  dictionary_match: function (password, _ranked_dictionaries) {
    var dictionary_name, i, j, len, matches, o, p, password_lower, rank, ranked_dict, ref, ref1, ref2, word;
    if (_ranked_dictionaries == null) {
      _ranked_dictionaries = RANKED_DICTIONARIES;
    }
    matches = [];
    len = password.length;
    password_lower = password.toLowerCase();
    for (dictionary_name in _ranked_dictionaries) {
      ranked_dict = _ranked_dictionaries[dictionary_name];
      for (i = o = 0, ref = len; 0 <= ref ? o < ref : o > ref; i = 0 <= ref ? ++o : --o) {
        for (j = p = ref1 = i, ref2 = len; ref1 <= ref2 ? p < ref2 : p > ref2; j = ref1 <= ref2 ? ++p : --p) {
          if (password_lower.slice(i, +j + 1 || 9e9) in ranked_dict) {
            word = password_lower.slice(i, +j + 1 || 9e9);
            rank = ranked_dict[word];
            matches.push({
              pattern: 'dictionary',
              i: i,
              j: j,
              token: password.slice(i, +j + 1 || 9e9),
              matched_word: word,
              rank: rank,
              dictionary_name: dictionary_name,
              reversed: false,
              l33t: false
            });
          }
        }
      }
    }
    return this.sorted(matches);
  },
  reverse_dictionary_match: function (password, _ranked_dictionaries) {
    var len1, match, matches, o, ref, reversed_password;
    if (_ranked_dictionaries == null) {
      _ranked_dictionaries = RANKED_DICTIONARIES;
    }
    reversed_password = password.split('').reverse().join('');
    matches = this.dictionary_match(reversed_password, _ranked_dictionaries);
    for (o = 0, len1 = matches.length; o < len1; o++) {
      match = matches[o];
      match.token = match.token.split('').reverse().join('');
      match.reversed = true;
      ref = [password.length - 1 - match.j, password.length - 1 - match.i], match.i = ref[0], match.j = ref[1];
    }
    return this.sorted(matches);
  },
  set_user_input_dictionary: function (ordered_list) {
    return RANKED_DICTIONARIES['user_inputs'] = build_ranked_dict(ordered_list.slice());
  },
  relevant_l33t_subtable: function (password, table) {
    var chr, len1, letter, o, password_chars, ref, relevant_subs, sub, subs, subtable;
    password_chars = {};
    ref = password.split('');
    for (o = 0, len1 = ref.length; o < len1; o++) {
      chr = ref[o];
      password_chars[chr] = true;
    }
    subtable = {};
    for (letter in table) {
      subs = table[letter];
      relevant_subs = function () {
        var len2, p, results;
        results = [];
        for (p = 0, len2 = subs.length; p < len2; p++) {
          sub = subs[p];
          if (sub in password_chars) {
            results.push(sub);
          }
        }
        return results;
      }();
      if (relevant_subs.length > 0) {
        subtable[letter] = relevant_subs;
      }
    }
    return subtable;
  },
  enumerate_l33t_subs: function (table) {
    var chr, dedup, helper, k, keys, l33t_chr, len1, len2, o, p, ref, sub, sub_dict, sub_dicts, subs;
    keys = function () {
      var results;
      results = [];
      for (k in table) {
        results.push(k);
      }
      return results;
    }();
    subs = [[]];
    dedup = function (subs) {
      var assoc, deduped, label, len1, members, o, sub, v;
      deduped = [];
      members = {};
      for (o = 0, len1 = subs.length; o < len1; o++) {
        sub = subs[o];
        assoc = function () {
          var len2, p, results;
          results = [];
          for (v = p = 0, len2 = sub.length; p < len2; v = ++p) {
            k = sub[v];
            results.push([k, v]);
          }
          return results;
        }();
        assoc.sort();
        label = function () {
          var len2, p, results;
          results = [];
          for (v = p = 0, len2 = assoc.length; p < len2; v = ++p) {
            k = assoc[v];
            results.push(k + ',' + v);
          }
          return results;
        }().join('-');
        if (!(label in members)) {
          members[label] = true;
          deduped.push(sub);
        }
      }
      return deduped;
    };
    helper = function (keys) {
      var dup_l33t_index, first_key, i, l33t_chr, len1, len2, next_subs, o, p, q, ref, ref1, rest_keys, sub, sub_alternative, sub_extension;
      if (!keys.length) {
        return;
      }
      first_key = keys[0];
      rest_keys = keys.slice(1);
      next_subs = [];
      ref = table[first_key];
      for (o = 0, len1 = ref.length; o < len1; o++) {
        l33t_chr = ref[o];
        for (p = 0, len2 = subs.length; p < len2; p++) {
          sub = subs[p];
          dup_l33t_index = -1;
          for (i = q = 0, ref1 = sub.length; 0 <= ref1 ? q < ref1 : q > ref1; i = 0 <= ref1 ? ++q : --q) {
            if (sub[i][0] === l33t_chr) {
              dup_l33t_index = i;
              break;
            }
          }
          if (dup_l33t_index === -1) {
            sub_extension = sub.concat([[l33t_chr, first_key]]);
            next_subs.push(sub_extension);
          } else {
            sub_alternative = sub.slice(0);
            sub_alternative.splice(dup_l33t_index, 1);
            sub_alternative.push([l33t_chr, first_key]);
            next_subs.push(sub);
            next_subs.push(sub_alternative);
          }
        }
      }
      subs = dedup(next_subs);
      return helper(rest_keys);
    };
    helper(keys);
    sub_dicts = [];
    for (o = 0, len1 = subs.length; o < len1; o++) {
      sub = subs[o];
      sub_dict = {};
      for (p = 0, len2 = sub.length; p < len2; p++) {
        ref = sub[p], l33t_chr = ref[0], chr = ref[1];
        sub_dict[l33t_chr] = chr;
      }
      sub_dicts.push(sub_dict);
    }
    return sub_dicts;
  },
  l33t_match: function (password, _ranked_dictionaries, _l33t_table) {
    var chr, k, len1, len2, match, match_sub, matches, o, p, ref, ref1, sub, subbed_chr, subbed_password, token, v;
    if (_ranked_dictionaries == null) {
      _ranked_dictionaries = RANKED_DICTIONARIES;
    }
    if (_l33t_table == null) {
      _l33t_table = L33T_TABLE;
    }
    matches = [];
    ref = this.enumerate_l33t_subs(this.relevant_l33t_subtable(password, _l33t_table));
    for (o = 0, len1 = ref.length; o < len1; o++) {
      sub = ref[o];
      if (this.empty(sub)) {
        break;
      }
      subbed_password = this.translate(password, sub);
      ref1 = this.dictionary_match(subbed_password, _ranked_dictionaries);
      for (p = 0, len2 = ref1.length; p < len2; p++) {
        match = ref1[p];
        token = password.slice(match.i, +match.j + 1 || 9e9);
        if (token.toLowerCase() === match.matched_word) {
          continue;
        }
        match_sub = {};
        for (subbed_chr in sub) {
          chr = sub[subbed_chr];
          if (token.indexOf(subbed_chr) !== -1) {
            match_sub[subbed_chr] = chr;
          }
        }
        match.l33t = true;
        match.token = token;
        match.sub = match_sub;
        match.sub_display = function () {
          var results;
          results = [];
          for (k in match_sub) {
            v = match_sub[k];
            results.push(k + " -> " + v);
          }
          return results;
        }().join(', ');
        matches.push(match);
      }
    }
    return this.sorted(matches.filter(function (match) {
      return match.token.length > 1;
    }));
  },
  spatial_match: function (password, _graphs) {
    var graph, graph_name, matches;
    if (_graphs == null) {
      _graphs = GRAPHS;
    }
    matches = [];
    for (graph_name in _graphs) {
      graph = _graphs[graph_name];
      this.extend(matches, this.spatial_match_helper(password, graph, graph_name));
    }
    return this.sorted(matches);
  },
  SHIFTED_RX: /[~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?]/,
  spatial_match_helper: function (password, graph, graph_name) {
    var adj, adjacents, cur_char, cur_direction, found, found_direction, i, j, last_direction, len1, matches, o, prev_char, shifted_count, turns;
    matches = [];
    i = 0;
    while (i < password.length - 1) {
      j = i + 1;
      last_direction = null;
      turns = 0;
      if ((graph_name === 'qwerty' || graph_name === 'dvorak') && this.SHIFTED_RX.exec(password.charAt(i))) {
        shifted_count = 1;
      } else {
        shifted_count = 0;
      }
      while (true) {
        prev_char = password.charAt(j - 1);
        found = false;
        found_direction = -1;
        cur_direction = -1;
        adjacents = graph[prev_char] || [];
        if (j < password.length) {
          cur_char = password.charAt(j);
          for (o = 0, len1 = adjacents.length; o < len1; o++) {
            adj = adjacents[o];
            cur_direction += 1;
            if (adj && adj.indexOf(cur_char) !== -1) {
              found = true;
              found_direction = cur_direction;
              if (adj.indexOf(cur_char) === 1) {
                shifted_count += 1;
              }
              if (last_direction !== found_direction) {
                turns += 1;
                last_direction = found_direction;
              }
              break;
            }
          }
        }
        if (found) {
          j += 1;
        } else {
          if (j - i > 2) {
            matches.push({
              pattern: 'spatial',
              i: i,
              j: j - 1,
              token: password.slice(i, j),
              graph: graph_name,
              turns: turns,
              shifted_count: shifted_count
            });
          }
          i = j;
          break;
        }
      }
    }
    return matches;
  },
  repeat_match: function (password) {
    var base_analysis, base_guesses, base_matches, base_token, greedy, greedy_match, i, j, lastIndex, lazy, lazy_anchored, lazy_match, match, matches, ref;
    matches = [];
    greedy = /(.+)\1+/g;
    lazy = /(.+?)\1+/g;
    lazy_anchored = /^(.+?)\1+$/;
    lastIndex = 0;
    while (lastIndex < password.length) {
      greedy.lastIndex = lazy.lastIndex = lastIndex;
      greedy_match = greedy.exec(password);
      lazy_match = lazy.exec(password);
      if (greedy_match == null) {
        break;
      }
      if (greedy_match[0].length > lazy_match[0].length) {
        match = greedy_match;
        base_token = lazy_anchored.exec(match[0])[1];
      } else {
        match = lazy_match;
        base_token = match[1];
      }
      ref = [match.index, match.index + match[0].length - 1], i = ref[0], j = ref[1];
      base_analysis = scoring$1.most_guessable_match_sequence(base_token, this.omnimatch(base_token));
      base_matches = base_analysis.sequence;
      base_guesses = base_analysis.guesses;
      matches.push({
        pattern: 'repeat',
        i: i,
        j: j,
        token: match[0],
        base_token: base_token,
        base_guesses: base_guesses,
        base_matches: base_matches,
        repeat_count: match[0].length / base_token.length
      });
      lastIndex = j + 1;
    }
    return matches;
  },
  MAX_DELTA: 5,
  sequence_match: function (password) {
    var delta, i, j, k, last_delta, o, ref, result, update;
    if (password.length === 1) {
      return [];
    }
    update = function (_this) {
      return function (i, j, delta) {
        var ref, sequence_name, sequence_space, token;
        if (j - i > 1 || Math.abs(delta) === 1) {
          if (0 < (ref = Math.abs(delta)) && ref <= _this.MAX_DELTA) {
            token = password.slice(i, +j + 1 || 9e9);
            if (/^[a-z]+$/.test(token)) {
              sequence_name = 'lower';
              sequence_space = 26;
            } else if (/^[A-Z]+$/.test(token)) {
              sequence_name = 'upper';
              sequence_space = 26;
            } else if (/^\d+$/.test(token)) {
              sequence_name = 'digits';
              sequence_space = 10;
            } else {
              sequence_name = 'unicode';
              sequence_space = 26;
            }
            return result.push({
              pattern: 'sequence',
              i: i,
              j: j,
              token: password.slice(i, +j + 1 || 9e9),
              sequence_name: sequence_name,
              sequence_space: sequence_space,
              ascending: delta > 0
            });
          }
        }
      };
    }(this);
    result = [];
    i = 0;
    last_delta = null;
    for (k = o = 1, ref = password.length; 1 <= ref ? o < ref : o > ref; k = 1 <= ref ? ++o : --o) {
      delta = password.charCodeAt(k) - password.charCodeAt(k - 1);
      if (last_delta == null) {
        last_delta = delta;
      }
      if (delta === last_delta) {
        continue;
      }
      j = k - 1;
      update(i, j, last_delta);
      i = j;
      last_delta = delta;
    }
    update(i, password.length - 1, last_delta);
    return result;
  },
  regex_match: function (password, _regexen) {
    var matches, regex, rx_match, token;
    if (_regexen == null) {
      _regexen = REGEXEN;
    }
    matches = [];
    for (name in _regexen) {
      regex = _regexen[name];
      regex.lastIndex = 0;
      while (rx_match = regex.exec(password)) {
        token = rx_match[0];
        matches.push({
          pattern: 'regex',
          token: token,
          i: rx_match.index,
          j: rx_match.index + rx_match[0].length - 1,
          regex_name: name,
          regex_match: rx_match
        });
      }
    }
    return this.sorted(matches);
  },
  date_match: function (password) {
    var best_candidate, candidate, candidates, distance, dmy, i, j, k, l, len1, len2, matches, maybe_date_no_separator, maybe_date_with_separator, metric, min_distance, o, p, q, r, ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, rx_match, s, t, token;
    matches = [];
    maybe_date_no_separator = /^\d{4,8}$/;
    maybe_date_with_separator = /^(\d{1,4})([\s\/\\_.-])(\d{1,2})\2(\d{1,4})$/;
    for (i = o = 0, ref = password.length - 4; 0 <= ref ? o <= ref : o >= ref; i = 0 <= ref ? ++o : --o) {
      for (j = p = ref1 = i + 3, ref2 = i + 7; ref1 <= ref2 ? p <= ref2 : p >= ref2; j = ref1 <= ref2 ? ++p : --p) {
        if (j >= password.length) {
          break;
        }
        token = password.slice(i, +j + 1 || 9e9);
        if (!maybe_date_no_separator.exec(token)) {
          continue;
        }
        candidates = [];
        ref3 = DATE_SPLITS[token.length];
        for (q = 0, len1 = ref3.length; q < len1; q++) {
          ref4 = ref3[q], k = ref4[0], l = ref4[1];
          dmy = this.map_ints_to_dmy([parseInt(token.slice(0, k)), parseInt(token.slice(k, l)), parseInt(token.slice(l))]);
          if (dmy != null) {
            candidates.push(dmy);
          }
        }
        if (!(candidates.length > 0)) {
          continue;
        }
        best_candidate = candidates[0];
        metric = function (candidate) {
          return Math.abs(candidate.year - scoring$1.REFERENCE_YEAR);
        };
        min_distance = metric(candidates[0]);
        ref5 = candidates.slice(1);
        for (r = 0, len2 = ref5.length; r < len2; r++) {
          candidate = ref5[r];
          distance = metric(candidate);
          if (distance < min_distance) {
            ref6 = [candidate, distance], best_candidate = ref6[0], min_distance = ref6[1];
          }
        }
        matches.push({
          pattern: 'date',
          token: token,
          i: i,
          j: j,
          separator: '',
          year: best_candidate.year,
          month: best_candidate.month,
          day: best_candidate.day
        });
      }
    }
    for (i = s = 0, ref7 = password.length - 6; 0 <= ref7 ? s <= ref7 : s >= ref7; i = 0 <= ref7 ? ++s : --s) {
      for (j = t = ref8 = i + 5, ref9 = i + 9; ref8 <= ref9 ? t <= ref9 : t >= ref9; j = ref8 <= ref9 ? ++t : --t) {
        if (j >= password.length) {
          break;
        }
        token = password.slice(i, +j + 1 || 9e9);
        rx_match = maybe_date_with_separator.exec(token);
        if (rx_match == null) {
          continue;
        }
        dmy = this.map_ints_to_dmy([parseInt(rx_match[1]), parseInt(rx_match[3]), parseInt(rx_match[4])]);
        if (dmy == null) {
          continue;
        }
        matches.push({
          pattern: 'date',
          token: token,
          i: i,
          j: j,
          separator: rx_match[2],
          year: dmy.year,
          month: dmy.month,
          day: dmy.day
        });
      }
    }
    return this.sorted(matches.filter(function (match) {
      var is_submatch, len3, other_match, u;
      is_submatch = false;
      for (u = 0, len3 = matches.length; u < len3; u++) {
        other_match = matches[u];
        if (match === other_match) {
          continue;
        }
        if (other_match.i <= match.i && other_match.j >= match.j) {
          is_submatch = true;
          break;
        }
      }
      return !is_submatch;
    }));
  },
  map_ints_to_dmy: function (ints) {
    var dm, int, len1, len2, len3, o, over_12, over_31, p, possible_year_splits, q, ref, ref1, rest, under_1, y;
    if (ints[1] > 31 || ints[1] <= 0) {
      return;
    }
    over_12 = 0;
    over_31 = 0;
    under_1 = 0;
    for (o = 0, len1 = ints.length; o < len1; o++) {
      int = ints[o];
      if (99 < int && int < DATE_MIN_YEAR || int > DATE_MAX_YEAR) {
        return;
      }
      if (int > 31) {
        over_31 += 1;
      }
      if (int > 12) {
        over_12 += 1;
      }
      if (int <= 0) {
        under_1 += 1;
      }
    }
    if (over_31 >= 2 || over_12 === 3 || under_1 >= 2) {
      return;
    }
    possible_year_splits = [[ints[2], ints.slice(0, 2)], [ints[0], ints.slice(1, 3)]];
    for (p = 0, len2 = possible_year_splits.length; p < len2; p++) {
      ref = possible_year_splits[p], y = ref[0], rest = ref[1];
      if (DATE_MIN_YEAR <= y && y <= DATE_MAX_YEAR) {
        dm = this.map_ints_to_dm(rest);
        if (dm != null) {
          return {
            year: y,
            month: dm.month,
            day: dm.day
          };
        } else {
          return;
        }
      }
    }
    for (q = 0, len3 = possible_year_splits.length; q < len3; q++) {
      ref1 = possible_year_splits[q], y = ref1[0], rest = ref1[1];
      dm = this.map_ints_to_dm(rest);
      if (dm != null) {
        y = this.two_to_four_digit_year(y);
        return {
          year: y,
          month: dm.month,
          day: dm.day
        };
      }
    }
  },
  map_ints_to_dm: function (ints) {
    var d, len1, m, o, ref, ref1;
    ref = [ints, ints.slice().reverse()];
    for (o = 0, len1 = ref.length; o < len1; o++) {
      ref1 = ref[o], d = ref1[0], m = ref1[1];
      if (1 <= d && d <= 31 && 1 <= m && m <= 12) {
        return {
          day: d,
          month: m
        };
      }
    }
  },
  two_to_four_digit_year: function (year) {
    if (year > 99) {
      return year;
    } else if (year > 50) {
      return year + 1900;
    } else {
      return year + 2000;
    }
  }
};

var matching_1 = matching;

var time_estimates;

time_estimates = {
  estimate_attack_times: function (guesses) {
    var crack_times_display, crack_times_seconds, scenario, seconds;
    crack_times_seconds = {
      online_throttling_100_per_hour: guesses / (100 / 3600),
      online_no_throttling_10_per_second: guesses / 10,
      offline_slow_hashing_1e4_per_second: guesses / 1e4,
      offline_fast_hashing_1e10_per_second: guesses / 1e10
    };
    crack_times_display = {};
    for (scenario in crack_times_seconds) {
      seconds = crack_times_seconds[scenario];
      crack_times_display[scenario] = this.display_time(seconds);
    }
    return {
      crack_times_seconds: crack_times_seconds,
      crack_times_display: crack_times_display,
      score: this.guesses_to_score(guesses)
    };
  },
  guesses_to_score: function (guesses) {
    var DELTA;
    DELTA = 5;
    if (guesses < 1e3 + DELTA) {
      return 0;
    } else if (guesses < 1e6 + DELTA) {
      return 1;
    } else if (guesses < 1e8 + DELTA) {
      return 2;
    } else if (guesses < 1e10 + DELTA) {
      return 3;
    } else {
      return 4;
    }
  },
  display_time: function (seconds) {
    var base, century, day, display_num, display_str, hour, minute, month, ref, year;
    minute = 60;
    hour = minute * 60;
    day = hour * 24;
    month = day * 31;
    year = month * 12;
    century = year * 100;
    ref = seconds < 1 ? [null, 'less than a second'] : seconds < minute ? (base = Math.round(seconds), [base, base + " second"]) : seconds < hour ? (base = Math.round(seconds / minute), [base, base + " minute"]) : seconds < day ? (base = Math.round(seconds / hour), [base, base + " hour"]) : seconds < month ? (base = Math.round(seconds / day), [base, base + " day"]) : seconds < year ? (base = Math.round(seconds / month), [base, base + " month"]) : seconds < century ? (base = Math.round(seconds / year), [base, base + " year"]) : [null, 'centuries'], display_num = ref[0], display_str = ref[1];
    if (display_num != null && display_num !== 1) {
      display_str += 's';
    }
    return display_str;
  }
};

var time_estimates_1 = time_estimates;

var feedback, scoring$2;

scoring$2 = scoring_1;

feedback = {
  default_feedback: {
    warning: '',
    suggestions: ["Use a few words, avoid common phrases", "No need for symbols, digits, or uppercase letters"]
  },
  get_feedback: function (score, sequence) {
    var extra_feedback, i, len, longest_match, match, ref;
    if (sequence.length === 0) {
      return this.default_feedback;
    }
    if (score > 2) {
      return {
        warning: '',
        suggestions: []
      };
    }
    longest_match = sequence[0];
    ref = sequence.slice(1);
    for (i = 0, len = ref.length; i < len; i++) {
      match = ref[i];
      if (match.token.length > longest_match.token.length) {
        longest_match = match;
      }
    }
    feedback = this.get_match_feedback(longest_match, sequence.length === 1);
    extra_feedback = 'Add another word or two. Uncommon words are better.';
    if (feedback != null) {
      feedback.suggestions.unshift(extra_feedback);
      if (feedback.warning == null) {
        feedback.warning = '';
      }
    } else {
      feedback = {
        warning: '',
        suggestions: [extra_feedback]
      };
    }
    return feedback;
  },
  get_match_feedback: function (match, is_sole_match) {
    var layout, warning;
    switch (match.pattern) {
      case 'dictionary':
        return this.get_dictionary_match_feedback(match, is_sole_match);
      case 'spatial':
        layout = match.graph.toUpperCase();
        warning = match.turns === 1 ? 'Straight rows of keys are easy to guess' : 'Short keyboard patterns are easy to guess';
        return {
          warning: warning,
          suggestions: ['Use a longer keyboard pattern with more turns']
        };
      case 'repeat':
        warning = match.base_token.length === 1 ? 'Repeats like "aaa" are easy to guess' : 'Repeats like "abcabcabc" are only slightly harder to guess than "abc"';
        return {
          warning: warning,
          suggestions: ['Avoid repeated words and characters']
        };
      case 'sequence':
        return {
          warning: "Sequences like abc or 6543 are easy to guess",
          suggestions: ['Avoid sequences']
        };
      case 'regex':
        if (match.regex_name === 'recent_year') {
          return {
            warning: "Recent years are easy to guess",
            suggestions: ['Avoid recent years', 'Avoid years that are associated with you']
          };
        }
        break;
      case 'date':
        return {
          warning: "Dates are often easy to guess",
          suggestions: ['Avoid dates and years that are associated with you']
        };
    }
  },
  get_dictionary_match_feedback: function (match, is_sole_match) {
    var ref, result, suggestions, warning, word;
    warning = match.dictionary_name === 'passwords' ? is_sole_match && !match.l33t && !match.reversed ? match.rank <= 10 ? 'This is a top-10 common password' : match.rank <= 100 ? 'This is a top-100 common password' : 'This is a very common password' : match.guesses_log10 <= 4 ? 'This is similar to a commonly used password' : void 0 : match.dictionary_name === 'english_wikipedia' ? is_sole_match ? 'A word by itself is easy to guess' : void 0 : (ref = match.dictionary_name) === 'surnames' || ref === 'male_names' || ref === 'female_names' ? is_sole_match ? 'Names and surnames by themselves are easy to guess' : 'Common names and surnames are easy to guess' : '';
    suggestions = [];
    word = match.token;
    if (word.match(scoring$2.START_UPPER)) {
      suggestions.push("Capitalization doesn't help very much");
    } else if (word.match(scoring$2.ALL_UPPER) && word.toLowerCase() !== word) {
      suggestions.push("All-uppercase is almost as easy to guess as all-lowercase");
    }
    if (match.reversed && match.token.length >= 4) {
      suggestions.push("Reversed words aren't much harder to guess");
    }
    if (match.l33t) {
      suggestions.push("Predictable substitutions like '@' instead of 'a' don't help very much");
    }
    result = {
      warning: warning,
      suggestions: suggestions
    };
    return result;
  }
};

var feedback_1 = feedback;

var feedback$1, matching$1, scoring$3, time, time_estimates$1, zxcvbn;

matching$1 = matching_1;

scoring$3 = scoring_1;

time_estimates$1 = time_estimates_1;

feedback$1 = feedback_1;

time = function () {
  return new Date().getTime();
};

zxcvbn = function (password, user_inputs) {
  var arg, attack_times, i, len, matches, prop, ref, result, sanitized_inputs, start, val;
  if (user_inputs == null) {
    user_inputs = [];
  }
  start = time();
  sanitized_inputs = [];
  for (i = 0, len = user_inputs.length; i < len; i++) {
    arg = user_inputs[i];
    if ((ref = typeof arg) === "string" || ref === "number" || ref === "boolean") {
      sanitized_inputs.push(arg.toString().toLowerCase());
    }
  }
  matching$1.set_user_input_dictionary(sanitized_inputs);
  matches = matching$1.omnimatch(password);
  result = scoring$3.most_guessable_match_sequence(password, matches);
  result.calc_time = time() - start;
  attack_times = time_estimates$1.estimate_attack_times(result.guesses);
  for (prop in attack_times) {
    val = attack_times[prop];
    result[prop] = val;
  }
  result.feedback = feedback$1.get_feedback(result.score, result.sequence);
  return result;
};

var src = zxcvbn;

exports.default = src;
//# sourceMappingURL=zxcvbn-lite.cjs.js.map
